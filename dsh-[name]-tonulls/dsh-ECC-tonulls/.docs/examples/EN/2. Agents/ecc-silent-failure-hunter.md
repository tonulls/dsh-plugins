# Prompt Example: `/ecc-silent-failure-hunter`

**Invocation command:** `/ecc-silent-failure-hunter`

## Purpose

Finds silently hidden errors, swallowed exceptions, dangerous fallback branches, and missing error propagation. Review only.

## 1. Short Request

```text
/ecc-silent-failure-hunter Find places where errors in {path} may be hidden; do not change the code.
```

## 2. Template Request

```text
/ecc-silent-failure-hunter Conduct a read-only analysis of {files/diff}; trace failure paths for {operation}. Find empty catches, ignored results, masking fallbacks, and lost error propagation. Provide failure scenario, location, consequences, and a safe fix; do not modify files.
```

## 3. Detailed Request

```text
/ecc-silent-failure-hunter Conduct a systematic analysis of task {scenario/change} for the silent-failure-hunter.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: find silently hidden errors, swallowed exceptions, dangerous fallback branches, and missing error propagation. Review only.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```