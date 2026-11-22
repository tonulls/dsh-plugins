import assert from 'node:assert/strict'
import test from 'node:test'
import { createBuildYourOwnXProvider as createRu } from '../packages/dsh-build-your-own-x-tonulls-ru/src/provider.js'
import { createBuildYourOwnXProvider as createEn } from '../packages/dsh-build-your-own-x-tonulls-en/src/provider.js'
import { createBuildYourOwnXProvider as createZh } from '../packages/dsh-build-your-own-x-tonulls-zh/src/provider.js'

const variants = [
  ['RU', createRu],
  ['EN', createEn],
  ['ZH', createZh],
]

for (const [locale, createProvider] of variants) {
  test(`${locale} provider exposes one user-invoked skill without extra permissions`, async () => {
    const provider = createProvider(500)
    const summaries = await provider.list()
    assert.equal(summaries.length, 1)
    assert.equal(summaries[0].name, 'build-your-own-x')
    assert.equal(summaries[0].invocation.modelInvocable, false)
    assert.equal(summaries[0].invocation.userInvocable, true)
    assert.equal(summaries[0].source, 'bundled')

    const skill = await provider.get(summaries[0])
    assert.equal(skill.name, 'build-your-own-x')
    assert.equal(skill.invocation.modelInvocable, false)
    assert.equal(skill.invocation.userInvocable, true)
    assert.match(skill.content, /GitHub/)
    assert.match(skill.content, /Do not|Не |不/)
  })
}

test('provider refuses a selection from a different provider', async () => {
  const provider = createEn(500)
  assert.equal(await provider.get({ name: 'build-your-own-x', provider: 'other', locator: 'build-your-own-x.md' }), undefined)
})

test('provider respects an already-aborted signal', async () => {
  const provider = createEn(500)
  const controller = new AbortController()
  controller.abort()
  await assert.rejects(provider.list({ signal: controller.signal }), { name: 'AbortError' })
})
