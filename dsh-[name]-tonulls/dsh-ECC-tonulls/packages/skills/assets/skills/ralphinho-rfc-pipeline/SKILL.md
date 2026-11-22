<!-- Generated from skills/ralphinho-rfc-pipeline/SKILL.md at 25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b; edit the pinned source or generator instead. -->
# DSH skill adaptation

Use this instruction only when the user explicitly invokes its `/ecc-*` command. It runs in the current DSH session and does not start a separate agent or process.
Use only models, tools, and integrations actually available in the current DSH session. Upstream model, tool, hook, and MCP settings are not imported.
This package contains Markdown resources only. It does not install, download, or execute upstream scripts, hooks, MCP servers, or other helpers. If the task depends on a missing helper or integration, explain the limitation instead of assuming it exists.
References to other ECC Skills, Commands, agents, or slash commands are not proof that they are included or available; verify the active catalog and current DSH session before invoking them, and explain any missing capability.
This instruction grants no permissions. Do not perform external, destructive, or other side-effecting actions unless the user requested them and current session policy allows them.

Source: https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/skills/ralphinho-rfc-pipeline/SKILL.md

# Ralphinho RFC Pipeline

Inspired by [humanplane](https://github.com/humanplane) style RFC decomposition patterns and multi-unit orchestration workflows.

Use this skill when a feature is too large for a single agent pass and must be split into independently verifiable work units.

## Pipeline Stages

1. RFC intake
2. DAG decomposition
3. Unit assignment
4. Unit implementation
5. Unit validation
6. Merge queue and integration
7. Final system verification

## Unit Spec Template

Each work unit should include:
- `id`
- `depends_on`
- `scope`
- `acceptance_tests`
- `risk_level`
- `rollback_plan`

## Complexity Tiers

- Tier 1: isolated file edits, deterministic tests
- Tier 2: multi-file behavior changes, moderate integration risk
- Tier 3: schema/auth/perf/security changes

## Quality Pipeline per Unit

1. research
2. implementation plan
3. implementation
4. tests
5. review
6. merge-ready report

## Merge Queue Rules

- Never merge a unit with unresolved dependency failures.
- Always rebase unit branches on latest integration branch.
- Re-run integration tests after each queued merge.

## Recovery

If a unit stalls:
- evict from active queue
- snapshot findings
- regenerate narrowed unit scope
- retry with updated constraints

## Outputs

- RFC execution log
- unit scorecards
- dependency graph snapshot
- integration risk summary
