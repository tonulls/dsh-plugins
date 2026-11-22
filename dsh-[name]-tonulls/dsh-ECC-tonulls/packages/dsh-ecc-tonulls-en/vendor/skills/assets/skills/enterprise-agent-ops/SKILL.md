<!-- Generated from skills/enterprise-agent-ops/SKILL.md at 25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b; edit the pinned source or generator instead. -->
# DSH skill adaptation

Use this instruction only when the user explicitly invokes its `/ecc-*` command. It runs in the current DSH session and does not start a separate agent or process.
Use only models, tools, and integrations actually available in the current DSH session. Upstream model, tool, hook, and MCP settings are not imported.
This package contains Markdown resources only. It does not install, download, or execute upstream scripts, hooks, MCP servers, or other helpers. If the task depends on a missing helper or integration, explain the limitation instead of assuming it exists.
References to other ECC Skills, Commands, agents, or slash commands are not proof that they are included or available; verify the active catalog and current DSH session before invoking them, and explain any missing capability.
This instruction grants no permissions. Do not perform external, destructive, or other side-effecting actions unless the user requested them and current session policy allows them.

Source: https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/skills/enterprise-agent-ops/SKILL.md

# Enterprise Agent Ops

Use this skill for cloud-hosted or continuously running agent systems that need operational controls beyond single CLI sessions.

## Operational Domains

1. runtime lifecycle (start, pause, stop, restart)
2. observability (logs, metrics, traces)
3. safety controls (scopes, permissions, kill switches)
4. change management (rollout, rollback, audit)

## Baseline Controls

- immutable deployment artifacts
- least-privilege credentials
- environment-level secret injection
- hard timeout and retry budgets
- audit log for high-risk actions

## Metrics to Track

- success rate
- mean retries per task
- time to recovery
- cost per successful task
- failure class distribution

## Incident Pattern

When failure spikes:
1. freeze new rollout
2. capture representative traces
3. isolate failing route
4. patch with smallest safe change
5. run regression + security checks
6. resume gradually

## Deployment Integrations

This skill pairs with:
- PM2 workflows
- systemd services
- container orchestrators
- CI/CD gates
