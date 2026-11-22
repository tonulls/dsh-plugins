import { createHash } from 'node:crypto'
import { mkdir, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const PROJECT_ROOT = fileURLToPath(new URL('../', import.meta.url))
const API_ROOT = 'https://api.github.com/repos/affaan-m/ECC'
const SNAPSHOTS_ROOT = path.join(PROJECT_ROOT, 'upstream', 'snapshots')
const MAX_FILE_BYTES = 2 * 1024 * 1024

/** Return the Git object id for a blob's bytes. */
export function gitBlobSha(content) {
  const bytes = Buffer.isBuffer(content) ? content : Buffer.from(content)
  return createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex')
}

/** Key a snapshot by both immutable source revision and exact allowlist bytes. */
export function snapshotKey(commit, syncMapContent) {
  if (!/^[0-9a-f]{40}$/.test(commit)) throw new Error('Snapshot key requires a full Git commit id')
  const bytes = Buffer.isBuffer(syncMapContent) ? syncMapContent : Buffer.from(syncMapContent)
  const syncMapSha256 = createHash('sha256').update(bytes).digest('hex')
  return { name: `${commit}-${syncMapSha256.slice(0, 12)}`, syncMapSha256 }
}

/** Validate and select files covered by the reviewed category allowlist. */
export function selectSnapshotEntries(treeEntries, categories, extraFiles = []) {
  const selected = []
  const paths = new Set()
  const exactFiles = new Map(extraFiles.map(({ path: filePath, category }) => [validateRelativePath(filePath), category]))

  for (const entry of treeEntries) {
    if (entry.type !== 'blob') continue
    const relativePath = validateRelativePath(entry.path)
    const category = exactFiles.get(relativePath) ?? Object.entries(categories).find(([, rule]) => {
      if (!relativePath.startsWith(rule.prefix)) return false
      return rule.extensions.includes(path.posix.extname(relativePath).toLowerCase())
    })?.[0]
    if (category === undefined) continue
    if (entry.mode !== '100644' && entry.mode !== '100755') {
      throw new Error(`Symlink or non-regular upstream file is not permitted: ${relativePath}`)
    }
    if (!Number.isSafeInteger(entry.size) || entry.size < 0 || entry.size > MAX_FILE_BYTES) {
      throw new Error(`Upstream file exceeds the snapshot size limit: ${relativePath}`)
    }
    if (!/^[0-9a-f]{40}$/.test(entry.sha)) throw new Error(`Invalid Git blob id for ${relativePath}`)
    if (paths.has(relativePath)) throw new Error(`Duplicate upstream path: ${relativePath}`)
    paths.add(relativePath)
    selected.push({ category, path: relativePath, sha: entry.sha, size: entry.size })
  }

  return selected.sort((left, right) => left.path.localeCompare(right.path))
}

/** Reject paths that could escape a local snapshot directory. */
export function validateRelativePath(value) {
  if (typeof value !== 'string' || value.length === 0 || value.includes('\\') || value.startsWith('/')) {
    throw new Error(`Unsafe upstream path: ${String(value)}`)
  }
  const parts = value.split('/')
  if (parts.some((part) => part === '' || part === '.' || part === '..') || path.posix.normalize(value) !== value) {
    throw new Error(`Unsafe upstream path: ${value}`)
  }
  return value
}

/** Validate category prefixes and file extensions before matching upstream paths. */
export function validateSyncCategories(categories) {
  if (categories === null || typeof categories !== 'object' || Array.isArray(categories)) {
    throw new Error('The upstream sync map must contain a categories object')
  }
  for (const [name, rule] of Object.entries(categories)) {
    if (!/^[a-z0-9-]+$/.test(name) || rule === null || typeof rule !== 'object') {
      throw new Error(`Invalid upstream sync category: ${name}`)
    }
    if (typeof rule.prefix !== 'string' || !rule.prefix.endsWith('/')) {
      throw new Error(`Invalid path prefix for upstream sync category: ${name}`)
    }
    validateRelativePath(rule.prefix.slice(0, -1))
    if (!Array.isArray(rule.extensions) || rule.extensions.length === 0 || rule.extensions.some((extension) => !/^\.[a-z0-9]+$/.test(extension))) {
      throw new Error(`Invalid file extensions for upstream sync category: ${name}`)
    }
  }
  return categories
}

/** Validate exact upstream paths such as LICENSE that do not live in a category directory. */
export function validateExtraFiles(files) {
  if (!Array.isArray(files)) throw new Error('The upstream sync map extraFiles field must be an array')
  const seen = new Set()
  for (const entry of files) {
    if (entry === null || typeof entry !== 'object' || !/^[a-z0-9-]+$/.test(entry.category)) {
      throw new Error('Invalid exact-file category in upstream sync map')
    }
    const sourcePath = validateRelativePath(entry.path)
    if (seen.has(sourcePath)) throw new Error(`Duplicate exact upstream path: ${sourcePath}`)
    seen.add(sourcePath)
  }
  return files
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'dsh-ecc-upstream-sync',
    },
    signal: AbortSignal.timeout(30_000),
  })
  if (!response.ok) throw new Error(`GitHub API returned HTTP ${response.status} for ${url}`)
  return response.json()
}

