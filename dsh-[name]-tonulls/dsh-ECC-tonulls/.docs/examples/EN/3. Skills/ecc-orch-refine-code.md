# `/ecc-orch-refine-code`

**Purpose:** Coordinates behavior-preserving refactoring: verifies tests pass, restructures code while preserving behavior and green checks, reviews the code, and commits only after user approval. Use when improving structure without changing behavior.

## Short Prompt
```text
/ecc-orch-refine-code Prepare a refactoring plan for [module], preserving behavior and without a commit.
```

## Template Prompt
```text
/ecc-orch-refine-code
Context: [module, current structure, desired structure, existing tests].
Task: plan a behavior-equivalent refactor for [target component/outcome].
Focus: green tests first, structure without behavior changes, verification after each step, and separate commit approval.
Constraints: First prepare a plan and behavior-preservation criteria; do not change code or create a commit without separate approval.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-orch-refine-code
Perform the task “plan a behavior-equivalent refactor” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess green tests first, structural changes without behavior changes, verification after each step, and separate commit approval.
3. Create a phased refactoring plan with behavior checks before and after each phase; do not change code.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: First prepare a plan and behavior-preservation criteria; do not change code or create a commit without separate approval.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
