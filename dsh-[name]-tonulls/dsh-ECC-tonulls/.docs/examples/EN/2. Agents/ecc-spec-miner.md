# Prompt Example: `/ecc-spec-miner`

**Invocation command:** `/ecc-spec-miner`

## Purpose

Extracts behavioral requirements and invariants from existing code for OpenSpec, linked to entities and tests.

## 1. Short Request

```text
/ecc-spec-miner Extract requirements and invariants for capability {name} from {path}; do not create files.
```

## 2. Template Request

```text
/ecc-spec-miner Extract specifications of existing behavior for capability {name} from {paths}. Compare code and tests; present requirements and invariants with entities, enforcement mechanism, stable ID, and test anchors. Do not invent missing behavior; show the result in your response first and do not create spec.md without approval.
```

## 3. Detailed Request

```text
/ecc-spec-miner Conduct a systematic analysis of task {scenario/change} for the spec-miner.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: extract behavioral requirements and invariants from existing code for OpenSpec, linked to entities and tests.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```