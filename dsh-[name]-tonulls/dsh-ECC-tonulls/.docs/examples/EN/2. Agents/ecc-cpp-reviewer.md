# `/ecc-cpp-reviewer`

**Purpose:** Reviews C++ code for memory safety, modern language idioms, concurrency, and performance. Use it for changes in C++ projects.

## Short Prompt

```text
/ecc-cpp-reviewer Conduct a read-only review of this C++ change, focusing primarily on memory and concurrency risks.
```

## Template Prompt

```text
/ecc-cpp-reviewer
Context: [project path / excerpt / system / symptom].
Task: review the C++ change for defects and risks affecting [goal or subject].
Focus: memory ownership and lifetime, undefined behavior, concurrency, modern idioms, and performance.
Constraints: Read-only: do not modify files or run active or external checks.
Result format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt

```text
/ecc-cpp-reviewer
Perform the task “review the C++ change for defects and risks” for [project/component/scenario].
1. Record the input, scope, and success criteria; list any missing information.
2. Study only task-relevant context and check memory ownership and lifetime, undefined behavior, concurrency, modern idioms, and performance.
3. Present findings and next steps without making changes or stating assumptions as facts.
4. Compare the result with the criteria, provide evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Read-only: do not modify files or run active or external checks.
Report the outcome, important findings/actions, unchecked areas, risks, and safe next steps.
```