import { createSkillsProvider } from './provider.js'
import { strings } from './locale.js'

const SKILL_RANK = 600
const COMMAND_NAME = 'dsh-taste-skill-tonulls'
const STRINGS = strings

export const name = 'taste-skill-session-control'
export const inject = ['skills', 'agents', 'commands']

function installAgentRouting(agentContext) {
  if (!agentContext?.skills || typeof agentContext.skills.registerProvider !== 'function' || typeof agentContext.effect !== 'function') {
    throw new Error('dsh-taste-skill-tonulls requires Agent-scoped skills and lifecycle services')
  }

  let enabled = false
  let disposeProvider

  function setEnabled(next) {
    if (next === enabled) return
    if (next) {
      disposeProvider = agentContext.skills.registerProvider(() => createSkillsProvider(SKILL_RANK))
      enabled = true
    } else {
      disposeProvider?.()
      disposeProvider = undefined
      enabled = false
    }
  }

  return {
    setEnabled,
    dispose() {
      setEnabled(false)
    },
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
  if (typeof ctx.commands?.register !== 'function') {
    throw new Error('dsh-taste-skill-tonulls requires the DSH commands service')
  }

  const routingByAgent = new WeakMap()
  const routingInstallations = new WeakMap()
  const disposedAgents = new WeakSet()

  async function ensureAgentRouting(agent) {
    if (!agent || (typeof agent !== 'object' && typeof agent !== 'function') || disposedAgents.has(agent)) {
      throw new Error('Agent is unavailable')
    }

    const existing = routingByAgent.get(agent)
    if (existing) return existing

    const pending = routingInstallations.get(agent)
    if (pending) return pending

    const installation = (async () => {
      const sessionPlugin = (agentContext) => {
        const routing = installAgentRouting(agentContext)
        routingByAgent.set(agent, routing)
        agentContext.effect(function* () {
          yield () => {
            routing.dispose()
            routingByAgent.delete(agent)
          }
        }, 'dsh-taste-skill-tonulls Agent routing lifecycle')
      }
      sessionPlugin.inject = ['skills']
      await agent.ctx.plugin(sessionPlugin).await()
      const routing = routingByAgent.get(agent)
      if (!routing) throw new Error('Agent routing plugin did not initialize')
      if (disposedAgents.has(agent)) {
        routing.dispose()
        routingByAgent.delete(agent)
        throw new Error('Agent was disposed during routing initialization')
      }
      return routing
    })()
    routingInstallations.set(agent, installation)
    try {
      return await installation
    } finally {
      if (routingInstallations.get(agent) === installation) routingInstallations.delete(agent)
    }
  }

  ctx.effect(function* () {
    yield ctx.commands.register({
      name: COMMAND_NAME,
      description: STRINGS.command,
      input: { hint: 'on|off' },
      async handler({ agent, rawInput }) {
        const enabled = parseEnabled(rawInput)
        if (enabled === undefined) return { kind: 'error', text: STRINGS.usage }
        let routing
        try {
          routing = await ensureAgentRouting(agent)
        } catch {
          return { kind: 'error', text: STRINGS.unavailable }
        }
        routing.setEnabled(enabled)
        return { kind: 'success', text: STRINGS[enabled ? 'enabled' : 'disabled'] }
      },
    })
  }, 'dsh-taste-skill-tonulls command')

  ctx.on('agent/created', async ({ agent }) => {
    await ensureAgentRouting(agent)
  })

  ctx.on('agent/disposed', ({ agent }) => {
    if (agent && (typeof agent === 'object' || typeof agent === 'function')) disposedAgents.add(agent)
  })
}
