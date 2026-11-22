import { BUNDLED_SKILL_RANK } from '@deepseek-ai/dsh-skill'
import { createSkillsProvider } from './provider.js'

/** Cordis plugin name used by the optional Skills bundle. */
export const name = 'ecc-skills'
/** DSH skill registry required to publish ECC skill definitions. */
export const inject = ['skills']

/** Register pinned ECC instructions as explicit-user-invoked DSH skills. */
export function apply(ctx) {
  ctx.skills.registerProvider(() => createSkillsProvider(BUNDLED_SKILL_RANK))
}
