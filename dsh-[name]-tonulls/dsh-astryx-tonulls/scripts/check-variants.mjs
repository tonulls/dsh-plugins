import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const ROOT = fileURLToPath(new URL('../', import.meta.url))
const PACKAGES = ['dsh-astryx-tonulls-ru', 'dsh-astryx-tonulls-en', 'dsh-astryx-tonulls-zh']

for (const packageName of PACKAGES) {
  const packageDir = path.join(ROOT, 'packages', packageName)
  const manifest = JSON.parse(await readFile(path.join(packageDir, 'package.json'), 'utf8'))
  const catalog = JSON.parse(await readFile(path.join(packageDir, 'assets/skills/catalog.json'), 'utf8'))
  const upstream = JSON.parse(await readFile(path.join(packageDir, 'UPSTREAM.json'), 'utf8'))
  const entries = await readdir(path.join(packageDir, 'assets/skills'))
  const bundleEntry = await readFile(path.join(packageDir, 'src/bundle-entry.js'), 'utf8')
  const bundleRouting = await readFile(path.join(packageDir, 'src/bundle-routing.js'), 'utf8')
  const notice = await readFile(path.join(packageDir, 'NOTICE.md'), 'utf8')
  const license = await readFile(path.join(packageDir, 'LICENSE'), 'utf8')

  assert.equal(manifest.name, packageName)
  assert.equal(manifest.peerDependencies, undefined, `${packageName} must not request runtime packages it does not import`)
  assert.equal(manifest.main, './src/index.js')
  assert.equal(manifest.exports['./icon'], './icon.svg')
  assert.ok(manifest.exports['./locale/*.json'])
  assert.ok(manifest.files.includes('assets/skills/**/*.md'))
  assert.ok(manifest.files.includes('assets/skills/catalog.json'))
  assert.ok(manifest.files.includes('UPSTREAM.json'))
  assert.ok(manifest.files.includes('NOTICE.md'))
  assert.ok(manifest.files.includes('LICENSE'))
  assert.ok(manifest.files.includes('src/*.js'))
  assert.match(bundleEntry, /dsh-astryx-tonulls/)
  assert.match(bundleRouting, /setAutomaticSelection/)
  assert.match(license, /MIT License/)
  assert.ok(notice.includes(upstream.licenseUrl))
  assert.equal(manifest.dsh?.bundle?.patch, './cordis.patch.yml')
  assert.equal(catalog.entries.length, upstream.skillCount)
  assert.equal(catalog.skillCount, upstream.skillCount)
  assert.equal(catalog.upstreamCliVersion, upstream.cliVersion)
  assert.equal(upstream.license, 'MIT')
  assert.equal(upstream.licenseUrl, `https://github.com/meta/astryx/blob/${upstream.sourceTagCommit}/LICENSE`)
  assert.match(upstream.sourceTagCommit, /^[a-f0-9]{40}$/)
  assert.equal(upstream.npmProvenance?.buildCommit, upstream.sourceTagCommit)
  assert.equal(upstream.npmProvenance.attestationUrl, `https://registry.npmjs.org/-/npm/v1/attestations/@astryxdesign%2fcli@${upstream.cliVersion}`)
  for (const entry of catalog.entries) {
    assert.ok(entries.includes(entry.file), `${packageName} is missing ${entry.file}`)
  }
}

console.log('All three Astryx language variants match their manifests and skill catalogs.')
