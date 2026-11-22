# `/ecc-cost-aware-llm-pipeline`

Helps reduce LLM costs through complexity-based routing, budgeting, controlled retries, and prompt caching.

## Simple Request

```text
/ecc-cost-aware-llm-pipeline Suggest how to reduce the cost of LLM support-ticket classification without losing quality.
```

## Template Request

```text
/ecc-cost-aware-llm-pipeline
Current flow: [tasks and models]
Volume and cost: [estimates]
Quality/latency requirements: [thresholds]
Repeated prefixes: [description]
Suggest routing, budget limits, retries, and caching; do not send API requests.
```

## Detailed Request

```text
/ecc-cost-aware-llm-pipeline Analyze LLM pipeline [description] to reduce cost while meeting quality requirements [metrics], latency [threshold], and total budget [limit]. Group tasks by complexity and error cost; propose model selection rules, per-request/period cost limits, retries protected against runaway costs, and prompt caching opportunities. Identify measurements needed to verify savings and quality regressions. Do not send data to models/APIs or change configuration without approval. Report current unknowns, target design, monitoring metrics, risks, and a safe experiment plan.
```
