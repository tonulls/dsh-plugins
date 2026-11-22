import assert from 'node:assert/strict'
import { join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import test from 'node:test'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
for (const locale of ['ru', 'en', 'zh']) {
  test('public-apis ' + locale + ' provider', async () => {
    const indexPath = join(root, 'packages', 'dsh-public-apis-tonulls-' + locale, 'src/index.js')
    const { apply } = await import(pathToFileURL(indexPath))
    let provider
    apply({ skills: { registerProvider(factory) { provider = factory() } }, effect() {}, on() {} })
    const rows = await provider.list()
    assert.equal(rows.length, 1)
    assert.deepEqual(rows[0].invocation, { modelInvocable: false, userInvocable: true })
    const skill = await provider.get(rows[0])
    assert.ok(skill.content.includes('https://github.com/public-apis/public-apis'))
    assert.equal(await provider.get({ ...rows[0], provider: 'wrong-provider' }), undefined)
  })
}
