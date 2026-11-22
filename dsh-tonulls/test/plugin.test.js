import assert from 'node:assert/strict'
import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath, pathToFileURL } from 'node:url'
import {
  COMPONENTS,
  createToggleCommand,
  executeComponentToggles,
  mountComponentPlugins,
  parseEnabled,
  registerBundle,
} from '../src/index.js'

const root = fileURLToPath(new URL('../', import.meta.url))
const packageNames = ['dsh-tonulls-ru', 'dsh-tonulls-en', 'dsh-tonulls-zh']
function makePlugins({ failingName, handlerFor } = {}) {
  return COMPONENTS.map((component, index) => ({
    name: `test-component-${index}`,
    inject: ['commands'],
    apply(ctx) {
      if (failingName === `test-component-${index}`) throw new Error('fixture startup failure')
      const commandNames = component.key === 'ecc'
        ? ['dsh-ecc-agents', 'dsh-ecc-skills', 'dsh-ecc-commands', component.command]
        : [component.command]
      ctx.effect(function* () {
        const disposers = commandNames.map((name) => ctx.commands.register({
          name,
          description: 'Internal component toggle',
          handler: handlerFor?.(component) ?? (async () => ({ kind: 'success' })),
        }))
        yield () => disposers.forEach((dispose) => dispose())
      }, `test ${component.key} commands`)
    },
  }))
}

function makeContext() {
  const definitions = new Map()
  const installed = []
  const disposed = []
  const context = {
    commands: {
      register(definition) {
        definitions.set(definition.name, definition)
        return () => definitions.delete(definition.name)
      },
    },
    plugin(plugin) {
      installed.push(plugin.name)
      return {
        async await() {
          await plugin.apply?.(context)
          return this
        },
        async dispose() {
          disposed.push(plugin.name)
        },
      }
    },
    effect(factory) {
      const iterator = factory()
      const { value } = iterator.next()
      if (typeof value === 'function') context.effectDisposers.push(value)
      iterator.next()
    },
    effectDisposers: [],
  }
  return { context, definitions, installed, disposed }
}

async function assertLocalMarkdownLinks(markdownPath, permittedRoot) {
  const content = await readFile(markdownPath, 'utf8')
  const links = [...content.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)].map((match) => match[1].trim())
  for (const href of links) {
    if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('#')) continue
    const localPath = decodeURIComponent(href.split('#')[0])
    if (localPath.length === 0) continue
    const target = path.resolve(path.dirname(markdownPath), localPath)
    assert.ok(target === permittedRoot || target.startsWith(`${permittedRoot}${path.sep}`), `link escapes allowed root: ${href}`)
    await stat(target)
  }
}

test('parseEnabled accepts only on/off, case-insensitively', () => {
  assert.equal(parseEnabled('on'), true)
  assert.equal(parseEnabled(' OFF '), false)
  assert.equal(parseEnabled('enable'), undefined)
  assert.equal(parseEnabled(undefined), undefined)
})

test('the coordinator invokes all private component handlers sequentially for one Agent', async () => {
  const calls = []
  const agent = { id: 'current-agent' }
  const controller = new AbortController()
  const componentCommands = new Map(COMPONENTS.map((component) => [component.command, {
    async handler(invocation) {
      calls.push({ component: component.key, ...invocation })
      return { kind: 'success' }
    },
  }]))
  const failures = await executeComponentToggles(componentCommands, agent, true, controller.signal)

  assert.deepEqual(failures, [])
  assert.deepEqual(calls.map(({ component }) => component), COMPONENTS.map(({ key }) => key))
  assert.ok(calls.every((call) => call.agent === agent && call.rawInput === 'on'
    && call.attachments.length === 0 && call.signal === controller.signal))
})

test('non-abort handler failures are reported while remaining components still run', async () => {
  const calls = []
  const agent = { id: 'current-agent' }
  const componentCommands = new Map(COMPONENTS.map((component) => [component.command, {
    async handler(invocation) {
      calls.push({ component: component.key, ...invocation })
      return { kind: component.key === 'gstack' ? 'error' : 'success' }
    },
  }]))
  const failures = await executeComponentToggles(componentCommands, agent, false)

  assert.deepEqual(calls.map(({ component }) => component), COMPONENTS.map(({ key }) => key))
  assert.ok(calls.every((call) => call.agent === agent && call.rawInput === 'off'))
  assert.deepEqual(failures, ['gstack'])
})

