# `/ecc-research-ops`

Researches the current state using fresh evidence, compares options, and produces an evidence-backed recommendation considering supplied local context.

## Simple Request
```text
/ecc-research-ops Compare current options for [topic] and provide a conclusion with supporting sources.
```

## Template Request
```text
/ecc-research-ops
Question: [what to find out]
Context: [project/market/constraints]
Compare: [options]
Criteria: [cost, recency, risks]
Prepare a conclusion from available current public data; distinguish verified facts from assumptions.
```

## Detailed Request
```text
/ecc-research-ops Research question: [question]. Context and criteria: [description]. Steps: 1) clarify scope and as-of date; 2) list verifiable questions; 3) gather and compare available public evidence and supplied local context; 4) identify contradictions, gaps, and source limitations; 5) formulate a recommendation with alternatives and confidence. Do not expose secrets or take actions in external systems. Use the network only if available and permitted; otherwise state the limitation clearly. Result: brief summary, sourced facts, unknowns, and recommendation.
```
