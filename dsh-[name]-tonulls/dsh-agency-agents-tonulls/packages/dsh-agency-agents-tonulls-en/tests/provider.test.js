import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { describe, it } from 'node:test'
import { createAgencyAgentsProvider } from '../src/provider.js'

const PACKAGE_URL = new URL('../', import.meta.url)
const CATALOG = JSON.parse(await readFile(new URL('assets/agents/catalog.json', PACKAGE_URL), 'utf8'))
const UPSTREAM = JSON.parse(await readFile(new URL('UPSTREAM.json', PACKAGE_URL), 'utf8'))
const EXPECTED_CATEGORY_COUNTS = {
  academic: 6,
  design: 10,
  engineering: 66,
  finance: 5,
  'game-development': 21,
  gis: 13,
  healthcare: 3,
  marketing: 37,
  'paid-media': 7,
  product: 6,
  'project-management': 7,
  research: 1,
  sales: 9,
  security: 12,
  'spatial-computing': 6,
  specialized: 59,
  support: 6,
  testing: 9,
}

const provider = createAgencyAgentsProvider(600)

describe('Agency Agents DSH provider', () => {
  it('keeps the filtered pinned roster and source category counts', () => {
    assert.equal(CATALOG.schemaVersion, 1)
    assert.equal(CATALOG.upstreamCommit, UPSTREAM.commit)
    assert.equal(CATALOG.agentCount, 283)
    assert.equal(CATALOG.entries.length, 283)
    assert.equal(UPSTREAM.agentCount, 283)
    assert.deepEqual(UPSTREAM.categories, EXPECTED_CATEGORY_COUNTS)

    const names = CATALOG.entries.map((entry) => entry.name)
    assert.equal(new Set(names).size, names.length)
    assert.ok(names.every((name) => name.startsWith('agency-') && /^[a-z0-9-]+$/.test(name)))
    assert.ok(CATALOG.entries.every((entry) => entry.file.startsWith(`${entry.category}/`)))
  })

  it('publishes all roles for model-only activation and keeps automatic selection off by default', async () => {
    const candidates = await provider.list()
    assert.equal(provider.name, 'agency-agents-tonulls')
    assert.equal(candidates.length, 283)
    assert.ok(candidates.every((entry) => entry.invocation.userInvocable === false))
    assert.ok(candidates.every((entry) => entry.invocation.modelInvocable === false))
    assert.ok(candidates.every((entry) => entry.provider === provider.name))
    assert.ok(candidates.every((entry) => entry.source === 'bundled' && entry.rank === 600))
    assert.ok(candidates.every((entry) => entry.description.length > 0))
  })

  it('loads one selected role without leaking its upstream frontmatter', async () => {
    const candidates = await provider.list()
    const candidate = candidates.find((entry) => entry.name === 'agency-code-reviewer')
    assert.ok(candidate)
    const definition = await provider.get(candidate)

    assert.equal(definition.name, candidate.name)
    assert.equal(definition.description, candidate.description)
    assert.equal(definition.invocation.modelInvocable, false)
    assert.equal(definition.invocation.userInvocable, false)
    assert.deepEqual(definition.resourceBase, candidate.resourceBase)
    assert.ok(definition.content.includes('currently active DSH Agent'))
    assert.ok(definition.content.includes('You are **Code Reviewer**'))
    assert.ok(definition.content.endsWith('Do not assist credential theft, persistence, evasion, or unauthorized access.'))
    assert.ok(!definition.content.includes('name: Code Reviewer'))
  })

  it('can expose a session-scoped routing overlay without changing defaults', async () => {
    const overlay = createAgencyAgentsProvider(600, { modelInvocable: true })
    const candidate = (await overlay.list()).find((entry) => entry.name === 'agency-code-reviewer')
    const definition = await overlay.get(candidate)

    assert.equal(candidate.invocation.modelInvocable, true)
    assert.equal(candidate.invocation.userInvocable, false)
    assert.equal(definition.invocation.modelInvocable, true)
  })

  it('keeps direct invocation disabled when the model-routing overlay is enabled', async () => {
    const candidates = await createAgencyAgentsProvider(600, {
      modelInvocable: true,
    }).list()
    assert.ok(candidates.every((entry) => entry.invocation.modelInvocable === true))
    assert.ok(candidates.every((entry) => entry.invocation.userInvocable === false))
  })

  it('rejects unknown providers, stale candidates, and traversal-shaped locators', async () => {
    const candidate = (await provider.list()).find((entry) => entry.name === 'agency-code-reviewer')
    assert.equal(await provider.get({ ...candidate, provider: 'another-provider' }), undefined)
    assert.equal(await provider.get({ ...candidate, locator: 'engineering/../LICENSES.md' }), undefined)
    assert.equal(await provider.get({ ...candidate, name: 'agency-backend-architect' }), undefined)
  })

  it('honors aborted catalog lookups', async () => {
    const controller = new AbortController()
    controller.abort(new Error('cancelled'))
    await assert.rejects(provider.list({ signal: controller.signal }), /cancelled/)
  })

  it('loads at least one valid asset from every category', async () => {
    const candidates = await provider.list()
    for (const category of Object.keys(EXPECTED_CATEGORY_COUNTS)) {
      const candidate = candidates.find((entry) => entry.locator.startsWith(`${category}/`))
      assert.ok(candidate, `missing candidate for ${category}`)
      const definition = await provider.get(candidate)
      assert.ok(definition.content.includes('## DSH session boundary'), `missing DSH wrapper for ${category}`)
    }
  })

  it('contains a readable, frontmatter-bearing Markdown source for every catalog entry', async () => {
    for (const entry of CATALOG.entries) {
      const segments = entry.file.split('/')
      assert.equal(segments[0], entry.category)
      assert.ok(!entry.file.startsWith('/'))
      assert.ok(segments.length >= 2)
      assert.ok(segments.every((segment) => segment !== '' && segment !== '.' && segment !== '..'))
      assert.ok(segments.slice(1, -1).every((segment) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(segment)))
      const filename = segments.at(-1)
      assert.ok(filename.endsWith('.md'))
      assert.ok(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(filename.slice(0, -3)))
      const source = await readFile(new URL(`assets/agents/${entry.file}`, PACKAGE_URL), 'utf8')
      assert.equal(source.slice(0, 3), '---', `missing frontmatter: ${entry.file}`)
    }
  })

  it('loads a non-empty DSH definition for every catalog entry', async () => {
    const candidates = await provider.list()
    let loaded = 0
    for (const candidate of candidates) {
      const definition = await provider.get(candidate)
      assert.ok(definition, `missing definition: ${candidate.name}`)
      assert.ok(definition.content.trim().length > 0, `empty definition: ${candidate.name}`)
      loaded += 1
    }
    assert.equal(loaded, 283)
  })

  it('loads nested upstream category paths safely', async () => {
    const candidate = (await provider.list()).find((entry) => entry.locator.includes('/blender/'))
    assert.ok(candidate)
    const definition = await provider.get(candidate)
    assert.equal(definition.name, candidate.name)
    assert.ok(definition.content.includes('DSH session boundary'))
  })

  it('declares the provider and assets as a self-contained DSH bundle', async () => {
    const manifest = JSON.parse(await readFile(new URL('package.json', PACKAGE_URL), 'utf8'))
    const patch = await readFile(new URL('cordis.patch.yml', PACKAGE_URL), 'utf8')
    const license = await readFile(new URL('LICENSES.md', PACKAGE_URL), 'utf8')

    assert.equal(manifest.name, 'dsh-agency-agents-tonulls-en')
    assert.equal(manifest.private, true)
    assert.equal(manifest.dsh.bundle.patch, './cordis.patch.yml')
    assert.ok(manifest.files.includes('assets/agents/**/*.md'))
    assert.ok(manifest.files.includes('assets/agents/catalog.json'))
    assert.ok(patch.includes('name: dsh-agency-agents-tonulls-en'))
    assert.ok(license.includes('Copyright (c) 2025 AgentLand Contributors'))
    assert.ok(license.includes('MIT License'))
    assert.equal(manifest.dependencies, undefined)
  })
})
