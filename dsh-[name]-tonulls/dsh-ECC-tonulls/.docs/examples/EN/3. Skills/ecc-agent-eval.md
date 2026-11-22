# `/ecc-agent-eval`

**Purpose:** Compares coding agents (Claude Code, Aider, Codex, etc.) on user tasks by completion rate, cost, time, and stability. Use when choosing an agent or evaluating configuration changes using measurable metrics.

## Short Prompt
```text
/ecc-agent-eval Create a fair plan to compare two coding agents on the same task set and metrics.
```

## Template Prompt
```text
/ecc-agent-eval
Context: [project path / snippet / system / symptom].
Task: compare coding agents on identical user tasks for [goal or subject].
Focus: success rate, cost, time, stability, identical conditions, and measurement limitations.
Constraints: Provide recommendations; do not apply changes, send messages, or publish.
Output format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt
```text
/ecc-agent-eval
Perform the task “compare coding agents on identical user tasks” for [project/component/scenario].
1. Record baseline information, scope, and success criteria; list missing information.
2. Study only relevant context and assess success rate, cost, time, stability, identical conditions, and measurement limitations.
3. Form conclusions and next steps without applying changes or presenting assumptions as facts.
4. Compare results with criteria, cite evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Provide recommendations; do not apply changes, send messages, or publish.
Include outcome, important findings/actions, unverified areas, risks, and safe next steps.
```
