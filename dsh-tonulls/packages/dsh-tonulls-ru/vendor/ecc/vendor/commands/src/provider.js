import path from 'node:path'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const PROVIDER_NAME = 'ecc-commands'
const CATALOG_URL = new URL('../assets/catalog.json', import.meta.url)
const RU_DESCRIPTIONS_URL = new URL('../assets/locales/ru.json', import.meta.url)
const ASSET_BASE_URL = new URL('../assets/', import.meta.url)
const ASSET_ROOT = fileURLToPath(ASSET_BASE_URL)
const NAME_PATTERN = /^ecc-command-[a-z0-9]+(?:-[a-z0-9]+)*$/
const PATH_SEGMENT = /^[\p{L}\p{N}._-]+$/u

function safeCommandPath(value) {
  if (typeof value !== 'string' || !value.startsWith('commands/') || !value.endsWith('.md')) return false
  const segments = value.split('/')
  return segments.every((segment) => segment !== '' && segment !== '.' && segment !== '..' && PATH_SEGMENT.test(segment))
}

const RESOURCE_BASE = { kind: 'directory', path: path.join(ASSET_ROOT, 'commands') }

function assetUrl(relativePath) {
  return new URL(relativePath.split('/').map(encodeURIComponent).join('/'), ASSET_BASE_URL)
}

async function readCatalog(signal) {
  signal?.throwIfAborted()
  const [catalogText, descriptionsText] = await Promise.all([
    readFile(CATALOG_URL, { encoding: 'utf8', signal }),
    readFile(RU_DESCRIPTIONS_URL, { encoding: 'utf8', signal }),
  ])
  const catalog = JSON.parse(catalogText)
  const descriptions = JSON.parse(descriptionsText)
  if (!Array.isArray(catalog.entries)) throw new Error('ECC Commands catalog must contain an entries array')
  if (typeof descriptions !== 'object' || descriptions === null || Array.isArray(descriptions)) {
    throw new Error('ECC Commands Russian descriptions must be a name-to-string object')
  }
  const names = new Set()
  for (const entry of catalog.entries) {
    if (typeof entry.name !== 'string' || !NAME_PATTERN.test(entry.name) || names.has(entry.name)) {
      throw new Error(`ECC Commands catalog contains an invalid or duplicate name: ${String(entry.name)}`)
    }
    if (typeof entry.description !== 'string' || entry.description.length === 0 || !safeCommandPath(entry.file)) {
      throw new Error(`ECC Commands catalog contains invalid metadata or path: ${entry.name}`)
    }
    if (entry.file !== `commands/${entry.command}.md` || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.command)) {
      throw new Error(`ECC Commands catalog entry does not match its source name: ${entry.name}`)
    }
    if (!Object.hasOwn(descriptions, entry.name) || typeof descriptions[entry.name] !== 'string' || descriptions[entry.name].trim().length === 0) {
      throw new Error(`ECC Commands Russian descriptions are missing a non-empty translation: ${entry.name}`)
    }
    names.add(entry.name)
  }
  const unexpectedNames = Object.keys(descriptions).filter((name) => !names.has(name))
  if (unexpectedNames.length > 0) {
    throw new Error(`ECC Commands Russian descriptions contain unknown names: ${unexpectedNames.join(', ')}`)
  }
  return catalog.entries.map((entry) => ({
    ...entry,
    localizedDescription: { en: entry.description, ru: descriptions[entry.name] },
  }))
}

/** Create a provider for reviewed, explicitly invoked ECC command prompts. */
export function createCommandsProvider(rank, options = {}) {
  const invocation = { modelInvocable: options.modelInvocable === true, userInvocable: false }
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
      if (selected?.provider !== PROVIDER_NAME || typeof selected.locator !== 'string') return undefined
      const entry = (await readCatalog(signal)).find((candidate) =>
        candidate.name === selected.name && candidate.file === selected.locator)
      if (entry === undefined) return undefined
      return {
        name: entry.name,
        description: entry.description,
        localizedDescription: entry.localizedDescription,
        invocation,
        provider: PROVIDER_NAME,
        source: 'bundled',
        resourceBase: RESOURCE_BASE,
        content: await readFile(assetUrl(entry.file), { encoding: 'utf8', signal }),
      }
    },
  }
}
