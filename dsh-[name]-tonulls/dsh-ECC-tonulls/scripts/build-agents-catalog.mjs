import { mkdir, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { gitBlobSha, snapshotKey } from './sync-ecc-upstream.mjs'

const PROJECT_ROOT = fileURLToPath(new URL('../', import.meta.url))
const AGENT_ASSETS = path.join(PROJECT_ROOT, 'packages', 'agents', 'assets', 'agents')
const CATALOG_PATH = path.join(AGENT_ASSETS, 'catalog.json')
const NAME_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const ARCHITECT_DESCRIPTION = 'Use the ECC Architect role when the user explicitly asks to plan or review software architecture, compare design options, or identify system-level risks.'
const ROLE_SAFETY_NOTES = new Map([
  ['opensource-forker', 'This workflow initializes and commits a fresh repository, writes `.git/info/exclude`, and may change the Git index. Show the target repository and current Git state, obtain explicit user authorization before changing Git metadata, staging, or committing, and never push or publish without separate authorization.'],
  ['opensource-sanitizer', 'Despite its upstream read-only label, this procedure writes temporary/report files, including `SANITIZATION_REPORT.md` in the project and `<project>.UNREADABLE_FILES.txt` beside it, and may remove or replace the adjacent manifest. Disclose exact paths and obtain explicit user approval before writes or deletions; for a read-only request, stop before those steps and offer a no-write review.'],
])

/** Parse only the single-line name and description fields required by the DSH catalog. */
export function parseAgentSource(text, sourcePath) {
  const normalized = text.replaceAll('\r\n', '\n')
  if (!normalized.startsWith('---\n')) throw new Error(`Agent source has no YAML frontmatter: ${sourcePath}`)
  const end = normalized.indexOf('\n---\n', 4)
  if (end < 0) throw new Error(`Agent source has an unterminated YAML frontmatter: ${sourcePath}`)
  const frontmatter = normalized.slice(4, end)
  const name = readFrontmatterString(frontmatter, 'name', sourcePath)
  const description = readFrontmatterString(frontmatter, 'description', sourcePath)
  if (!NAME_PATTERN.test(name)) throw new Error(`Agent source has an invalid name: ${sourcePath}`)
  if (description.length === 0) throw new Error(`Agent source has an empty description: ${sourcePath}`)
  const body = normalized.slice(end + 5).replace(/^\n+/, '')
  if (body.trim().length === 0) throw new Error(`Agent source has an empty prompt body: ${sourcePath}`)
  return { name, description, body }
}

function readFrontmatterString(frontmatter, field, sourcePath) {
  const matches = frontmatter.split('\n').filter((line) => line.startsWith(`${field}:`))
  if (matches.length !== 1) throw new Error(`Agent source must have exactly one ${field} field: ${sourcePath}`)
  const value = matches[0].slice(field.length + 1).trim()
  if (value.startsWith('"')) {
    try {
      const parsed = JSON.parse(value)
      if (typeof parsed !== 'string') throw new Error('Expected a string')
      return parsed
    } catch (error) {
      throw new Error(`Unsupported quoted ${field} field: ${sourcePath}`, { cause: error })
    }
  }
  if (value.startsWith("'")) {
    if (!value.endsWith("'")) throw new Error(`Unsupported quoted ${field} field: ${sourcePath}`)
    return value.slice(1, -1).replaceAll("''", "'")
  }
  return value
}

/** Adapt an upstream role to an explicit, model-neutral DSH skill invocation. */
const REVIEWED_AGENT_NOTES = new Map([
  ['code-reviewer', 'When a bug is fixed in one caller, inspect the other callers of the same function. Put a guard in the shared function when the invariant applies to every caller. Introduce abstractions for demonstrated reuse or an explicit architectural boundary, such as isolating storage, and assess their effect on existing callers.'],
  ['e2e-runner', 'Use an already configured mobile or web test runner if the project has one. Express the expected user outcome and verify it with assertions. When checking flakiness, distinguish replayed steps from fresh runs and repeat the latter with the project runner if supported. Keep the existing runner and ask before adding tooling or dependencies.'],
  ['rag-pipeline-reviewer', 'Evaluate the actual query-building, filtering, retrieval and context assembly path. Include long multi-topic documents and measure recall per topic. Report source types that fill the final context so irrelevant material cannot hide missing evidence.'],
  ['typescript-reviewer', 'Use the available ECC TypeScript Patterns, Coding Standards, and relevant frontend or backend guidance. Verify type guidance against the project compiler configuration and existing code.'],
])

const REVIEWED_AGENT_REVISION = '4adeee6732a12d1540f49a4d50a38ce8c97f9a53'
const REVIEWED_AGENT_SOURCES = new Map([
  ['code-reviewer', ['rules/common/code-review.md', 'rules/common/coding-style.md']],
  ['e2e-runner', ['agents/e2e-runner.md']],
  ['rag-pipeline-reviewer', ['agents/rag-pipeline-reviewer.md']],
  ['typescript-reviewer', ['agents/typescript-reviewer.md']],
])

export function renderAgentRole({ name, body, commit, sourcePath }) {
  const sourceUrl = `https://github.com/affaan-m/ECC/blob/${commit}/${sourcePath}`
  const safetyNote = ROLE_SAFETY_NOTES.get(name)
  const reviewedNote = REVIEWED_AGENT_NOTES.get(name)
  const reviewedSources = REVIEWED_AGENT_SOURCES.get(name) ?? []
  return [
    `<!-- Generated from ${sourcePath} at ${commit}; edit the upstream source or generator instead. -->`,
    '# DSH role adaptation',
    '',
    'Invoke this role only when the user explicitly calls its `/ecc-*` command. It runs as instructions in the current DSH session; it does not start a separate agent or process.',
    'Use only the model and tools actually available in the current DSH session. Upstream tool/model selectors are not imported. If this role asks for an unavailable capability, explain the limitation instead of assuming a tool exists.',
    'This role does not grant permissions. Do not perform file, network, shell, or other side effects unless the user requested that action and current session policy permits it.',
    ...(safetyNote ? [`DSH-specific safety note: ${safetyNote}`] : []),
    '',
    `Source: ${sourceUrl}`,
    '',
    body.trim(),
    ...(reviewedNote ? [
      '', reviewedNote, '',
      ...reviewedSources.map((file) => `Adapted guidance: https://github.com/affaan-m/ECC/blob/${REVIEWED_AGENT_REVISION}/${file}`),
    ] : []),
    '',
  ].join('\n')
}

async function readPinnedSnapshot() {
  const [lock, syncMapContent] = await Promise.all([
    readFile(path.join(PROJECT_ROOT, 'upstream', 'ecc.lock.json'), 'utf8').then(JSON.parse),
    readFile(path.join(PROJECT_ROOT, 'upstream', 'sync-map.json')),
  ])
  const key = snapshotKey(lock.commit, syncMapContent)
  const snapshotDir = path.join(PROJECT_ROOT, 'upstream', 'snapshots', key.name)
  const manifest = JSON.parse(await readFile(path.join(snapshotDir, 'snapshot-manifest.json'), 'utf8'))
  if (manifest.commit !== lock.commit || manifest.tree !== lock.tree || manifest.syncMapSha256 !== key.syncMapSha256) {
    throw new Error('Pinned upstream snapshot does not match the lock and sync allowlist')
  }
  const files = new Map(manifest.files.filter((entry) => entry.category === 'agents').map((entry) => [entry.path, entry]))
  return { lock, snapshotDir, files }
}

function generatedName(name) {
  return `ecc-${name}`
}

function validateAssetFile(file) {
  if (typeof file !== 'string' || !/^ecc-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(file)) {
    throw new Error(`Unsafe generated agent asset path: ${String(file)}`)
  }
  return file
}

async function readExistingCatalog() {
  try {
    return JSON.parse(await readFile(CATALOG_PATH, 'utf8'))
  } catch (error) {
    if (error?.code === 'ENOENT') return undefined
    throw error
  }
}

async function writeAtomically(filePath, content) {
  const temporary = `${filePath}.tmp-${process.pid}`
  await writeFile(temporary, content, { flag: 'wx' })
  try {
    await rename(temporary, filePath)
  } catch (error) {
    await rm(temporary, { force: true })
    throw error
  }
}

/** Generate DSH-readable prompt assets and an exact source-hash catalog. */
export async function buildAgentsCatalog() {
  const { lock, snapshotDir, files } = await readPinnedSnapshot()
  const sourcePaths = [...files.keys()].filter((sourcePath) => sourcePath.split('/').length === 2).sort()
  const entries = []
  const generatedAssets = new Map()
  const names = new Set()

  for (const sourcePath of sourcePaths) {
    const source = files.get(sourcePath)
    const sourceBytes = await readFile(path.join(snapshotDir, ...sourcePath.split('/')))
    if (gitBlobSha(sourceBytes) !== source.sha) throw new Error(`Pinned agent source hash mismatch: ${sourcePath}`)
    const parsed = parseAgentSource(sourceBytes.toString('utf8'), sourcePath)
    const expectedPath = `agents/${parsed.name}.md`
    if (sourcePath !== expectedPath) throw new Error(`Agent name does not match its source filename: ${sourcePath}`)
    const skillName = generatedName(parsed.name)
    if (names.has(skillName)) throw new Error(`Duplicate DSH agent skill name: ${skillName}`)
    names.add(skillName)

    const manual = parsed.name === 'architect'
    const file = validateAssetFile(`${skillName}.md`)
    const description = manual ? ARCHITECT_DESCRIPTION : parsed.description
    if (!manual) generatedAssets.set(file, renderAgentRole({ ...parsed, commit: lock.commit, sourcePath }))
    entries.push({
      name: skillName,
      description,
      file,
      sourcePath,
      sourceSha: source.sha,
      adaptation: manual ? 'manual' : 'generated-role-wrapper',
    })
  }

  if (entries.length !== 71 || !names.has('ecc-architect')) {
    throw new Error(`Expected 71 pinned ECC agent roles including Architect; found ${entries.length}`)
  }

  const previous = await readExistingCatalog()
  const catalog = {
    upstreamCommit: lock.commit,
    upstreamTree: lock.tree,
    releaseStatus: lock.releaseStatus,
    entries,
  }
  const catalogBytes = `${JSON.stringify(catalog, null, 2)}\n`
  await mkdir(AGENT_ASSETS, { recursive: true })
  for (const [file, content] of generatedAssets) {
    await writeAtomically(path.join(AGENT_ASSETS, file), content)
  }
  await writeAtomically(CATALOG_PATH, catalogBytes)

  const retained = new Set(entries.map((entry) => entry.file))
  for (const old of previous?.entries ?? []) {
    if (old.adaptation !== 'generated-role-wrapper' || retained.has(old.file)) continue
    const staleFile = validateAssetFile(old.file)
    await rm(path.join(AGENT_ASSETS, staleFile), { force: true })
  }
  const packaged = await readdir(AGENT_ASSETS)
  for (const entry of packaged) {
    if (/^(?:ecc-[a-z0-9]+(?:-[a-z0-9]+)*\.md|catalog\.json)\.tmp-\d+$/.test(entry)) {
      await rm(path.join(AGENT_ASSETS, entry), { force: true })
    }
  }
  return { upstreamCommit: lock.commit, roles: entries.length, generated: generatedAssets.size, catalog: CATALOG_PATH }
}

if (process.argv[1] !== undefined && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  buildAgentsCatalog().then((result) => {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`)
  }).catch((error) => {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`)
    process.exitCode = 1
  })
}