test('cancellation stops fan-out and marks the unattempted components', async () => {
  const controller = new AbortController()
  let calls = 0
  const componentCommands = new Map(COMPONENTS.map((component) => [component.command, {
    async handler() {
      calls += 1
      if (calls === 2) controller.abort()
      return { kind: 'success' }
    },
  }]))
  const failures = await executeComponentToggles(componentCommands, {}, true, controller.signal)

  assert.equal(calls, 2)
  assert.deepEqual(failures, COMPONENTS.slice(2).map(({ key }) => key))
})

test('master command validates input and reports partial handler results', async () => {
  const calls = []
  const componentCommands = new Map(COMPONENTS.map((component) => [component.command, {
    async handler(invocation) {
      calls.push({ component: component.key, ...invocation })
      return { kind: component.key === 'supabase' ? 'error' : 'success' }
    },
  }]))
  const command = createToggleCommand(componentCommands)
  const invalid = await command.handler({ agent: {}, rawInput: 'maybe' })
  assert.equal(invalid.kind, 'error')
  assert.deepEqual(calls, [])

  const result = await command.handler({ agent: {}, rawInput: 'on' })
  assert.equal(result.kind, 'error')
  assert.match(result.text, /Supabase/)
  assert.equal(calls.length, COMPONENTS.length)
})

test('bundle mounts all children but registers only the master command publicly', async () => {
  const { context, definitions, installed } = makeContext()
  let childHandlerCalls = 0
  await registerBundle(context, makePlugins({
    handlerFor: () => async () => {
      childHandlerCalls += 1
      return { kind: 'success' }
    },
  }))

  assert.deepEqual(installed, COMPONENTS.map((_, index) => `test-component-${index}`))
  assert.deepEqual([...definitions.keys()], ['dsh-tonulls'])
  const result = await definitions.get('dsh-tonulls').handler({ agent: {}, rawInput: 'off' })
  assert.deepEqual(result, { kind: 'success', text: 'Автоподбор навыков выключен для этого Agent.' })
  assert.equal(childHandlerCalls, COMPONENTS.length)
})

test('component startup failure disposes every started child and rejects the bundle', async () => {
  const { context, disposed } = makeContext()
  await assert.rejects(
    mountComponentPlugins(context, makePlugins({ failingName: 'test-component-2' })),
    /fixture startup failure/,
  )
  assert.deepEqual(disposed, COMPONENTS.map((_, index) => `test-component-${index}`))
})

test('Astryx umbrella mode toggles model invocation per Agent and hides user invocation', async () => {
  for (const packageName of packageNames) {
    const entryPath = path.join(root, 'packages', packageName, 'vendor', 'astryx', 'src', 'bundle-entry.js')
    const { apply } = await import(pathToFileURL(entryPath))
    const hostProviders = []
    const scopedProviders = []
    const listeners = new Map()
    const definitions = new Map()
    let invalidations = 0
    const runEffects = (factory) => {
      const effects = factory()
      while (!effects.next().done) {}
    }
    const host = {
      skills: {
        registerProvider(factory) {
          hostProviders.push(factory)
          return () => {}
        },
      },
      commands: {
        register(definition) {
          definitions.set(definition.name, definition)
          return () => definitions.delete(definition.name)
        },
      },
      effect: runEffects,
      on(event, listener) { listeners.set(event, listener) },
    }
    apply(host)

    assert.equal(hostProviders.length, 1)
    const [baseCandidate] = await hostProviders[0]({ invalidate() {} }).list()
    assert.equal(baseCandidate.invocation.modelInvocable, false)
    assert.equal(baseCandidate.invocation.userInvocable, false)

    const agentContext = {
      skills: {
        registerProvider(factory) {
          scopedProviders.push(factory)
          return () => {}
        },
      },
      effect: runEffects,
    }
    const agent = {
      id: `test-${packageName}`,
      ctx: {
        plugin(plugin) {
          plugin(agentContext)
          return { async await() {} }
        },
      },
    }
    await listeners.get('agent/created')({ agent })
    const otherAgent = {
      id: `other-${packageName}`,
      ctx: {
        plugin(plugin) {
          plugin({
            skills: { registerProvider(factory) { scopedProviders.push(factory); return () => {} } },
            effect: runEffects,
          })
          return { async await() {} }
        },
      },
    }
    await listeners.get('agent/created')({ agent: otherAgent })
    assert.equal(scopedProviders.length, 2)
    const scopedProvider = scopedProviders[0]({ invalidate() { invalidations += 1 } })
    const otherScopedProvider = scopedProviders[1]({ invalidate() {} })
    const command = definitions.get('dsh-astryx-tonulls')
    assert.ok(command)

    assert.equal((await scopedProvider.list())[0].invocation.modelInvocable, false)
    assert.equal(command.handler({ agent, rawInput: 'on' }).kind, 'success')
    const [enabledCandidate] = await scopedProvider.list()
    assert.equal(enabledCandidate.invocation.modelInvocable, true)
    assert.equal(enabledCandidate.invocation.userInvocable, false)
    assert.equal((await otherScopedProvider.list())[0].invocation.modelInvocable, false)
    assert.equal(invalidations, 1)

    assert.equal(command.handler({ agent, rawInput: 'off' }).kind, 'success')
    assert.equal((await scopedProvider.list())[0].invocation.modelInvocable, false)
    assert.equal(invalidations, 2)
    assert.equal(command.handler({ agent, rawInput: 'invalid' }).kind, 'error')
  }
})

