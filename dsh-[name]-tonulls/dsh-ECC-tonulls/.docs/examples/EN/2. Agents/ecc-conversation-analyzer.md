# `/ecc-conversation-analyzer`

**Purpose:** Analyzes conversation transcripts and identifies behaviors that should be prevented with hooks. Invoked with `/hookify` without arguments.

## Short Prompt

```text
/ecc-conversation-analyzer Analyze this transcript and identify recurring behavior that could be prevented with a hook. Do not create the hook itself.
```

## Template Prompt

```text
/ecc-conversation-analyzer
Context: [project path / excerpt / system / symptom].
Task: find recurring behavior patterns in the conversation transcript and assess whether a hook should prevent them for [goal or subject].
Focus: observable excerpts, recurrence, false positives, and the minimal condition for a future hook.
Constraints: Read-only: do not modify files or run active or external checks.
Result format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt

```text
/ecc-conversation-analyzer
Perform the task “find recurring behavior patterns in the conversation transcript and assess whether a hook should prevent them” for [project/component/scenario].
1. Record the input, scope, and success criteria; list any missing information.
2. Study only task-relevant context and check observable excerpts, recurrence, false positives, and the minimal condition for a future hook.
3. Present findings and next steps without making changes or stating assumptions as facts.
4. Compare the result with the criteria, provide evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Read-only: do not modify files or run active or external checks.
Report the outcome, important findings/actions, unchecked areas, risks, and safe next steps.
```