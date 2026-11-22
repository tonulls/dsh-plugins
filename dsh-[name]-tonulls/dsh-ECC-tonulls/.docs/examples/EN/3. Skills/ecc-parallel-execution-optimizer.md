# `/ecc-parallel-execution-optimizer`

**Purpose:** Accelerates task execution by decomposing it into a dependency graph and parallel lanes with a lane matrix, batched reads and checks, isolated change areas (files, Git worktrees, branches, or services), and a final verification table. Use for parallel work, multiple agents, batched tool calls, or independent checks without sacrificing correctness.

## Short Prompt
```text
/ecc-parallel-execution-optimizer Decompose [task] into independent parallel stages with safe write boundaries.
```

## Template Prompt
```text
/ecc-parallel-execution-optimizer
Context: [task plan, step dependencies, files with possible overlap, available workers].
Task: accelerate work by splitting it into independent parallel stages for [target component/outcome].
Focus: dependency graph, lane matrix, file/branch/service isolation, batched reads, and final verification table.
Constraints: Plan parallel lanes and write isolation; do not launch subagents or change files without agreement.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-parallel-execution-optimizer
Perform the task “accelerate work by splitting it into independent parallel stages” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess dependency graph, lane matrix, file/branch/service isolation, batched reads, and final verification table.
3. Build the dependency graph, identify independent lanes and write zones, state cross-task dependencies and final checks; do not execute.
4. Check conclusions against the criteria and cite evidence, assumptions, and unknowns.

Constraints: Plan parallel lanes and write isolation; do not launch subagents or change files without agreement.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
