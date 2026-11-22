import assert from 'node:assert/strict'
import test from 'node:test'
import { createFancyProvider as createRuProvider } from '../packages/dsh-fancy-tonulls-ru/src/provider.js'
import { installSessionRouting as installRuRouting, createSessionRoutingPlugin as createRuSessionPlugin } from '../packages/dsh-fancy-tonulls-ru/src/routing.js'
import { createModeCommandDefinition as createRuCommand } from '../packages/dsh-fancy-tonulls-ru/src/mode-provider.js'
import { createFancyProvider as createEnProvider } from '../packages/dsh-fancy-tonulls-en/src/provider.js'
import { installSessionRouting as installEnRouting, createSessionRoutingPlugin as createEnSessionPlugin } from '../packages/dsh-fancy-tonulls-en/src/routing.js'
import { createModeCommandDefinition as createEnCommand } from '../packages/dsh-fancy-tonulls-en/src/mode-provider.js'
import { createFancyProvider as createZhProvider } from '../packages/dsh-fancy-tonulls-zh/src/provider.js'
import { installSessionRouting as installZhRouting, createSessionRoutingPlugin as createZhSessionPlugin } from '../packages/dsh-fancy-tonulls-zh/src/routing.js'
import { createModeCommandDefinition as createZhCommand } from '../packages/dsh-fancy-tonulls-zh/src/mode-provider.js'

const variants = [
  ['RU', 'ru', createRuProvider, installRuRouting, createRuSessionPlugin, createRuCommand, /выключен/i, /включён/i],
  ['EN', 'en', createEnProvider, installEnRouting, createEnSessionPlugin, createEnCommand, /currently off/i, /currently enabled/i],
  ['ZH', 'zh', createZhProvider, installZhRouting, createZhSessionPlugin, createZhCommand, /已关闭/, /明确启用/],
]

function createAgentContext() {
  const providers = new Map()
  const cleanups = []
  const context = {
    skills: {
      registerProvider(create) {
        const provider = create({ signal: new AbortController().signal, invalidate() {} })
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
  return { context, providers, cleanups }
}

for (const [locale, commandSuffix, createProvider, installRouting, createSessionPlugin, createCommand, offMessage, onMessage] of variants) {
  test(`${locale} Skill stays manually invocable while automatic invocation defaults off`, async () => {
    const provider = createProvider(500)
    const [candidate] = await provider.list()
    const definition = await provider.get(candidate)

    assert.equal(candidate.name, 'fancy-components')
    assert.deepEqual(candidate.invocation, { modelInvocable: false, userInvocable: true })
    assert.deepEqual(definition.invocation, { modelInvocable: false, userInvocable: true })
    assert.match(definition.content, /`\/fancy-components`/)
    assert.match(definition.content, offMessage)
  })

  test(`${locale} Agent toggle adds and removes only its automatic provider overlay`, async () => {
    const agent = createAgentContext()
    const routing = installRouting({ context: agent.context, rank: 500 })

    assert.equal(agent.providers.size, 0)
    assert.equal(routing.setAutomaticSelection('on'), false)
    assert.equal(agent.providers.size, 0)
    routing.setAutomaticSelection(true)
    routing.setAutomaticSelection(true)
    assert.equal(agent.providers.size, 1)
    const [enabledProvider] = agent.providers.values()
    const [enabledSkill] = await enabledProvider.list()
    const enabledDefinition = await enabledProvider.get(enabledSkill)
    assert.deepEqual(enabledSkill.invocation, { modelInvocable: true, userInvocable: true })
    assert.deepEqual(enabledDefinition.invocation, { modelInvocable: true, userInvocable: true })
    assert.match(enabledDefinition.content, onMessage)

    routing.setAutomaticSelection(false)
    routing.setAutomaticSelection(false)
    assert.equal(agent.providers.size, 0)
    routing.setAutomaticSelection(true)
    routing.dispose()
    routing.dispose()
    assert.equal(agent.providers.size, 0)
    assert.equal(routing.setAutomaticSelection(true), false)
  })

  test(`${locale} automatic mode is isolated and starts off for a new Agent`, () => {
    const first = createAgentContext()
    const second = createAgentContext()
    const firstRouting = installRouting({ context: first.context, rank: 500 })
    const secondRouting = installRouting({ context: second.context, rank: 500 })

    assert.equal(first.providers.size, 0)
    assert.equal(second.providers.size, 0)
    firstRouting.setAutomaticSelection(true)
    assert.equal(first.providers.size, 1)
    assert.equal(second.providers.size, 0)
    firstRouting.dispose()
    secondRouting.dispose()

    const recreated = createAgentContext()
    const recreatedRouting = installRouting({ context: recreated.context, rank: 500 })
    assert.equal(recreated.providers.size, 0)
    recreatedRouting.dispose()
  })

  test(`${locale} session plugin disposes its overlay and releases its controller`, () => {
    const agent = createAgentContext()
    const controllers = []
    const onDisposed = []
    const plugin = createSessionPlugin({
      rank: 500,
      onController: (controller) => controllers.push(controller),
      onDisposed: () => onDisposed.push(true),
    })

    plugin(agent.context)
    const controller = controllers[0]
    assert.equal(typeof controller.setAutomaticSelection, 'function')
    controller.setAutomaticSelection(true)
    assert.equal(agent.providers.size, 1)
    agent.cleanups[0]()

    assert.deepEqual(controllers, [controller, undefined])
    assert.deepEqual(onDisposed, [true])
    assert.equal(agent.providers.size, 0)
  })

  test(`${locale} slash command controls only the receiving Agent`, async () => {
    const agent = {}
    const calls = []
    const routing = { setAutomaticSelection: (enabled) => calls.push(enabled) }
    const command = createCommand({ getRouting: (candidate) => candidate === agent ? routing : undefined })

    assert.equal(command.name, `dsh-fancy-tonulls-${commandSuffix}`)
    assert.equal(command.input.hint, 'on|off')
    assert.equal((await command.handler({ agent, rawInput: ' on ' })).kind, 'success')
    assert.equal((await command.handler({ agent, rawInput: 'OFF' })).kind, 'success')
    assert.deepEqual(calls, [true, false])
    assert.equal((await command.handler({ agent, rawInput: 'on now' })).kind, 'error')
    assert.equal((await command.handler({ agent, rawInput: '' })).kind, 'error')
    assert.equal((await command.handler({ agent, rawInput: null })).kind, 'error')
    assert.equal((await command.handler({ agent: {}, rawInput: 'on' })).kind, 'error')
    assert.deepEqual(calls, [true, false])
  })
}
