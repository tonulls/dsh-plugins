# ecc-latency-critical-systems

**Command:** `/ecc-latency-critical-systems`

**Purpose:** Diagnose and optimize latency-sensitive systems: real-time dashboards, market-data streams, agent flows, execution gateways, queues, and caches. Focus on p50/p95/p99, data freshness, queue depth, hot paths, and verifiable readback evidence.

## Prompts

### 1. Short Request
> /ecc-latency-critical-systems Analyze why this flow's p95 latency increased and suggest metrics and hot spots to inspect before optimizing.

### 2. Template with Placeholders
> /ecc-latency-critical-systems System: [service/flow], symptom: [p95/p99/throughput/data age], period and load: [data], SLO: [goal]. Analyze available metrics and code hot paths, separating observed facts from hypotheses. Suggest a safe measurement plan and optimization options with correctness checks; do not change code or run load experiments without approval.

### 3. Detailed Phased Request
> /ecc-latency-critical-systems Diagnose latency in [system/data path]. 1) Clarify latency definition, measurement boundaries, load, p50/p95/p99, throughput, freshness age, and queue depth; check whether observation windows are comparable. 2) Trace the hot path from ingress to consumer and identify measurable bottlenecks (queue, network, compute, cache) only from available evidence. 3) Form one testable hypothesis and experiment at a time, with baseline, controlled load, correctness gate, and stop criteria. 4) Describe readback evidence confirming latency improved without data loss/desynchronization. Result: “fact / hypothesis / measurement / risk” table, then plan and success criteria. Do not make live changes, run load tests, install software, access the network, or deploy.
