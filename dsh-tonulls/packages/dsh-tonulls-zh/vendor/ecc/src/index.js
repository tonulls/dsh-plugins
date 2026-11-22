import { BUNDLED_SKILL_RANK } from '@deepseek-ai/dsh-skill'
import { COMPONENT_PROVIDER_FACTORIES, registerUmbrellaProviders } from './providers.js'
import { BUNDLE_DESCRIPTION_LOCALE } from './locale.js'
import { createModeCommandDefinitions } from './mode-provider.js'
import { createSessionRoutingPlugin } from './routing.js'

/** Cordis plugin name for the umbrella's session-level routing controls. */
export const name = 'ecc-tonulls-mode'
/** DSH registry and lifecycle events used for session-scoped availability. */
export const inject = ['skills', 'agents', 'commands']

/** Register four native mode commands and install per-Agent component overlays. */
export function apply(ctx) {
  registerUmbrellaProviders(ctx, BUNDLED_SKILL_RANK)
  const routingByAgent = new WeakMap()
  ctx.effect(function* () {
    for (const definition of createModeCommandDefinitions({ descriptionLocale: BUNDLE_DESCRIPTION_LOCALE, getRouting: (agent) => routingByAgent.get(agent) })) {
      yield ctx.commands.register(definition)
    }
  }, 'ecc-tonulls mode commands')
  ctx.on('agent/created', async ({ agent }) => {
    const sessionRoutingPlugin = createSessionRoutingPlugin({
      providerFactories: COMPONENT_PROVIDER_FACTORIES,
      rank: BUNDLED_SKILL_RANK,
      onController(controller) {
        if (controller === undefined) routingByAgent.delete(agent)
        else routingByAgent.set(agent, controller)
      },
    })
    const fiber = agent.ctx.plugin(sessionRoutingPlugin)
    await fiber.await()
  })
}
