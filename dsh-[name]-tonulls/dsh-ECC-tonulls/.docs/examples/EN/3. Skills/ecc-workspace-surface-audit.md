# `/ecc-workspace-surface-audit`

Audits the active repository, MCP servers, plugins, connectors, env surfaces, and harness configuration, then recommends suitable ECC skills, hooks, agents, and workflows.

## Simple Request
```text
/ecc-workspace-surface-audit Inventory the current repository and available integrations read-only; do not reveal secrets.
```
## Template Request
```text
/ecc-workspace-surface-audit
Repository and goal: [context]
Available configurations: [paths/surfaces]
Constraints: read-only only
Inventory actually available components and suggest relevant ECC capabilities; do not read secret values or change settings.
```
## Detailed Request
```text
/ecc-workspace-surface-audit Help assess harness setup for [repository/goal] in read-only mode. In phases: inspect only available configurations and project structure; list MCP, plugins, connectors, env surfaces, and local workflows, distinguishing discovered facts from assumptions; check availability without exposing credential values; map actual needs to ECC skills/hooks/agents and suggest priorities. Do not connect to external systems, modify files/settings, install components, or include secrets in the report. Any active connection or change requires my separate approval. Result: evidence-backed inventory, gaps, recommendations, and audit limitations.
```
