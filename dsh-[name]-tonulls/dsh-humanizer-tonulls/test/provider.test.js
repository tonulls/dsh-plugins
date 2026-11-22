import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const variants = [
  '../packages/dsh-humanizer-tonulls-ru/src/provider.js',
  '../packages/dsh-humanizer-tonulls-en/src/provider.js',
  '../packages/dsh-humanizer-tonulls-zh/src/provider.js',
]

test('all localized providers expose one bundled skill with DSH boundaries', async () => {
  for (const modulePath of variants) {
    const { createHumanizerProvider } = await import(modulePath)
    const provider = createHumanizerProvider()
    const [summary] = await provider.list()
    assert.equal(summary.name, 'humanizer')
    assert.equal(summary.provider, 'humanizer-tonulls')
    assert.equal(summary.source, 'bundled')
    assert.equal(summary.invocation.modelInvocable, false)
    assert.equal(summary.invocation.userInvocable, true)
    const skill = await provider.get(summary)
    assert.match(skill.content, /DSH safety and runtime notes/)
    assert.match(skill.content, /remove AI writing patterns/)
    assert.equal(await provider.get({ ...summary, provider: 'other' }), undefined)
  }
})

test('package manifests include the skill asset and upstream license', async () => {
  for (const suffix of ['ru', 'en', 'zh']) {
    const packageUrl = new URL(`../packages/dsh-humanizer-tonulls-${suffix}/package.json`, import.meta.url)
    const pkg = JSON.parse(await readFile(packageUrl, 'utf8'))
    assert.equal(pkg.dsh.bundle.patch, './cordis.patch.yml')
    assert.ok(pkg.files.includes('assets/skills/*.md'))
    assert.ok(pkg.files.includes('UPSTREAM.LICENSE'))
  }
})
