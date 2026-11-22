# `/ecc-go-build-resolver` — Prompt Examples

## Purpose

Resolves Go build and compilation errors, `go vet` findings, and linter issues with minimal changes, without turning diagnosis into architectural refactoring.

## Short Request

```text
/ecc-go-build-resolver Diagnose the Go error: {output/command}. Find the root cause and make a minimal fix without expanding the change scope.
```

## Template Request

```text
/ecc-go-build-resolver In {project path}, resolve {go build/go vet/linter error}; output: {text}. First inspect the module and affected code; fix only the cause with a minimal diff. Do not update dependencies, and explain the result of the authorized check.
```

## Detailed Request

```text
/ecc-go-build-resolver Restore the Go project build at {path} after error {command and full output}.
1. Find the affected packages and trace the message to its root cause, separating cascading errors.
2. Check the consistency of types, imports, and APIs in use; for vet/linter findings, assess whether the warning indicates a real defect.
3. Make a minimal local fix without changing the architecture or public behavior unless necessary.
4. Run only the authorized check {command}; if it is unavailable or prohibited, do not present the fix as verified.

Format: root cause, changed files and rationale, check performed and its exact result, remaining errors. Do not install packages, access the network, or deploy without approval; do not change unrelated files.
```