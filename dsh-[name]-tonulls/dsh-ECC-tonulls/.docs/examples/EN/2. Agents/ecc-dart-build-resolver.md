# `/ecc-dart-build-resolver`

**Purpose:** Diagnoses and minimally fixes `dart analyze`, Flutter build, pub dependency conflict, and `build_runner` errors. Use it for Dart/Flutter build failures.

## Short Prompt

```text
/ecc-dart-build-resolver Diagnose the dart analyze and Flutter build errors; fix only the confirmed cause without installing packages.
```

## Template Prompt

```text
/ecc-dart-build-resolver
Context: [project path / excerpt / system / symptom].
Task: minimally fix Dart/Flutter analysis or build errors for [goal or subject].
Focus: dart analyze/Flutter output, pub/build_runner conflicts, and the confirmed root cause.
Constraints: Make only minimal changes within [permitted scope], using tools already available locally; do not install or download anything. Stop and ask for approval before broadening the change.
Result format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt

```text
/ecc-dart-build-resolver
Perform the task “minimally fix Dart/Flutter analysis or build errors” for [project/component/scenario].
1. Record the input, scope, and success criteria; list any missing information.
2. Study only task-relevant context and check dart analyze/Flutter output, pub/build_runner conflicts, and the confirmed root cause.
3. Make a minimal fix only after confirming the root cause, then repeat an appropriate local check.
4. Compare the result with the criteria, provide evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Make only minimal changes within [permitted scope], using tools already available locally; do not install or download anything. Stop and ask for approval before broadening the change.
Report the outcome, important findings/actions, unchecked areas, risks, and safe next steps.
```