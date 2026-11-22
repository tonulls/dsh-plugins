import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { describe, it } from 'node:test'
import {
  gitBlobSha,
  selectSnapshotEntries,
  snapshotKey,
  validateExtraFiles,
  validateRelativePath,
  validateSyncCategories,
} from './sync-ecc-upstream.mjs'

describe('ECC upstream snapshot sync', () => {
  it('computes Git-compatible SHA-1 blob ids', () => {
    assert.equal(gitBlobSha('hello\n'), 'ce013625030ba8dba906f756967f9e9ca394464a')
  })

  it('keys snapshots by commit and exact allowlist bytes', () => {
    const commit = 'a'.repeat(40)
    const first = snapshotKey(commit, '{"files":[]}')
    const same = snapshotKey(commit, '{"files":[]}')
    const changed = snapshotKey(commit, '{"files":["LICENSE"]}')

    assert.deepEqual(first, same)
    assert.notEqual(first.name, changed.name)
    assert.throws(() => snapshotKey('../escape', '{}'), /full Git commit/)
  })

  it('selects only reviewed text categories and sorts paths', () => {
    const categories = {
      agents: { prefix: 'agents/', extensions: ['.md'] },
      hooks: { prefix: 'hooks/', extensions: ['.json', '.md'] },
    }
    const extras = [{ path: 'LICENSE', category: 'license' }]
    const selected = selectSnapshotEntries([
      { type: 'blob', mode: '100644', path: 'hooks/hooks.json', sha: 'a'.repeat(40), size: 20 },
      { type: 'blob', mode: '100644', path: 'scripts/hook.js', sha: 'b'.repeat(40), size: 40 },
      { type: 'blob', mode: '100644', path: 'agents/architect.md', sha: 'c'.repeat(40), size: 10 },
      { type: 'blob', mode: '100644', path: 'LICENSE', sha: 'f'.repeat(40), size: 8 },
      { type: 'tree', path: 'agents/examples', sha: 'd'.repeat(40) },
    ], categories, validateExtraFiles(extras))

    assert.deepEqual(selected.map(({ category, path: filePath }) => [category, filePath]).sort((left, right) => left[1].localeCompare(right[1])), [
      ['agents', 'agents/architect.md'],
      ['hooks', 'hooks/hooks.json'],
      ['license', 'LICENSE'],
    ])
    assert.throws(() => selectSnapshotEntries([
      { type: 'blob', mode: '120000', path: 'agents/link.md', sha: 'e'.repeat(40), size: 10 },
    ], categories), /not permitted/)
  })

  it('rejects traversal and malformed category rules', () => {
    assert.throws(() => validateRelativePath('../outside.md'), /Unsafe upstream path/)
    assert.throws(() => validateRelativePath('agents\\outside.md'), /Unsafe upstream path/)
    assert.throws(() => validateSyncCategories({ unsafe: { prefix: '../', extensions: ['.md'] } }), /Unsafe upstream path/)
    assert.throws(() => validateSyncCategories({ scripts: { prefix: 'scripts/', extensions: ['.js; rm -rf'] } }), /Invalid file extensions/)
    assert.throws(() => validateExtraFiles([{ path: '../LICENSE', category: 'license' }]), /Unsafe upstream path/)
  })

  it('matches the checked-in sync allowlist', async () => {
    const syncMap = JSON.parse(await readFile(new URL('../upstream/sync-map.json', import.meta.url), 'utf8'))
    const categories = validateSyncCategories(syncMap.categories)
    const extras = validateExtraFiles(syncMap.extraFiles)

    assert.deepEqual(extras, [{ path: 'LICENSE', category: 'license' }])
    assert.deepEqual(Object.keys(categories), [
      'agents', 'skills', 'commands', 'rules', 'contexts', 'hooks-config', 'mcp-config', 'workflows',
    ])
    assert.equal(categories['hooks-config'].prefix, 'hooks/')
    assert.equal(categories.skills.extensions.includes('.js'), false)
  })
})
