import assert from 'node:assert/strict'
import test from 'node:test'
import { createAnthropicCybersecurityProvider } from '../src/provider.js'

const provider = createAnthropicCybersecurityProvider()

test('lists two defensive log skills with automatic selection disabled by default', async () => {
  const entries = await provider.list()
  assert.equal(entries.length, 2)
  assert.deepEqual(entries.map((entry) => entry.name), [
    'anthropic-cybersecurity-api-gateway-log-triage',
    'anthropic-cybersecurity-web-access-log-triage',
  ])
  for (const entry of entries) {
    assert.deepEqual(entry.invocation, { modelInvocable: false, userInvocable: true })
    assert.equal(entry.provider, provider.name)
    assert.equal(entry.source, 'bundled')
    assert.equal(entry.resourceBase.kind, 'directory')
  }
})

test('returns safety boundaries and non-executable adapted instructions', async () => {
  const entries = await provider.list()
  for (const entry of entries) {
    const skill = await provider.get(entry)
    assert.ok(skill)
    assert.match(skill.content, /DSH safety boundary/)
    assert.match(skill.content, /Analyze only logs the user provides or explicitly authorizes/)
    assert.doesNotMatch(skill.content, /```|pip install|scripts\/agent\.py|npm install/i)
  }
})

test('rejects a selection from another provider or with a mismatched locator', async () => {
  const [entry] = await provider.list()
  assert.equal(await provider.get({ ...entry, provider: 'other-provider' }), undefined)
  assert.equal(await provider.get({ ...entry, locator: '../outside.md' }), undefined)
})

test('honors an aborted discovery signal', async () => {
  const controller = new AbortController()
  controller.abort()
  await assert.rejects(provider.list({ signal: controller.signal }), { name: 'AbortError' })
})
