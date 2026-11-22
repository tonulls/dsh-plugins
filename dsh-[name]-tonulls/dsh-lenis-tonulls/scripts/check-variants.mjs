import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const variants = [
  { suffix: 'ru', locale: 'ru' },
  { suffix: 'en', locale: 'en' },
  { suffix: 'zh', locale: 'zh' },
]

for (const variant of variants) {
  const directory = path.join(root, 'packages', `dsh-lenis-tonulls-${variant.suffix}`)
  const readJson = async (relativePath) => JSON.parse(await readFile(path.join(directory, relativePath), 'utf8'))
  const [pkg, catalog, upstream, locale] = await Promise.all([
    readJson('package.json'),
    readJson('assets/skills/catalog.json'),
    readJson('UPSTREAM.json'),
    readJson(`locale/${variant.locale}.json`),
  ])
  const patch = await readFile(path.join(directory, 'cordis.patch.yml'), 'utf8')
  const skill = await readFile(path.join(directory, 'assets/skills/lenis-integration.md'), 'utf8')
  const icon = await readFile(path.join(directory, 'icon.svg'))

  assert.equal(pkg.name, `dsh-lenis-tonulls-${variant.suffix}`)
  assert.equal(pkg.dsh.bundle.patch, './cordis.patch.yml')
  assert.equal(catalog.schemaVersion, 1)
  assert.equal(catalog.upstreamCommit, upstream.commit)
  assert.equal(catalog.entries.length, upstream.adaptedSkillCount)
  assert.equal(catalog.entries[0].name, 'lenis-integration')
  assert.match(patch, /id: lenis-tonulls/)
  assert.match(patch, new RegExp(`name: ${pkg.name}`))
  assert.ok(skill.startsWith('---\n'))
  assert.match(skill, /name: lenis-integration/)
  assert.ok(locale.meta.title.trim())
  assert.ok(locale.meta.description.trim())
  assert.match(icon.toString('utf8'), /^<svg\b/)
  assert.ok(icon.byteLength <= 256 * 1024)
}

console.log('Validated RU/EN/ZH package metadata, catalogs, icons, and source pins.')
