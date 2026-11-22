import assert from 'node:assert/strict'
import test from 'node:test'
import { apply as applyRu } from '../packages/dsh-fancy-tonulls-ru/src/index.js'
import { apply as applyEn } from '../packages/dsh-fancy-tonulls-en/src/index.js'
import { apply as applyZh } from '../packages/dsh-fancy-tonulls-zh/src/index.js'

function createSkillsContext(providers, cleanups) {
  return {
    skills: {
      registerProvider(factory) {
        const provider = factory({ signal: new AbortController().signal, invalidate() {} })
        if (providers.has(provider.name)) throw new Error(`duplicate provider: ${provider.name}`)
        providers.set(provider.name, provider)
        let active = true
        return () => {
          if (!active) return
          active = false
          providers.delete(provider.name)
        }
      },
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
}

for (const [locale, apply] of [['ru', applyRu], ['en', applyEn], ['zh', applyZh]]) {
  test(`${locale} manual invocation survives toggle changes and Agent cleanup`, async () => {
    const globalProviders = new Map()
    const commands = new Map()
    const listeners = new Map()
    const rootCleanups = []
    const ctx = {
      ...createSkillsContext(globalProviders, rootCleanups),
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
    }

    apply(ctx)
    const command = commands.get(`dsh-fancy-tonulls-${locale}`)
    const createAgent = listeners.get('agent/created')
    assert.equal(typeof command?.handler, 'function')
    assert.equal(typeof createAgent, 'function')

    const scopedProviders = new Map()
    const childCleanups = []
    const scopedContext = createSkillsContext(scopedProviders, childCleanups)
    let childDisposed = false
    const agent = {
      ctx: {
        plugin(plugin) {
          plugin(scopedContext)
          return {
            await: async () => {},
            dispose: async () => {
              if (childDisposed) return
              childDisposed = true
              for (const cleanup of childCleanups.reverse()) await cleanup()
            },
          }
        },
      },
    }

    await createAgent({ agent })
    const [manualSkill] = await globalProviders.get('fancy-tonulls').list()
    assert.deepEqual(manualSkill.invocation, { modelInvocable: false, userInvocable: true })

    assert.equal((await command.handler({ agent, rawInput: 'on' })).kind, 'success')
    const [automaticSkill] = await scopedProviders.get('fancy-tonulls').list()
    assert.deepEqual(automaticSkill.invocation, { modelInvocable: true, userInvocable: true })

    assert.equal((await command.handler({ agent, rawInput: 'off' })).kind, 'success')
    assert.equal(scopedProviders.size, 0)
    const [stillManual] = await globalProviders.get('fancy-tonulls').list()
    assert.deepEqual(stillManual.invocation, { modelInvocable: false, userInvocable: true })

    assert.equal((await command.handler({ agent, rawInput: 'on' })).kind, 'success')
    assert.equal(scopedProviders.size, 1)
    for (const cleanup of rootCleanups.reverse()) await cleanup()
    assert.equal(globalProviders.size, 0)
    assert.equal(scopedProviders.size, 0)
    assert.equal(commands.size, 0)
    assert.equal(listeners.size, 0)
  })
}
