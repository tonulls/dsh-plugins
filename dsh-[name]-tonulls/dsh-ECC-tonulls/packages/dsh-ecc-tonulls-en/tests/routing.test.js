import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { registerUmbrellaProviders } from '../src/providers.js'
import { createModeCommandDefinitions, registerModeCommands } from '../src/mode-provider.js'
import {
  createSessionRoutingPlugin,
  installSessionRouting,
  parseModeCommandInput,
  parseModeCommands,
} from '../src/routing.js'

function userMessage(text) {
  return { source: { kind: 'user' }, content: [{ type: 'text', text }] }
}

function providerFactory(component) {
  const providerName = `ecc-${component}`
  return (rank, options) => ({
    name: providerName,
    async list() {
      return [{
        name: `${providerName}-sample`,
        provider: providerName,
        rank,
        invocation: {
          modelInvocable: options?.modelInvocable === true,
          userInvocable: options?.userInvocable !== false,
        },
      }]
    },
    async get() {},
  })
}

function makeAgentContext() {
  const listeners = new Map()
  const scopedProviders = new Map()
  const context = {
    skills: {
      registerProvider(create) {
        const provider = create({ invalidate() {} })
        if (scopedProviders.has(provider.name)) throw new Error(`duplicate provider: ${provider.name}`)
        scopedProviders.set(provider.name, provider)
        return () => scopedProviders.delete(provider.name)
      },
    },
    on(event, listener) {
      listeners.set(event, listener)
      return () => listeners.delete(event)
    },
  }
  return {
    context,
    scopedProviders,
    async step(messages) {
      const handler = listeners.get('agent/pre-step')
      assert.ok(handler)
      return handler({ messages }, async () => ({ kind: 'enter', messages }))
    },
  }
}

const providerFactories = {
  agents: providerFactory('agents'),
  skills: providerFactory('skills'),
  commands: providerFactory('commands'),
}