test('generated locales suppress direct ECC component text shortcuts', async () => {
  const childInput = [{
    source: { kind: 'user' },
    content: [{ type: 'text', text: '/dsh-ecc-agents on' }],
  }]
  for (const name of packageNames) {
    const routingPath = path.join(root, 'packages', name, 'vendor', 'ecc', 'src', 'routing.js')
    const { parseModeCommands } = await import(pathToFileURL(routingPath))
    assert.deepEqual(parseModeCommands(childInput), [], `${name} must not expose ECC component shortcuts`)
  }
})

test('bundled learn-taste is selectable only with automatic selection enabled', async () => {
  for (const name of packageNames) {
    const file = path.join(root, 'packages', name, 'vendor/emilKowalskiSkills/src/provider.js')
    const { createEmilSkillsProvider } = await import(pathToFileURL(file))
    for (const modelInvocable of [false, true]) {
      const provider = createEmilSkillsProvider({ modelInvocable })
      const skill = (await provider.list()).find(({ name }) => name === 'learn-taste')
      assert.ok(skill, name)
      assert.deepEqual(skill.invocation, { modelInvocable, userInvocable: false }, name)
      const loaded = await provider.get(skill)
      assert.deepEqual(loaded.invocation, skill.invocation, name)
      assert.ok(loaded.content.includes(skill.description), name)
    }
  }
})

test('each generated locale contains all configured components and valid package links', async () => {
  const collectionRoot = path.resolve(root, '..')
  for (const name of packageNames) {
    const packageRoot = path.join(root, 'packages', name)
    const manifest = JSON.parse(await readFile(path.join(packageRoot, 'package.json'), 'utf8'))
    const { COMPONENTS: components, locale } = await import(pathToFileURL(path.join(packageRoot, 'src', 'index.js')))
    assert.equal(manifest.name, name)
    assert.equal(locale, name.slice('dsh-tonulls-'.length))
    assert.deepEqual(components.map(({ key }) => key), COMPONENTS.map(({ key }) => key))
    assert.deepEqual((await readdir(path.join(packageRoot, 'vendor'))).sort(), components.map(({ key }) => key).sort())
    for (const { key, entry } of components) {
      const folder = path.join(packageRoot, 'vendor', key)
      const child = JSON.parse(await readFile(path.join(folder, 'package.json'), 'utf8'))
      await stat(path.join(folder, child.main))
      await stat(path.resolve(packageRoot, 'src', entry))
    }
    const { COMMAND_NAME } = await import(pathToFileURL(path.join(packageRoot, 'vendor/fancy/src/mode-provider.js')))
    assert.equal(components.find(({ key }) => key === 'fancy').command, COMMAND_NAME)
    for (const file of ['README.md', 'NOTICE.md', 'LICENSES.md']) {
      await assertLocalMarkdownLinks(path.join(packageRoot, file), packageRoot)
    }
  }

  for (const publicDocument of [
    'README.md',
    '.docs/en/README.md',
    '.docs/ru/upstream.md',
    '.docs/zh-CN/README.md',
  ]) {
    await assertLocalMarkdownLinks(path.join(root, publicDocument), collectionRoot)
  }
})
