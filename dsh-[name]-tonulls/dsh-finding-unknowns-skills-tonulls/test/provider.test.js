import assert from 'node:assert/strict'
import test from 'node:test'

const variants = [
  '../packages/dsh-finding-unknowns-skills-tonulls-ru/src/provider.js',
  '../packages/dsh-finding-unknowns-skills-tonulls-en/src/provider.js',
  '../packages/dsh-finding-unknowns-skills-tonulls-zh/src/provider.js',
]

test('all localized providers expose 14 directly-invoked skills', async () => {
  for (const modulePath of variants) {
    const { createFindingUnknownsProvider } = await import(modulePath)
    const provider = createFindingUnknownsProvider()
    const summaries = await provider.list()
    assert.equal(summaries.length, 14)
    assert.equal(new Set(summaries.map(({ name }) => name)).size, 14)
    for (const summary of summaries) {
      assert.equal(summary.invocation.modelInvocable, false)
      assert.equal(summary.invocation.userInvocable, true)
      const loaded = await provider.get(summary)
      assert.match(loaded.content, /DSH safety and runtime notes/)
      assert.ok(loaded.content.length > 100)
    }
    assert.equal(await provider.get({ ...summaries[0], provider: 'other' }), undefined)
  }
})
