import assert from 'node:assert/strict'
import test from 'node:test'
import { createLenisProvider } from '../packages/dsh-lenis-tonulls-ru/src/provider.js'
import { createLenisProvider as createEnglishProvider } from '../packages/dsh-lenis-tonulls-en/src/provider.js'
import { createLenisProvider as createChineseProvider } from '../packages/dsh-lenis-tonulls-zh/src/provider.js'

for (const [locale, createProvider] of [['RU', createLenisProvider], ['EN', createEnglishProvider], ['ZH', createChineseProvider]]) {
  test(`${locale} provider exposes one explicitly user-invoked skill`, async () => {
    const provider = createProvider(500)
    const [entry] = await provider.list()
    assert.equal(entry.name, 'lenis-integration')
    assert.equal(entry.invocation.modelInvocable, false)
    assert.equal(entry.invocation.userInvocable, true)
    assert.equal(entry.provider, 'lenis-tonulls')
    assert.equal(entry.rank, 500)
    const skill = await provider.get(entry)
    assert.match(skill.content, /DSH session boundary/)
    assert.match(skill.content, /prefers-reduced-motion/)
    assert.match(skill.content, /requestAnimationFrame/)
    assert.match(skill.content, /destroy/)
  })
}

test('provider refuses selections from another provider', async () => {
  const provider = createLenisProvider(500)
  assert.equal(await provider.get({ provider: 'other', name: 'lenis-integration', locator: 'lenis-integration.md' }), undefined)
})

test('provider respects an already-aborted signal', async () => {
  const controller = new AbortController()
  controller.abort()
  const provider = createLenisProvider(500)
  await assert.rejects(provider.list({ signal: controller.signal }), { name: 'AbortError' })
})
