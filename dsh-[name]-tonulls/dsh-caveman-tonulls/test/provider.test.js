import assert from 'node:assert/strict'
import test from 'node:test'

const variants = [
  '../packages/dsh-caveman-tonulls-ru/src/provider.js',
  '../packages/dsh-caveman-tonulls-en/src/provider.js',
  '../packages/dsh-caveman-tonulls-zh/src/provider.js',
]

test('Caveman is user-invoked and has no persistent mode controls', async () => {
  for (const modulePath of variants) {
    const { createCavemanProvider } = await import(modulePath)
    const provider = createCavemanProvider()
    const [summary] = await provider.list()
    assert.equal(summary.name, 'caveman')
    assert.equal(summary.invocation.modelInvocable, false)
    assert.equal(summary.invocation.userInvocable, true)
    const skill = await provider.get(summary)
    assert.match(skill.content, /current explicitly requested task or response/)
    assert.match(skill.content, /Never sacrifice correctness/)
    assert.doesNotMatch(skill.content, /Every response, whole session|stop caveman|normal mode|caveman status|caveman-compress/)
    assert.equal(await provider.get({ ...summary, provider: 'other' }), undefined)
  }
})
