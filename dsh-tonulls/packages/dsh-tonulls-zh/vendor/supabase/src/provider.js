import path from 'node:path'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { locale, skillDescription } from './locale.js'

const PROVIDER_NAME = 'supabase'
const SKILL_NAME = 'supabase'
const SKILL_FILE = new URL('../skills/supabase/SKILL.md', import.meta.url)
const SKILL_ROOT = fileURLToPath(new URL('../skills/supabase/', import.meta.url))
const SKILL_LOCATOR = 'skills/supabase/SKILL.md'

export function createSupabaseProvider(rank = 600, options = {}) {
  const invocation = { modelInvocable: options.modelInvocable === true, userInvocable: false }
  const resourceBase = { kind: 'directory', path: path.resolve(SKILL_ROOT) }

  return {
    name: PROVIDER_NAME,
    async list({ signal } = {}) {
      signal?.throwIfAborted()
      return [{
        name: SKILL_NAME,
        description: skillDescription,
        localizedDescription: { [locale]: skillDescription },
        invocation,
        provider: PROVIDER_NAME,
        source: 'bundled',
        resourceBase,
        rank,
        locator: SKILL_LOCATOR,
      }]
    },
    async get(selected, { signal } = {}) {
      signal?.throwIfAborted()
      if (selected?.provider !== PROVIDER_NAME || selected.name !== SKILL_NAME || selected.locator !== SKILL_LOCATOR) return undefined
      return {
        name: SKILL_NAME,
        description: skillDescription,
        localizedDescription: { [locale]: skillDescription },
        invocation,
        provider: PROVIDER_NAME,
        source: 'bundled',
        resourceBase,
        content: await readFile(SKILL_FILE, { encoding: 'utf8', signal }),
      }
    },
  }
}