describe('ECC session routing controls', () => {
  it('registers every bundled provider from the single umbrella plugin', async () => {
    const providers = new Map()
    const context = {
      skills: {
        registerProvider(create) {
          const provider = create({ invalidate() {} })
          providers.set(provider.name, provider)
          return () => providers.delete(provider.name)
        },
      },
      on() {
        return () => {}
      },
    }

    registerUmbrellaProviders(context, 600)
    for (const [name, expectedCount] of [
      ['ecc-agents', 71],
      ['ecc-skills', 236],
      ['ecc-commands', 3],
    ]) {
      const entries = await providers.get(name).list()
      assert.equal(entries.length, expectedCount)
      assert.ok(entries.every((entry) => entry.invocation.modelInvocable === false))
      assert.ok(entries.every((entry) => entry.invocation.userInvocable === false))
    }
    assert.equal(providers.has('ecc-mode-control'), false)
  })

  it('creates a fresh skill-injected Cordis plugin for each Agent', () => {
    const first = createSessionRoutingPlugin({ providerFactories, rank: 600 })
    const second = createSessionRoutingPlugin({ providerFactories, rank: 600 })

    assert.notEqual(first, second)
    assert.deepEqual(first.inject, ['skills'])
  })

  it('publishes and disposes the per-Agent controller with the plugin lifecycle', async () => {
    const scope = makeAgentContext()
    let cleanup
    scope.context.effect = (effect) => {
      const step = effect().next()
      cleanup = step.value
    }
    const published = []
    const plugin = createSessionRoutingPlugin({
      providerFactories,
      rank: 600,
      onController: (controller) => published.push(controller),
    })

    plugin(scope.context)
    assert.equal(published.length, 1)
    const controller = published[0]
    assert.equal(typeof controller.applyCommand, 'function')
    assert.equal(typeof cleanup, 'function')
    cleanup()
    assert.deepEqual(published, [controller, undefined])
    assert.equal(scope.scopedProviders.size, 0)
  })

  it('recognizes exact direct-user commands only', () => {
    assert.deepEqual(parseModeCommands([
      userMessage('/dsh-ecc-agents on'),
      { source: { kind: 'tool' }, content: [{ type: 'text', text: '/dsh-ecc-skills on' }] },
      userMessage('Please run /dsh-ecc-commands on now'),
      userMessage('/dsh-ecc-tonulls OFF'),
    ]), [
      { target: 'agents', enabled: true },
      { target: 'tonulls', enabled: false },
    ])
  })

  it('parses native slash-command arguments exactly', () => {
    assert.deepEqual(parseModeCommandInput('agents', ' on '), { target: 'agents', enabled: true })
    assert.deepEqual(parseModeCommandInput('tonulls', 'OFF'), { target: 'tonulls', enabled: false })
    assert.equal(parseModeCommandInput('agents', 'on now'), undefined)
    assert.equal(parseModeCommandInput('unknown', 'on'), undefined)
  })

  it('registers exactly four native menu commands and routes them to the receiving Agent', async () => {
    const definitions = new Map()
    const agent = {}
    const otherAgent = {}
    const applied = []
    const routing = { applyCommand(command) { applied.push(command); return true } }
    const context = {
      commands: {
        register(definition) {
          if (definitions.has(definition.name)) throw new Error(`duplicate command: ${definition.name}`)
          definitions.set(definition.name, definition)
          return () => definitions.delete(definition.name)
        },
      },
    }
    const dispose = registerModeCommands(context, {
      descriptionLocale: 'ru',
      getRouting: (candidate) => candidate === agent ? routing : undefined,
    })

    assert.deepEqual([...definitions.keys()].sort(), [
      'dsh-ecc-agents',
      'dsh-ecc-commands',
      'dsh-ecc-skills',
      'dsh-ecc-tonulls',
    ])
    assert.ok([...definitions.values()].every((definition) => definition.input.hint === 'on|off'))
    assert.ok(definitions.get('dsh-ecc-agents').description.includes('Включить'))

    const enabled = await definitions.get('dsh-ecc-agents').handler({ agent, rawInput: 'on' })
    assert.deepEqual(applied, [{ target: 'agents', enabled: true }])
    assert.equal(enabled.kind, 'success')
    assert.match(enabled.text, /включён/)

    const malformed = await definitions.get('dsh-ecc-agents').handler({ agent, rawInput: 'on extra' })
    assert.equal(malformed.kind, 'error')
    assert.equal(applied.length, 1)

    const notReady = await definitions.get('dsh-ecc-agents').handler({ agent: otherAgent, rawInput: 'off' })
    assert.equal(notReady.kind, 'error')
    dispose()
    dispose()
    assert.equal(definitions.size, 0)
  })

  it('native commands update the same per-Agent routing state as exact user commands', async () => {
    const scope = makeAgentContext()
    const agent = {}
    const routing = installSessionRouting({ context: scope.context, providerFactories, rank: 600 })
    const command = createModeCommandDefinitions({ getRouting: (candidate) => candidate === agent ? routing : undefined })
      .find((definition) => definition.name === 'dsh-ecc-tonulls')

    const enabled = await command.handler({ agent, rawInput: 'on' })
    assert.equal(enabled.kind, 'success')
    assert.deepEqual([...routing.active].sort(), ['agents', 'commands', 'skills'])
    assert.deepEqual([...scope.scopedProviders.keys()].sort(), ['ecc-agents', 'ecc-commands', 'ecc-skills'])

    const disabled = await command.handler({ agent, rawInput: 'off' })
    assert.equal(disabled.kind, 'success')
    assert.equal(routing.active.size, 0)
    assert.equal(scope.scopedProviders.size, 0)
  })

  it('starts off and exposes an enabled category only to automatic model selection', async () => {
    const scope = makeAgentContext()
    const routing = installSessionRouting({
      context: scope.context,
      providerFactories,
      rank: 600,
    })

    assert.equal(scope.scopedProviders.size, 0)
    await scope.step([userMessage('/dsh-ecc-agents on')])
    assert.deepEqual([...routing.active], ['agents'])
    const visibleAgents = await scope.scopedProviders.get('ecc-agents').list()
    assert.equal(visibleAgents[0].invocation.modelInvocable, true)
    assert.equal(visibleAgents[0].invocation.userInvocable, false)

    await scope.step([userMessage('/dsh-ecc-agents off')])
    assert.equal(routing.active.size, 0)
    assert.equal(scope.scopedProviders.size, 0)
  })

  it('toggles all categories through the umbrella and permits individual overrides', async () => {
    const scope = makeAgentContext()
    const routing = installSessionRouting({ context: scope.context, providerFactories, rank: 600 })

    await scope.step([userMessage('/dsh-ecc-tonulls on')])
    assert.deepEqual([...routing.active].sort(), ['agents', 'commands', 'skills'])
    assert.deepEqual([...scope.scopedProviders.keys()].sort(), ['ecc-agents', 'ecc-commands', 'ecc-skills'])

    await scope.step([userMessage('/dsh-ecc-skills off')])
    assert.deepEqual([...routing.active].sort(), ['agents', 'commands'])
    assert.deepEqual([...scope.scopedProviders.keys()].sort(), ['ecc-agents', 'ecc-commands'])

    await scope.step([userMessage('/dsh-ecc-tonulls off')])
    assert.equal(routing.active.size, 0)
    assert.equal(scope.scopedProviders.size, 0)
  })

  it('isolates modes between live Agent scopes and ignores malformed commands', async () => {
    const first = makeAgentContext()
    const second = makeAgentContext()
    const firstRouting = installSessionRouting({ context: first.context, providerFactories, rank: 600 })
    const secondRouting = installSessionRouting({ context: second.context, providerFactories, rank: 600 })

    await first.step([userMessage('/dsh-ecc-commands on extra')])
    assert.equal(firstRouting.active.size, 0)
    await first.step([userMessage('/dsh-ecc-commands on')])
    assert.deepEqual([...firstRouting.active], ['commands'])
    assert.equal(secondRouting.active.size, 0)
    assert.equal(second.scopedProviders.size, 0)
  })

  it('starts a recreated Agent off instead of persisting the previous Agent mode', async () => {
    const previous = makeAgentContext()
    const previousRouting = installSessionRouting({ context: previous.context, providerFactories, rank: 600 })
    await previous.step([userMessage('/dsh-ecc-tonulls on')])
    assert.equal(previousRouting.active.size, 3)

    const recreated = makeAgentContext()
    const recreatedRouting = installSessionRouting({ context: recreated.context, providerFactories, rank: 600 })
    await recreated.step([userMessage('continue with the task')])
    assert.equal(recreatedRouting.active.size, 0)
    assert.equal(recreated.scopedProviders.size, 0)
  })
})
