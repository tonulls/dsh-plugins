import { createGuidelinesProvider } from './provider.js'

export const name = 'aks-karpathy-guidelines'
export const inject = ['skills', 'agents', 'commands']

export function apply(ctx) {
  const routingByAgent = new WeakMap()
  ctx.skills.registerProvider(() => createGuidelinesProvider())
  ctx.on('agent/created', async ({ agent }) => {
    const state = { dispose: undefined }
    const fiber = agent.ctx.plugin({
      name: 'aks-karpathy-guidelines-routing',
      inject: ['skills'],
      apply(agentCtx) {
        state.setEnabled = (enabled) => {
          if (enabled && !state.dispose) {
            state.dispose = agentCtx.skills.registerProvider(() => createGuidelinesProvider({ modelInvocable: true }))
          } else if (!enabled && state.dispose) {
            state.dispose()
            state.dispose = undefined
          }
        }
        agentCtx.effect(function* () {
          yield () => {
            state.setEnabled(false)
            routingByAgent.delete(agent)
          }
        }, 'AKS routing lifecycle')
      },
    })
    await fiber.await()
    routingByAgent.set(agent, state)
  })
  ctx.effect(function* () {
    yield ctx.commands.register({
      name: 'dsh-aks-tonulls',
      description: 'Включить или выключить автоподбор Karpathy Guidelines для текущего Agent.',
      input: { hint: 'on|off' },
      async handler({ agent, rawInput }) {
        const value = typeof rawInput === 'string' ? rawInput.trim().toLowerCase() : ''
        if (value !== 'on' && value !== 'off') return { kind: 'error', text: 'Формат: /dsh-aks-tonulls on|off' }
        const state = routingByAgent.get(agent)
        if (!state?.setEnabled) return { kind: 'error', text: 'Переключатель недоступен для текущего Agent.' }
        state.setEnabled(value === 'on')
        return { kind: 'success', text: value === 'on' ? 'Автоподбор Karpathy Guidelines включён.' : 'Автоподбор Karpathy Guidelines выключен.' }
      },
    })
  }, 'AKS automatic selection command')
}
