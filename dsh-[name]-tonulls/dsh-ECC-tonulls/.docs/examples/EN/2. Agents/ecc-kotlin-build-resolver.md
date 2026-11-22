# Prompt Example: `/ecc-kotlin-build-resolver`

**Invocation command:** `/ecc-kotlin-build-resolver`

## Purpose

Finds and minimally resolves Kotlin and Gradle build/compilation errors.

## 1. Short Request

```text
/ecc-kotlin-build-resolver Help find the cause of this Kotlin/Gradle error: {paste error message}.
```

## 2. Template Request

```text
/ecc-kotlin-build-resolver In project {module}, {build_command} fails with this error: {error_text}. Find the root cause in the Kotlin/Gradle configuration and suggest a minimal fix. Do not install dependencies or access the network; ask for approval before modifying files or running commands that make changes.
```

## 3. Detailed Request

```text
/ecc-kotlin-build-resolver Conduct a systematic analysis of task {scenario/change} for the kotlin-build-resolver.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: find and minimally resolve Kotlin and Gradle build/compilation errors.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```