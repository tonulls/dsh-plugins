import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { parseSkillSource, renderSkill } from './build-skills-catalog.mjs'

describe('ECC skill adaptation', () => {
  it('parses plain, quoted, folded, and literal YAML description scalars', () => {
    assert.equal(parseSkillSource('---\nname: plain-skill\ndescription: Guidance with a colon: value.\n---\n\nBody.\n', 'skills/plain-skill/SKILL.md').description, 'Guidance with a colon: value.')
    assert.equal(parseSkillSource('---\nname: quoted-skill\ndescription: "Quoted guidance."\n---\n\nBody.\n', 'skills/quoted-skill/SKILL.md').description, 'Quoted guidance.')
    assert.equal(parseSkillSource('---\nname: folded-skill\ndescription: >-\n  First line of guidance.\n  Second line follows.\nmetadata:\n  origin: ECC\n---\n\nBody.\n', 'skills/folded-skill/SKILL.md').description, 'First line of guidance. Second line follows.')
    assert.equal(parseSkillSource('---\nname: literal-skill\ndescription: |-\n  First line.\n  Second line.\nmetadata:\n  origin: ECC\n---\n\nBody.\n', 'skills/literal-skill/SKILL.md').description, 'First line.\nSecond line.')
  })

  it('rejects malformed or non-string frontmatter rather than exposing a partial skill', () => {
    assert.throws(() => parseSkillSource('name: missing-frontmatter\n', 'skills/missing/SKILL.md'), /no YAML frontmatter/)
    assert.throws(() => parseSkillSource('---\nname: invalid_name\ndescription: Text\n---\n\nBody', 'skills/invalid/SKILL.md'), /invalid name/)
    assert.throws(() => parseSkillSource('---\nname: tagged\ndescription: !!js/function alert\n---\n\nBody', 'skills/tagged/SKILL.md'), /Unsupported YAML tag/)
    assert.throws(() => parseSkillSource('---\nname: empty-description\ndescription:\n---\n\nBody', 'skills/empty/SKILL.md'), /Unsupported empty description/)
  })

  it('adds explicit DSH capability and side-effect limits', () => {
    const adapted = renderSkill({
      name: 'sample',
      body: 'Use the upstream script if it exists.',
      commit: 'a'.repeat(40),
      sourcePath: 'skills/sample/SKILL.md',
    })

    assert.match(adapted, /explicitly invokes its `\/ecc-\*` command/)
    assert.match(adapted, /does not start a separate agent or process/)
    assert.match(adapted, /does not install, download, or execute upstream scripts/)
    assert.match(adapted, /This instruction grants no permissions/)
    assert.match(adapted, /blob\/[a-f0-9]{40}\/skills\/sample\/SKILL\.md/)
    assert.match(adapted, /Use the upstream script if it exists\./)
  })

  it('adds DSH-specific cautions to risky copy-paste examples', () => {
    const fastapi = renderSkill({
      name: 'fastapi-patterns',
      body: 'Create a database schema at startup.',
      commit: 'b'.repeat(40),
      sourcePath: 'skills/fastapi-patterns/SKILL.md',
    })
    assert.match(fastapi, /Base\.metadata\.create_all\(\)/)
    assert.match(fastapi, /development\/demo only/)
    assert.match(fastapi, /reviewed migrations such as Alembic/)

    const laravel = renderSkill({
      name: 'laravel-security',
      body: 'Load deployment secrets.',
      commit: 'b'.repeat(40),
      sourcePath: 'skills/laravel-security/SKILL.md',
    })
    assert.match(laravel, /AWS Secrets Manager example/)
    assert.match(laravel, /Do not copy or run it as-is/)
    assert.match(laravel, /platform-managed secret injection/)
  })
})
