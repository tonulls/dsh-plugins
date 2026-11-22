# `/ecc-pytorch-patterns`

**Purpose:** PyTorch practices and recommendations for reliable, efficient, reproducible training pipelines, model architectures, and data loading. Use when writing/reviewing training loops, architectures, data loaders, or troubleshooting irreproducible runs.

## Short Prompt
```text
/ecc-pytorch-patterns Analyze irreproducible training for [model] and check seeds, data, and train loop.
```

## Template Prompt
```text
/ecc-pytorch-patterns
Context: [model, train loop, environment versions, dataset pipeline, and signs of irreproducibility].
Task: review PyTorch training pipeline or model for [target component/outcome].
Focus: reproducibility, model architecture, data loading, train/eval loop, metrics, and experiment correctness.
Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-pytorch-patterns
Perform the task “review PyTorch training pipeline or model” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess reproducibility, model architecture, data loading, train/eval loop, metrics, and experiment correctness.
3. State findings or options with facts, risks, verification criteria, and unresolved questions; apply nothing.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
