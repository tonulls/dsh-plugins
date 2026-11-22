# Prompt Example: `/ecc-ruby-reviewer`

**Invocation command:** `/ecc-ruby-reviewer`

## Purpose

Reviews Ruby/Rails code for idiomatic style, Active Record safety, Rails security defaults, and RSpec/Minitest quality. Review only.

## 1. Short Request

```text
/ecc-ruby-reviewer Conduct a read-only review of Ruby/Rails changes in {path}.
```

## 2. Template Request

```text
/ecc-ruby-reviewer Conduct a read-only review of {paths/diff} in Ruby/Rails for {scenario}. Check Active Record for safe queries and N+1 issues, Rails protections, error handling, and relevant tests. Report high-confidence defects with file/line and recommendation; do not change code.
```

## 3. Detailed Request

```text
/ecc-ruby-reviewer Conduct a systematic analysis of task {scenario/change} for the ruby-reviewer.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: Ruby/Rails idioms, Active Record safety, Rails security defaults, and RSpec/Minitest quality. Review only.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```