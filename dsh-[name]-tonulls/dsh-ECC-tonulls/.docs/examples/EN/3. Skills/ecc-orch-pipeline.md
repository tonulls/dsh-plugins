# `/ecc-orch-pipeline`

Describes the general gated Research–Plan–TDD–Review–Commit pipeline and its checkpoints; typically used through specialized `orch-*` skills.

## Simple Request
```text
/ecc-orch-pipeline Explain the phases of the pipeline for a safe, small task; do not run anything.
```

## Template Request
```text
/ecc-orch-pipeline For task [description], show suitable phases, transition criteria, and required human approvals. Consultation only; do not execute commands or make changes.
```

## Detailed Request
```text
/ecc-orch-pipeline Explain how the general pipeline applies to [task/orch operation]. Identify size classification, phase sequence, roles of suitable commands/agents, inputs/outputs, and stop conditions. Mark plan approval and commit approval as separate gates. Do not perform the work, modify files, or create a commit. End with a phase diagram and risks of incorrect transitions.
```
