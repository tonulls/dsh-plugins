import test from 'node:test'
import assert from 'node:assert/strict'
import { createGuidelinesProvider as createRu } from '../packages/dsh-aks-tonulls-ru/src/provider.js'
import { createGuidelinesProvider as createEn } from '../packages/dsh-aks-tonulls-en/src/provider.js'
import { createGuidelinesProvider as createZh } from '../packages/dsh-aks-tonulls-zh/src/provider.js'

const variants = [
  ['ru', createRu, /Сначала подумай/],
  ['en', createEn, /Think Before Coding/],
  ['zh', createZh, /编码前先思考/],
]

for (const [locale, createProvider, heading] of variants) {
  test(`${locale}: provider lists and loads bundled guidelines`, async () => {
    const provider = createProvider()
    const [skill] = await provider.list()

    assert.equal(skill.name, 'karpathy-guidelines')
    assert.equal(skill.provider, 'aks-karpathy-guidelines')
    assert.deepEqual(skill.invocation, { modelInvocable: false, userInvocable: true })

    const loaded = await provider.get(skill)
    assert.match(loaded.content, /^---\nname: karpathy-guidelines/m)
    assert.match(loaded.content, heading)
    assert.match(loaded.content, /DSH/i)
    assert.equal(await provider.get({ ...skill, name: 'unknown-skill' }), undefined)
  })

  test(`${locale}: provider respects an aborted signal`, async () => {
    const controller = new AbortController()
    controller.abort()
    await assert.rejects(createProvider().list({ signal: controller.signal }), {
      name: 'AbortError',
    })
  })
}
