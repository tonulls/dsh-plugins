import { BUNDLED_SKILL_RANK } from '@deepseek-ai/dsh-skill'
import { createCommandsProvider } from './provider.js'

/** Cordis plugin name used by the optional ECC Commands bundle. */
export const name = 'ecc-commands'
/** DSH skill registry used as the explicit command-instruction surface. */
export const inject = ['skills']

/** Register only the reviewed, explicitly invoked ECC command adaptations. */
export function apply(ctx) {
  ctx.skills.registerProvider(() => createCommandsProvider(BUNDLED_SKILL_RANK))
}
