# `/ecc-change-impact`

Before changing code, data, interfaces, or rules, conducts evidence-based impact analysis: call paths, schemas, API contracts, tests, documentation/ADRs, migration, deployment, and rollback. After implementation, compares the forecast with the actual diff.

## Short Request
```text
/ecc-change-impact Assess the blast radius of renaming a user field in a public API and list a safe sequence before any changes.
```

## Template
```text
/ecc-change-impact Analyze change [description] in [module/files]. Risk/context: [migration, auth, public contract, etc.]. Before implementation, trace dependencies and affected data, interfaces, tests, and documentation; suggest rollout/rollback. Analysis only for now; do not change code.
```

## Phased Request
```text
/ecc-change-impact Conduct impact analysis for change [precise description] within [scope]. Focus on [data schema / auth / public interface / cross-module dependencies].
1. Investigate actual call paths and read/write locations; provide a verifiable path/symbol for each conclusion or identify evidence gaps.
2. Assess data and schema compatibility, API/event contracts, consumers, tests, and governance documents (README/ADR, etc.).
3. Before changes, suggest a sequence including expand-contract or migration if needed, incompatibility windows, observability, rollout, and rollback.
4. If implementation is separately approved, compare the forecast with the actual diff afterward; note unexpected affected components and unresolved items. Do not run migrations or deploy.

Result: impact map, evidence and confidence, prioritized risks, verification/rollback plan. For review requests, analysis only—no fixes. Package installation, network access, and deployment require separate approval.
```
