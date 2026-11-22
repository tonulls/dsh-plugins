# `/ecc-orch-add-feature`

Orchestrates adding a new feature: research, planning, TDD implementation, verification, and separate checkpoints before changes and commits.

## Simple Request
```text
/ecc-orch-add-feature Add CSV report export. First show a plan and wait for my approval.
```

## Template Request
```text
/ecc-orch-add-feature New feature: [description]. Context/scope: [modules]. Acceptance criteria: [list]. Study the project and propose a plan; do not start implementation before my approval. Do not create a commit without separate approval.
```

## Detailed Request
```text
/ecc-orch-add-feature Implement new feature [description] in [project/subsystem]. Phases: (1) study current conventions and extension points; (2) list unknowns and propose a plan with acceptance criteria; stop for approval; (3) after approval, implement test-first and with minimal scope; (4) run only suitable local checks; (5) review the diff and report results. Do not install dependencies, use the network, or deploy. Commit only after separate explicit approval. Report changed files, checks, and residual risks.
```
