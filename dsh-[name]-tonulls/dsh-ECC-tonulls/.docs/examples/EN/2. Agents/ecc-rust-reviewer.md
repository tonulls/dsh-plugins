# Prompt Example: `/ecc-rust-reviewer`

**Invocation command:** `/ecc-rust-reviewer`

## Purpose

Reviews Rust code for ownership, lifetimes, error handling, `unsafe` usage, and idiomatic style. Does not modify files.

## 1. Short Request

```text
/ecc-rust-reviewer Check the Rust changes in {path} for ownership and error-handling issues; do not modify files.
```

## 2. Template Request

```text
/ecc-rust-reviewer Conduct a read-only review of Rust changes {files/diff}, especially {module}. Assess ownership/lifetime correctness, errors and panics, unsafe blocks, and concurrency. Provide findings with context, severity, and recommendation; do not rewrite code.
```

## 3. Detailed Request

```text
/ecc-rust-reviewer Conduct a systematic analysis of task {scenario/change} for the rust-reviewer.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: Rust ownership, lifetimes, error handling, unsafe usage, and idiomatic style. Do not modify files.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```