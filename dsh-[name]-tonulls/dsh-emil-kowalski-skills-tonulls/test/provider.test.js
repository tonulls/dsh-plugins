import assert from 'node:assert/strict'
import { access } from 'node:fs/promises'
import test from 'node:test'

const variants = [
  '../packages/dsh-emil-kowalski-skills-tonulls-ru/src/provider.js',
  '../packages/dsh-emil-kowalski-skills-tonulls-en/src/provider.js',
  '../packages/dsh-emil-kowalski-skills-tonulls-zh/src/provider.js',
]
const expected = [
  'animation-performance', 'animation-vocabulary', 'animate-expo', 'animate', 'apple-design', 'mobile-native',
  'improve-animations', 'ask-sonner', 'find-animation-opportunities', 'emil-design-eng', 'review-animations', 'remove-animations', 'ask-emil', 'choreograph', 'gestures', 'learn-taste',
]

test('curated Emil skills are directly invoked with local references', async () => {
  for (const modulePath of variants) {
    const { createEmilSkillsProvider } = await import(modulePath)
    const provider = createEmilSkillsProvider()
    const summaries = await provider.list()
    assert.deepEqual(summaries.map(({ name }) => name), expected)
    for (const summary of summaries) {
      assert.equal(summary.invocation.modelInvocable, false)
      assert.equal(summary.invocation.userInvocable, true)
      assert.match(summary.resourceBase.path, /assets\/skills\/[a-z0-9-]+\/?$/)
      const skill = await provider.get(summary)
      assert.match(skill.content, /DSH scope and safety/)
      assert.doesNotMatch(skill.content, /~\/\.claude\/|\.pl script/)
    }
    for (const [skillName, resource] of [
      ['choreograph', 'RECIPES.md'],
      ['animate', 'RECIPES.md'],
      ['animate-expo', 'RECIPES.md'],
      ['ask-sonner', 'API.md'],
      ['improve-animations', 'AUDIT.md'],
      ['improve-animations', 'PLAN-TEMPLATE.md'],
      ['review-animations', 'STANDARDS.md'],
    ]) {
      const summary = summaries.find(({ name }) => name === skillName)
      await access(`${summary.resourceBase.path}/${resource}`)
    }
    const automatic = createEmilSkillsProvider({ modelInvocable: true })
    const automaticSummaries = await automatic.list()
    assert.equal(automaticSummaries.find(({ name }) => name === 'gestures').invocation.modelInvocable, true)
    const learnTaste = automaticSummaries.find(({ name }) => name === 'learn-taste')
    assert.equal(learnTaste.invocation.modelInvocable, false)
    assert.equal((await automatic.get(learnTaste)).invocation.modelInvocable, false)
    const expo = await provider.get(summaries.find(({ name }) => name === 'animate-expo'))
    assert.match(expo.content, /Ask the user before changing files/)
    assert.equal(await provider.get({ ...summaries[0], provider: 'other' }), undefined)
  }
})
