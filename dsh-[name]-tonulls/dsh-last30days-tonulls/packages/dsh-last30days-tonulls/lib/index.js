import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'

import { createSkillProvider } from './provider.js'
import { registerModeCommand } from './mode-provider.js'
import { createAgentRoutingPlugin } from './routing.js'

export const name = 'last30days-tonulls'
export const PACKAGE_NAME = 'dsh-last30days-tonulls'

export function resolveLast30DaysSkillRoot(profileBaseUrl) {
  if (!profileBaseUrl) throw new Error('dsh-last30days-tonulls: missing DSH profile baseUrl for package resolution')
  let manifestPath
  try { manifestPath = createRequire(profileBaseUrl).resolve(`${PACKAGE_NAME}/package.json`) }
  catch (error) { throw new Error(`dsh-last30days-tonulls: cannot resolve ${PACKAGE_NAME}/package.json from the DSH profile`, { cause: error }) }
  return join(dirname(manifestPath), 'skills')
}
export const inject = ['skills', 'commands', 'agents']

export function apply(ctx) {
  ctx.skills.registerProvider(() => createSkillProvider())
  const routingByAgent = new WeakMap()
  ctx.effect(function* () { yield registerModeCommand(ctx, { getRouting: (agent) => routingByAgent.get(agent) }) }, 'automatic skill selection command')
  ctx.on('agent/created', async ({ agent }) => {
    const fiber = agent.ctx.plugin(createAgentRoutingPlugin({ onController(controller) {
      if (controller === undefined) routingByAgent.delete(agent)
      else routingByAgent.set(agent, controller)
    } }))
    await fiber.await()
  })
}
