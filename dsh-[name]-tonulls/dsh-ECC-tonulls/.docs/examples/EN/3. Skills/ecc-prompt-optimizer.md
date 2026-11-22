# `/ecc-prompt-optimizer`

**Purpose:** Analyzes prompt drafts, identifies goals and missing context, selects ECC commands, skills, and agents, and suggests a ready-to-paste improved prompt with analysis and rationale. Recommendations only—it does not perform the task. Use for requests like “optimize this prompt,” “improve this instruction,” “rewrite this request,” “help me create a prompt,” or “how should I phrase this?” Do not use for code or performance optimization.

## Short Prompt
```text
/ecc-prompt-optimizer Rewrite this prompt draft: [text]. First identify missing context and a suitable ECC command; do not perform the task.
```

## Template Prompt
```text
/ecc-prompt-optimizer
Context: [original prompt, desired outcome, context, and explicit constraints].
Task: improve the draft prompt and prepare ready-to-paste wording for [target component/outcome].
Focus: user intent, missing context, needed constraints, choice of ECC command/skill/agent, and brief rationale.
Constraints: Work only on the prompt wording; do not perform the original task or invoke selected ECC commands.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-prompt-optimizer
Perform the task “improve the draft prompt and prepare ready-to-paste wording” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess user intent, missing context, necessary constraints, ECC command/skill/agent selection, and brief rationale.
3. Provide improved ready-to-paste wording, identify the selected ECC command/skill/role, and explain the choice; do not perform the original task.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Work only on the prompt wording; do not perform the original task or invoke selected ECC commands.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
