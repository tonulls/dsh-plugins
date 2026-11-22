# Prompt Example: `/ecc-opensource-sanitizer`

**Invocation command:** `/ecc-opensource-sanitizer`

## Purpose

Checks a public copy for secrets, personal data, internal links, and dangerous files, and reports PASS/FAIL/PASS-WITH-WARNINGS. Analysis only.

## 1. Short Request

```text
/ecc-opensource-sanitizer Check public copy {path} for leaks and provide a brief status without changing files.
```

## 2. Template Request

```text
/ecc-opensource-sanitizer Conduct a read-only check of the prepared copy {path} before publication. Do not reveal detected secret/PII values; provide the file and safe context, category, and severity. Check internal links and dangerous files, and produce PASS/FAIL/PASS-WITH-WARNINGS with verification limitations. Do not fix files.
```

## 3. Detailed Request

```text
/ecc-opensource-sanitizer Conduct a systematic analysis of task {scenario/change} for the opensource-sanitizer.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: check a public copy for secrets, personal data, internal links, and dangerous files, and report PASS/FAIL/PASS-WITH-WARNINGS. Analysis only.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```