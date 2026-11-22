import test from 'node:test'
import assert from 'node:assert/strict'
import { apply, parseEnabled } from '../src/index.js'
import { createSupabaseProvider } from '../src/provider.js'

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

test('parseEnabled accepts only on/off', () => {
  assert.equal(parseEnabled('on'), true)
  assert.equal(parseEnabled(' OFF '), false)
  assert.equal(parseEnabled('yes'), undefined)
  assert.equal(parseEnabled(undefined), undefined)
})

test('skill starts disabled and toggles only for the selected Agent', async () => {
  const { context, commands, events } = makeContext()
  apply(context)
  const agentA = makeAgent()
  const agentB = makeAgent()
  await events.get('agent/created')({ agent: agentA.agent })
  await events.get('agent/created')({ agent: agentB.agent })

  assert.equal(agentA.providers.size, 0)
  assert.equal(agentB.providers.size, 0)
  const command = commands.get('dsh-supabase-tonulls')
  assert.ok(command)

  assert.deepEqual(await command.handler({ agent: agentA.agent, rawInput: 'on' }), {
    kind: 'success',
    text: 'Supabase-навык включён для этого Agent.',
  })
  await command.handler({ agent: agentA.agent, rawInput: 'on' })
  assert.equal(agentA.providers.size, 1)
  assert.equal(agentB.providers.size, 0)

  const provider = agentA.providers.get('supabase')
  const [candidate] = await provider.list()
  assert.equal(candidate.name, 'supabase')
  assert.equal(candidate.rank, 600)
  assert.deepEqual(candidate.invocation, { modelInvocable: true, userInvocable: true })
  const skill = await provider.get(candidate)
  assert.match(skill.content, /^---\nname: supabase/m)
  assert.match(skill.content, /Row Level Security/)
  assert.match(skill.content, /explicit user confirmation/)
  assert.match(skill.content, /scoped personal access token/)
  assert.match(skill.content, /raw_user_meta_data/)
  assert.match(skill.content, /supabase.com\/changelog\.md/)
  assert.equal(await provider.get({ ...candidate, name: 'not-supabase' }), undefined)

  assert.deepEqual(await command.handler({ agent: agentA.agent, rawInput: 'off' }), {
    kind: 'success',
    text: 'Supabase-навык выключен для этого Agent.',
  })
  assert.equal(agentA.providers.size, 0)
  assert.equal(agentB.providers.size, 0)
})

test('command can install routing if Agent creation event was missed', async () => {
  const { context, commands } = makeContext()
  apply(context)
  const agent = makeAgent()
  const command = commands.get('dsh-supabase-tonulls')

  const results = await Promise.all([
    command.handler({ agent: agent.agent, rawInput: 'on' }),
    command.handler({ agent: agent.agent, rawInput: 'on' }),
  ])
  assert.deepEqual(results, [
    { kind: 'success', text: 'Supabase-навык включён для этого Agent.' },
    { kind: 'success', text: 'Supabase-навык включён для этого Agent.' },
  ])
  assert.equal(agent.providers.size, 1)
  await command.handler({ agent: agent.agent, rawInput: 'off' })
  assert.equal(agent.providers.size, 0)
})

test('Agent disposal unregisters its provider and blocks later toggles', async () => {
  const { context, commands, events } = makeContext()
  apply(context)
  const agent = makeAgent()
  await events.get('agent/created')({ agent: agent.agent })
  const command = commands.get('dsh-supabase-tonulls')

  await command.handler({ agent: agent.agent, rawInput: 'on' })
  assert.equal(agent.providers.size, 1)
  agent.agentContext.dispose()
  events.get('agent/disposed')({ agent: agent.agent })
  assert.equal(agent.providers.size, 0)
  assert.equal((await command.handler({ agent: agent.agent, rawInput: 'on' })).kind, 'error')
})

test('invalid input and unknown Agent fail closed', async () => {
  const { context, commands } = makeContext()
  apply(context)
  const command = commands.get('dsh-supabase-tonulls')

  assert.equal((await command.handler({ agent: {}, rawInput: 'maybe' })).kind, 'error')
  assert.equal((await command.handler({ agent: {}, rawInput: 'on' })).kind, 'error')
})

test('provider respects cancellation and validates its candidate', async () => {
  const provider = createSupabaseProvider()
  const [candidate] = await provider.list()
  assert.equal(candidate.name, 'supabase')
  assert.deepEqual(candidate.invocation, { modelInvocable: true, userInvocable: true })
  assert.equal(await provider.get({ ...candidate, provider: 'other' }), undefined)

  const controller = new AbortController()
  controller.abort()
  await assert.rejects(provider.list({ signal: controller.signal }), { name: 'AbortError' })
  await assert.rejects(provider.get(candidate, { signal: controller.signal }), { name: 'AbortError' })
})

test('all generated locale variants expose localized metadata and toggle replies', async () => {
  const expected = {
    ru: {
      enabled: 'Supabase-навык включён для этого Agent.',
      disabled: 'Supabase-навык выключен для этого Agent.',
      usage: 'Формат: /dsh-supabase-tonulls on|off',
    },
    en: {
      enabled: 'The Supabase skill is enabled for this Agent.',
      disabled: 'The Supabase skill is disabled for this Agent.',
      usage: 'Usage: /dsh-supabase-tonulls on|off',
    },
    zh: {
      enabled: '已为当前 Agent 启用 Supabase 技能。',
      disabled: '已为当前 Agent 停用 Supabase 技能。',
      usage: '用法：/dsh-supabase-tonulls on|off',
    },
  }

  for (const suffix of ['ru', 'en', 'zh']) {
    const { apply: applyVariant } = await import(`../packages/dsh-supabase-tonulls-${suffix}/src/index.js`)
    const { context, commands, events } = makeContext()
    applyVariant(context)
    const agent = makeAgent()
    await events.get('agent/created')({ agent: agent.agent })
    const command = commands.get('dsh-supabase-tonulls')
    assert.deepEqual(await command.handler({ agent: agent.agent, rawInput: 'on' }), {
      kind: 'success', text: expected[suffix].enabled,
    })
    assert.equal(agent.providers.size, 1)
    const [candidate] = await agent.providers.get('supabase').list()
    assert.ok(candidate.localizedDescription?.[suffix])
    assert.deepEqual(await command.handler({ agent: agent.agent, rawInput: 'off' }), {
      kind: 'success', text: expected[suffix].disabled,
    })
    assert.equal(agent.providers.size, 0)
    assert.deepEqual(await command.handler({ agent: agent.agent, rawInput: 'invalid' }), {
      kind: 'error', text: expected[suffix].usage,
    })
  }
})
