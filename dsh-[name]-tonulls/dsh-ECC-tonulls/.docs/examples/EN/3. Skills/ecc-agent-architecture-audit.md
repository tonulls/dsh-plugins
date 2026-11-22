# `/ecc-agent-architecture-audit`

**Purpose:** Comprehensive diagnostics for agent and LLM applications: audits a 12-layer stack for wrapper regressions, memory contamination, tool-use errors, hidden repair loops, and rendering failures. Reports findings by severity and prioritizes code fixes. For developers of agent applications, autonomous loops, and LLM-based features. Use when the source of an agent/LLM failure is unknown or before releasing a stack.

## Short Prompt

```text
/ecc-agent-architecture-audit Diagnose why [agent/LLM feature] is behaving incorrectly; identify the likely failing layer and confirm it with evidence.
```

## Template Prompt

```text
/ecc-agent-architecture-audit
Context: [project path / excerpt / system / symptom].
Task: find the layer causing the agent or LLM application failure for [goal or subject].
Focus: 12 stack layers, wrapper regressions, memory contamination, tool-use discipline, hidden retry/repair loops, and rendering errors.
Constraints: Read-only: do not modify files or run active or external checks.
Result format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt

```text
/ecc-agent-architecture-audit
Perform the task “find the layer causing the agent or LLM application failure” for [project/component/scenario].
1. Record the input, scope, and success criteria; list any missing information.
2. Study only task-relevant context and check the 12 stack layers, wrapper regressions, memory contamination, tool-use discipline, hidden retry/repair loops, and rendering errors.
3. Present findings and next steps without making changes or stating assumptions as facts.
4. Compare the result with the criteria, provide evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Read-only: do not modify files or run active or external checks.
Report the outcome, important findings/actions, unchecked areas, risks, and safe next steps.
```