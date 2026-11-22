import test from 'node:test'
import assert from 'node:assert/strict'
import { apply, parseEnabled } from '../index.js'

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

test('parseEnabled accepts only on/off', () => {
  assert.equal(parseEnabled(' on '), true)
  assert.equal(parseEnabled('OFF'), false)
  assert.equal(parseEnabled('yes'), undefined)
})
test('skill is initially disabled and toggle applies to one Agent only', async () => {
  const { context, commands, events } = makeContext(); apply(context)
  const a = makeAgent(), b = makeAgent()
  await events.get('agent/created')({ agent: a.agent }); await events.get('agent/created')({ agent: b.agent })
  assert.equal(a.providers.size, 0); assert.equal(b.providers.size, 0)
  const command = commands.get('dsh-spec-kit-tonulls')
  assert.ok(command)
  assert.deepEqual(command.handler({ agent: a.agent, rawInput: 'on' }), {
    kind: 'success', text: 'Навык Spec Kit включён для этого Agent.',
  })
  command.handler({ agent: a.agent, rawInput: 'on' })
  assert.equal(a.providers.size, 1); assert.equal(b.providers.size, 0)
  const provider = a.providers.get('spec-kit'), [candidate] = await provider.list()
  assert.equal(candidate.name, 'spec-kit')
  assert.equal(candidate.rank, 600)
  assert.deepEqual(candidate.invocation, { modelInvocable: true, userInvocable: true })
  const skill = await provider.get(candidate)
  assert.match(skill.content, /^---\nname: spec-kit/m)
  assert.match(skill.content, /read-only/)
  assert.match(skill.content, /Spec Kit CLI or its integration/)
  assert.equal(await provider.get({ ...candidate, name: 'unknown' }), undefined)
  assert.deepEqual(command.handler({ agent: a.agent, rawInput: 'off' }), {
    kind: 'success', text: 'Навык Spec Kit выключен для этого Agent.',
  })
  assert.equal(a.providers.size, 0); assert.equal(b.providers.size, 0)
})
test('Agent disposal unregisters provider and removes the command target', async () => {
  const { context, commands, events } = makeContext(); apply(context)
  const a = makeAgent(); await events.get('agent/created')({ agent: a.agent })
  const command = commands.get('dsh-spec-kit-tonulls')
  command.handler({ agent: a.agent, rawInput: 'on' })
  assert.equal(a.providers.size, 1)
  a.agentContext.dispose()
  assert.equal(a.providers.size, 0)
  assert.equal(command.handler({ agent: a.agent, rawInput: 'on' }).kind, 'error')
})
test('generated locale variants expose localized toggle strings', async () => {
  const expected = {
    ru: 'Навык Spec Kit включён для этого Agent.',
    en: 'Spec Kit is enabled for this Agent.',
    zh: '已为当前 Agent 启用 Spec Kit。',
  }
  for (const suffix of ['ru', 'en', 'zh']) {
    const { apply: applyVariant } = await import(`../packages/dsh-spec-kit-tonulls-${suffix}/index.js`)
    const { context, commands, events } = makeContext(); applyVariant(context)
    const a = makeAgent(); await events.get('agent/created')({ agent: a.agent })
    const result = commands.get('dsh-spec-kit-tonulls').handler({ agent: a.agent, rawInput: 'on' })
    assert.deepEqual(result, { kind: 'success', text: expected[suffix] })
    assert.equal(a.providers.size, 1)
  }
})
test('invalid input and unknown Agent fail closed', async () => {
  const { context, commands, events } = makeContext(); apply(context)
  const a = makeAgent(); await events.get('agent/created')({ agent: a.agent })
  const command = commands.get('dsh-spec-kit-tonulls')
  assert.equal(command.handler({ agent: a.agent, rawInput: 'maybe' }).kind, 'error')
  assert.equal(command.handler({ agent: {}, rawInput: 'on' }).kind, 'error')
  assert.equal(a.providers.size, 0)
})
