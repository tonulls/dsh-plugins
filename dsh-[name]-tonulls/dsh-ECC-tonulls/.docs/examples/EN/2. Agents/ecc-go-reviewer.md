# `/ecc-go-reviewer`

**Purpose:** Reviews Go code for idiomatic style, concurrency, error handling, and performance. Use it for changes in Go projects.

## Short Prompt

```text
/ecc-go-reviewer Conduct a read-only review of this Go change, paying particular attention to concurrency and error handling.
```

## Template Prompt

```text
/ecc-go-reviewer
Context: [project path / excerpt / system / symptom].
Task: review the Go change for [goal or subject].
Focus: idiomatic style, concurrency, error handling, and performance hot paths.
Constraints: Read-only: do not modify files or run active or external checks.
Result format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt

```text
/ecc-go-reviewer
Perform the task “review the Go change” for [project/component/scenario].
1. Record the input, scope, and success criteria; list any missing information.
2. Study only task-relevant context and check idiomatic style, concurrency, error handling, and performance hot paths.
3. Present findings and next steps without making changes or stating assumptions as facts.
4. Compare the result with the criteria, provide evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Read-only: do not modify files or run active or external checks.
Report the outcome, important findings/actions, unchecked areas, risks, and safe next steps.
```