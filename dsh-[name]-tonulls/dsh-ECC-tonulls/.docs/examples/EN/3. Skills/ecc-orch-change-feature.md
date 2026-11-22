# `/ecc-orch-change-feature`

Coordinates changes to a working feature to meet new requirements: updates tests and implementation, with separate authorization before changes.

## Simple Request
```text
/ecc-orch-change-feature Change the sorting rule to meet the new requirement; propose a plan first.
```

## Template Request
```text
/ecc-orch-change-feature Feature: [description/path]. New behavior: [requirement]. Properties to preserve: [list]. Propose a plan and tests; begin implementation only after my approval.
```

## Detailed Request
```text
/ecc-orch-change-feature Change [feature] to comply with [new specification]. First study the current contract and tests, identify affected areas, and prepare a plan; wait for approval. Then change/add tests for the new behavior, make a minimal implementation, and run local checks. Do not install packages, access the network, or deploy. Stop and request separate approval before committing. In the report, compare old and new behavior and list checks performed.
```
