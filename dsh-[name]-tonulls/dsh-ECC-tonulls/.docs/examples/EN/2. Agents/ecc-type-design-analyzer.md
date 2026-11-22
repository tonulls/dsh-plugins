# Prompt Example: `/ecc-type-design-analyzer`

**Invocation command:** `/ecc-type-design-analyzer`

## Purpose

Analyzes type design: encapsulation, expression of invariants, practical usefulness, and enforceability.

## 1. Short Request

```text
/ecc-type-design-analyzer Analyze type invariants in {path}; do not change the code.
```

## 2. Template Request

```text
/ecc-type-design-analyzer Assess types in {files/section} for domain {context}. For each key type, check which invalid states it permits, whether invariants are expressed in the API, and who can violate them. Suggest alternatives and trade-offs; do not change the code.
```

## 3. Detailed Request

```text
/ecc-type-design-analyzer Conduct a systematic analysis of task {scenario/change} for the type-design-analyzer.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: encapsulation, expression of invariants, practical usefulness, and enforceability.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```