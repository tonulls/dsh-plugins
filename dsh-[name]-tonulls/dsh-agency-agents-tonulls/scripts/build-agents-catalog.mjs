import { lstat, readFile, readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const PROJECT_ROOT = fileURLToPath(new URL('../', import.meta.url))
const PACKAGE_ROOT = path.resolve(PROJECT_ROOT, 'packages/dsh-agency-agents-tonulls-en')
const ASSET_ROOT = path.join(PACKAGE_ROOT, 'assets/agents')
const UPSTREAM_FILE = path.join(PACKAGE_ROOT, 'UPSTREAM.json')
const CATALOG_FILES = ['ru', 'en', 'zh'].map((locale) =>
  path.resolve(PROJECT_ROOT, `packages/dsh-agency-agents-tonulls-${locale}/assets/agents/catalog.json`))
const CATEGORIES = [
  'academic', 'design', 'engineering', 'finance', 'game-development', 'gis',
  'healthcare', 'marketing', 'paid-media', 'product', 'project-management',
  'research', 'sales', 'security', 'spatial-computing', 'specialized', 'support', 'testing',
]
const SAFE_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

function fail(message) {
  throw new Error(message)
}

async function walkMarkdown(directory, category, relative = category) {
  const result = []
  const entries = await readdir(directory, { withFileTypes: true })
  entries.sort((left, right) => left.name.localeCompare(right.name))
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name)
    const relativePath = path.posix.join(relative, entry.name)
    if (entry.isSymbolicLink()) fail(`Symbolic links are not allowed in the agent snapshot: ${relativePath}`)
    if (entry.isDirectory()) {
      result.push(...await walkMarkdown(absolute, category, relativePath))
      continue
    }
    if (!entry.isFile() || !entry.name.endsWith('.md')) {
      fail(`Unexpected non-Markdown item in upstream category ${category}: ${relativePath}`)
    }
    result.push(relativePath)
  }
  return result
}

function parseScalar(lines, key, file) {
  const prefix = new RegExp(`^${key}:\\s*`)
  const index = lines.findIndex((line) => prefix.test(line))
  if (index < 0) fail(`Missing ${key} field in ${file}`)
  const firstLine = lines[index].replace(prefix, '').trim()
  if (/^[>|][+-]?$/.test(firstLine)) {
    const chunks = []
    for (let cursor = index + 1; cursor < lines.length && /^[ \t]+\S/.test(lines[cursor]); cursor += 1) {
      chunks.push(lines[cursor].trim())
    }
    return firstLine.startsWith('>') ? chunks.join(' ') : chunks.join('\n')
  }

  const chunks = [firstLine]
  for (let cursor = index + 1; cursor < lines.length && /^[ \t]+\S/.test(lines[cursor]); cursor += 1) {
    chunks.push(lines[cursor].trim())
  }
  const raw = chunks.join(' ').trim()
  if (raw.startsWith('"')) {
    if (!raw.endsWith('"')) fail(`Unterminated double-quoted ${key} field in ${file}`)
    try {
      return JSON.parse(raw)
    } catch {
      fail(`Invalid double-quoted ${key} field in ${file}`)
    }
  }
  if (raw.startsWith("'")) {
    if (!raw.endsWith("'")) fail(`Unterminated single-quoted ${key} field in ${file}`)
    return raw.slice(1, -1).replace(/''/g, "'")
  }
  return raw
}

function parseAgent(text, file, category, upstream) {
  const lines = text.split(/\r?\n/)
  if (lines[0] !== '---') fail(`Missing YAML frontmatter in ${file}`)
  const closing = lines.indexOf('---', 1)
  if (closing < 0) fail(`Unterminated YAML frontmatter in ${file}`)
  const metadata = lines.slice(1, closing)
  const title = parseScalar(metadata, 'name', file)
  const description = parseScalar(metadata, 'description', file).trim()
  if (!title || !description) fail(`Empty name or description in ${file}`)
  const slug = title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '')
  const name = `agency-${slug}`
  if (!SAFE_SLUG.test(slug) || name.length > 64) fail(`Invalid DSH skill name derived from ${file}: ${name}`)
  const sourceUrl = file === 'security/security-vulnerability-remediation.md'
    ? 'https://github.com/tonulls/dsh-plugins/tree/tonulls/dsh-%5Bname%5D-tonulls/dsh-agency-agents-tonulls/packages'
    : `${upstream.repository}/blob/${upstream.commit}/${file}`
  return { name, title, description, category, file, sourceUrl }
}

