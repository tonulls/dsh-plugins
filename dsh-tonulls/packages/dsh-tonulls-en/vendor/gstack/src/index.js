import { createSkillsProvider } from './provider.js'
import { strings } from './locale.js'

const SKILL_RANK = 600
const COMMAND_NAME = 'dsh-gstack-tonulls'
const TEXT = strings

export const name = 'gstack-session-control'
export const inject = ['skills', 'agents', 'commands']

function installAgentRouting(agentContext) {
  if (!agentContext?.skills || typeof agentContext.skills.registerProvider !== 'function' || typeof agentContext.effect !== 'function') {
    throw new Error('dsh-gstack-tonulls requires Agent-scoped skills and lifecycle services')
  }
  let enabled = false
  let disposeProvider
  return {
    setEnabled(next) {
      if (next === enabled) return
      if (next) {
        disposeProvider = agentContext.skills.registerProvider(() => createSkillsProvider(SKILL_RANK, { modelInvocable: true }))
        enabled = true
      } else {
        disposeProvider?.()
        disposeProvider = undefined
        enabled = false
      }
    },
    dispose() {
      if (!enabled) return
      disposeProvider?.()
      disposeProvider = undefined
      enabled = false
    },
  }
}

export function parseEnabled(rawInput) {
  if (typeof rawInput !== 'string') return undefined
  const input = rawInput.trim().toLowerCase()
  return input === 'on' ? true : input === 'off' ? false : undefined
}

export function apply(ctx) {
  if (typeof ctx.commands?.register !== 'function') throw new Error('dsh-gstack-tonulls requires DSH commands service')
  const routingByAgent = new WeakMap()
  const pendingByAgent = new WeakMap()
  const disposedAgents = new WeakSet()

  async function ensureRouting(agent) {
    if (!agent || (typeof agent !== 'object' && typeof agent !== 'function') || disposedAgents.has(agent)) throw new Error('Agent unavailable')
    if (routingByAgent.has(agent)) return routingByAgent.get(agent)
    if (pendingByAgent.has(agent)) return pendingByAgent.get(agent)
    const pending = (async () => {
      const sessionPlugin = (agentContext) => {
        const routing = installAgentRouting(agentContext)
        routingByAgent.set(agent, routing)
        agentContext.effect(function* () {
          yield () => { routing.dispose(); routingByAgent.delete(agent) }
        }, 'dsh-gstack-tonulls Agent routing lifecycle')
      }
      sessionPlugin.inject = ['skills']
      await agent.ctx.plugin(sessionPlugin).await()
      const routing = routingByAgent.get(agent)
      if (!routing) throw new Error('Agent routing failed to initialize')
      if (disposedAgents.has(agent)) {
        routing.dispose()
        routingByAgent.delete(agent)
        throw new Error('Agent was disposed during routing initialization')
      }
      return routing
    })()
    pendingByAgent.set(agent, pending)
    try { return await pending } finally { if (pendingByAgent.get(agent) === pending) pendingByAgent.delete(agent) }
  }

  ctx.effect(function* () {
    yield ctx.commands.register({
      name: COMMAND_NAME, description: TEXT.command, input: { hint: 'on|off' },
      async handler({ agent, rawInput }) {
        const enabled = parseEnabled(rawInput)
        if (enabled === undefined) return { kind: 'error', text: TEXT.usage }
        try { (await ensureRouting(agent)).setEnabled(enabled) }
        catch { return { kind: 'error', text: TEXT.unavailable } }
        return { kind: 'success', text: TEXT[enabled ? 'enabled' : 'disabled'] }
      },
    })
  }, 'dsh-gstack-tonulls command')
  ctx.on('agent/created', async ({ agent }) => {
    await ensureRouting(agent)
  })
  ctx.on('agent/disposed', ({ agent }) => {
    if (agent && (typeof agent === 'object' || typeof agent === 'function')) disposedAgents.add(agent)
  })
}
