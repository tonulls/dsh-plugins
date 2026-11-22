# `/ecc-gan-generator` — Prompt Examples

## Purpose

Implements features from a supplied specification, incorporates evaluator feedback, and iterates on improvements until the specified quality threshold is reached. The user or specification must define the threshold.

## Short Request

```text
/ecc-gan-generator Implement {feature} according to {specification}; incorporate {evaluation/feedback}. Change only task-related files.
```

## Template Request

```text
/ecc-gan-generator In project {path}, perform an iteration based on specification {link/text} and evaluation {feedback}. Fix the highest-priority discrepancies within {permitted areas}, then list changes and criteria that remain unverified. Do not expand scope on your own.
```

## Detailed Request

```text
/ecc-gan-generator Implement {functionality} in {project} according to specification {specification} and evaluator feedback {report}.
1. Compare the feedback with the specification criteria; explicitly identify conflicts or ambiguities rather than inventing requirements.
2. Choose the smallest set of changes within {permitted files/behavior}; do not affect unrelated features.
3. Make changes guided by priorities and the quality threshold {explicitly specified threshold}; do not claim it was reached without corresponding evaluation data.
4. Run only authorized checks from {commands/constraints}; report the actual results.
5. Prepare a brief report that the evaluator can verify in the next cycle.

Format: changes by criterion, files, checks and results, remaining risks/questions. Do not install dependencies, access the network, or deploy without separate approval.
```