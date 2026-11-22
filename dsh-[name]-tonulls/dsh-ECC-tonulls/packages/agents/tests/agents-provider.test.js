import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { describe, it } from 'node:test'
import { createAgentsProvider } from '../src/provider.js'
import { createAgentsProvider as createBundledAgentsProvider } from '../../dsh-ecc-tonulls-en/vendor/agents/src/provider.js'
import { createSkillsProvider as createBundledSkillsProvider } from '../../dsh-ecc-tonulls-en/vendor/skills/src/provider.js'
import { createCommandsProvider as createBundledCommandsProvider } from '../../dsh-ecc-tonulls-en/vendor/commands/src/provider.js'

describe('ECC agents provider', () => {
  it('lists all 71 roles as explicit-user-only skills', async () => {
    const provider = createAgentsProvider(600)
    const candidates = await provider.list()
    const ruDescriptions = JSON.parse(await readFile(new URL('../assets/locales/ru.json', import.meta.url), 'utf8'))
    const candidate = candidates.find((entry) => entry.name === 'ecc-architect')

    assert.equal(provider.name, 'ecc-agents')
    assert.equal(candidates.length, 71)
    assert.ok(candidate)
    assert.ok(candidates.every((entry) => entry.invocation.modelInvocable === false))
    assert.ok(candidates.every((entry) => entry.invocation.userInvocable === true))
    assert.ok(candidates.every((entry) => entry.source === 'bundled' && entry.rank === 600))
    assert.deepEqual(Object.keys(ruDescriptions).sort(), candidates.map((entry) => entry.name).sort())
    assert.ok(candidates.every((entry) => entry.localizedDescription.en === entry.description))
    assert.ok(candidates.every((entry) => entry.localizedDescription.ru === ruDescriptions[entry.name]
      && /\p{Script=Cyrillic}/u.test(entry.localizedDescription.ru)))
  })

  it('can expose roles through a session-scoped routing overlay without changing defaults', async () => {
    const provider = createAgentsProvider(600, { modelInvocable: true })
    const candidates = await provider.list()
    const candidate = candidates.find((entry) => entry.name === 'ecc-architect')
    const definition = await provider.get(candidate)

    assert.ok(candidates.every((entry) => entry.invocation.modelInvocable === true))
    assert.ok(candidates.every((entry) => entry.invocation.userInvocable === true))
    assert.equal(definition.invocation.modelInvocable, true)
  })

  it('can hide direct role invocation while retaining automatic model selection', async () => {
    const candidates = await createAgentsProvider(600, {
      modelInvocable: true,
      userInvocable: false,
    }).list()

    assert.ok(candidates.every((entry) => entry.invocation.modelInvocable === true))
    assert.ok(candidates.every((entry) => entry.invocation.userInvocable === false))
  })

  it('loads the manual architect role only when requested', async () => {
    const provider = createAgentsProvider(600)
    const candidate = (await provider.list()).find((entry) => entry.name === 'ecc-architect')
    const definition = await provider.get(candidate)

    assert.equal(definition.name, 'ecc-architect')
    assert.deepEqual(definition.localizedDescription, candidate.localizedDescription)
    assert.match(definition.content, /software-architecture specialist/)
    assert.match(definition.content, /do not assume a Claude Code, Codex, Cursor/)
    assert.deepEqual(definition.resourceBase, candidate.resourceBase)
  })

  it('uses a DSH-safe wrapper for generated upstream roles', async () => {
    const provider = createAgentsProvider(600)
    const candidate = (await provider.list()).find((entry) => entry.name === 'ecc-a11y-architect')
    const definition = await provider.get(candidate)

    assert.match(definition.content, /current DSH session/)
    assert.match(definition.content, /does not start a separate agent or process/)
    assert.match(definition.content, /a11y-architect\.md/)
    assert.doesNotMatch(definition.content, /^tools:|^model:/m)
  })

  it('does not load a different or stale candidate', async () => {
    const provider = createAgentsProvider(600)
    const candidate = (await provider.list()).find((entry) => entry.name === 'ecc-architect')

    assert.equal(await provider.get({ name: 'ecc-reviewer', provider: 'ecc-agents', locator: 'ecc-reviewer.md' }), undefined)
    assert.equal(await provider.get({ ...candidate, locator: 'ecc-reviewer.md' }), undefined)
  })

  it('honors an aborted lookup', async () => {
    const provider = createAgentsProvider(600)
    const controller = new AbortController()
    controller.abort(new Error('cancelled'))

    await assert.rejects(provider.list({ signal: controller.signal }), /cancelled/)
  })

  it('is packaged as a standalone DSH bundle', async () => {
    const manifest = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'))
    const catalog = JSON.parse(await readFile(new URL('../assets/agents/catalog.json', import.meta.url), 'utf8'))
    const patch = await readFile(new URL('../cordis.patch.yml', import.meta.url), 'utf8')

    assert.equal(manifest.name, 'dsh-ecc-agents')
    assert.equal(manifest.dsh.bundle.patch, './cordis.patch.yml')
    assert.equal(manifest.private, true)
    assert.ok(manifest.files.includes('assets/agents/catalog.json'))
    assert.ok(manifest.files.includes('assets/locales'))
    assert.equal(catalog.entries.length, 71)
    assert.match(patch, /name: dsh-ecc-agents/)
    assert.equal(manifest.dependencies?.['dsh-ecc-agents'], undefined)
  })

  it('embeds all component providers in the umbrella without exotic subdependencies', async () => {
    const umbrellaUrl = new URL('../../dsh-ecc-tonulls-en/', import.meta.url)
    const umbrella = JSON.parse(await readFile(new URL('package.json', umbrellaUrl), 'utf8'))
    const patch = await readFile(new URL('cordis.patch.yml', umbrellaUrl), 'utf8')

    assert.equal(umbrella.name, 'dsh-ecc-tonulls-en')
    assert.equal(umbrella.dsh.bundle.patch, './cordis.patch.yml')
    assert.equal(umbrella.private, true)
    assert.equal(umbrella.dependencies, undefined)
    assert.ok(umbrella.files.includes('vendor/**'))
    assert.ok(umbrella.files.includes('LICENSES.md'))
    assert.match(patch, /id: ecc-tonulls[\s\S]*name: dsh-ecc-tonulls/)
    assert.doesNotMatch(patch, /name: dsh-ecc-(agents|skills|commands)/)
    assert.equal(umbrella.peerDependencies['@deepseek-ai/dsh-agent'], '*')

    for (const [provider, expectedCount] of [
      [createBundledAgentsProvider(600), 71],
      [createBundledSkillsProvider(600), 236],
      [createBundledCommandsProvider(600), 3],
    ]) {
      const entries = await provider.list()
      assert.equal(entries.length, expectedCount)
      const first = await provider.get(entries[0])
      assert.ok(first.content.length > 0)
    }
  })

  it('declares open component peers and scopes routing to v14', async () => {
    const packageUrls = [
      new URL('../package.json', import.meta.url),
      new URL('../../skills/package.json', import.meta.url),
      new URL('../../commands/package.json', import.meta.url),
    ]

    for (const packageUrl of packageUrls) {
      const manifest = JSON.parse(await readFile(packageUrl, 'utf8'))
      assert.equal(manifest.peerDependencies['@deepseek-ai/cordis'], '*')
      assert.equal(manifest.peerDependencies['@deepseek-ai/dsh-skill'], '*')
    }

    const umbrella = JSON.parse(await readFile(new URL('../../dsh-ecc-tonulls-en/package.json', import.meta.url), 'utf8'))
    assert.equal(umbrella.peerDependencies['@deepseek-ai/cordis'], '*')
    assert.equal(umbrella.peerDependencies['@deepseek-ai/dsh-agent'], '*')
    assert.equal(umbrella.peerDependencies['@deepseek-ai/dsh-commands'], '*')
    assert.equal(umbrella.peerDependencies['@deepseek-ai/dsh-skill'], '*')
    const umbrellaEntry = await readFile(new URL('../../dsh-ecc-tonulls-en/src/index.js', import.meta.url), 'utf8')
    assert.match(umbrellaEntry, /inject = \['skills', 'agents', 'commands'\]/)
  })

  it('pins upstream ECC to a full commit and tree', async () => {
    const lock = JSON.parse(await readFile(new URL('../../../upstream/ecc.lock.json', import.meta.url), 'utf8'))

    assert.equal(lock.repository, 'https://github.com/affaan-m/ECC.git')
    assert.match(lock.commit, /^[0-9a-f]{40}$/)
    assert.match(lock.tree, /^[0-9a-f]{40}$/)
    assert.equal(lock.license, 'MIT')
    assert.equal(lock.releaseStatus, 'inventory-only-not-approved')
  })
})
