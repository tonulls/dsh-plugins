import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const PROVIDER_NAME = 'claude-code-setup-tonulls'
const CATALOG_URL = new URL('../assets/skills/catalog.json', import.meta.url)
const UPSTREAM_URL = new URL('../UPSTREAM.json', import.meta.url)
const ASSET_BASE_URL = new URL('../assets/skills/', import.meta.url)
const RESOURCE_BASE = { kind: 'directory', path: fileURLToPath(ASSET_BASE_URL) }
const NAME_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const FILE_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/

function parseJson(text, label) {
  try { return JSON.parse(text) } catch (cause) { throw new Error("Reference bundle metadata is invalid JSON: " + label, { cause }) }
}

async function readCatalog(signal) {
  signal?.throwIfAborted()
  const [catalogText, upstreamText] = await Promise.all([
    readFile(CATALOG_URL, { encoding: 'utf8', signal }),
    readFile(UPSTREAM_URL, { encoding: 'utf8', signal }),
  ])
  const catalog = parseJson(catalogText, 'assets/skills/catalog.json')
  const upstream = parseJson(upstreamText, 'UPSTREAM.json')
  if (catalog.schemaVersion !== 1 || !Array.isArray(catalog.entries) || catalog.upstreamCommit !== upstream.commit) {
    throw new Error('Reference catalog does not match its upstream audit snapshot')
  }
  const names = new Set()
  const files = new Set()
  for (const entry of catalog.entries) {
    if (typeof entry.name !== 'string' || !NAME_PATTERN.test(entry.name) || names.has(entry.name)) throw new Error('Invalid or duplicate skill name')
    if (typeof entry.description !== 'string' || !entry.description.trim()) throw new Error('Missing description: ' + entry.name)
    if (typeof entry.file !== 'string' || !FILE_PATTERN.test(entry.file) || files.has(entry.file)) throw new Error('Invalid or duplicate skill file: ' + entry.file)
    names.add(entry.name)
    files.add(entry.file)
  }
  return catalog.entries
}

function bodyWithoutFrontmatter(text, file) {
  const lines = text.split(/\r?\n/)
  if (lines[0] !== '---') throw new Error('Skill is missing frontmatter: ' + file)
  const end = lines.indexOf('---', 1)
  if (end < 0 || !lines.slice(end + 1).join('\n').trim()) throw new Error('Skill has missing frontmatter or body: ' + file)
  return lines.slice(end + 1).join('\n').trim()
}

export function createReferenceProvider(rank = 500, options = {}) {
  const invocation = { modelInvocable: options.modelInvocable === true, userInvocable: true }
  return {
    name: PROVIDER_NAME,
    async list({ signal } = {}) {
      const entries = await readCatalog(signal)
      return entries.map((entry) => ({ name: entry.name, description: entry.description, invocation, provider: PROVIDER_NAME, source: 'bundled', resourceBase: RESOURCE_BASE, rank, locator: entry.file }))
    },
    async get(selected, { signal } = {}) {
      signal?.throwIfAborted()
      if (selected?.provider !== PROVIDER_NAME || typeof selected.locator !== 'string') return undefined
      const entry = (await readCatalog(signal)).find((candidate) => candidate.name === selected.name && candidate.file === selected.locator)
      if (!entry) return undefined
      const text = await readFile(new URL(entry.file, ASSET_BASE_URL), { encoding: 'utf8', signal })
      return { name: entry.name, description: entry.description, invocation, provider: PROVIDER_NAME, source: 'bundled', resourceBase: RESOURCE_BASE, content: bodyWithoutFrontmatter(text, entry.file) }
    },
  }
}
