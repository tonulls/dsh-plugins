# Prompt Example: `/ecc-tdd-guide`

**Invocation command:** `/ecc-tdd-guide`

## Purpose

Helps guide test-driven development: first define behavior and verification, then implement minimally; aims for high test coverage.

## 1. Short Request

```text
/ecc-tdd-guide Suggest the first test for behavior {description}; provide a plan only for now.
```

## 2. Template Request

```text
/ecc-tdd-guide For change {feature/defect}, suggest a TDD sequence: scenarios and assertions, the first failing test, minimal implementation, then regression checks and coverage assessment. Do not modify files or run commands that make changes without approval; do not pursue a percentage at the expense of meaningful scenarios.
```

## 3. Detailed Request

```text
/ecc-tdd-guide Conduct a systematic analysis of task {scenario/change} for the tdd-guide.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: define behavior and verification first, then implement minimally; aim for high test coverage.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```