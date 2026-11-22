import { createAstryxProvider } from './provider.js'
import { createAstryxRoutingPlugin } from './bundle-routing.js'

const BUNDLED_SKILL_RANK = 600
const COMMAND_NAME = 'dsh-astryx-tonulls'

/** Shared entry for standalone and bundled installation. */
export const name = 'astryx-tonulls'
export const inject = ['skills', 'commands', 'agents']

export function apply(ctx) {
  const routingByAgent = new WeakMap()
  ctx.effect(function* () {
    yield ctx.skills.registerProvider(() => createAstryxProvider(BUNDLED_SKILL_RANK, {
      modelInvocable: false,
      userInvocable: false,
    }))
    yield ctx.commands.register({
      name: COMMAND_NAME,
      description: 'Enable or disable automatic selection of Astryx for the current Agent.',
      input: { hint: 'on|off' },
      handler({ agent, rawInput }) {
        const match = typeof rawInput === 'string' ? /^(on|off)$/i.exec(rawInput.trim()) : null
        if (match === null) return { kind: 'error', text: 'Expected on or off.' }
        const routing = routingByAgent.get(agent)
        if (typeof routing?.setAutomaticSelection !== 'function') {
          return { kind: 'error', text: 'Astryx routing is not ready for this Agent.' }
        }
        routing.setAutomaticSelection(match[1].toLowerCase() === 'on')
        return { kind: 'success', text: match[1].toLowerCase() === 'on' ? 'Astryx automatic selection enabled.' : 'Astryx automatic selection disabled.' }
      },
    })
  }, 'Astryx registrations')

  ctx.on('agent/created', async ({ agent }) => {
    const fiber = agent.ctx.plugin(createAstryxRoutingPlugin({
      rank: BUNDLED_SKILL_RANK,
      onController(controller) {
        if (controller === undefined) routingByAgent.delete(agent)
        else routingByAgent.set(agent, controller)
      },
    }))
    await fiber.await()
  })
}
