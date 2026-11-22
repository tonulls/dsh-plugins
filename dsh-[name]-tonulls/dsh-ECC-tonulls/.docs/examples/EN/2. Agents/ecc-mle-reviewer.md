# Prompt Example: `/ecc-mle-reviewer`

**Invocation command:** `/ecc-mle-reviewer`

## Purpose

Reviews production ML/MLOps: data contracts, pipelines, reproducibility, evaluation, serving, monitoring, and rollback. Does not modify files.

## 1. Short Request

```text
/ecc-mle-reviewer Review the ML-pipeline changes for reproducibility and serving risks; do not edit files.
```

## 2. Template Request

```text
/ecc-mle-reviewer Conduct a read-only review of changes {paths/diff} in ML component {description}. Check train/serve consistency, reproducibility, data leakage, offline/online metrics, monitoring, and rollback. Report only substantiated findings with evidence and priority.
```

## 3. Detailed Request

```text
/ecc-mle-reviewer Conduct a systematic analysis of task {scenario/change} for the mle-reviewer.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: data contracts, pipelines, reproducibility, evaluation, serving, monitoring, and rollback. Do not modify files.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```