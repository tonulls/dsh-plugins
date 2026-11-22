import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const PROVIDER_NAME = 'caveman-tonulls'
const CATALOG_URL = new URL('../assets/skills/catalog.json', import.meta.url)
const ASSET_BASE_URL = new URL('../assets/skills/', import.meta.url)
const RESOURCE_BASE = { kind: 'directory', path: fileURLToPath(ASSET_BASE_URL) }
const DSH_NOTES = "## DSH usage boundary\n- Apply this style only for the current explicitly requested task or response; do not keep a session-wide mode or state.\n- No hooks, aliases, status commands, file compression, or persistent mode controls are provided by this bundle.\n- Never sacrifice correctness, safety, clarity, exact code, numbers, paths, commands, or user-requested detail for brevity.\n- Use full sentences for warnings, questions, confirmations, and irreversible actions."

async function readCatalog(signal) {
  signal?.throwIfAborted()
  const catalog = JSON.parse(await readFile(CATALOG_URL, { encoding: 'utf8', signal }))
  if (catalog.schemaVersion !== 1 || !Array.isArray(catalog.entries) || catalog.entries.length !== 1) throw new Error('Caveman skill catalog is invalid')
  const [entry] = catalog.entries
  if (entry.name !== 'caveman' || entry.file !== 'caveman.md' || typeof entry.description !== 'string') throw new Error('Caveman catalog entry is invalid')
  return entry
}

function stripFrontmatter(text) {
  const lines = text.split(/\r?\n/)
  if (lines[0] !== '---') throw new Error('Caveman skill is missing frontmatter')
  const closing = lines.indexOf('---', 1)
  if (closing < 0) throw new Error('Caveman skill frontmatter is unterminated')
  return lines.slice(closing + 1).join('\n').trim()
}

export function createCavemanProvider(options = {}) {
  const invocation = { modelInvocable: options.modelInvocable === true, userInvocable: false }
  return {
    name: PROVIDER_NAME,
    async list({ signal } = {}) {
      const entry = await readCatalog(signal)
      return [{ name: entry.name, description: entry.description, invocation, provider: PROVIDER_NAME, source: 'bundled', resourceBase: RESOURCE_BASE, rank: 600, locator: entry.file }]
    },
    async get(selected, { signal } = {}) {
      signal?.throwIfAborted()
      if (selected?.provider !== PROVIDER_NAME || selected.name !== 'caveman' || selected.locator !== 'caveman.md') return undefined
      const entry = await readCatalog(signal)
      const source = await readFile(new URL(entry.file, ASSET_BASE_URL), { encoding: 'utf8', signal })
      return { name: entry.name, description: entry.description, invocation, provider: PROVIDER_NAME, source: 'bundled', resourceBase: RESOURCE_BASE, content: DSH_NOTES + '\n\n' + stripFrontmatter(source) + '\n' }
    },
  }
}
