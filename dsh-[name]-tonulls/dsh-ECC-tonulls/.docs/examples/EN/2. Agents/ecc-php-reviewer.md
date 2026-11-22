# Prompt Example: `/ecc-php-reviewer`

**Invocation command:** `/ecc-php-reviewer`

## Purpose

Reviews PHP code for PSR-12, type correctness, safe Eloquent patterns, vulnerabilities, and performance. Reports findings only; makes no edits.

## 1. Short Request

```text
/ecc-php-reviewer Conduct a read-only review of PHP changes in {path} for security and type issues.
```

## 2. Template Request

```text
/ecc-php-reviewer Conduct a read-only review of PHP changes {paths/diff} in the context of {feature/framework}. Check PSR-12, types, Eloquent queries, input security, and performance. For each high-confidence finding, provide file/line, risk, and a fix option; do not change the code.
```

## 3. Detailed Request

```text
/ecc-php-reviewer Conduct a systematic analysis of task {scenario/change} for the php-reviewer.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: review PHP code for PSR-12, type correctness, safe Eloquent patterns, vulnerabilities, and performance. Report findings only; make no edits.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```