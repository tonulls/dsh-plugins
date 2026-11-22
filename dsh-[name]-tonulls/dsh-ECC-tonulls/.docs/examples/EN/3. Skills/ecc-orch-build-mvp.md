# `/ecc-orch-build-mvp`

Turns an MVP design or specification into vertical slices and coordinates sequential implementation with checks and checkpoints.

## Simple Request
```text
/ecc-orch-build-mvp Based on the attached specification, plan the first working slice and wait for my approval.
```

## Template Request
```text
/ecc-orch-build-mvp Specification: [path/text]. Target audience: [audience]. MVP must include [minimum scenario]. Break it into vertical slices and suggest the first one; do not modify files before plan approval.
```

## Detailed Request
```text
/ecc-orch-build-mvp Use [specification] as the requirements source. 1) Extract scenarios, constraints, and unknowns. 2) Break the MVP into independent vertical slices with acceptance criteria. 3) Present the plan and stop until approval. After approval, implement slices one at a time, checking each with available local tests and change review. Do not install packages, access the network, deploy, or commit without separate approval. Report completed slices, checks, gaps, and next step.
```
