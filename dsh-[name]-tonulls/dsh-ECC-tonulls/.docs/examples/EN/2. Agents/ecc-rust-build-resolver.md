# Prompt Example: `/ecc-rust-build-resolver`

**Invocation command:** `/ecc-rust-build-resolver`

## Purpose

Diagnoses and minimally fixes Rust build, borrow checker, and Cargo.toml errors.

## 1. Short Request

```text
/ecc-rust-build-resolver Diagnose the cargo error {log} and identify a minimal fix without adding dependencies.
```

## 2. Template Request

```text
/ecc-rust-build-resolver Command {cargo check/build/test} in crate {name} fails with {log}. Trace types, ownership/borrowing, and Cargo configuration; suggest a focused fix. Do not add dependencies, perform network actions, or modify files without approval.
```

## 3. Detailed Request

```text
/ecc-rust-build-resolver Conduct a systematic analysis of task {scenario/change} for the rust-build-resolver.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: diagnose and minimally fix Rust build, borrow checker, and Cargo.toml errors.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```