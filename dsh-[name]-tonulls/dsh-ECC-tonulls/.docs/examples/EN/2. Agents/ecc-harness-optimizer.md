# `/ecc-harness-optimizer`

**Purpose:** Improves reliability and reduces the cost of local agent harness configuration using pass@k/pass^k evaluation based on the `eval-harness` skill.

## Short Prompt

```text
/ecc-harness-optimizer Based on the evaluation results, suggest how to improve the reliability and cost of the local agent harness.
```

## Template Prompt

```text
/ecc-harness-optimizer
Context: [project path / excerpt / system / symptom].
Task: evaluate the local agent harness configuration using measurable results for [goal or subject].
Focus: eval pass@k/pass^k, reproducibility, reliability, and cost; distinguish measurements from hypotheses.
Constraints: Prepare recommendations; do not apply changes, send messages, or publish anything.
Result format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt

```text
/ecc-harness-optimizer
Perform the task “evaluate local agent harness configuration using measurable results” for [project/component/scenario].
1. Record the input, scope, and success criteria; list any missing information.
2. Study only task-relevant context and check eval pass@k/pass^k, reproducibility, reliability, and cost; distinguish measurements from hypotheses.
3. Present findings and next steps without making changes or stating assumptions as facts.
4. Compare the result with the criteria, provide evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Prepare recommendations; do not apply changes, send messages, or publish anything.
Report the outcome, important findings/actions, unchecked areas, risks, and safe next steps.
```