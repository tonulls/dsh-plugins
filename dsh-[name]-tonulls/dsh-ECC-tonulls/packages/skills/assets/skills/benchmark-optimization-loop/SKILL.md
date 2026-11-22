<!-- Generated from skills/benchmark-optimization-loop/SKILL.md at 25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b; edit the pinned source or generator instead. -->
# DSH skill adaptation

Use this instruction only when the user explicitly invokes its `/ecc-*` command. It runs in the current DSH session and does not start a separate agent or process.
Use only models, tools, and integrations actually available in the current DSH session. Upstream model, tool, hook, and MCP settings are not imported.
This package contains Markdown resources only. It does not install, download, or execute upstream scripts, hooks, MCP servers, or other helpers. If the task depends on a missing helper or integration, explain the limitation instead of assuming it exists.
References to other ECC Skills, Commands, agents, or slash commands are not proof that they are included or available; verify the active catalog and current DSH session before invoking them, and explain any missing capability.
This instruction grants no permissions. Do not perform external, destructive, or other side-effecting actions unless the user requested them and current session policy allows them.

Source: https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/skills/benchmark-optimization-loop/SKILL.md

# Benchmark Optimization Loop

Use this skill to convert "make it 20x faster" or "try 50 recursive
optimizations" into a bounded measured loop that can actually improve a system.

## Required Baseline

Do not optimize until these exist:

- the operation being optimized;
- the correctness gate that must stay green;
- the metric: wall time, p95 latency, rows/sec, cost/run, memory, error rate;
- the current baseline;
- the search budget: max variants, max time, max spend, max data impact.

If the user asks for an unrealistic target, keep the ambition but make the loop
bounded and measurable.

## Loop

1. Measure the baseline.
2. Identify bottlenecks from evidence.
3. Generate variants that test one hypothesis each.
4. Run variants with the same input shape.
5. Reject variants that fail correctness, safety, or reproducibility.
6. Promote the fastest safe variant.
7. Codify the winning path in a script, command, test, config, or doc.
8. Rerun the baseline and winner to confirm the delta.

## Variant Table

Track variants like this:

```text
Variant | Hypothesis | Command | Time | Correct? | Notes
baseline | current path | npm run job | 120s | yes | stable
batch-500 | fewer round trips | npm run job -- --batch 500 | 42s | yes | winner
parallel-8 | more workers | npm run job -- --workers 8 | 31s | no | rate limited
```

## Recursive Search

For recursive or hyperparameter work:

- persist every run to a ledger;
- compare against the prior accepted winner, not only the previous run;
- keep a holdout or replay check;
- stop when improvement is within noise, correctness fails, cost exceeds the
  budget, or the search starts changing more variables than it can explain.

Use phrases like "best measured safe variant" instead of "global optimum" unless
the search space was actually exhaustive.

## Promotion Gate

A variant cannot become the new default until:

- correctness tests pass;
- the performance delta is repeated or explained;
- rollback is obvious;
- the change is encoded in source control or a durable runbook;
- the final summary includes exact commands and measurements.

## Verification and scope

Choose a metric that matches the requested outcome. Keep correctness, reliability, quality and cost requirements explicit. Set a baseline and a finite trial budget, compare one hypothesis at a time, and retain only a result that meets the required checks. Record the benchmark version and expectations before trials. Include failed and incomplete trials in the results. Keep known replay cases separate from independent acceptance cases. When using replay fixtures, validate the fixture against the exact serialized input and result that were recorded. Use deterministic ordering for artifact fingerprints so host locale does not change comparisons. A one-off fix can use an existing regression test.
