# Prompt Example: `/ecc-loop-operator`

**Invocation command:** `/ecc-loop-operator`

## Purpose

Safely monitors autonomous agent loops, detects stalls and repeated failures, and identifies pause and recovery conditions.

## 1. Short Request

```text
/ecc-loop-operator Using the available checkpoints, assess whether loop {identifier} has stopped safely.
```

## 2. Template Request

```text
/ecc-loop-operator Assess the state of loop {name/identifier} using available logs and checkpoints. Without starting, stopping, or changing the loop, report progress, signs of stagnation, budget/retries, quality gates, baseline, and rollback; suggest a safe next action.
```

## 3. Detailed Request

```text
/ecc-loop-operator Conduct a systematic analysis of task {scenario/change} for the loop-operator.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: safely monitor autonomous agent loops, detect stalls and repeated failures, and identify pause and recovery conditions.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, starting a loop, or applying configuration.
```