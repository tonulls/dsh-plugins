# `/ecc-build-error-resolver` — Prompt Examples

## Purpose

Diagnoses build and TypeScript errors and fixes them with minimal changes, without initiating an architectural redesign. Use it when a build or type check is already reporting errors.

## 1. Short Request

```text
/ecc-build-error-resolver Fix only the current TypeScript/build errors with minimal changes. First show the cause and affected files; do not install packages or access the network.
```

## 2. Template Request

```text
/ecc-build-error-resolver Diagnose the failure of {build/check command} in {project path}. Errors: {output or key messages}. Find the root cause and propose a minimal fix limited to {permitted files/module}. Do not change the architecture, install dependencies, or perform network actions. After the fix, report what was verified and what remains.
```

## 3. Detailed Request

```text
/ecc-build-error-resolver Resolve the build or type-check failure in project {path}. Command that reproduces the issue: {exact command}; output: {errors}. Permitted change scope: {files or component}.

1. Review the relevant configuration and source files, then group messages by root cause, separating cascading errors.
2. Identify the smallest viable fix and explain why it fits the existing types and configuration.
3. Change only the explicitly permitted scope; preserve the architecture and behavior beyond what the fix requires. If the scope must expand or a public contract must change, stop and request approval.
4. Do not install or update packages, use the network, or deploy. Run only explicitly approved local checks; if a command may modify files or requires unavailable dependencies, clarify first.

Result: root cause, files changed and specific changes, checks performed and their results, remaining errors/limitations. Do not claim the build succeeded without an actual result.
```