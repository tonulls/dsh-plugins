# `/ecc-tdd-workflow`

Drives development through the TDD cycle: failing test first, minimal change to green, then refactoring with targeted unit/integration/E2E coverage.

## Simple Request
```text
/ecc-tdd-workflow Fix [defect] using TDD: first formulate a test that reproduces it.
```
## Template Request
```text
/ecc-tdd-workflow
Task and acceptance criteria: [description]
Code and existing tests: [paths/snippet]
Constraints: [compatibility/coverage]
Suggest a red-green-refactor cycle and tests for important boundaries.
```
## Detailed Request
```text
/ecc-tdd-workflow Perform task [description] using TDD. 1) Clarify acceptance criteria and existing test structure. 2) Design a minimal test that should fail with current behavior. 3) After my approval, add the test and run only the agreed command. 4) Implement the minimal fix and rerun the test. 5) Refactor while keeping tests green; assess unit/integration/E2E gaps and target coverage. Do not install packages, access the network, deploy, or modify unrelated files. If tests or changes affect data/external systems, stop and request approval. Report: changes, red/green evidence, commands actually run, and residual risks.
```