async function buildCatalog() {
  const upstream = JSON.parse(await readFile(UPSTREAM_FILE, 'utf8'))
  if (typeof upstream.commit !== 'string' || !/^[a-f0-9]{40}$/.test(upstream.commit)) {
    fail('UPSTREAM.json must pin a full 40-character commit SHA')
  }
  if (!Number.isSafeInteger(upstream.agentCount) || upstream.agentCount < 1) {
    fail('UPSTREAM.json must declare a positive agentCount')
  }
  const assetInfo = await lstat(ASSET_ROOT)
  if (!assetInfo.isDirectory() || assetInfo.isSymbolicLink()) fail('Agent asset root must be a real directory')

  const entries = []
  const counts = Object.create(null)
  for (const category of CATEGORIES) {
    const categoryRoot = path.join(ASSET_ROOT, category)
    const info = await lstat(categoryRoot)
    if (!info.isDirectory() || info.isSymbolicLink()) fail(`Missing or unsafe upstream category: ${category}`)
    const files = await walkMarkdown(categoryRoot, category)
    counts[category] = files.length
    for (const file of files) {
      const text = await readFile(path.join(ASSET_ROOT, file), 'utf8')
      entries.push(parseAgent(text, file, category, upstream))
    }
  }
  entries.sort((left, right) => left.name.localeCompare(right.name))
  if (entries.length !== upstream.agentCount) {
    fail(`Upstream agent count mismatch: expected ${upstream.agentCount}, found ${entries.length}`)
  }
  for (const [category, expected] of Object.entries(upstream.categories)) {
    if (counts[category] !== expected) fail(`Upstream category count mismatch for ${category}: expected ${expected}, found ${counts[category]}`)
  }
  if (Object.keys(upstream.categories).length !== CATEGORIES.length) {
    fail('UPSTREAM.json category set does not match the supported category list')
  }

  const names = new Set()
  const files = new Set()
  for (const entry of entries) {
    if (names.has(entry.name)) fail(`Duplicate DSH skill name: ${entry.name}`)
    if (files.has(entry.file)) fail(`Duplicate upstream file: ${entry.file}`)
    names.add(entry.name)
    files.add(entry.file)
  }
  return {
    schemaVersion: 1,
    upstreamRepository: upstream.repository,
    upstreamCommit: upstream.commit,
    agentCount: entries.length,
    entries,
  }
}

const checkOnly = process.argv.includes('--check')
if (process.argv.slice(2).some((argument) => argument !== '--check') || process.argv.filter((argument) => argument === '--check').length > 1) {
  fail('Usage: node scripts/build-agents-catalog.mjs [--check]')
}
const expectedText = `${JSON.stringify(await buildCatalog(), null, 2)}\n`
if (checkOnly) {
  for (const catalogFile of CATALOG_FILES) {
    let currentText
    try {
      currentText = await readFile(catalogFile, 'utf8')
    } catch (error) {
      if (error.code === 'ENOENT') fail(`Agent catalog is missing: ${path.relative(PROJECT_ROOT, catalogFile)}; run npm run build:catalog`)
      throw error
    }
    if (currentText !== expectedText) fail(`Agent catalog is stale: ${path.relative(PROJECT_ROOT, catalogFile)}; run npm run build:catalog`)
  }
  console.log('Agency Agents catalogs are current for RU, EN, and ZH packages.')
} else {
  for (const catalogFile of CATALOG_FILES) await writeFile(catalogFile, expectedText, 'utf8')
  console.log(`Wrote ${JSON.parse(expectedText).agentCount} Agency Agents entries to RU, EN, and ZH packages.`)
}
