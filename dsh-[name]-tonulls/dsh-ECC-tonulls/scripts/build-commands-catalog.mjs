import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { gitBlobSha, snapshotKey, validateRelativePath } from './sync-ecc-upstream.mjs'

const PROJECT_ROOT = fileURLToPath(new URL('../', import.meta.url))
const COMMAND_ASSETS = path.join(PROJECT_ROOT, 'packages', 'commands', 'assets')
const COMMAND_ROOT = path.join(COMMAND_ASSETS, 'commands')
const CATALOG_PATH = path.join(COMMAND_ASSETS, 'catalog.json')
const NAME_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const ASSET_SEGMENT = /^[\p{L}\p{N}._-]+$/u
const EXPECTED_COMMANDS = 97
const EXPECTED_ENABLED = new Set(['build-fix', 'test-coverage', 'update-docs'])

/** Extract one inert description scalar from an ECC command's YAML header. */
export function parseCommandSource(text, sourcePath) {
  const normalized = text.replaceAll('\r\n', '\n')
  if (!normalized.startsWith('---\n')) throw new Error(`Command source has no YAML frontmatter: ${sourcePath}`)
  const end = normalized.indexOf('\n---\n', 4)
  if (end < 0) throw new Error(`Command source has an unterminated YAML frontmatter: ${sourcePath}`)
  const header = normalized.slice(4, end).split('\n')
  const matches = header.filter((line) => line.startsWith('description:'))
  if (matches.length !== 1) throw new Error(`Command source must have exactly one description field: ${sourcePath}`)
  const scalar = matches[0].slice('description:'.length).trim()
  if (scalar.startsWith('!') || scalar.length === 0 || scalar[0] === '>' || scalar[0] === '|') {
    throw new Error(`Unsupported command description scalar: ${sourcePath}`)
  }
  let description = scalar
  if (scalar.startsWith('"')) {
    try {
      description = JSON.parse(scalar)
    } catch (error) {
      throw new Error(`Unsupported quoted command description: ${sourcePath}`, { cause: error })
    }
  } else if (scalar.startsWith("'")) {
    if (!scalar.endsWith("'")) throw new Error(`Unsupported quoted command description: ${sourcePath}`)
    description = scalar.slice(1, -1).replaceAll("''", "'")
  }
  if (typeof description !== 'string' || description.trim().length === 0) {
    throw new Error(`Command source has an empty description: ${sourcePath}`)
  }
  const body = normalized.slice(end + 5).replace(/^\n+/, '').trim()
  if (body.length === 0) throw new Error(`Command source has an empty prompt body: ${sourcePath}`)
  return { description: description.trim(), body }
}

/** Add DSH invocation, capability and side-effect boundaries to a selected prompt. */
export function renderCommand({ name, notes, body, commit, sourcePath }) {
  const sourceUrl = `https://github.com/affaan-m/ECC/blob/${commit}/${sourcePath}`
  return [
    `<!-- Generated from ${sourcePath} at ${commit}; edit the pinned source or generator instead. -->`,
    '# DSH command adaptation',
    '',
    `Use this instruction only when the user explicitly invokes \/ecc-command-${name}. It runs in the current DSH session; it does not start a separate agent, process, model, hook or workflow.`,
    'Use only tools and integrations available in this DSH session. Upstream Claude-specific commands, aliases, model selectors, allowed-tools, agents and hooks are not imported.',
    'Do not install or download helpers, dependencies or packages. Never use npx in a way that fetches code; only use a tool already installed in the target project. If a helper is missing, stop and explain the limitation.',
    'A command prompt does not grant permissions. Follow the user request and DSH policy; ask before remote/network actions, publishing, deleting data, installing software or broad/unrequested changes.',
    `Adaptation note: ${notes}`,
    '',
    `Pinned source: ${sourceUrl}`,
    '',
    body,
    '',
  ].join('\n')
}

function validateCommandAsset(value) {
  const relative = validateRelativePath(value)
  const segments = relative.split('/')
  if (!relative.startsWith('commands/') || !relative.endsWith('.md') || segments.some((segment) => !ASSET_SEGMENT.test(segment))) {
    throw new Error(`Unsafe generated command asset path: ${relative}`)
  }
  return relative
}

async function readPinnedSnapshot() {
  const [lock, syncMapContent, decisions] = await Promise.all([
    readFile(path.join(PROJECT_ROOT, 'upstream', 'ecc.lock.json'), 'utf8').then(JSON.parse),
    readFile(path.join(PROJECT_ROOT, 'upstream', 'sync-map.json')),
    readFile(path.join(PROJECT_ROOT, 'upstream', 'command-decisions.json'), 'utf8').then(JSON.parse),
  ])
  const key = snapshotKey(lock.commit, syncMapContent)
  const snapshotDir = path.join(PROJECT_ROOT, 'upstream', 'snapshots', key.name)
  const manifest = JSON.parse(await readFile(path.join(snapshotDir, 'snapshot-manifest.json'), 'utf8'))
  if (manifest.commit !== lock.commit || manifest.tree !== lock.tree || manifest.syncMapSha256 !== key.syncMapSha256) {
    throw new Error('Pinned upstream snapshot does not match the lock and sync allowlist')
  }
  const files = new Map(manifest.files.filter((entry) => entry.category === 'commands').map((entry) => [entry.path, entry]))
  return { lock, snapshotDir, files, decisions }
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
  await mkdir(path.dirname(filePath), { recursive: true })
  const temporary = `${filePath}.tmp-${process.pid}`
  await writeFile(temporary, content, { flag: 'wx' })
  try {
    await rename(temporary, filePath)
  } catch (error) {
    await rm(temporary, { force: true })
    throw error
  }
}

