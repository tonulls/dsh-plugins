import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const PROVIDER_NAME = 'archify-tonulls'
const SKILL_NAME = 'archify'
const SKILL_URL = new URL('../skills/archify/SKILL.md', import.meta.url)
const RESOURCE_BASE = { kind: 'directory', path: fileURLToPath(new URL('../skills/archify/', import.meta.url)) }

async function readSkill(signal) {
  signal?.throwIfAborted()
  const source = await readFile(SKILL_URL, { encoding: 'utf8', signal })
  const lines = source.split(/\r?\n/)
  if (lines[0] !== '---') throw new Error(`${SKILL_NAME} skill is missing frontmatter`)
  const closing = lines.indexOf('---', 1)
  if (closing < 0) throw new Error(`${SKILL_NAME} skill frontmatter is unterminated`)
  const metadata = lines.slice(1, closing).join('\n')
  const name = /^name:\s*(.+)$/m.exec(metadata)?.[1]?.trim()
  const description = /^description:\s*(.+)$/m.exec(metadata)?.[1]?.trim()
  const content = lines.slice(closing + 1).join('\n').trim()
  if (name !== SKILL_NAME || !description || !content) throw new Error(`${SKILL_NAME} skill metadata is invalid`)
  return { name, description, content }
}

export function createSkillProvider(options = {}) {
  const invocation = { modelInvocable: options.modelInvocable === true, userInvocable: false }
  return {
    name: PROVIDER_NAME,
    async list({ signal } = {}) {
      const skill = await readSkill(signal)
      return [{ ...skill, content: undefined, invocation, provider: PROVIDER_NAME, source: 'bundled', resourceBase: RESOURCE_BASE, rank: 600, locator: SKILL_NAME }]
    },
    async get(selected, { signal } = {}) {
      signal?.throwIfAborted()
      if (selected?.provider !== PROVIDER_NAME || selected.locator !== SKILL_NAME || selected.name !== SKILL_NAME) return undefined
      const skill = await readSkill(signal)
      return { ...skill, invocation, provider: PROVIDER_NAME, source: 'bundled', resourceBase: RESOURCE_BASE }
    },
  }
}
