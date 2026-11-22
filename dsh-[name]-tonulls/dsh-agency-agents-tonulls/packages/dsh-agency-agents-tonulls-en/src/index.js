import { BUNDLED_SKILL_RANK } from '@deepseek-ai/dsh-skill'
import { createAgencyAgentsProvider } from './provider.js'
import { registerModeCommand } from './mode-provider.js'
import { createSessionRoutingPlugin } from './routing.js'

/** Cordis plugin name used by the standalone Agency Agents bundle. */
export const name = 'agency-agents-tonulls'
/** DSH registries used to publish role skills and the native control command. */
export const inject = ['skills', 'commands', 'agents']

/** Register the pinned roster and Agent-scoped automatic-selection control. */
export function apply(ctx) {
  ctx.skills.registerProvider(() => createAgencyAgentsProvider(BUNDLED_SKILL_RANK))
  const routingByAgent = new WeakMap()
  ctx.effect(function* () {
    yield registerModeCommand(ctx, {
      getRouting: (agent) => routingByAgent.get(agent),
    })
  }, 'agency-agents mode command')
  ctx.on('agent/created', async ({ agent }) => {
    const fiber = agent.ctx.plugin(createSessionRoutingPlugin({
      rank: BUNDLED_SKILL_RANK,
      onController(controller) {
        if (controller === undefined) routingByAgent.delete(agent)
        else routingByAgent.set(agent, controller)
      },
    }))
    await fiber.await()
  })
}
