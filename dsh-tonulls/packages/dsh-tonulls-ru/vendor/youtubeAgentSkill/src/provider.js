import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const PROVIDER_NAME = 'youtube-agent-skill-tonulls'
const CATALOG_URL = new URL('../assets/skills/catalog.json', import.meta.url)
const ASSET_BASE_URL = new URL('../assets/skills/', import.meta.url)
const ASSET_PATH = /^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/
const RESOURCE_BASE = { kind: 'directory', path: fileURLToPath(ASSET_BASE_URL) }
const DSH_NOTES = "## DSH safety and scope\n- This bundle contains English prompt instructions only. It adds no Python tools, YouTube API, browser integration, credentials, or publishing capability.\n- Skills are available only by direct user invocation. Treat every output as a draft; never upload, publish, comment, pin, heart, or modify a channel.\n- Use only user-provided data or explicitly authorized public research with tools available in this session. Never sign in, scrape at scale, or access account credentials.\n- Use voice samples supplied in this chat. Do not read host-specific profile paths or persist voice profiles without explicit permission.\n- The upstream scoring/data-processing Python helpers are not included. Do not claim automated scores, exact retention calculations, or platform guarantees; state limits and uncertainties.\n- Ask before writing any files or taking actions outside the chat. Do not invent metrics, claims, sources, or performance outcomes."

async function readCatalog(signal) {
  signal?.throwIfAborted()
  const catalog = JSON.parse(await readFile(CATALOG_URL, { encoding: 'utf8', signal }))
  if (catalog.schemaVersion !== 1 || !Array.isArray(catalog.entries) || catalog.entries.length !== 7) throw new Error('YouTube skills catalog is invalid')
  const names = new Set()
  const files = new Set()
  for (const entry of catalog.entries) {
    if (typeof entry.name !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.name) || names.has(entry.name)) throw new Error('Invalid or duplicate YouTube skill name')
    if (typeof entry.description !== 'string' || !entry.description.trim() || !ASSET_PATH.test(entry.file) || files.has(entry.file)) throw new Error('Invalid or duplicate YouTube skill asset')
    names.add(entry.name)
    files.add(entry.file)
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

export function createYouTubeAgentSkillProvider(options = {}) {
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
        content: DSH_NOTES + '\n\n' + stripFrontmatter(source, entry.file),
      }
    },
  }
}
