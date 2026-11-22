import test from 'node:test'
import assert from 'node:assert/strict'
import { apply, parseEnabled } from '../index.js'

function makeContext() {
  const commands = new Map()
  const events = new Map()
  const globalDisposers = []
  const context = {
    commands: {
      register(definition) {
        commands.set(definition.name, definition)
        return () => commands.delete(definition.name)
      },
    },
    effect(factory) {
      const iterator = factory()
      const result = iterator.next()
      if (!result.done && typeof result.value === 'function') globalDisposers.push(result.value)
    },
    on(name, callback) {
      events.set(name, callback)
      return () => events.delete(name)
    },
  }
  return { context, commands, events, globalDisposers }
}

function makeAgent() {
  const providers = new Map()
  const agent = { ctx: undefined }
  const agentContext = {
    skills: {
      registerProvider(factory) {
        const provider = factory()
        providers.set(provider.name, provider)
        return () => providers.delete(provider.name)
      },
    },
    effect(factory) {
      const iterator = factory()
      const result = iterator.next()
      if (!result.done && typeof result.value === 'function') this.dispose = result.value
    },
    on() {},
  }
  agent.ctx = {
    plugin(plugin) {
      plugin(agentContext)
      return { await: async () => undefined }
    },
  }
  return { agent, agentContext, providers }
}

test('parseEnabled accepts only on/off commands', () => {
  assert.equal(parseEnabled('on'), true)
  assert.equal(parseEnabled(' OFF '), false)
  assert.equal(parseEnabled('yes'), undefined)
  assert.equal(parseEnabled(undefined), undefined)
})

test('skill is disabled by default and toggles for one Agent only', async () => {
  const { context, commands, events } = makeContext()
  apply(context)
  const agentA = makeAgent()
  const agentB = makeAgent()
  await events.get('agent/created')({ agent: agentA.agent })
  await events.get('agent/created')({ agent: agentB.agent })

  assert.equal(agentA.providers.size, 0)
  assert.equal(agentB.providers.size, 0)

  const command = commands.get('dsh-impeccable')
  assert.ok(command)
  assert.deepEqual(command.handler({ agent: agentA.agent, rawInput: 'on' }), {
    kind: 'success',
    text: 'Навык Impeccable включён для этого Agent.',
  })
  assert.equal(agentA.providers.size, 1)
  command.handler({ agent: agentA.agent, rawInput: 'on' })
  assert.equal(agentA.providers.size, 1)
  assert.equal(agentB.providers.size, 0)

  const provider = agentA.providers.get('impeccable')
  const [candidate] = await provider.list()
  assert.equal(candidate.name, 'impeccable')
  assert.equal(candidate.rank, 600)
  assert.deepEqual(candidate.invocation, { modelInvocable: true, userInvocable: true })
  const skill = await provider.get(candidate)
  assert.match(skill.content, /# Impeccable/)
  assert.match(skill.content, /does not ship the upstream engine/)
  assert.match(skill.content, /hard, sharp-offset shadows/)
  assert.match(skill.content, /deprecated alias/)
  assert.match(skill.content, /visual-regression goldens/)

  assert.deepEqual(command.handler({ agent: agentA.agent, rawInput: 'off' }), {
    kind: 'success',
    text: 'Навык Impeccable выключен для этого Agent.',
  })
  assert.equal(agentA.providers.size, 0)
  assert.equal(agentB.providers.size, 0)
})

test('Agent disposal unregisters its provider and removes the command target', async () => {
  const { context, commands, events } = makeContext()
  apply(context)
  const agent = makeAgent()
  await events.get('agent/created')({ agent: agent.agent })
  const command = commands.get('dsh-impeccable')
  command.handler({ agent: agent.agent, rawInput: 'on' })
  assert.equal(agent.providers.size, 1)

  agent.agentContext.dispose()
  assert.equal(agent.providers.size, 0)
  assert.equal(command.handler({ agent: agent.agent, rawInput: 'on' }).kind, 'error')
})

test('invalid input and an unknown Agent fail without enabling the skill', async () => {
  const { context, commands, events } = makeContext()
  apply(context)
  const agent = makeAgent()
  await events.get('agent/created')({ agent: agent.agent })
  const command = commands.get('dsh-impeccable')

  assert.equal(command.handler({ agent: agent.agent, rawInput: 'maybe' }).kind, 'error')
  assert.equal(command.handler({ agent: {}, rawInput: 'on' }).kind, 'error')
  assert.equal(agent.providers.size, 0)
})
