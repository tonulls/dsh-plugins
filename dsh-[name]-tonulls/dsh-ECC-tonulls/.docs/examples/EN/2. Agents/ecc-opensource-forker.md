# Prompt Example: `/ecc-opensource-forker`

**Invocation command:** `/ecc-opensource-forker`

## Purpose

Prepares a project copy for open publication: identifies secrets/internal links and proposes sanitization; the operation affects files and history.

## 1. Short Request

```text
/ecc-opensource-forker Prepare a read-only list of risks before open-sourcing project {path}; do not copy or delete anything.
```

## 2. Template Request

```text
/ecc-opensource-forker Assess project {path} for preparing a public copy. Start with inventory only: secret risks (do not show their values), PII, internal links, and history; propose a copy/sanitization plan. Do not create a copy, delete or rewrite files, or rewrite Git history without separate approval. Do not publish.
```

## 3. Detailed Request

```text
/ecc-opensource-forker Conduct a systematic analysis of task {scenario/change} for the opensource-forker.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: identify secrets/internal links and propose sanitization; the operation affects files and history.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```