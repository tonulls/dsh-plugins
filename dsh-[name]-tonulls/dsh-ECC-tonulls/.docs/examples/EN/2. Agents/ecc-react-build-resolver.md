# Prompt Example: `/ecc-react-build-resolver`

**Invocation command:** `/ecc-react-build-resolver`

## Purpose

Finds and resolves React build failures with minimal changes: JSX/TSX, hydration, server/client boundaries, types, and bundler settings.

## 1. Short Request

```text
/ecc-react-build-resolver Diagnose the React build error {log}; do not install packages.
```

## 2. Template Request

```text
/ecc-react-build-resolver The React project build {Vite/webpack/Next.js/other} fails with error {log}. Find the root cause in the changed files and suggest a minimal fix. Do not install packages or access the network; ask for approval before edits or commands with side effects.
```

## 3. Detailed Request

```text
/ecc-react-build-resolver Conduct a systematic analysis of task {scenario/change} for the react-build-resolver.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: JSX/TSX, hydration, server/client boundaries, types, and bundler settings.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```