async function fetchPinnedCommit(lock) {
  const commit = await fetchJson(`${API_ROOT}/commits/${lock.commit}`)
  if (commit.sha !== lock.commit || commit.commit?.tree?.sha !== lock.tree) {
    throw new Error('Pinned ECC commit/tree does not match the upstream GitHub response')
  }
  if (lock.commitSignatureVerifiedByGitHub && commit.commit?.verification?.verified !== true) {
    throw new Error('Pinned ECC commit signature is not verified by GitHub')
  }
  return commit
}

async function fetchPinnedTree(lock) {
  const result = await fetchJson(`${API_ROOT}/git/trees/${lock.tree}?recursive=1`)
  if (result.sha !== lock.tree || result.truncated === true) {
    throw new Error('Pinned ECC tree is incomplete or does not match the lock file')
  }
  return result.tree
}

function summarize(entries, categories) {
  const names = new Set([...Object.keys(categories), ...entries.map((entry) => entry.category)])
  const counts = Object.fromEntries([...names].map((name) => [name, 0]))
  for (const entry of entries) counts[entry.category] += 1
  const skillDefinitions = entries.filter((entry) => entry.category === 'skills' && path.posix.basename(entry.path) === 'SKILL.md').length
  return { files: entries.length, bytes: entries.reduce((total, entry) => total + entry.size, 0), skillDefinitions, categories: counts }
}

async function fetchBlob(lock, entry) {
  const encodedPath = entry.path.split('/').map(encodeURIComponent).join('/')
  const url = `https://raw.githubusercontent.com/affaan-m/ECC/${lock.commit}/${encodedPath}`
  const response = await fetch(url, { signal: AbortSignal.timeout(30_000) })
  if (!response.ok) throw new Error(`Upstream file returned HTTP ${response.status}: ${entry.path}`)
  const bytes = Buffer.from(await response.arrayBuffer())
  if (bytes.length !== entry.size || gitBlobSha(bytes) !== entry.sha) {
    throw new Error(`Upstream file content does not match the pinned Git blob: ${entry.path}`)
  }
  if (bytes.includes(0)) throw new Error(`Binary content is not permitted in the text snapshot: ${entry.path}`)
  try {
    new TextDecoder('utf-8', { fatal: true }).decode(bytes)
  } catch {
    throw new Error(`Non-UTF-8 content is not permitted in the text snapshot: ${entry.path}`)
  }
  return bytes
}

async function mapConcurrent(items, concurrency, operation) {
  const output = new Array(items.length)
  let next = 0
  let failure
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (failure === undefined) {
      const index = next++
      if (index >= items.length) return
      try {
        output[index] = await operation(items[index])
      } catch (error) {
        failure ??= error
      }
    }
  })
  await Promise.all(workers)
  if (failure !== undefined) throw failure
  return output
}

async function listFiles(directory, prefix = '') {
  const files = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = prefix === '' ? entry.name : `${prefix}/${entry.name}`
    if (entry.isDirectory()) files.push(...await listFiles(path.join(directory, entry.name), relative))
    else if (entry.isFile()) files.push(relative)
    else throw new Error(`Unexpected non-file in upstream snapshot: ${relative}`)
  }
  return files.sort()
}

