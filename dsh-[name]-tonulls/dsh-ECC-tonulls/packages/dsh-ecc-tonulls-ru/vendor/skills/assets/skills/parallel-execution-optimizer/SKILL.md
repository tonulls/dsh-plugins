<!-- Generated from skills/parallel-execution-optimizer/SKILL.md at 25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b; edit the pinned source or generator instead. -->
# DSH skill adaptation

Use this instruction only when the user explicitly invokes its `/ecc-*` command. It runs in the current DSH session and does not start a separate agent or process.
Use only models, tools, and integrations actually available in the current DSH session. Upstream model, tool, hook, and MCP settings are not imported.
This package contains Markdown resources only. It does not install, download, or execute upstream scripts, hooks, MCP servers, or other helpers. If the task depends on a missing helper or integration, explain the limitation instead of assuming it exists.
References to other ECC Skills, Commands, agents, or slash commands are not proof that they are included or available; verify the active catalog and current DSH session before invoking them, and explain any missing capability.
This instruction grants no permissions. Do not perform external, destructive, or other side-effecting actions unless the user requested them and current session policy allows them.

Source: https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/skills/parallel-execution-optimizer/SKILL.md

# Parallel Execution Optimizer

Use this skill when speed comes from doing independent work at the same time:
repo inspection, file reads, API checks, browser checks, build/test lanes,
deploy readbacks, or multi-worktree implementation passes.

## Core Pattern

Turn urgency into a dependency graph before acting.

1. Define the objective and done signal.
2. Split work into lanes.
3. Mark each lane as parallel, sequential, or gated.
4. Run independent reads/checks together.
5. Keep writes isolated by file, worktree, branch, service, or dataset.
6. Merge only after evidence shows the lanes are compatible.
7. End with a verification table, not a vague speed claim.

## Lane Matrix

Before a large push, write a compact matrix:

```text
Lane | Can run in parallel? | Write surface | Risk | Verification
Repo scan | yes | none | low | rg/git status outputs
Backend patch | maybe | src/api | medium | unit tests
Frontend patch | maybe | app/components | medium | browser screenshot
Deploy readback | after build | remote service | high | live URL + logs
```

Only run lanes in parallel when their write surfaces do not collide.

## Execution Rules

- Batch file reads, searches, status checks, and metadata queries.
- Use isolated worktrees for large unrelated implementation lanes.
- Start long-running tests, builds, backfills, and deploys in separate sessions,
  then poll them deliberately.
- If a lane discovers a blocker that changes the plan, pause dependent lanes
  and update the matrix.
- Never let a background process outlive the turn unless the user explicitly
  asked for a continuing service.
- Do not parallelize destructive commands, migrations, writes to the same table,
  or live customer-impacting deploys without an explicit gate.

## Output Shape

Use this when reporting:

```text
Parallel execution result:
- Lanes run: 5
- Lanes completed: 4
- Blocked lane: deploy readback, waiting on DNS propagation
- Fast path found: batched repo scan + focused tests
- Verification: lint pass, unit pass, live smoke pass
```

## Failure Modes

- More concurrency that creates conflicting edits.
- Benchmarking the tool instead of the task.
- Treating "fast" as done before correctness is proven.
- Forgetting to poll running sessions.
- Hiding skipped checks behind a success summary.

## Verification and scope

For a finite sequence of similar records, reuse accepted mappings and tool contracts. Define the record set, order, completion evidence, and conditions that require replanning. Keep writes sequential when operations share state.
