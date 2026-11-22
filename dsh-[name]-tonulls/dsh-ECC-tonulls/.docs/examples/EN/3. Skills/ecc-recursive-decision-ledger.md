# `/ecc-recursive-decision-ledger`

**Purpose:** Runs repeated iterations (“Prime Gauss”-style recursive prompts) and maintains an immutable decision ledger: attempts, scores, coherence checks, and promotion conditions. Recursive confidence never authorizes real trades, deployment, or destructive actions. Use for iterative rollouts, decision-evaluation processes, multidimensional search, stochastic optimization, ensemble comparisons, and evidence-tracked recursive reasoning.

## Short Prompt
```text
/ecc-recursive-decision-ledger Create a visible ledger for a series of experiments with stop criteria; execute nothing.
```

## Template Prompt
```text
/ecc-recursive-decision-ledger
Context: [experiment goals, variants, evaluation criteria, iteration limit, and prohibited actions].
Task: organize repeated rollouts with an append-only decision ledger for [target component/outcome].
Focus: tracking trial/marks/coherence, evidence trail, promotion gates, and prohibition on auto-approving trading, deployment, or destructive actions.
Constraints: Prepare a plan and verification criteria; do not change code, data, schedules, or external systems.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-recursive-decision-ledger
Perform the task “organize repeated rollouts with an append-only decision ledger” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess trial/marks/coherence tracking, evidence trail, promotion gates, and prohibition on auto-approving trading, deployment, or destructive actions.
3. State findings or options with facts, risks, verification criteria, and unresolved questions; apply nothing.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Prepare a plan and verification criteria; do not change code, data, schedules, or external systems.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
