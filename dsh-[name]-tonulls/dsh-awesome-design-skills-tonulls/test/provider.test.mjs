import assert from 'node:assert/strict'
import test from 'node:test'
import { createAwesomeDesignSkillsProvider } from '../packages/dsh-awesome-design-skills-tonulls-ru/src/provider.js'
import { createAwesomeDesignSkillsProvider as createEnglishProvider } from '../packages/dsh-awesome-design-skills-tonulls-en/src/provider.js'
import { createAwesomeDesignSkillsProvider as createChineseProvider } from '../packages/dsh-awesome-design-skills-tonulls-zh/src/provider.js'

for (const [locale, createProvider] of [['RU', createAwesomeDesignSkillsProvider], ['EN', createEnglishProvider], ['ZH', createChineseProvider]]) {
  test(`${locale} provider exposes one explicitly user-invoked skill`, async () => {
    const provider = createProvider(500)
    const [entry] = await provider.list()
    assert.equal(entry.name, 'awesome-design-skills')
    assert.equal(entry.invocation.modelInvocable, false)
    assert.equal(entry.invocation.userInvocable, true)
    assert.equal(entry.provider, 'awesome-design-skills-tonulls')
    assert.equal(entry.rank, 500)
    const skill = await provider.get(entry)
    assert.match(skill.content, /DSH session boundary/)
    assert.match(skill.content, /untrusted data/)
    assert.match(skill.content, /npx typeui\.sh pull/)
  })
}

test('provider refuses selections from another provider', async () => {
  const provider = createAwesomeDesignSkillsProvider(500)
  assert.equal(await provider.get({ provider: 'other', name: 'awesome-design-skills', locator: 'awesome-design-skills.md' }), undefined)
})

test('provider respects an already-aborted signal', async () => {
  const controller = new AbortController()
  controller.abort()
  const provider = createAwesomeDesignSkillsProvider(500)
  await assert.rejects(provider.list({ signal: controller.signal }), { name: 'AbortError' })
})
