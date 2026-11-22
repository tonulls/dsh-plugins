import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { describe, it } from 'node:test'
import { createAstryxProvider } from '../src/provider.js'

const PACKAGE_URL = new URL('../', import.meta.url)
const provider = createAstryxProvider(600)

async function readJson(path) {
  return JSON.parse(await readFile(new URL(path, PACKAGE_URL), 'utf8'))
}

describe('Astryx DSH provider (zh)', () => {
  it('publishes one discoverable skill for model and user invocation', async () => {
    const candidates = await provider.list()
    assert.equal(provider.name, 'astryx-tonulls')
    assert.equal(candidates.length, 1)
    assert.equal(candidates[0].name, 'astryx')
    assert.equal(candidates[0].invocation.modelInvocable, true)
    assert.equal(candidates[0].invocation.userInvocable, true)
    assert.equal(candidates[0].rank, 600)
    assert.equal(candidates[0].source, 'bundled')
  })

  it('resolves model invocation policy dynamically for the umbrella overlay', async () => {
    let modelInvocable = false
    const scopedProvider = createAstryxProvider(600, () => ({ modelInvocable, userInvocable: true }))
    const [disabledCandidate] = await scopedProvider.list()
    assert.equal(disabledCandidate.invocation.modelInvocable, false)
    assert.equal(disabledCandidate.invocation.userInvocable, true)
    assert.equal((await scopedProvider.get(disabledCandidate)).invocation.modelInvocable, false)

    modelInvocable = true
    const [enabledCandidate] = await scopedProvider.list()
    assert.equal(enabledCandidate.invocation.modelInvocable, true)
    assert.equal((await scopedProvider.get(enabledCandidate)).invocation.modelInvocable, true)
  })

  it('loads the localized skill body and rejects an unlisted asset', async () => {
    const [candidate] = await provider.list()
    const skill = await provider.get(candidate)
    assert.equal(skill.name, 'astryx')
    assert.match(skill.content, /此软件包会将 `astryx` 技能安装到 DSH/)
    assert.match(skill.content, /DSH 会话边界/)
    assert.doesNotMatch(skill.content, /^---\s*$/m)
    assert.equal(await provider.get({ ...candidate, provider: 'other' }), undefined)
    assert.equal(await provider.get({ ...candidate, locator: '../package.json' }), undefined)
  })

  it('stops list requests when aborted', async () => {
    const controller = new AbortController()
    controller.abort()
    await assert.rejects(provider.list({ signal: controller.signal }), { name: 'AbortError' })
  })

  it('keeps package, catalog, upstream version, patch, locale, and display resources aligned', async () => {
    const [manifest, catalog, upstream] = await Promise.all([
      readJson('package.json'), readJson('assets/skills/catalog.json'), readJson('UPSTREAM.json'),
    ])
    const patch = await readFile(new URL('cordis.patch.yml', PACKAGE_URL), 'utf8')
    const locale = await readJson('locale/zh.json')
    assert.equal(manifest.name, 'dsh-astryx-tonulls-zh')
    assert.equal(manifest.peerDependencies, undefined)
    assert.equal(manifest.dsh.bundle.patch, './cordis.patch.yml')
    assert.equal(catalog.entries.length, 1)
    assert.equal(catalog.upstreamCliVersion, upstream.cliVersion)
    assert.equal(catalog.skillCount, upstream.skillCount)
    assert.match(patch, /name: dsh-astryx-tonulls-zh/)
    assert.equal(locale.meta.title, 'Astryx 技能')
    assert.ok(manifest.exports['./icon'])
    assert.ok(manifest.files.includes('assets/skills/**/*.md'))
    assert.ok(manifest.files.includes('locale/*.json'))
  })
})
