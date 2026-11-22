import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
for (const locale of ['ru', 'en', 'zh']) {
  const packageDir = join(root, 'packages', 'dsh-gsap-tonulls-' + locale)
  const manifest = JSON.parse(readFileSync(join(packageDir, 'package.json'), 'utf8'))
  const patch = readFileSync(join(packageDir, 'cordis.patch.yml'), 'utf8')
  const metaFile = locale === 'zh' ? 'zh.json' : locale + '.json'
  const metadata = JSON.parse(readFileSync(join(packageDir, 'locale', metaFile), 'utf8'))
  const catalog = JSON.parse(readFileSync(join(packageDir, 'assets/skills/catalog.json'), 'utf8'))
  const upstream = JSON.parse(readFileSync(join(packageDir, 'UPSTREAM.json'), 'utf8'))
  assert.equal(manifest.name, 'dsh-gsap-tonulls-' + locale)
  assert.equal(manifest.dsh.bundle.patch, './cordis.patch.yml')
  assert.match(patch, /id: gsap-tonulls/)
  assert.match(patch, new RegExp('name: ' + manifest.name))
  assert.ok(metadata.meta.title && metadata.meta.description)
  assert.equal(catalog.schemaVersion, 1)
  assert.equal(catalog.upstreamCommit, upstream.commit)
  assert.equal(upstream.commit, '5e6c35ff8eedea12d4f229129def635277d8b0f2')
  assert.equal(catalog.entries.length, 1)
  const skillPath = join(packageDir, 'assets/skills', catalog.entries[0].file)
  assert.ok(existsSync(skillPath))
  assert.match(readFileSync(skillPath, 'utf8'), /^---\nname: gsap-integration-review\n/)
  assert.ok(existsSync(join(packageDir, 'icon.svg')))
}
console.log('variant check passed')
