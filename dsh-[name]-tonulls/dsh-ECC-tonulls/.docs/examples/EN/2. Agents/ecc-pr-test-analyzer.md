# Prompt Example: `/ecc-pr-test-analyzer`

**Invocation command:** `/ecc-pr-test-analyzer`

## Purpose

Assesses the completeness and value of PR test coverage, focusing on behavior and preventing real regressions.

## 1. Short Request

```text
/ecc-pr-test-analyzer Check which important behaviors in PR {link/number} are not covered by tests; do not modify files.
```

## 2. Template Request

```text
/ecc-pr-test-analyzer Conduct a read-only analysis of test coverage for PR {number/diff} against behavior {change}. Identify untested scenarios, weak assertions, and tests that would miss likely bugs. Link each recommendation to a requirement/risk; do not modify files or tests.
```

## 3. Detailed Request

```text
/ecc-pr-test-analyzer Conduct a systematic analysis of task {scenario/change} for the pr-test-analyzer.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: assess PR test coverage completeness and value, focusing on behavior and preventing real regressions.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, starting a loop, or applying configuration.
```