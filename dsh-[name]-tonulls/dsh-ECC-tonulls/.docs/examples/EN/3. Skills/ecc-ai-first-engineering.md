# `/ecc-ai-first-engineering`

**Purpose:** An engineering model for teams where AI agents write a significant share of code. Use when configuring team processes, code review stages, and responsibility rules for codebases primarily written by agents.

## Short Prompt

```text
/ecc-ai-first-engineering Suggest a development process and review rules for a team where agents write a substantial portion of the code.
```

## Template Prompt

```text
/ecc-ai-first-engineering
Context: [project path / snippet / system / symptom].
Task: configure an engineering process for a team where agents create most of the code for [goal or subject].
Focus: code ownership, review gates, accountability, and quality control of agent changes.
Constraints: Provide recommendations; do not apply changes, send messages, or publish.
Output format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt

```text
/ecc-ai-first-engineering
Perform the task “configure an engineering process for a team where agents create most of the code” for [project/component/scenario].
1. Record baseline information, scope, and success criteria; list missing information.
2. Study only relevant context and assess code ownership, review gates, accountability, and quality control of agent changes.
3. Form conclusions and next steps without applying changes or presenting assumptions as facts.
4. Compare results with criteria, cite evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Provide recommendations; do not apply changes, send messages, or publish.
In the report include outcome, important findings/actions, unverified areas, risks, and safe next steps.
```
