import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { parseCommandSource, renderCommand } from './build-commands-catalog.mjs'

describe('ECC command adaptation', () => {
  it('reads plain and quoted inert descriptions and strips command frontmatter', () => {
    const plain = parseCommandSource('---\ndescription: Find and fix local build errors.\nargument-hint: "[path]"\n---\n\n# Build Fix\nRepair only the requested project.\n', 'commands/build-fix.md')
    const quoted = parseCommandSource('---\ndescription: "Review: local code only."\ndisable-model-invocation: true\n---\n\nReview safely.\n', 'commands/review.md')

    assert.equal(plain.description, 'Find and fix local build errors.')
    assert.equal(plain.body, '# Build Fix\nRepair only the requested project.')
    assert.equal(quoted.description, 'Review: local code only.')
    assert.equal(quoted.body, 'Review safely.')
  })

  it('rejects malformed, tagged, empty, or unsupported command metadata', () => {
    assert.throws(() => parseCommandSource('description: missing header', 'commands/missing.md'), /no YAML frontmatter/)
    assert.throws(() => parseCommandSource('---\nname: no-description\n---\n\nBody', 'commands/no-description.md'), /exactly one description/)
    assert.throws(() => parseCommandSource('---\ndescription: !!js/function alert\n---\n\nBody', 'commands/tagged.md'), /Unsupported command description/)
    assert.throws(() => parseCommandSource('---\ndescription: >-\n  folded value\n---\n\nBody', 'commands/folded.md'), /Unsupported command description/)
    assert.throws(() => parseCommandSource('---\ndescription:\n---\n\nBody', 'commands/empty.md'), /Unsupported command description/)
  })

  it('wraps the prompt with explicit DSH invocation and no implicit permissions', () => {
    const adapted = renderCommand({
      name: 'test-coverage',
      notes: 'Use local tools only.',
      body: 'Run tests and report missing coverage.',
      commit: 'b'.repeat(40),
      sourcePath: 'commands/test-coverage.md',
    })

    assert.match(adapted, /explicitly invokes \/ecc-command-test-coverage/)
    assert.match(adapted, /current DSH session/)
    assert.match(adapted, /Do not install or download helpers/)
    assert.match(adapted, /A command prompt does not grant permissions/)
    assert.match(adapted, /blob\/b{40}\/commands\/test-coverage\.md/)
    assert.match(adapted, /Run tests and report missing coverage\./)
  })
})
