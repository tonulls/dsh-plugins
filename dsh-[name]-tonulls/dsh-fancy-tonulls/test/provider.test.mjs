import assert from 'node:assert/strict'
import test from 'node:test'
import { createFancyProvider } from '../packages/dsh-fancy-tonulls-ru/src/provider.js'
import { createFancyProvider as createEnglishProvider } from '../packages/dsh-fancy-tonulls-en/src/provider.js'
import { createFancyProvider as createChineseProvider } from '../packages/dsh-fancy-tonulls-zh/src/provider.js'

for (const [locale, createProvider] of [['RU', createFancyProvider], ['EN', createEnglishProvider], ['ZH', createChineseProvider]]) {
  test(`${locale} provider exposes one manually invocable skill with auto off`, async () => {
    const provider = createProvider(500)
    const [entry] = await provider.list()
    assert.equal(entry.name, 'fancy-components')
    assert.equal(entry.invocation.modelInvocable, false)
    assert.equal(entry.invocation.userInvocable, true)
    assert.equal(entry.provider, 'fancy-tonulls')
    assert.equal(entry.rank, 500)
    const skill = await provider.get(entry)
    assert.match(skill.content, /DSH session boundary/)
    assert.match(skill.content, /prefers-reduced-motion/)
    assert.match(skill.content, /license|лицензи|许可证/i)
    assert.match(skill.content, /GitHub/)
  })
}

test('provider refuses selections from another provider', async () => {
  const provider = createFancyProvider(500)
  assert.equal(await provider.get({ provider: 'other', name: 'fancy-components', locator: 'fancy-components.md' }), undefined)
})

test('provider respects an already-aborted signal', async () => {
  const controller = new AbortController()
  controller.abort()
  const provider = createFancyProvider(500)
  await assert.rejects(provider.list({ signal: controller.signal }), { name: 'AbortError' })
})
