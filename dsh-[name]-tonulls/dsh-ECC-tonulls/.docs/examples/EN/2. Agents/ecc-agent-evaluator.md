# `/ecc-agent-evaluator`

Evaluates an agent's completed response across five dimensions: accuracy, completeness, clarity, applicability, and concision. Use it to review a nontrivial task that has already been completed, not to perform a new task.

## Short Request

```text
/ecc-agent-evaluator Evaluate the previous response across the five dimensions. Support your ratings with observable examples and suggest the most important improvements.
```

## Template

```text
/ecc-agent-evaluator Evaluate the result of the task “[brief task description]”.
Agent response: [paste the response]
Context and constraints: [what was required, acceptance criteria]
Rate accuracy, completeness, clarity, applicability, and concision; provide reasons and specific improvements. Do not invent facts that are not in the context.
```

## Detailed Request

```text
/ecc-agent-evaluator Conduct a verifiable evaluation of the result.
1. Compare the response with the original task and list confirmed facts separately from assumptions.
2. Rate five dimensions: accuracy, completeness, clarity, applicability, and concision. Give each a score from 1–5 and a brief evidence-based explanation.
3. Note significant omissions, contradictions, and potentially misleading claims; do not treat missing information as an error without justification.
4. Suggest up to three prioritized improvements.
Format: overall rating first, then a “dimension / score / evidence” table, followed by comments and recommendations. Evaluate only this response: [paste response]. Task criteria: [paste criteria].
```