import { createFancyProvider } from './provider.js'
import { registerModeCommand } from './mode-provider.js'
import { createSessionRoutingPlugin } from './routing.js'

export const name = 'fancy-tonulls'
export const inject = ['skills', 'agents', 'commands']

export function apply(ctx) {
  const routingByAgent = new WeakMap()
  const sessionFibers = new Set()

  ctx.effect(function* () {
    yield ctx.skills.registerProvider(() => createFancyProvider(500))
    yield registerModeCommand(ctx, {
      getRouting: (agent) => routingByAgent.get(agent),
    })
    yield async () => {
      const fibers = [...sessionFibers]
      sessionFibers.clear()
      await Promise.allSettled(fibers.map((fiber) => fiber.dispose()))
    }
    yield ctx.on('agent/created', async ({ agent }) => {
      let fiber
      const sessionPlugin = createSessionRoutingPlugin({
        rank: 500,
        onController(controller) {
          if (controller === undefined) routingByAgent.delete(agent)
          else routingByAgent.set(agent, controller)
        },
        onDisposed() {
          if (fiber !== undefined) sessionFibers.delete(fiber)
        },
      })
      fiber = agent.ctx.plugin(sessionPlugin)
      sessionFibers.add(fiber)
      try {
        await fiber.await()
      } catch (error) {
        sessionFibers.delete(fiber)
        await fiber.dispose()
        throw error
      }
    })
  }, 'fancy-components automatic selection lifecycle')
}
