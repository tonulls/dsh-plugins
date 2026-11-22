import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { describe, it } from 'node:test'
import { createCommandsProvider } from '../src/provider.js'

describe('ECC commands provider', () => {
  it('lists only the three reviewed, explicit-user commands', async () => {
    const provider = createCommandsProvider(600)
    const candidates = await provider.list()
    const ruDescriptions = JSON.parse(await readFile(new URL('../assets/locales/ru.json', import.meta.url), 'utf8'))

    assert.equal(provider.name, 'ecc-commands')
    assert.deepEqual(candidates.map((entry) => entry.name).sort(), [
      'ecc-command-build-fix',
      'ecc-command-test-coverage',
      'ecc-command-update-docs',
    ])
    assert.ok(candidates.every((entry) => entry.invocation.modelInvocable === false))
    assert.ok(candidates.every((entry) => entry.invocation.userInvocable === true))
    assert.ok(candidates.every((entry) => entry.source === 'bundled' && entry.rank === 600))
    assert.deepEqual(Object.keys(ruDescriptions).sort(), candidates.map((entry) => entry.name).sort())
    assert.ok(candidates.every((entry) => entry.localizedDescription.en === entry.description))
    assert.ok(candidates.every((entry) => entry.localizedDescription.ru === ruDescriptions[entry.name]
      && /\p{Script=Cyrillic}/u.test(entry.localizedDescription.ru)))
  })

  it('can expose reviewed commands through a session-scoped routing overlay only', async () => {
    const provider = createCommandsProvider(600, { modelInvocable: true })
    const candidates = await provider.list()
    const candidate = candidates.find((entry) => entry.name === 'ecc-command-build-fix')
    const definition = await provider.get(candidate)

    assert.ok(candidates.every((entry) => entry.invocation.modelInvocable === true))
    assert.ok(candidates.every((entry) => entry.invocation.userInvocable === true))
    assert.equal(definition.invocation.modelInvocable, true)
    assert.ok((await createCommandsProvider(600).list()).every((entry) => !entry.invocation.modelInvocable))
  })

  it('can hide direct command invocation while retaining automatic model selection', async () => {
    const candidates = await createCommandsProvider(600, {
      modelInvocable: true,
      userInvocable: false,
    }).list()

    assert.ok(candidates.every((entry) => entry.invocation.modelInvocable === true))
    assert.ok(candidates.every((entry) => entry.invocation.userInvocable === false))
  })

  it('loads only DSH-wrapped command text from package assets', async () => {
    const provider = createCommandsProvider(600)
    const candidate = (await provider.list()).find((entry) => entry.name === 'ecc-command-build-fix')
    const command = await provider.get(candidate)

    assert.ok(candidate)
    assert.equal(command.name, 'ecc-command-build-fix')
    assert.deepEqual(command.localizedDescription, candidate.localizedDescription)
    assert.match(command.content, /current DSH session/)
    assert.match(command.content, /Do not install or download helpers/)
    assert.match(command.content, /Run only tools already installed/)
    assert.match(command.content, /commands\/build-fix\.md/)
    assert.match(command.resourceBase.path, /assets[\\/]commands$/)
  })

  it('keeps 94 unreviewed commands withheld with explicit high-risk reasons', async () => {
    const catalog = JSON.parse(await readFile(new URL('../assets/catalog.json', import.meta.url), 'utf8'))
    const withheld = new Map(catalog.excluded.map((entry) => [entry.name, entry]))
    const included = new Set(catalog.entries.map((entry) => entry.command))

    assert.equal(catalog.entries.length, 3)
    assert.equal(catalog.excluded.length, 94)
    assert.equal(catalog.excluded.filter((entry) => entry.explicit).length, 10)
    assert.ok(!included.has('auto-update'))
    assert.match(withheld.get('auto-update').reason, /reinstalls managed targets/)
    assert.match(withheld.get('jira').reason, /remote credentials/)
    assert.match(withheld.get('pr').reason, /Pushes commits/)
    assert.ok(catalog.excluded.filter((entry) => !entry.explicit).every((entry) => /deny-by-default/.test(entry.reason)))
  })

  it('does not load a different or stale command candidate', async () => {
    const provider = createCommandsProvider(600)
    const candidate = (await provider.list()).find((entry) => entry.name === 'ecc-command-build-fix')

    assert.equal(await provider.get({ name: 'ecc-command-other', provider: 'ecc-commands', locator: 'commands/build-fix.md' }), undefined)
    assert.equal(await provider.get({ ...candidate, locator: 'commands/../../outside.md' }), undefined)
  })

  it('honors an aborted provider lookup', async () => {
    const provider = createCommandsProvider(600)
    const controller = new AbortController()
    controller.abort(new Error('cancelled'))

    await assert.rejects(provider.list({ signal: controller.signal }), /cancelled/)
  })

  it('is a private standalone DSH bundle with MIT notice', async () => {
    const manifest = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'))
    const patch = await readFile(new URL('../cordis.patch.yml', import.meta.url), 'utf8')
    const license = await readFile(new URL('../LICENSES.md', import.meta.url), 'utf8')

    assert.equal(manifest.name, 'dsh-ecc-commands')
    assert.equal(manifest.private, true)
    assert.equal(manifest.dsh.bundle.patch, './cordis.patch.yml')
    assert.ok(manifest.files.includes('assets/catalog.json'))
    assert.ok(manifest.files.includes('assets/locales'))
    assert.match(patch, /name: dsh-ecc-commands/)
    assert.match(license, /Copyright \(c\) 2026 Affaan Mustafa/)
    assert.equal(manifest.dependencies?.['dsh-ecc-commands'], undefined)
  })
})
