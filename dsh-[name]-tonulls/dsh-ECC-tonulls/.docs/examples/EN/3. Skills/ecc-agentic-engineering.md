# `/ecc-agentic-engineering`

Organizes engineering work performed by agents: starts with evaluation, decomposes tasks, and routes work based on model cost. Suitable for planning and executing end-to-end agentic development.

## Prompt Examples

### 1. Short Request
```text
/ecc-agentic-engineering Break task [brief description] into verifiable stages for agent execution and suggest where a simpler model suffices versus where a stronger model is needed. Plan only for now.
```

### 2. Template Request
```text
/ecc-agentic-engineering Prepare an eval-first plan for [goal] in [repository]. Acceptance criteria: [criteria]; constraints: [files/changes/timeline/cost]. Break work into independent stages, specifying inputs, outputs, verification, and suitable model tier for each. Do not execute anything before approval.
```

### 3. Detailed Request
```text
/ecc-agentic-engineering Plan end-to-end agentic implementation of [feature/outcome]. 1) First define verifiable success criteria and a minimal evaluation; do not assume the task is already complete. 2) Study the specified repository scope and divide work into stages with explicit dependencies, artifacts, and acceptance gates. 3) Suggest the minimally sufficient model class for each stage and explain quality/cost trade-offs; do not state exact pricing without data. 4) Restrict changes to [authorized scope]; do not install dependencies, access the network, or deploy without separate approval. 5) Verify each stage before continuing; stop and report on ambiguity or failure. Format: criteria/evaluation, stages, task/model allocation, constraints, risks, and stop conditions.
```
