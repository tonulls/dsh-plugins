# `/ecc-benchmark-optimization-loop`

Helps speed up a program through a bounded, measurable cycle: establish a baseline first, test variants one hypothesis at a time, require each to pass correctness checks, and document reproducible commands for the best safe option.

## Short Request

```text
/ecc-benchmark-optimization-loop Find and measurably fix the main cause of slow task-queue processing. Establish baseline metrics first; correctness matters more than speed.
```

## Template

```text
/ecc-benchmark-optimization-loop Optimize [component/operation] in [path or module]. Symptom: [observed latency/throughput/cost]. Goal: [numeric threshold]. Constraints: [memory, compatibility, time budget]. For each option, use one hypothesis, the same measurement method, and a correctness check; do not promote an option if results are unstable or behavior changes.
```

## Step-by-Step Request

```text
/ecc-benchmark-optimization-loop Speed up [specific scenario]. Work in a bounded cycle:
1. Define inputs and a reproducible command; capture the baseline (time/throughput and variance) without changing code.
2. Find the likely bottleneck and formulate several independent hypotheses. Change only one cause per iteration.
3. For each option, repeat the same benchmark and correctness gate; reject speedups that violate results, invariants, or resource limit [specify].
4. Stop after [N] options, when goal [metric] is reached, or if data is insufficient. Do not install dependencies, access the network, or deploy changes without approval.

Output: baseline and methodology; “hypothesis / change / metrics / correctness” table; selected option or conclusion that no safe improvement was found; reproducible commands and measurement limitations. Change code only if explicitly asked; otherwise provide a plan.
```
