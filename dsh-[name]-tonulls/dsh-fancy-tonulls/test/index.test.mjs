import assert from 'node:assert/strict'
import test from 'node:test'
import * as ru from '../packages/dsh-fancy-tonulls-ru/src/index.js'
import * as en from '../packages/dsh-fancy-tonulls-en/src/index.js'
import * as zh from '../packages/dsh-fancy-tonulls-zh/src/index.js'

for (const [locale, plugin] of [['ru', ru], ['en', en], ['zh', zh]]) {
  test(`${locale} plugin wires its global Skill, mode command, and Agent lifecycle`, async () => {
    assert.deepEqual(plugin.inject, ['skills', 'agents', 'commands'])
    const providers = new Map()
    const commands = new Map()
    const listeners = new Map()
    const cleanups = []
    const ctx = {
      skills: {
        registerProvider(factory) {
          const provider = factory({ signal: new AbortController().signal, invalidate() {} })
          providers.set(provider.name, provider)
          return () => providers.delete(provider.name)
        },
      },
      commands: {
        register(definition) {
          commands.set(definition.name, definition)
          return () => commands.delete(definition.name)
        },
      },
      on(event, listener) {
        listeners.set(event, listener)
        return () => listeners.delete(event)
      },
      effect(effect) {
        const iterator = effect()
        let result = iterator.next()
        while (!result.done) {
          cleanups.push(result.value)
          result = iterator.next()
        }
      },
    }

    plugin.apply(ctx)
    assert.equal(providers.size, 1)
    assert.equal(providers.get('fancy-tonulls').name, 'fancy-tonulls')
    assert.equal(commands.size, 1)
    assert.equal(commands.has(`dsh-fancy-tonulls-${locale}`), true)
    assert.equal(typeof listeners.get('agent/created'), 'function')

    for (const cleanup of cleanups.reverse()) await cleanup()
    assert.equal(providers.size, 0)
    assert.equal(commands.size, 0)
    assert.equal(listeners.size, 0)
  })
}
