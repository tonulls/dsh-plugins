# `/ecc-click-path-audit`

**Purpose:** Trace the complete state-change lifecycle for each button or interaction point. Find cases where features work individually but cancel one another, produce incorrect results, or leave the UI inconsistent. Use when systematic debugging has not explained button complaints or after a major refactor of shared state stores.

## Short Prompt
```text
/ecc-click-path-audit Trace state changes for these buttons and find scenarios where actions cancel each other or break the UI.
```

## Template Prompt
```text
/ecc-click-path-audit
Context: [project path / snippet / system / symptom].
Task: trace the full UI state-change lifecycle for every interaction point for [goal or subject].
Focus: button handlers, store/state transitions, side effects, and UI desynchronization.
Constraints: Read-only: do not modify files or run active/external checks.
Output format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt
```text
/ecc-click-path-audit
Perform the task “trace the full UI state-change lifecycle for every interaction point” for [project/component/scenario].
1. Record baseline information, scope, and success criteria; list missing information.
2. Study only relevant context and assess button handlers, store/state transitions, side effects, and UI desynchronization.
3. Form conclusions and next steps without applying changes or presenting assumptions as facts.
4. Compare results with criteria, cite evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Read-only: do not modify files or run active/external checks.
Include outcome, important findings/actions, unverified areas, risks, and safe next steps.
```
