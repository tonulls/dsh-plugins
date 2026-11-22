# `/ecc-product-capability`

**Purpose:** Turns PRD intent, roadmap requests, and product discussions into an implementation-ready capability plan: captures constraints, invariants, interfaces, and unresolved questions before cross-service work begins. Use for a structured PRD-to-SRS transition in ECC instead of a vague plan.

## Short Prompt
```text
/ecc-product-capability Turn [PRD/idea] into a capability plan with interfaces, invariants, and open decisions.
```

## Template Prompt
```text
/ecc-product-capability
Context: [PRD/roadmap/discussion, target users, affected systems, and constraints].
Task: turn product intent into an implementation-ready capability plan for [target component/outcome].
Focus: users, constraints, invariants, service interfaces, and decisions requiring product-owner input.
Constraints: Prepare an analytical document in the response; do not create files or begin implementation without approval.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-product-capability
Perform the task “turn product intent into an implementation-ready capability plan” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess users, constraints, invariants, service interfaces, and decisions requiring product-owner input.
3. Formulate target capability/spec with invariants, interfaces, acceptance criteria, and open decisions; distinguish facts from hypotheses.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Prepare an analytical document in the response; do not create files or begin implementation without approval.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
