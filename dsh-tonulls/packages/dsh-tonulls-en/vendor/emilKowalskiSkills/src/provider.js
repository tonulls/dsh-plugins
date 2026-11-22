import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const PROVIDER_NAME = 'emil-kowalski-skills-tonulls'
const CATALOG_URL = new URL('../assets/skills/catalog.json', import.meta.url)
const ASSET_BASE_URL = new URL('../assets/skills/', import.meta.url)
const SKILL_PATH = /^[a-z0-9]+(?:-[a-z0-9]+)*\/SKILL\.md$/
const RESOURCE_DIR = /^[a-z0-9]+(?:-[a-z0-9]+)*\/$/
const DSH_NOTES = "## DSH scope and safety\n- This package contains user-invoked English prompt instructions and Markdown references only; it has no executable tools, hooks, or external integrations.\n- Ask the user before changing files, creating plans, running installs/builds/tests/previews, deleting content, or changing dependencies. Never publish or commit without explicit permission.\n- These instructions do not prove visual quality. Report browser, device, accessibility, and performance checks as unverified unless actually performed in this session.\n- Preserve the project’s existing conventions, motion preferences, reduced-motion behavior, and accessibility requirements; do not invent support claims or measurements."

async function readCatalog(signal) {
  signal?.throwIfAborted()
  const catalog = JSON.parse(await readFile(CATALOG_URL, { encoding: 'utf8', signal }))
  if (catalog.schemaVersion !== 1 || !Array.isArray(catalog.entries) || catalog.entries.length !== 16) throw new Error('Emil Skills catalog is invalid')
  const names = new Set()
  const paths = new Set()
  for (const entry of catalog.entries) {
    if (typeof entry.name !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.name) || names.has(entry.name)) throw new Error('Invalid or duplicate skill name')
    if (typeof entry.description !== 'string' || !entry.description.trim() || !SKILL_PATH.test(entry.file) || paths.has(entry.file)) throw new Error('Invalid or duplicate skill path')
    if (entry.file !== `${entry.name}/SKILL.md` || entry.resourceDir !== `${entry.name}/` || !RESOURCE_DIR.test(entry.resourceDir)) throw new Error('Skill resource directory is invalid')
    names.add(entry.name)
    paths.add(entry.file)
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

function resourceBase(entry) {
  return { kind: 'directory', path: fileURLToPath(new URL(entry.resourceDir, ASSET_BASE_URL)) }
}

export function createEmilSkillsProvider(options = {}) {
  const invocationFor = (entry) => ({ modelInvocable: options.modelInvocable === true && entry.name !== 'learn-taste', userInvocable: false })
  return {
    name: PROVIDER_NAME,
    async list({ signal } = {}) {
      return (await readCatalog(signal)).map((entry) => ({
        name: entry.name, description: entry.description, invocation: invocationFor(entry),
        provider: PROVIDER_NAME, source: 'bundled', resourceBase: resourceBase(entry), rank: 600, locator: entry.file,
      }))
    },
    async get(selected, { signal } = {}) {
      signal?.throwIfAborted()
      if (selected?.provider !== PROVIDER_NAME || typeof selected.locator !== 'string') return undefined
      const entry = (await readCatalog(signal)).find((candidate) => candidate.name === selected.name && candidate.file === selected.locator)
      if (!entry) return undefined
      const source = await readFile(new URL(entry.file, ASSET_BASE_URL), { encoding: 'utf8', signal })
      return {
        name: entry.name, description: entry.description, invocation: invocationFor(entry),
        provider: PROVIDER_NAME, source: 'bundled', resourceBase: resourceBase(entry),
        content: DSH_NOTES + '\n\n' + stripFrontmatter(source, entry.file),
      }
    },
  }
}
