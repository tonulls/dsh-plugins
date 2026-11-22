# `/ecc-homelab-architect`

**Purpose:** Designs home and small lab networks based on equipment, goals, and operator experience; proposes safe phased changes and a rollback plan.

## Short Prompt

```text
/ecc-homelab-architect Based on this equipment inventory, propose a safe homelab network plan with phases and rollback.
```

## Template Prompt

```text
/ecc-homelab-architect
Context: [project path / excerpt / system / symptom].
Task: design a safe home or small lab network for [goal or subject].
Focus: equipment inventory, goals and operator experience, phased changes, and verifiable rollback.
Constraints: Prepare recommendations; do not apply changes, send messages, or publish anything.
Result format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt

```text
/ecc-homelab-architect
Perform the task “design a safe home or small lab network” for [project/component/scenario].
1. Record the input, scope, and success criteria; list any missing information.
2. Study only task-relevant context and check equipment inventory, goals and operator experience, phased changes, and verifiable rollback.
3. Present findings and next steps without making changes or stating assumptions as facts.
4. Compare the result with the criteria, provide evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Prepare recommendations; do not apply changes, send messages, or publish anything.
Report the outcome, important findings/actions, unchecked areas, risks, and safe next steps.
```