<!-- Generated from skills/ai-first-engineering/SKILL.md at 25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b; edit the pinned source or generator instead. -->
# DSH skill adaptation

Use this instruction only when the user explicitly invokes its `/ecc-*` command. It runs in the current DSH session and does not start a separate agent or process.
Use only models, tools, and integrations actually available in the current DSH session. Upstream model, tool, hook, and MCP settings are not imported.
This package contains Markdown resources only. It does not install, download, or execute upstream scripts, hooks, MCP servers, or other helpers. If the task depends on a missing helper or integration, explain the limitation instead of assuming it exists.
References to other ECC Skills, Commands, agents, or slash commands are not proof that they are included or available; verify the active catalog and current DSH session before invoking them, and explain any missing capability.
This instruction grants no permissions. Do not perform external, destructive, or other side-effecting actions unless the user requested them and current session policy allows them.

Source: https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/skills/ai-first-engineering/SKILL.md

# AI-First Engineering

Use this skill when designing process, reviews, and architecture for teams shipping with AI-assisted code generation.

## Process Shifts

1. Planning quality matters more than typing speed.
2. Eval coverage matters more than anecdotal confidence.
3. Review focus shifts from syntax to system behavior.

## Architecture Requirements

Prefer architectures that are agent-friendly:
- explicit boundaries
- stable contracts
- typed interfaces
- deterministic tests

Avoid implicit behavior spread across hidden conventions.

## Code Review in AI-First Teams

Review for:
- behavior regressions
- security assumptions
- data integrity
- failure handling
- rollout safety

Minimize time spent on style issues already covered by automation.

## Hiring and Evaluation Signals

Strong AI-first engineers:
- decompose ambiguous work cleanly
- define measurable acceptance criteria
- produce high-signal prompts and evals
- enforce risk controls under delivery pressure

## Testing Standard

Raise testing bar for generated code:
- required regression coverage for touched domains
- explicit edge-case assertions
- integration checks for interface boundaries
