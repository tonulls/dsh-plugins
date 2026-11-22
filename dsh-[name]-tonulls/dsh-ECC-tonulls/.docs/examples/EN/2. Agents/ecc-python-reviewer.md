# Prompt Example: `/ecc-python-reviewer`

**Invocation command:** `/ecc-python-reviewer`

## Purpose

Reviews Python code for PEP 8, idiomatic style, type annotations, security, and performance. Does not edit files.

## 1. Short Request

```text
/ecc-python-reviewer Conduct a read-only review of Python code in {path}; report only actual findings.
```

## 2. Template Request

```text
/ecc-python-reviewer Conduct a read-only review of {files/diff} in Python code for {purpose}. Check types, error handling, input-boundary security, and efficiency; distinguish actual defects from style. Report only confirmed findings with location and recommendation, without modifying files.
```

## 3. Detailed Request

```text
/ecc-python-reviewer Conduct a systematic analysis of task {scenario/change} for the python-reviewer.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: review Python code for PEP 8, idiomatic style, type annotations, security, and performance. Do not edit files.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```