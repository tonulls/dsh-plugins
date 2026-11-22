import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const PROVIDER_NAME = 'ecc-agents'
const CATALOG_URL = new URL('../assets/agents/catalog.json', import.meta.url)
const RU_DESCRIPTIONS_URL = new URL('../assets/locales/ru.json', import.meta.url)
const ASSET_BASE_URL = new URL('../assets/agents/', import.meta.url)
const ASSET_NAME = /^ecc-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/
const SKILL_NAME = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const RESOURCE_BASE = {
  kind: 'directory',
  path: fileURLToPath(ASSET_BASE_URL),
}

async function readCatalog(signal) {
  signal?.throwIfAborted()
  const [catalogText, descriptionsText] = await Promise.all([
    readFile(CATALOG_URL, { encoding: 'utf8', signal }),
    readFile(RU_DESCRIPTIONS_URL, { encoding: 'utf8', signal }),
  ])
  const catalog = JSON.parse(catalogText)
  const descriptions = JSON.parse(descriptionsText)
  if (!Array.isArray(catalog.entries)) throw new Error('ECC agent catalog must contain an entries array')
  if (typeof descriptions !== 'object' || descriptions === null || Array.isArray(descriptions)) {
    throw new Error('ECC agent Russian descriptions must be a name-to-string object')
  }
  const names = new Set()
  for (const entry of catalog.entries) {
    if (typeof entry.name !== 'string' || !SKILL_NAME.test(entry.name) || names.has(entry.name)) {
      throw new Error(`ECC agent catalog contains an invalid or duplicate skill name: ${String(entry.name)}`)
    }
    if (typeof entry.description !== 'string' || entry.description.length === 0) {
      throw new Error(`ECC agent catalog contains an empty description: ${entry.name}`)
    }
    if (typeof entry.file !== 'string' || !ASSET_NAME.test(entry.file)) {
      throw new Error(`ECC agent catalog contains an invalid asset path: ${entry.name}`)
    }
    if (!Object.hasOwn(descriptions, entry.name) || typeof descriptions[entry.name] !== 'string' || descriptions[entry.name].trim().length === 0) {
      throw new Error(`ECC agent Russian descriptions are missing a non-empty translation: ${entry.name}`)
    }
    names.add(entry.name)
  }
  const unexpectedNames = Object.keys(descriptions).filter((name) => !names.has(name))
  if (unexpectedNames.length > 0) {
    throw new Error(`ECC agent Russian descriptions contain unknown names: ${unexpectedNames.join(', ')}`)
  }
  return catalog.entries.map((entry) => ({
    ...entry,
    localizedDescription: { en: entry.description, ru: descriptions[entry.name] },
  }))
}

/** Create a DSH provider for explicitly invoked, model-neutral ECC agent roles. */
export function createAgentsProvider(rank, options = {}) {
  const invocation = { modelInvocable: options.modelInvocable === true, userInvocable: options.userInvocable !== false }
  return {
    name: PROVIDER_NAME,
    async list({ signal } = {}) {
      const entries = await readCatalog(signal)
      return entries.map((entry) => ({
        name: entry.name,
        description: entry.description,
        localizedDescription: entry.localizedDescription,
        invocation,
        provider: PROVIDER_NAME,
        source: 'bundled',
        resourceBase: RESOURCE_BASE,
        rank,
        locator: entry.file,
      }))
    },
    async get(selected, { signal } = {}) {
      signal?.throwIfAborted()
      if (selected.provider !== PROVIDER_NAME || typeof selected.locator !== 'string') return undefined
      const entry = (await readCatalog(signal)).find((candidate) =>
        candidate.name === selected.name && candidate.file === selected.locator)
      if (entry === undefined) return undefined
      const assetUrl = new URL(encodeURIComponent(entry.file), ASSET_BASE_URL)
      return {
        name: entry.name,
        description: entry.description,
        localizedDescription: entry.localizedDescription,
        invocation,
        provider: PROVIDER_NAME,
        source: 'bundled',
        resourceBase: RESOURCE_BASE,
        content: await readFile(assetUrl, { encoding: 'utf8', signal }),
      }
    },
  }
}
