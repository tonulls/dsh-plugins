# Prompt Example: `/ecc-kotlin-reviewer`

**Invocation command:** `/ecc-kotlin-reviewer`

## Purpose

Reviews Kotlin/Android/KMP code: idioms, coroutines/Flow, Compose, architectural boundaries, and common Android risks. Reports findings only; does not modify files.

## 1. Short Request

```text
/ecc-kotlin-reviewer Check the Kotlin code for coroutine and Compose issues; do not change anything.
```

## 2. Template Request

```text
/ecc-kotlin-reviewer Conduct a read-only review of {changed_files_or_diff} for {Android/KMP/Compose}. Check coroutine cancellation, Flow, lifecycle, Compose recomposition, and module boundaries; report only high-confidence issues with location, rationale, and fix.
```

## 3. Detailed Request

```text
/ecc-kotlin-reviewer Conduct a systematic analysis of task {scenario/change} for the kotlin-reviewer.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: idioms, coroutines/Flow, Compose, architectural boundaries, and common Android risks. Report findings only; do not modify files.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```