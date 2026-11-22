# `/ecc-ralphinho-rfc-pipeline`

**Purpose:** Decomposes an RFC into an execution graph for multiple agents: divides work into units with dependencies and acceptance tests, coordinates research, planning, implementation, testing, and review for each unit, then integrates changes through a rebasing queue and final system verification. Use for large features, multi-agent RFC execution, and merge-queue management.

## Short Prompt
```text
/ecc-ralphinho-rfc-pipeline Break RFC [path] into work units with dependencies and acceptance tests; plan the pipeline only.
```

## Template Prompt
```text
/ecc-ralphinho-rfc-pipeline
Context: [RFC, file/branch constraints, independent work units, and verifiable criteria].
Task: design a multi-agent execution DAG for the RFC using independent work units for [target component/outcome].
Focus: decomposition, dependencies, acceptance criteria, research/implementation/tests/review, and gated merge queue.
Constraints: Generate only ready-to-paste steps/commands; do not invoke them or claim execution.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-ralphinho-rfc-pipeline
Perform the task “design a multi-agent RFC execution DAG using independent work units” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess decomposition, dependencies, acceptance criteria, research/implementation/tests/review, and gated merge queue.
3. For each step, specify the exact documented invocation and scope; omit commands that cannot enforce step boundaries and identify the blocker.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Generate only ready-to-paste steps/commands; do not invoke them or claim execution.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
