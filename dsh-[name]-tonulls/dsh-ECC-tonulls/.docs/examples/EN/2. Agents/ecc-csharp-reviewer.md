# `/ecc-csharp-reviewer`

**Purpose:** Reviews C# and .NET code for platform conventions, async behavior, security, nullable types, and performance. Use it for changes in C# projects.

## Short Prompt

```text
/ecc-csharp-reviewer Conduct a read-only review of this C#/.NET change, focusing on async, nullable, and security.
```

## Template Prompt

```text
/ecc-csharp-reviewer
Context: [project path / excerpt / system / symptom].
Task: review the C#/.NET change for [goal or subject].
Focus: async correctness, nullable reference types, security, and platform conventions.
Constraints: Read-only: do not modify files or run active or external checks.
Result format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt

```text
/ecc-csharp-reviewer
Perform the task “review the C#/.NET change” for [project/component/scenario].
1. Record the input, scope, and success criteria; list any missing information.
2. Study only task-relevant context and check async correctness, nullable reference types, security, and platform conventions.
3. Present findings and next steps without making changes or stating assumptions as facts.
4. Compare the result with the criteria, provide evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Read-only: do not modify files or run active or external checks.
Report the outcome, important findings/actions, unchecked areas, risks, and safe next steps.
```