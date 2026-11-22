# Prompt Example: `/ecc-typescript-reviewer`

**Invocation command:** `/ecc-typescript-reviewer`

## Purpose

Reviews TypeScript/JavaScript for type safety, async behavior, Node/web security, and idiomatic style. Report only; make no edits.

## 1. Short Request

```text
/ecc-typescript-reviewer Conduct a read-only review of TS/JS changes in {path}.
```

## 2. Template Request

```text
/ecc-typescript-reviewer Conduct a read-only review of {files/diff} in the {Node/web} application. Check type boundaries and external data validation, async errors/races, security, and idiomatic style. Do not modify files; list findings with exact locations, evidence, severity, and recommendation.
```

## 3. Detailed Request

```text
/ecc-typescript-reviewer Conduct a systematic analysis of task {scenario/change} for the typescript-reviewer.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: TypeScript/JavaScript type safety, async behavior, Node/web security, and idiomatic style. Report only; make no edits.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```