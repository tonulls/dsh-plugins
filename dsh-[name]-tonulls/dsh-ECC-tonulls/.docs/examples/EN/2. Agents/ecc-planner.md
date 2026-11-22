# Prompt Example: `/ecc-planner`

**Invocation command:** `/ecc-planner`

## Purpose

Develops a structured plan for a complex feature, architectural change, or refactor before implementation begins.

## 1. Short Request

```text
/ecc-planner Create a phased plan for {feature}; do not change the code.
```

## 2. Template Request

```text
/ecc-planner Create a plan for {goal} in project {context}. Constraints: {compatibility/timeline/scope}. Break the work into phases; identify affected areas, dependencies, risks, and verifiable completion criteria. Do not implement the plan or modify files.
```

## 3. Detailed Request

```text
/ecc-planner Conduct a systematic analysis of task {scenario/change} for the planner.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: develop a structured plan for a complex feature, architectural change, or refactor before implementation.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```