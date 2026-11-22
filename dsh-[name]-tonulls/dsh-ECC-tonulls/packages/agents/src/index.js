import { BUNDLED_SKILL_RANK } from '@deepseek-ai/dsh-skill'
import { createAgentsProvider } from './provider.js'

/** Cordis plugin name used by the optional bundle. */
export const name = 'ecc-agents'
/** DSH skill registry required to publish the role as a user-invocable skill. */
export const inject = ['skills']

/** Register the model-neutral ECC agent roles on DSH's existing skill catalog. */
export function apply(ctx) {
  ctx.skills.registerProvider(() => createAgentsProvider(BUNDLED_SKILL_RANK))
}
