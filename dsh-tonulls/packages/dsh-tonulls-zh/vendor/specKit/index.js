import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { locale, strings, skillDescription } from './locale.js'

const SKILL_NAME = 'spec-kit'
const SKILL_FILE = new URL('./skills/spec-kit/SKILL.md', import.meta.url)
const RESOURCE_BASE = fileURLToPath(new URL('./skills/spec-kit/', import.meta.url))
const COMMAND_NAME = 'dsh-spec-kit-tonulls'
const SKILL_RANK = 600
const STRINGS = strings

export const name = 'spec-kit-session-control'
export const inject = ['skills', 'agents', 'commands']

function createSpecKitProvider() {
  return {
    name: 'spec-kit',
    async list({ signal } = {}) {
      signal?.throwIfAborted()
      return [{
        name: SKILL_NAME,
        description: skillDescription,
        localizedDescription: { [locale]: skillDescription },
        invocation: { modelInvocable: true, userInvocable: false },
        provider: 'spec-kit',
        source: 'bundled',
        resourceBase: { kind: 'directory', path: RESOURCE_BASE },
        rank: SKILL_RANK,
        locator: 'skills/spec-kit/SKILL.md',
      }]
    },
    async get(selected, { signal } = {}) {
      signal?.throwIfAborted()
      if (selected?.provider !== 'spec-kit' || selected.name !== SKILL_NAME || selected.locator !== 'skills/spec-kit/SKILL.md') return undefined
      return {
        name: SKILL_NAME,
        description: skillDescription,
        localizedDescription: { [locale]: skillDescription },
        invocation: { modelInvocable: true, userInvocable: false },
        provider: 'spec-kit',
        source: 'bundled',
        resourceBase: { kind: 'directory', path: RESOURCE_BASE },
        content: await readFile(SKILL_FILE, { encoding: 'utf8', signal }),
      }
    },
  }
}

function installAgentRouting(agentContext) {
  if (!agentContext?.skills || typeof agentContext.skills.registerProvider !== 'function' || typeof agentContext.effect !== 'function') {
    throw new Error('dsh-spec-kit-tonulls requires Agent-scoped skills and lifecycle services')
  }
  let enabled = false
  let disposeProvider
  function setEnabled(next) {
    if (next === enabled) return
    if (next) {
      disposeProvider = agentContext.skills.registerProvider(createSpecKitProvider)
      enabled = true
    } else {
      disposeProvider?.()
      disposeProvider = undefined
      enabled = false
    }
  }
  return {
    setEnabled,
    dispose() { setEnabled(false) },
  }
}

export function parseEnabled(rawInput) {
  if (typeof rawInput !== 'string') return undefined
  const input = rawInput.trim().toLowerCase()
  if (input === 'on') return true
  if (input === 'off') return false
  return undefined
}

export function apply(ctx) {
  if (typeof ctx.commands?.register !== 'function') throw new Error('dsh-spec-kit-tonulls requires the DSH commands service')
  const routingByAgent = new WeakMap()
  ctx.effect(function* () {
    yield ctx.commands.register({
      name: COMMAND_NAME,
      description: STRINGS.command,
      input: { hint: 'on|off' },
      handler({ agent, rawInput }) {
        const enabled = parseEnabled(rawInput)
        if (enabled === undefined) return { kind: 'error', text: STRINGS.usage }
        const routing = routingByAgent.get(agent)
        if (!routing) return { kind: 'error', text: STRINGS.unavailable }
        routing.setEnabled(enabled)
        return { kind: 'success', text: STRINGS[enabled ? 'enabled' : 'disabled'] }
      },
    })
  }, 'dsh-spec-kit-tonulls command')

  ctx.on('agent/created', async ({ agent }) => {
    const sessionPlugin = (agentContext) => {
      const routing = installAgentRouting(agentContext)
      routingByAgent.set(agent, routing)
      agentContext.effect(function* () {
        yield () => {
          routing.dispose()
          routingByAgent.delete(agent)
        }
      }, 'dsh-spec-kit-tonulls Agent routing lifecycle')
    }
    sessionPlugin.inject = ['skills']
    await agent.ctx.plugin(sessionPlugin).await()
  })
}
