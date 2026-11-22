import test from 'node:test'
import assert from 'node:assert/strict'
import { apply, parseEnabled } from '../src/index.js'
import { createSkillsProvider } from '../src/provider.js'

function makeContext() {
  const commands = new Map(), events = new Map()
  const context = {
    commands: { register(definition) { commands.set(definition.name, definition); return () => commands.delete(definition.name) } },
    effect(factory) { const iterator = factory(); iterator.next() },
    on(name, callback) { events.set(name, callback); return () => events.delete(name) },
  }
  return { context, commands, events }
}
function makeAgent() {
  const providers = new Map(), agent = { ctx: undefined }
  const agentContext = {
    skills: { registerProvider(factory) { const provider = factory(); providers.set(provider.name, provider); return () => providers.delete(provider.name) } },
    effect(factory) { const iterator = factory(); const result = iterator.next(); if (!result.done) this.dispose = result.value },
  }
  agent.ctx = { plugin(plugin) { plugin(agentContext); return { await: async () => {} } } }
  return { agent, agentContext, providers }
}

test('parseEnabled accepts only on/off commands', () => {
  assert.equal(parseEnabled('on'), true)
  assert.equal(parseEnabled(' OFF '), false)
  assert.equal(parseEnabled('yes'), undefined)
  assert.equal(parseEnabled(undefined), undefined)
})
test('skill is disabled by default and toggles for one Agent only', async () => {
  const { context, commands, events } = makeContext(); apply(context)
  const a = makeAgent(), b = makeAgent()
  await events.get('agent/created')({ agent: a.agent }); await events.get('agent/created')({ agent: b.agent })
  assert.equal(a.providers.size, 0); assert.equal(b.providers.size, 0)

  const command = commands.get('dsh-gstack-tonulls')
  assert.ok(command)
  assert.deepEqual(await command.handler({ agent: a.agent, rawInput: 'on' }), {
    kind: 'success', text: 'GStack включён для этого Agent.',
  })
  await command.handler({ agent: a.agent, rawInput: 'on' })
  assert.equal(a.providers.size, 1); assert.equal(b.providers.size, 0)

  const provider = a.providers.get('gstack'), [entry] = await provider.list()
  assert.equal(entry.name, 'gstack')
  assert.equal(entry.rank, 600)
  assert.deepEqual(entry.invocation, { modelInvocable: true, userInvocable: true })
  const skill = await provider.get(entry)
  assert.match(skill.content, /^---\nname: gstack/m)
  assert.match(skill.content, /Investigate/)
  assert.match(skill.content, /Security review \(manual\/static\)/)
  assert.match(skill.content, /not an official CSO run/)
  assert.match(skill.content, /counterevidence/)

  assert.deepEqual(await command.handler({ agent: a.agent, rawInput: 'off' }), {
    kind: 'success', text: 'GStack выключен для этого Agent.',
  })
  assert.equal(a.providers.size, 0); assert.equal(b.providers.size, 0)
})
test('command can install Agent routing when the creation event was missed', async () => {
  const { context, commands } = makeContext(); apply(context)
  const a = makeAgent(), command = commands.get('dsh-gstack-tonulls')
  assert.equal((await command.handler({ agent: a.agent, rawInput: 'on' })).kind, 'success')
  assert.equal(a.providers.size, 1)
  assert.equal((await command.handler({ agent: a.agent, rawInput: 'off' })).kind, 'success')
  assert.equal(a.providers.size, 0)
})
test('Agent disposal unregisters provider and blocks later toggles', async () => {
  const { context, commands, events } = makeContext(); apply(context)
  const a = makeAgent(); await events.get('agent/created')({ agent: a.agent })
  const command = commands.get('dsh-gstack-tonulls')
  await command.handler({ agent: a.agent, rawInput: 'on' })
  assert.equal(a.providers.size, 1)
  a.agentContext.dispose()
  events.get('agent/disposed')({ agent: a.agent })
  assert.equal(a.providers.size, 0)
  assert.equal((await command.handler({ agent: a.agent, rawInput: 'on' })).kind, 'error')
})
test('invalid inputs and unknown selectors fail closed', async () => {
  const { context, commands } = makeContext(); apply(context)
  const command = commands.get('dsh-gstack-tonulls')
  assert.equal((await command.handler({ agent: {}, rawInput: 'maybe' })).kind, 'error')
  assert.equal((await command.handler({ agent: {}, rawInput: 'on' })).kind, 'error')
  const provider = createSkillsProvider(600)
  assert.equal(await provider.get({ provider: 'other', name: 'gstack', locator: 'skills/gstack/SKILL.md' }), undefined)
})
