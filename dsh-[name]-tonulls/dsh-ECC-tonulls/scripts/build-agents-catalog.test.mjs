import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { parseAgentSource, renderAgentRole } from './build-agents-catalog.mjs'

describe('ECC agent adaptation', () => {
  it('parses the small single-line frontmatter subset used by ECC agents', () => {
    assert.deepEqual(parseAgentSource('---\nname: reviewer\ndescription: A code: review role.\nmodel: sonnet\n---\n\nReview carefully.\n', 'agents/reviewer.md'), {
      name: 'reviewer',
      description: 'A code: review role.',
      body: 'Review carefully.\n',
    })
    assert.equal(parseAgentSource('---\nname: quoted\ndescription: "A \\"quoted\\" role."\n---\n\nBody.\n', 'agents/quoted.md').description, 'A "quoted" role.')
    assert.equal(parseAgentSource("---\nname: apostrophe\ndescription: 'A reviewer''s role.'\n---\n\nBody.\n", 'agents/apostrophe.md').description, "A reviewer's role.")
  })

  it('rejects incomplete or unsupported metadata instead of publishing a partial catalog', () => {
    assert.throws(() => parseAgentSource('name: reviewer\n\nBody', 'agents/reviewer.md'), /no YAML frontmatter/)
    assert.throws(() => parseAgentSource('---\nname: reviewer\n---\n\nBody', 'agents/reviewer.md'), /exactly one description/)
    assert.throws(() => parseAgentSource('---\nname: Bad_Name\ndescription: Role\n---\n\nBody', 'agents/reviewer.md'), /invalid name/)
    assert.throws(() => parseAgentSource('---\nname: reviewer\ndescription: "unclosed\n---\n\nBody', 'agents/reviewer.md'), /Unsupported quoted description/)
  })

  it('adds a model-neutral, user-authorized DSH wrapper to role content', () => {
    const adapted = renderAgentRole({
      name: 'reviewer',
      body: 'Use the Read tool.',
      commit: 'a'.repeat(40),
      sourcePath: 'agents/reviewer.md',
    })

    assert.match(adapted, /current DSH session/)
    assert.match(adapted, /does not start a separate agent or process/)
    assert.match(adapted, /This role does not grant permissions/)
    assert.match(adapted, /blob\/[a-f0-9]{40}\/agents\/reviewer\.md/)
    assert.match(adapted, /Use the Read tool\./)
  })

  it('calls out write-capable forker and sanitizer procedures', () => {
    const forker = renderAgentRole({
      name: 'opensource-forker',
      body: 'Create a fork.',
      commit: 'b'.repeat(40),
      sourcePath: 'agents/opensource-forker.md',
    })
    assert.match(forker, /writes `\.git\/info\/exclude`/)
    assert.match(forker, /explicit user authorization/)

    const sanitizer = renderAgentRole({
      name: 'opensource-sanitizer',
      body: 'Audit the repository.',
      commit: 'b'.repeat(40),
      sourcePath: 'agents/opensource-sanitizer.md',
    })
    assert.match(sanitizer, /upstream read-only label/)
    assert.match(sanitizer, /UNREADABLE_FILES\.txt/)
    assert.match(sanitizer, /read-only request/)
  })
})