/** Build an explicit allowlist-only DSH command candidate catalog. */
export async function buildCommandsCatalog() {
  const { lock, snapshotDir, files, decisions } = await readPinnedSnapshot()
  if (!Array.isArray(decisions.include) || decisions.explicitExclusions === null || typeof decisions.explicitExclusions !== 'object' || typeof decisions.defaultExclusionReason !== 'string') {
    throw new Error('Command decisions require include, explicitExclusions and defaultExclusionReason')
  }
  const includeByName = new Map()
  for (const decision of decisions.include) {
    if (decision === null || !NAME_PATTERN.test(decision.name) || typeof decision.notes !== 'string' || decision.notes.trim().length === 0) {
      throw new Error('Invalid included command decision')
    }
    if (!EXPECTED_ENABLED.has(decision.name) || includeByName.has(decision.name)) {
      throw new Error(`Unexpected or duplicate included command: ${decision.name}`)
    }
    includeByName.set(decision.name, decision.notes.trim())
  }
  if (includeByName.size !== EXPECTED_ENABLED.size || [...EXPECTED_ENABLED].some((name) => !includeByName.has(name))) {
    throw new Error('Command decisions must explicitly cover the reviewed allowlist')
  }
  for (const [name, reason] of Object.entries(decisions.explicitExclusions)) {
    if (!NAME_PATTERN.test(name) || typeof reason !== 'string' || reason.trim().length === 0) {
      throw new Error(`Invalid explicit command exclusion: ${name}`)
    }
  }
  if (decisions.defaultExclusionReason.trim().length === 0) throw new Error('Command default exclusion reason cannot be empty')

  const enabled = []
  const excluded = []
  const assets = new Map()
  const seenNames = new Set()
  for (const sourcePath of [...files.keys()].sort()) {
    const source = files.get(sourcePath)
    const parts = sourcePath.split('/')
    if (parts.length !== 2 || parts[0] !== 'commands' || !sourcePath.endsWith('.md')) {
      throw new Error(`Unexpected command inventory path: ${sourcePath}`)
    }
    const name = sourcePath.slice('commands/'.length, -'.md'.length)
    if (!NAME_PATTERN.test(name) || seenNames.has(name)) throw new Error(`Invalid or duplicate upstream command name: ${name}`)
    seenNames.add(name)
    const sourceBytes = await readFile(path.join(snapshotDir, ...sourcePath.split('/')))
    if (gitBlobSha(sourceBytes) !== source.sha) throw new Error(`Pinned command source hash mismatch: ${sourcePath}`)
    validateCommandAsset(sourcePath)

    const notes = includeByName.get(name)
    if (notes === undefined) {
      excluded.push({
        name,
        sourcePath,
        sourceSha: source.sha,
        reason: decisions.explicitExclusions[name] ?? decisions.defaultExclusionReason,
        explicit: Object.hasOwn(decisions.explicitExclusions, name),
      })
      continue
    }

    const parsed = parseCommandSource(sourceBytes.toString('utf8'), sourcePath)
    const file = `commands/${name}.md`
    const dshName = `ecc-command-${name}`
    enabled.push({
      name: dshName,
      command: name,
      description: `ECC command adaptation: ${parsed.description}`,
      file,
      sourcePath,
      sourceSha: source.sha,
      notes,
    })
    assets.set(validateCommandAsset(file), renderCommand({
      name,
      notes,
      body: parsed.body,
      commit: lock.commit,
      sourcePath,
    }))
  }

  const unknownExclusions = Object.keys(decisions.explicitExclusions).filter((name) => !seenNames.has(name))
  if (unknownExclusions.length > 0) throw new Error(`Explicitly excluded commands not found at pinned revision: ${unknownExclusions.join(', ')}`)
  const missingIncluded = [...includeByName.keys()].filter((name) => !seenNames.has(name))
  if (missingIncluded.length > 0) throw new Error(`Included commands not found at pinned revision: ${missingIncluded.join(', ')}`)
  if (files.size !== EXPECTED_COMMANDS || enabled.length !== EXPECTED_ENABLED.size || excluded.length !== EXPECTED_COMMANDS - EXPECTED_ENABLED.size) {
    throw new Error(`Expected ${EXPECTED_COMMANDS} commands with ${EXPECTED_ENABLED.size} enabled; found ${files.size} total, ${enabled.length} enabled, ${excluded.length} excluded`)
  }

  const previous = await readExistingCatalog()
  const assetPaths = [...assets.keys()].sort()
  const catalog = {
    upstreamCommit: lock.commit,
    upstreamTree: lock.tree,
    releaseStatus: lock.releaseStatus,
    entries: enabled.sort((left, right) => left.name.localeCompare(right.name)),
    excluded: excluded.sort((left, right) => left.name.localeCompare(right.name)),
    assets: assetPaths,
  }
  await mkdir(COMMAND_ROOT, { recursive: true })
  for (const [relative, content] of assets) {
    await writeAtomically(path.join(COMMAND_ASSETS, ...relative.split('/')), content)
  }
  await writeAtomically(CATALOG_PATH, `${JSON.stringify(catalog, null, 2)}\n`)

  const retained = new Set(assetPaths)
  for (const oldAsset of previous?.assets ?? []) {
    const relative = validateCommandAsset(oldAsset)
    if (!retained.has(relative)) await rm(path.join(COMMAND_ASSETS, ...relative.split('/')), { force: true })
  }
  return {
    upstreamCommit: lock.commit,
    total: files.size,
    enabled: enabled.length,
    excluded: excluded.length,
    markdownAssets: assetPaths.length,
    catalog: CATALOG_PATH,
  }
}

if (process.argv[1] !== undefined && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  buildCommandsCatalog().then((result) => {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`)
  }).catch((error) => {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`)
    process.exitCode = 1
  })
}
