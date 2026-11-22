# `/ecc-fsharp-reviewer` — Prompt Examples

## Purpose

Expertly reviews F# for functional idioms, type safety, pattern matching, computation expressions, and performance.

## Short Request

```text
/ecc-fsharp-reviewer Check {file/diff} for F# defects: types, pattern matching, computation expressions, and performance. Do not change anything.
```

## Template Request

```text
/ecc-fsharp-reviewer Conduct a read-only review of {module/change} in {path}. Check how types express invariants, pattern-match completeness, computation expression correctness, idiomatic style, and significant bottlenecks. Report confirmed findings with locations, consequences, and recommendations.
```

## Detailed Request

```text
/ecc-fsharp-reviewer Analyze the change {description} in the F# project at {path}, considering its purpose {context}.
1. Trace data transformations and assess how well types and constructs rule out invalid states.
2. Check pattern matching for incomplete or incorrect branches and review error handling.
3. Consider computation expressions and side effects in the context of the code in use; do not assume unknown semantics.
4. Report performance only when there is concrete evidence; distinguish risk from stylistic preference.

Format: findings by severity (file/line, scenario, effect, recommendation), followed by checked areas and unknowns. Analysis only: do not edit source files or install packages, access the network, or deploy without approval.
```