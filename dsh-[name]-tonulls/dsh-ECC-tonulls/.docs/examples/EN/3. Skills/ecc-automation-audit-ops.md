# `/ecc-automation-audit-ops`

Inventories and audits overlaps among ECC automations using evidence: jobs, hooks, connectors, MCP servers, and wrappers. Helps determine what works, is broken, duplicated, or missing before making fixes.

## Prompt Examples

### 1. Short Request
```text
/ecc-automation-audit-ops Inventory this project's automations and identify confirmed duplicates and failures. Do not fix anything yet.
```

### 2. Template Request
```text
/ecc-automation-audit-ops Audit [repository/area]: check [jobs/hooks/connectors/MCP/wrappers]. Use available local configuration and status; distinguish facts, assumptions, and unknowns. Make no changes. Summarize the result in a “component — purpose — state — evidence — overlap/gap” table.
```

### 3. Detailed Request
```text
/ecc-automation-audit-ops Conduct an evidence-first audit of automations in [project/area]. 1) Identify available inventory sources for jobs, hooks, connectors, MCP servers, and wrappers; do not treat an unavailable source as proof that a component is absent. 2) For each discovered component, record its purpose, state, and supporting path/output. 3) Compare functionality and identify actual duplicates, failures, and gaps with confidence levels. 4) Do not fix, run, or reconfigure automations. Output: summary table, prioritized findings, and areas that could not be checked.
```
