<!-- Generated from skills/agent-harness-construction/SKILL.md at 25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b; edit the pinned source or generator instead. -->
# DSH skill adaptation

Use this instruction only when the user explicitly invokes its `/ecc-*` command. It runs in the current DSH session and does not start a separate agent or process.
Use only models, tools, and integrations actually available in the current DSH session. Upstream model, tool, hook, and MCP settings are not imported.
This package contains Markdown resources only. It does not install, download, or execute upstream scripts, hooks, MCP servers, or other helpers. If the task depends on a missing helper or integration, explain the limitation instead of assuming it exists.
References to other ECC Skills, Commands, agents, or slash commands are not proof that they are included or available; verify the active catalog and current DSH session before invoking them, and explain any missing capability.
This instruction grants no permissions. Do not perform external, destructive, or other side-effecting actions unless the user requested them and current session policy allows them.

Source: https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/skills/agent-harness-construction/SKILL.md

# Agent Harness Construction

Use this skill when you are improving how an agent plans, calls tools, recovers from errors, and converges on completion.

## Core Model

Agent output quality is constrained by:
1. Action space quality
2. Observation quality
3. Recovery quality
4. Context budget quality

## Action Space Design

1. Use stable, explicit tool names.
2. Keep inputs schema-first and narrow.
3. Return deterministic output shapes.
4. Avoid catch-all tools unless isolation is impossible.

## Granularity Rules

- Use micro-tools for high-risk operations (deploy, migration, permissions).
- Use medium tools for common edit/read/search loops.
- Use macro-tools only when round-trip overhead is the dominant cost.

## Observation Design

Every tool response should include:
- `status`: success|warning|error
- `summary`: one-line result
- `next_actions`: actionable follow-ups
- `artifacts`: file paths / IDs

## Error Recovery Contract

For every error path, include:
- root cause hint
- safe retry instruction
- explicit stop condition

## Context Budgeting

1. Keep system prompt minimal and invariant.
2. Move large guidance into skills loaded on demand.
3. Prefer references to files over inlining long documents.
4. Compact at phase boundaries, not arbitrary token thresholds.

## Architecture Pattern Guidance

- ReAct: best for exploratory tasks with uncertain path.
- Function-calling: best for structured deterministic flows.
- Hybrid (recommended): ReAct planning + typed tool execution.

## Benchmarking

Track:
- completion rate
- retries per task
- pass@1 and pass@3
- cost per successful task

## Anti-Patterns

- Too many tools with overlapping semantics.
- Opaque tool output with no recovery hints.
- Error-only output without next steps.
- Context overloading with irrelevant references.

## Verification and scope

Define a deterministic check of the expected artifact before starting. Keep queue selection, execution, and validation separate. Report an item as complete only after its check passes.
