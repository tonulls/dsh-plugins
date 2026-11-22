import path from 'node:path'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { locale, skillDescription } from './locale.js'

const PROVIDER_NAME = 'taste-skill'
const CATALOG_URL = new URL('../assets/catalog.json', import.meta.url)
const ASSET_BASE_URL = new URL('../packages/skills/assets/', import.meta.url)
const ASSET_ROOT = fileURLToPath(ASSET_BASE_URL)
const NAME_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

async function readCatalog(signal) {
  signal?.throwIfAborted()
  const catalog = JSON.parse(await readFile(CATALOG_URL, { encoding: 'utf8', signal }))
  if (!Array.isArray(catalog.entries)) throw new Error('Taste Skill catalog must contain an entries array')
  const names = new Set()
  for (const entry of catalog.entries) {
    if (typeof entry.name !== 'string' || !NAME_PATTERN.test(entry.name) || names.has(entry.name)) {
      throw new Error(`Taste Skill catalog contains an invalid or duplicate name: ${String(entry.name)}`)
    }
    if (typeof entry.description !== 'string' || entry.description.trim() === '') {
      throw new Error(`Taste Skill catalog contains invalid metadata: ${entry.name}`)
    }
    if (entry.file !== 'skills/design-taste-frontend/SKILL.md') {
      throw new Error(`Taste Skill catalog contains an unsupported skill path: ${entry.name}`)
    }
    names.add(entry.name)
  }
  return catalog.entries
}

function resourceBase() {
  return { kind: 'directory', path: path.join(ASSET_ROOT, 'skills', 'design-taste-frontend') }
}

/** Create the bundled provider for the enabled Taste Skill. */
export function createSkillsProvider(rank) {
  const invocation = { modelInvocable: true, userInvocable: true }
  return {
    name: PROVIDER_NAME,
    async list({ signal } = {}) {
      const entries = await readCatalog(signal)
      return entries.map((entry) => ({
        name: entry.name,
        description: skillDescription,
        localizedDescription: { [locale]: skillDescription },
        invocation,
        provider: PROVIDER_NAME,
        source: 'bundled',
        resourceBase: resourceBase(),
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
        description: skillDescription,
        localizedDescription: { [locale]: skillDescription },
        invocation,
        provider: PROVIDER_NAME,
        source: 'bundled',
        resourceBase: resourceBase(),
        content: await readFile(new URL(entry.file.split('/').map(encodeURIComponent).join('/'), ASSET_BASE_URL), { encoding: 'utf8', signal }),
      }
    },
  }
}
