import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const PROVIDER = 'aks-karpathy-guidelines'
const SKILL_URL = new URL('../assets/skills/karpathy-guidelines/SKILL.md', import.meta.url)
const BASE = { kind: 'directory', path: fileURLToPath(new URL('../assets/skills/karpathy-guidelines/', import.meta.url)) }
const DESCRIPTION = 'Behavioral guidelines for AI-assisted coding: surface assumptions, prefer simple solutions, make surgical changes, and verify outcomes.'

export function createGuidelinesProvider(options = {}) {
  const invocation = { modelInvocable: options.modelInvocable === true, userInvocable: false }
  const entry = {
    name: 'karpathy-guidelines',
    description: DESCRIPTION,
    invocation,
    provider: PROVIDER,
    source: 'bundled',
    resourceBase: BASE,
    rank: 600,
    locator: 'SKILL.md',
  }
  return {
    name: PROVIDER,
    async list({ signal } = {}) {
      signal?.throwIfAborted()
      return [{ ...entry }]
    },
    async get(selected, { signal } = {}) {
      signal?.throwIfAborted()
      if (selected?.provider !== PROVIDER || selected.name !== entry.name || selected.locator !== entry.locator) return undefined
      return { ...entry, content: await readFile(SKILL_URL, { encoding: 'utf8', signal }) }
    },
  }
}
