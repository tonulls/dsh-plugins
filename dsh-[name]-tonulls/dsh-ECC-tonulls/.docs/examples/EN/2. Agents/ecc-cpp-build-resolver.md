# `/ecc-cpp-build-resolver`

**Purpose:** Diagnoses and minimally fixes C++/CMake build, linking, and template errors. Use when a C++ build fails.

## Short Prompt

```text
/ecc-cpp-build-resolver Diagnose the current C++/CMake build error and minimally fix the confirmed cause. Do not install dependencies.
```

## Template Prompt

```text
/ecc-cpp-build-resolver
Context: [project path / excerpt / system / symptom].
Task: diagnose and minimally fix a C++/CMake build error for [goal or subject].
Focus: root cause of the compilation/linking/template error, minimal diff, and local verification.
Constraints: Make only minimal changes within [permitted scope], using tools already available locally; do not install or download anything. Stop and ask for approval before broadening the change.
Result format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt

```text
/ecc-cpp-build-resolver
Perform the task “diagnose and minimally fix the C++/CMake build error” for [project/component/scenario].
1. Record the input, scope, and success criteria; list any missing information.
2. Study only task-relevant context and check the root cause of the compilation/linking/template error, the minimal diff, and local verification.
3. Make a minimal fix only after confirming the root cause, then repeat an appropriate local check.
4. Compare the result with the criteria, provide evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Make only minimal changes within [permitted scope], using tools already available locally; do not install or download anything. Stop and ask for approval before broadening the change.
Report the outcome, important findings/actions, unchecked areas, risks, and safe next steps.
```