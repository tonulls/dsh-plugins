import { createReferenceProvider } from './provider.js'
import { registerModeCommand } from './mode-provider.js'
import { createSessionRoutingPlugin } from './routing.js'

export const name = 'thinking-orbs-tonulls'
export const inject = ['skills', 'commands', 'agents']

export function apply(ctx) {
  ctx.skills.registerProvider(() => createReferenceProvider(500))
  const routingByAgent = new WeakMap()
  ctx.effect(function* () {
    yield registerModeCommand(ctx, { getRouting: (agent) => routingByAgent.get(agent) })
  }, 'automatic skill selection command')
  ctx.on('agent/created', async ({ agent }) => {
    const fiber = agent.ctx.plugin(createSessionRoutingPlugin({
      onController(controller) {
        if (controller === undefined) routingByAgent.delete(agent)
        else routingByAgent.set(agent, controller)
      },
    }))
    await fiber.await()
  })
}
