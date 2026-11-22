# `/ecc-agent-harness-construction`

Designs and improves an agent's action space—tool set, definitions, and observation format—to increase the share of successfully completed tasks.

## Prompt Examples

### 1. Short Request
```text
/ecc-agent-harness-construction Analyze the tools available to the agent and suggest how to simplify them and make call results clearer. Analysis only; do not change code.
```

### 2. Template Request
```text
/ecc-agent-harness-construction Assess the agent harness for task type [type]. Study [description/tool and observation configuration files]. Identify redundant or missing actions, ambiguous tool definitions, and noisy observations. Suggest specific changes and expected effects; change nothing.
```

### 3. Detailed Request
```text
/ecc-agent-harness-construction Review the agent action space for scenario [scenario] in [repository or files]. 1) Record current tools, inputs/outputs, and observation format from source. 2) Identify duplication, missing actions, and ambiguity that impedes tool selection. 3) Suggest minimal changes and explain their impact on task completion and risks. 4) Do not modify files or claim improvements without measurements. Result: current design, evidence-backed priority issues, target design, and testable hypotheses for later evaluation.
```
