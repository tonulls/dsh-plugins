# `/ecc-benchmark`

Measures and compares performance using reproducible baselines: Core Web Vitals and page weight, API latency percentiles, build time, and test feedback time. Before/after results are saved as git-tracked JSON in `.ecc/benchmarks`.

## Prompt Examples

### 1. Short Request
```text
/ecc-benchmark Capture a reproducible baseline for [page/API/build] and state the metrics and measurement conditions. Do not publish or deploy anything.
```

### 2. Template Request
```text
/ecc-benchmark Compare performance of [target] before and after [change]. Environment: [conditions], key metrics: [LCP/INP/CLS/latency/build time]. First check the available measurement method; save comparable results in `.ecc/benchmarks` only if the project's directory and format support this. State measurement limitations.
```

### 3. Detailed Request
```text
/ecc-benchmark Measure [page/endpoint/build] and assess [target threshold/change]. 1) Record environment, application version, inputs, and methodology; do not compare incomparable runs. 2) Capture applicable metrics: browser LCP, INP, CLS, and page weight; API latency percentiles; development build/test-cycle time. 3) For comparison, obtain baseline and post-change results using the same method and explain noise/limitations. 4) Do not deploy or perform external actions. Save JSON in `.ecc/benchmarks` only if the project has an existing schema. Result: conditions, measurement table, deltas, and conclusion against the goal.
```
