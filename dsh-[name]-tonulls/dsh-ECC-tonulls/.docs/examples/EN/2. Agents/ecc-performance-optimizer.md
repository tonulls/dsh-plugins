# Prompt Example: `/ecc-performance-optimizer`

**Invocation command:** `/ecc-performance-optimizer`

## Purpose

Finds performance bottlenecks, including algorithms, memory, rendering, and bundle size, and proposes optimizations.

## 1. Short Request

```text
/ecc-performance-optimizer Identify a likely bottleneck in scenario {scenario} based on metrics {data}.
```

## 2. Template Request

```text
/ecc-performance-optimizer Study the slow scenario {scenario} in {component}; expected and current timings {metrics}. First identify the likely bottleneck from available data, then propose a measurable plan and optimization options with regression risks. Do not modify files or run heavy profiling without approval.
```

## 3. Detailed Request

```text
/ecc-performance-optimizer Conduct a systematic analysis of task {scenario/change} for the performance-optimizer.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: find performance bottlenecks in algorithms, memory, rendering, and bundle size, and propose optimizations.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```