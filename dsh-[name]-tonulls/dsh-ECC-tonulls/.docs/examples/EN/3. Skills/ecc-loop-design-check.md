# `/ecc-loop-design-check`

**Purpose:** Designs agent execution loops and checks for looping, Goodhart's law metric gaming, and false completion. Covers machine-verifiable goals, loop types, plan–act–evaluate structure, and runaway-work prevention; mechanism setup is documented in `autonomous-loops`. Triggers: designing/reviewing an agent loop, diagnosing loops, loss-of-control risk, verifiable goals, and five failure types.

## Short Prompt
```text
/ecc-loop-design-check Review this agent loop for looping, metric gaming, and false completion.
```

## Template Prompt
```text
/ecc-loop-design-check
Context: [project path / snippet / system / symptom].
Task: assess an agent execution loop for looping and incorrect completion criteria for [goal or subject].
Focus: verifiable goal, stop condition, Goodhart effects, retries, and runaway-work risk.
Constraints: Read-only: do not modify files or run active/external checks.
Output format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt
```text
/ecc-loop-design-check
Perform the task “assess an agent execution loop for looping and incorrect completion criteria” for [project/component/scenario].
1. Record baseline information, scope, and success criteria; list missing information.
2. Study only relevant context and assess verifiable goal, stop condition, Goodhart effects, retries, and runaway-work risk.
3. Form conclusions and next steps without applying changes or presenting assumptions as facts.
4. Compare results with criteria, cite evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Read-only: do not modify files or run active/external checks.
Include outcome, important findings/actions, unverified areas, risks, and safe next steps.
```
