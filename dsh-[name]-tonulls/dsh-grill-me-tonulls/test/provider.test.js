import assert from 'node:assert/strict'
import test from 'node:test'

const variants = [
  '../packages/dsh-grill-me-tonulls-ru/src/provider.js',
  '../packages/dsh-grill-me-tonulls-en/src/provider.js',
  '../packages/dsh-grill-me-tonulls-zh/src/provider.js',
]

test('each locale exposes the two directly-invoked skills only', async () => {
  for (const modulePath of variants) {
    const { createGrillMeProvider } = await import(modulePath)
    const provider = createGrillMeProvider()
    const summaries = await provider.list()
    assert.deepEqual(summaries.map(({ name }) => name).sort(), ['grill-me', 'grilling'])
    for (const summary of summaries) {
      assert.equal(summary.invocation.modelInvocable, false)
      assert.equal(summary.invocation.userInvocable, true)
      const loaded = await provider.get(summary)
      assert.match(loaded.content, /DSH safety and runtime notes/)
    }
    const grillMe = await provider.get(summaries.find(({ name }) => name === 'grill-me'))
    assert.match(grillMe.content, /bundled skill "grilling"/)
    assert.doesNotMatch(grillMe.content, /Call the Skill tool/)
    const grilling = await provider.get(summaries.find(({ name }) => name === 'grilling'))
    assert.match(grilling.content, /design tree/)
    assert.match(grilling.content, /wait for the user's answers/)
  }
})
