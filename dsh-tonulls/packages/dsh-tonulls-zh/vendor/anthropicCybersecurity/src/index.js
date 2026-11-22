import { createAnthropicCybersecurityProvider } from './provider.js'
import { registerModeCommand } from './mode-provider.js'
import { createSessionRoutingPlugin } from './routing.js'

export const name = 'anthropic-cybersecurity-skills-tonulls'
export const inject = ['skills', 'commands', 'agents']

export function apply(ctx) {
  ctx.skills.registerProvider(() => createAnthropicCybersecurityProvider())
  const routingByAgent = new WeakMap()
  ctx.effect(function* () {
    yield registerModeCommand(ctx, {
      getRouting: (agent) => routingByAgent.get(agent),
    })
  }, 'anthropic cybersecurity mode command')
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
