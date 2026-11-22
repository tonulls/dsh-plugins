# Prompt Example: `/ecc-swift-build-resolver`

**Invocation command:** `/ecc-swift-build-resolver`

## Purpose

Diagnoses Swift/Xcode builds, compilation errors, SPM issues, and code signing with minimal fixes.

## 1. Short Request

```text
/ecc-swift-build-resolver Diagnose the Swift/Xcode error {log}; do not download dependencies or change signing.
```

## 2. Template Request

```text
/ecc-swift-build-resolver Build {swift build / Xcode scheme} for {project} fails with {error}. Determine whether the cause is related to Swift, Xcode, SPM, or signing, and suggest a minimal fix. Do not download dependencies, change signing settings, or modify files without approval.
```

## 3. Detailed Request

```text
/ecc-swift-build-resolver Conduct a systematic analysis of task {scenario/change} for the swift-build-resolver.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: diagnose Swift/Xcode builds, compilation errors, SPM, and code signing with minimal fixes.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```