async function writeSnapshot(lock, entries, blobs, snapshotName, syncMapSha256) {
  const snapshotPath = path.join(SNAPSHOTS_ROOT, snapshotName)
  const stagingPath = path.join(SNAPSHOTS_ROOT, `.staging-${snapshotName}-${process.pid}`)
  const manifest = {
    repository: lock.repository,
    commit: lock.commit,
    tree: lock.tree,
    syncMapSha256,
    files: entries.map(({ category, path: sourcePath, sha, size }) => ({ category, path: sourcePath, sha, size })),
  }
  const manifestBytes = Buffer.from(`${JSON.stringify(manifest, null, 2)}\n`)

  await rm(stagingPath, { recursive: true, force: true })
  await mkdir(stagingPath, { recursive: true })
  try {
    for (let index = 0; index < entries.length; index += 1) {
      const entry = entries[index]
      const destination = path.join(stagingPath, ...validateRelativePath(entry.path).split('/'))
      await mkdir(path.dirname(destination), { recursive: true })
      await writeFile(destination, blobs[index], { flag: 'wx' })
    }
    await writeFile(path.join(stagingPath, 'snapshot-manifest.json'), manifestBytes, { flag: 'wx' })

    try {
      const existingFiles = await listFiles(snapshotPath)
      const stagedFiles = await listFiles(stagingPath)
      if (JSON.stringify(existingFiles) !== JSON.stringify(stagedFiles)) {
        throw new Error('Existing snapshot has a different file list; preserve it for review and choose a new commit')
      }
      for (const relative of stagedFiles) {
        const existing = await readFile(path.join(snapshotPath, relative))
        const staged = await readFile(path.join(stagingPath, relative))
        if (!existing.equals(staged)) throw new Error(`Existing pinned snapshot differs at ${relative}`)
      }
      await rm(stagingPath, { recursive: true, force: true })
      return { path: snapshotPath, unchanged: true }
    } catch (error) {
      if (error?.code !== 'ENOENT') throw error
    }

    await mkdir(SNAPSHOTS_ROOT, { recursive: true })
    await rename(stagingPath, snapshotPath)
    return { path: snapshotPath, unchanged: false }
  } catch (error) {
    await rm(stagingPath, { recursive: true, force: true })
    throw error
  }
}

async function run() {
  const mode = process.argv[2] ?? '--check'
  if (mode !== '--check' && mode !== '--sync') throw new Error('Usage: node scripts/sync-ecc-upstream.mjs [--check|--sync]')

  const [lockText, syncMapText] = await Promise.all([
    readFile(path.join(PROJECT_ROOT, 'upstream', 'ecc.lock.json'), 'utf8'),
    readFile(path.join(PROJECT_ROOT, 'upstream', 'sync-map.json'), 'utf8'),
  ])
  const lock = JSON.parse(lockText)
  const syncMap = JSON.parse(syncMapText)
  if (lock.repository !== 'https://github.com/affaan-m/ECC.git' || lock.license !== 'MIT') {
    throw new Error('upstream/ecc.lock.json does not identify the reviewed ECC source')
  }
  if (!/^[0-9a-f]{40}$/.test(lock.commit) || !/^[0-9a-f]{40}$/.test(lock.tree)) {
    throw new Error('upstream/ecc.lock.json must pin full Git commit and tree ids')
  }
  validateSyncCategories(syncMap.categories)
  validateExtraFiles(syncMap.extraFiles)
  const snapshotInfo = snapshotKey(lock.commit, syncMapText)

  await fetchPinnedCommit(lock)
  const tree = await fetchPinnedTree(lock)
  const entries = selectSnapshotEntries(tree, syncMap.categories, syncMap.extraFiles)
  const result = { commit: lock.commit, tree: lock.tree, syncMapSha256: snapshotInfo.syncMapSha256, ...summarize(entries, syncMap.categories) }

  if (mode === '--sync') {
    const blobs = await mapConcurrent(entries, 6, (entry) => fetchBlob(lock, entry))
    const snapshot = await writeSnapshot(lock, entries, blobs, snapshotInfo.name, snapshotInfo.syncMapSha256)
    result.snapshot = snapshot.path
    result.unchanged = snapshot.unchanged
  }

  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`)
}

if (process.argv[1] !== undefined && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  run().catch((error) => {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`)
    process.exitCode = 1
  })
}
