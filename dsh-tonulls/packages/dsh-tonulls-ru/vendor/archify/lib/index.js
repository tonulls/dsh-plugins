import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { createSkillProvider } from './provider.js'
import { registerModeCommand } from './mode-provider.js'
import { createAgentRoutingPlugin } from './routing.js'

export const name = 'archify-tonulls'
export const PACKAGE_NAME = 'dsh-archify-tonulls'

export function resolveArchifySkillRoot() {
  return join(dirname(fileURLToPath(import.meta.url)), '..', 'skills')
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
