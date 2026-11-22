import test from 'node:test'
import assert from 'node:assert/strict'
import { apply, parseEnabled } from '../src/index.js'
import { createSkillsProvider } from '../src/provider.js'

function makeContext() {
  const commands = new Map()
  const events = new Map()
  const context = {
    commands: {
      register(definition) {
        commands.set(definition.name, definition)
        return () => commands.delete(definition.name)
      },
    },
    effect(factory) {
      const iterator = factory()
      iterator.next()
    },
    on(name, callback) {
      events.set(name, callback)
      return () => events.delete(name)
    },
  }
  return { context, commands, events }
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

test('skill starts disabled and toggles per Agent', async () => {
  const { context, commands, events } = makeContext()
  apply(context)
  const agentA = makeAgent()
  const agentB = makeAgent()
  await events.get('agent/created')({ agent: agentA.agent })
  await events.get('agent/created')({ agent: agentB.agent })

  assert.equal(agentA.providers.size, 0)
  assert.equal(agentB.providers.size, 0)

  const command = commands.get('dsh-taste-skill-tonulls')
  assert.ok(command)
  assert.deepEqual(await command.handler({ agent: agentA.agent, rawInput: 'on' }), {
    kind: 'success',
    text: 'Taste Skill включён для этого Agent.',
  })
  assert.equal(agentA.providers.size, 1)
  await command.handler({ agent: agentA.agent, rawInput: 'on' })
  assert.equal(agentA.providers.size, 1)
  assert.equal(agentB.providers.size, 0)

  const provider = agentA.providers.get('taste-skill')
  const [candidate] = await provider.list()
  assert.equal(candidate.name, 'design-taste-frontend')
  assert.deepEqual(candidate.invocation, { modelInvocable: true, userInvocable: true })

  assert.deepEqual(await command.handler({ agent: agentA.agent, rawInput: 'off' }), {
    kind: 'success',
    text: 'Taste Skill выключен для этого Agent.',
  })
  assert.equal(agentA.providers.size, 0)
  assert.equal(agentB.providers.size, 0)
})

test('command installs Agent routing when the creation event was missed', async () => {
  const { context, commands } = makeContext()
  apply(context)
  const agent = makeAgent()
  const command = commands.get('dsh-taste-skill-tonulls')

  assert.deepEqual(await command.handler({ agent: agent.agent, rawInput: 'on' }), {
    kind: 'success',
    text: 'Taste Skill включён для этого Agent.',
  })
  assert.equal(agent.providers.size, 1)
  assert.deepEqual(await command.handler({ agent: agent.agent, rawInput: 'off' }), {
    kind: 'success',
    text: 'Taste Skill выключен для этого Agent.',
  })
  assert.equal(agent.providers.size, 0)
})

test('Agent disposal unregisters provider; invalid input fails closed', async () => {
  const { context, commands, events } = makeContext()
  apply(context)
  const agent = makeAgent()
  await events.get('agent/created')({ agent: agent.agent })
  const command = commands.get('dsh-taste-skill-tonulls')

  assert.equal((await command.handler({ agent: agent.agent, rawInput: 'maybe' })).kind, 'error')
  assert.equal((await command.handler({ agent: {}, rawInput: 'on' })).kind, 'error')
  await command.handler({ agent: agent.agent, rawInput: 'on' })
  assert.equal(agent.providers.size, 1)
  agent.agentContext.dispose()
  events.get('agent/disposed')({ agent: agent.agent })
  assert.equal(agent.providers.size, 0)
  assert.equal((await command.handler({ agent: agent.agent, rawInput: 'on' })).kind, 'error')
})

test('provider loads bundled instructions and rejects unknown selectors', async () => {
  const provider = createSkillsProvider(600)
  const [entry] = await provider.list()
  const skill = await provider.get(entry)
  assert.equal(entry.name, 'design-taste-frontend')
  assert.match(skill.content, /^---\nname: design-taste-frontend/m)
  assert.match(skill.content, /DeepSeek Harness adaptation/)
  assert.equal(await provider.get({ ...entry, name: 'not-the-skill' }), undefined)
})
