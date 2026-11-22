# `/ecc-test-collaboration`

Inventories test assets and connects requirements, business rules, risks, defects, and cross-service contracts to stable TEST-IDs and executable project evidence.

## Simple Request
```text
/ecc-test-collaboration Conduct a read-only analysis of test gaps for requirements [list]. Do not modify files.
```
## Template Request
```text
/ecc-test-collaboration
Scope and requirements: [description]
Existing registry/TESTS.md: [path or contents]
Risks/defects: [list]
Map requirements to existing tests and classify gaps; do not create or edit files.
```
## Detailed Request
```text
/ecc-test-collaboration Conduct a strictly read-only audit of test assets for [scope]. Find requirements, business rules, known defects, and consumer/provider boundaries in the available context; map them to stable TEST-IDs and existing executable tests/registries; classify unit, integration, contract, E2E, and smoke coverage; assess each test's necessity and unproven areas. Do not modify files, run tests, or add TEST-IDs without approval. Report: traceability map, risk-based gaps, duplicate/obsolete checks, recommended actions, and evidence limitations.
```
