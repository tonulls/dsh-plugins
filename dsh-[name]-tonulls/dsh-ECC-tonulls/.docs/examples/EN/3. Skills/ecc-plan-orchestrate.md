# `/ecc-plan-orchestrate`

**Purpose:** Reads a plan document, breaks it into steps, classifies them, and generates a ready-to-use ECC slash command for each, with step ID and scope in the documented argument format. It only generates commands—it does not execute them or claim control over their internal execution. Steps are omitted if a command cannot accept the plan scope. Use to map commands to a multi-step plan.

## Short Prompt
```text
/ecc-plan-orchestrate Break this plan into exact ECC slash commands, but do not execute them.
```

## Template Prompt
```text
/ecc-plan-orchestrate
Context: [plan path or text, task constraints, and permitted commands].
Task: decompose a multi-step plan and select a documented ECC command for each phase for [target component/outcome].
Focus: dependencies, step IDs and boundaries, supported command argument formats, and fail-closed behavior when scope cannot be passed.
Constraints: Generate only ready-to-paste steps/commands; do not invoke them or claim execution.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-plan-orchestrate
Perform the task “decompose a multi-step plan and select a documented ECC command for each phase” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess dependencies, step IDs and boundaries, supported command argument formats, and fail-closed behavior when scope cannot be passed.
3. For each step, specify the exact documented invocation and scope; omit commands that cannot enforce step boundaries and identify the blocker.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Generate only ready-to-paste steps/commands; do not invoke them or claim execution.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
