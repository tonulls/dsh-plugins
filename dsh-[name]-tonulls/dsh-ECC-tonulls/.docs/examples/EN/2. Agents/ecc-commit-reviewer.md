# `/ecc-commit-reviewer`

**Purpose:** Reviews staged changes and suggests a Conventional Commits message based on the repository's actual history conventions. Use before committing or to review a commit message.

## Short Prompt

```text
/ecc-commit-reviewer Review the staged diff and suggest an exact Conventional Commits message. Do not commit anything.
```

## Template Prompt

```text
/ecc-commit-reviewer
Context: [project path / excerpt / system / symptom].
Task: review the prepared changes and compose a Conventional Commits message for [goal or subject].
Focus: staged diff, actual repository history conventions, type/scope/summary, and whether the message matches the changes.
Constraints: Read-only: do not modify files or run active or external checks.
Result format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt

```text
/ecc-commit-reviewer
Perform the task “review the prepared changes and compose a Conventional Commits message” for [project/component/scenario].
1. Record the input, scope, and success criteria; list any missing information.
2. Study only task-relevant context and check the staged diff, actual repository history conventions, type/scope/summary, and whether the message matches the changes.
3. Present findings and next steps without making changes or stating assumptions as facts.
4. Compare the result with the criteria, provide evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Read-only: do not modify files or run active or external checks.
Report the outcome, important findings/actions, unchecked areas, risks, and safe next steps.
```