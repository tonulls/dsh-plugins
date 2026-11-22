# `/ecc-mcp-dependency-review`

**Purpose:** Statically reviews MCP configuration for mutable package references before approval or CI execution, without launching discovered MCP servers. Use to review `.mcp.json` and repository MCP settings in Cursor, VS Code, Claude, Windsurf, and other environments.

## Short Request
```text
/ecc-mcp-dependency-review Statically audit `.mcp.json` and MCP configuration for mutable references and risks; do not launch servers.
```

## Template Request
```text
/ecc-mcp-dependency-review
Context: [project path / snippet / system / symptom].
Task: statically check MCP configuration for mutable dependencies for [goal or subject].
Focus: package references, version pinning, scripts/install hooks, trust boundaries; do not launch MCP servers.
Constraints: Read-only: do not modify files or run active/external checks.
Output format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Request
```text
/ecc-mcp-dependency-review
Perform the task “statically check MCP configuration for mutable dependencies” for [project/component/scenario].
1. Record baseline information, scope, and success criteria; list missing information.
2. Study only relevant context and assess package references, version pinning, scripts/install hooks, and trust boundaries; do not launch MCP servers.
3. Form conclusions and next steps without applying changes or presenting assumptions as facts.
4. Compare results with criteria, cite evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Read-only: do not modify files or run active/external checks.
Include outcome, important findings/actions, unverified areas, risks, and safe next steps.
```
