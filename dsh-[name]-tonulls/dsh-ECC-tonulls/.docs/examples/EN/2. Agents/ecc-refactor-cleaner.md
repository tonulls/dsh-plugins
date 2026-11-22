# Prompt Example: `/ecc-refactor-cleaner`

**Invocation command:** `/ecc-refactor-cleaner`

## Purpose

Finds unused and duplicate code for safe cleanup and consolidation; deletions require approval.

## 1. Short Request

```text
/ecc-refactor-cleaner Find deletion candidates in {area}, but do not delete or modify files.
```

## 2. Template Request

```text
/ecc-refactor-cleaner Analyze {folders/modules} for unused code and duplicates. Account for dynamic imports, public APIs, and code generation. First present candidates with evidence and false-positive risk; do not install tools or delete/modify files without my approval.
```

## 3. Detailed Request

```text
/ecc-refactor-cleaner Conduct a systematic analysis of task {scenario/change} for the refactor-cleaner.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: find unused and duplicate code for safe cleanup and consolidation; deletions require approval.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```