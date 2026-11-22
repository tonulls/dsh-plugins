# `/ecc-flutter-reviewer` — Prompt Examples

## Purpose

Reviews Flutter/Dart code regardless of the selected state-management library, assessing widgets, state architecture, Dart idioms, performance, and accessibility.

## Short Request

```text
/ecc-flutter-reviewer Check {screen/widget} for Flutter errors, state management, performance, and accessibility. Analysis only; no edits.
```

## Template Request

```text
/ecc-flutter-reviewer Perform a read-only review of changes in {paths/diff} for a Flutter application. Consider the state-management solution used here {if known}, widget lifecycle, rebuilds, Dart idioms, and accessibility. For each finding, provide evidence, impact, and a practical recommendation.
```

## Detailed Request

```text
/ecc-flutter-reviewer Analyze the change to {screen/flow} in {paths}; do not assume a specific state-management library beyond what you find in the project.
1. Check widget boundaries and composition, state and asynchronous updates, and lifecycle correctness.
2. Identify unnecessary rebuilds or expensive rendering operations when supported by the code.
3. Assess interaction accessibility: semantics, focus/keyboard behavior, and readability of the flow on supported platforms.
4. Check Dart idioms and architectural issues that affect behavior or maintenance; do not present stylistic preferences as defects.

Format: prioritized findings with file/line, triggering condition, consequence, and recommendation, followed by checked aspects and gaps. Analysis only—do not change code or install dependencies; do not access the network or deploy without approval.
```