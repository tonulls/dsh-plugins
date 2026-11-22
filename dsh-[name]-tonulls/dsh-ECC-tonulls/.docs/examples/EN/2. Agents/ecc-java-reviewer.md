# Prompt Example: `/ecc-java-reviewer`

**Invocation command:** `/ecc-java-reviewer`

## Purpose

Reviews Java code in Spring Boot or Quarkus: identifies the framework and assesses layered architecture, ORM, security, concurrency, and tests. Reports findings only; does not rewrite code.

## 1. Short Request

```text
/ecc-java-reviewer Conduct a read-only review of the changed Java files and list only confirmed issues.
```

## 2. Template Request

```text
/ecc-java-reviewer Review the changed Java files in {path_or_diff}. Identify Spring Boot or Quarkus from the build files and consider the call context. Do not modify files. For each confirmed finding, provide severity, file/line, risk, and recommendation; finish with a verdict.
```

## 3. Detailed Request

```text
/ecc-java-reviewer Conduct a systematic analysis of task {scenario/change}.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: identify the framework and assess layered architecture, ORM, security, concurrency, and tests. Report findings only; do not rewrite code.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```