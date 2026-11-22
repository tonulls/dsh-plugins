# `/ecc-clickhouse-io`

**Purpose:** ClickHouse practices: database schemas, query optimization, analytics, and data processing for high-performance analytical workloads. Use when writing ClickHouse schemas/queries or investigating slow analytical queries.

## Short Prompt
```text
/ecc-clickhouse-io Analyze this slow ClickHouse query and suggest verifiable optimization options without changing the database.
```

## Template Prompt
```text
/ecc-clickhouse-io
Context: [project path / snippet / system / symptom].
Task: analyze a ClickHouse schema or slow analytical query for [goal or subject].
Focus: table model, key order, scan volume, aggregations, and optimization plan.
Constraints: Read-only: do not modify files or run active/external checks.
Output format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt
```text
/ecc-clickhouse-io
Perform the task “analyze a ClickHouse schema or slow analytical query” for [project/component/scenario].
1. Record baseline information, scope, and success criteria; list missing information.
2. Study only relevant context and assess table model, key order, scan volume, aggregations, and optimization plan.
3. Form conclusions and next steps without applying changes or presenting assumptions as facts.
4. Compare results with criteria, cite evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Read-only: do not modify files or run active/external checks.
Include outcome, important findings/actions, unverified areas, risks, and safe next steps.
```
