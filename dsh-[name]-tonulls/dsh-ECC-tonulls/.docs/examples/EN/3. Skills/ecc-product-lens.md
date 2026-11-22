# `/ecc-product-lens`

**Purpose:** Evaluates product rationale before development through four analyses: YC-style diagnosis with a final `PRODUCT-BRIEF.md` and a go/no-go recommendation, founder assessment of product-market-fit signals, user journey and time-to-value analysis, and ICE prioritization. Use to validate product direction, select features, assess launch readiness, or turn an idea into a brief.

## Short Prompt
```text
/ecc-product-lens Evaluate idea [description]: who needs it, time to value, and what should determine go/no-go?
```

## Template Prompt
```text
/ecc-product-lens
Context: [idea/product, target users, current user journey, and available signals].
Task: evaluate product rationale before development for [target component/outcome].
Focus: problem and segment, product-market-fit evidence, user journey/time-to-value, ICE prioritization, and go/no-go criteria.
Constraints: Prepare an analytical document in the response; do not create files or begin implementation without approval.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-product-lens
Perform the task “evaluate product rationale before development” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess problem and segment, product-market-fit evidence, user journey/time-to-value, ICE prioritization, and go/no-go criteria.
3. Formulate target capability/spec with invariants, interfaces, acceptance criteria, and open decisions; distinguish facts from hypotheses.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Prepare an analytical document in the response; do not create files or begin implementation without approval.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
