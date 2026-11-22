# Prompt Example: `/ecc-swift-reviewer`

**Invocation command:** `/ecc-swift-reviewer`

## Purpose

Reviews Swift code for protocol-oriented design, value semantics, ARC, Swift Concurrency, and idiomatic style. Does not modify files.

## 1. Short Request

```text
/ecc-swift-reviewer Conduct a read-only review of Swift changes in {path}.
```

## 2. Template Request

```text
/ecc-swift-reviewer Conduct a read-only review of Swift changes {files/diff} in the context of {scenario}. Check value/reference semantics, ARC cycles, concurrency and actor isolation, API design, and error handling. Report only specific findings with location, impact, and recommendation.
```

## 3. Detailed Request

```text
/ecc-swift-reviewer Conduct a systematic analysis of task {scenario/change} for the swift-reviewer.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: Swift protocol-oriented design, value semantics, ARC, Swift Concurrency, and idiomatic style. Do not modify files.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```