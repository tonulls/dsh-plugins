import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const PROVIDER_NAME = 'grill-me-tonulls'
const CATALOG_URL = new URL('../assets/skills/catalog.json', import.meta.url)
const ASSET_BASE_URL = new URL('../assets/skills/', import.meta.url)
const ASSET_PATH = /^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/
const RESOURCE_BASE = { kind: 'directory', path: fileURLToPath(ASSET_BASE_URL) }
const DSH_NOTES = "## DSH safety and runtime notes\n- These skills only guide the current DSH Agent and add no tools, permissions, network access, or persistence.\n- They are available only by direct user invocation; do not start an interview merely because a plan is mentioned.\n- Use only tools available in this DSH session. Do not assume a separate Skill tool or sub-agent is available.\n- Do not implement or modify anything until the user explicitly confirms the shared understanding and requests action."

async function readCatalog(signal) {
  signal?.throwIfAborted()
  const catalog = JSON.parse(await readFile(CATALOG_URL, { encoding: 'utf8', signal }))
  if (catalog.schemaVersion !== 1 || !Array.isArray(catalog.entries) || catalog.entries.length !== 2) throw new Error('Grill Me skill catalog is invalid')
  const names = new Set()
  for (const entry of catalog.entries) {
    if (typeof entry.name !== 'string' || names.has(entry.name) || !ASSET_PATH.test(entry.file) || typeof entry.description !== 'string') throw new Error('Grill Me catalog entry is invalid')
    names.add(entry.name)
  }
  return catalog.entries
}

function stripFrontmatter(text, file) {
  const lines = text.split(/\r?\n/)
  if (lines[0] !== '---') throw new Error('Skill is missing frontmatter: ' + file)
  const closing = lines.indexOf('---', 1)
  if (closing < 0) throw new Error('Skill frontmatter is unterminated: ' + file)
  const body = lines.slice(closing + 1).join('\n').trim()
  if (!body) throw new Error('Skill body is empty: ' + file)
  return body
}

export function createGrillMeProvider(options = {}) {
  const invocation = { modelInvocable: options.modelInvocable === true, userInvocable: false }
  return {
    name: PROVIDER_NAME,
    async list({ signal } = {}) {
      return (await readCatalog(signal)).map((entry) => ({
        name: entry.name, description: entry.description, invocation,
        provider: PROVIDER_NAME, source: 'bundled', resourceBase: RESOURCE_BASE, rank: 600, locator: entry.file,
      }))
    },
    async get(selected, { signal } = {}) {
      signal?.throwIfAborted()
      if (selected?.provider !== PROVIDER_NAME || typeof selected.locator !== 'string') return undefined
      const entry = (await readCatalog(signal)).find((candidate) => candidate.name === selected.name && candidate.file === selected.locator)
      if (!entry) return undefined
      const source = await readFile(new URL(entry.file, ASSET_BASE_URL), { encoding: 'utf8', signal })
      return {
        name: entry.name, description: entry.description, invocation,
        provider: PROVIDER_NAME, source: 'bundled', resourceBase: RESOURCE_BASE,
        content: DSH_NOTES + '\n\n' + stripFrontmatter(source, entry.file) + '\n\n' + DSH_NOTES,
      }
    },
  }
}
