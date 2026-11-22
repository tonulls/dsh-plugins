# `/ecc-prediction-market-risk-review`

**Purpose:** Reviews prediction-market, basket, oracle, and trading-agent scenarios for compliance, security, data-quality, privacy, and execution risks. Use before a scenario gains access to venue authorization, portfolio data, API keys, or trade planning.

## Short Prompt
```text
/ecc-prediction-market-risk-review Conduct a read-only review of this prediction-market workflow for data, execution, and privacy risks.
```

## Template Prompt
```text
/ecc-prediction-market-risk-review
Context: [workflow architecture, data types, permissions, and supplied configurations].
Task: review prediction-market, oracle, or trading-agent workflow risks for [target component/outcome].
Focus: compliance context, data quality, privacy, venue auth/API keys, and planning/execution boundaries.
Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-prediction-market-risk-review
Perform the task “review risks in a prediction-market, oracle, or trading-agent workflow” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess compliance context, data quality, privacy, venue auth/API keys, and planning/execution boundaries.
3. State findings or options with facts, risks, verification criteria, and unresolved questions; apply nothing.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
