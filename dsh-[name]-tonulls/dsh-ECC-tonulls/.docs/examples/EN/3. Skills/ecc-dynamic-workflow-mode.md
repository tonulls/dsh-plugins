# `/ecc-dynamic-workflow-mode`

Helps design task-specific harnesses and evaluation gates, and extract reusable skills from an adaptive agent workflow.

## Simple Request

```text
/ecc-dynamic-workflow-mode Design an evaluation gate for an agent that extracts fields from invoices.
```

## Template Request

```text
/ecc-dynamic-workflow-mode
Agent task: [description]
Typical inputs and errors: [examples without sensitive data]
Success criteria: [measurable conditions]
Tool constraints: [description]
Suggest a task-local harness and evaluation set; do not run anything on real data.
```

## Detailed Request

```text
/ecc-dynamic-workflow-mode Design a bounded harness for recurring task [description] in [Claude dynamic workflow/other adaptive harness]. Define input/output contract, decomposition, permitted actions, prohibitions, completion criteria, and stop conditions. Create an evaluation-set concept with representative positive, boundary, and adversarial inputs without real secrets/personal data; define quality metrics and gate thresholds. Then assess which instructions are truly general and could become a reusable skill. Do not run tasks on live systems or change configuration/files without approval. Report: harness design, evaluation plan, test-overfitting risks, and candidate reusable instructions.
```
