import assert from 'node:assert/strict'
import test from 'node:test'
import * as ru from '../packages/dsh-lenis-tonulls-ru/src/index.js'
import * as en from '../packages/dsh-lenis-tonulls-en/src/index.js'
import * as zh from '../packages/dsh-lenis-tonulls-zh/src/index.js'

for (const [locale, plugin] of [['RU', ru], ['EN', en], ['ZH', zh]]) {
  test(`${locale} plugin declares skills and registers one provider`, () => {
    assert.deepEqual(plugin.inject, ['skills', 'commands', 'agents'])
    const registrations = []
    plugin.apply({ skills: { registerProvider: (factory) => registrations.push(factory) }, effect() {}, on() {} })
    assert.equal(registrations.length, 1)
    assert.equal(registrations[0]().name, 'lenis-tonulls')
  })
}
