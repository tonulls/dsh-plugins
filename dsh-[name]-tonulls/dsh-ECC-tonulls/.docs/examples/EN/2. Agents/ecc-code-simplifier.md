# `/ecc-code-simplifier` — Prompt Examples

## Purpose

Simplifies recently changed or explicitly specified code to improve clarity, consistency, and maintainability while preserving behavior. Keep the scope limited to the targeted sections.

## 1. Short Request

```text
/ecc-code-simplifier Simplify {file/section} without changing behavior. Do not expand the change scope; explain the result.
```

## 2. Template Request

```text
/ecc-code-simplifier Clean up {paths or recently changed section} in the context of {code goal}. Preserve public contracts and behavior; avoid architectural redesign. Change only {permitted scope}; before finishing, list the changes and available evidence that behavior was preserved. Do not install packages or access the network.
```

## 3. Detailed Request

```text
/ecc-code-simplifier Simplify {specific files/changed section} to improve {clarity/consistency/maintainability}. Treat external behavior and contracts as unchanged. Constraints: {permitted files, project style, compatibility}.

1. First determine the actual boundaries of the target code and study its callers, types, and existing conventions.
2. Identify only clear improvements to clarity or local duplication; explain why each preserves behavior.
3. Do not change public APIs, architecture, data formats, error handling, or neighboring modules unless necessary and separately approved.
4. Make minimal local edits only within the permitted scope. If simplification requires changing behavior or expanding scope, stop, describe the option, and request approval.
5. Do not install packages, use the network, or deploy. Do not run tests/checks without approval; do not claim a check you did not perform.

Response format: what was simplified and why, which contracts were preserved, files changed, evidence/checks, and remaining risks. If a section cannot be simplified safely, leave it unchanged and explain why.
```