# `/ecc-mysql-patterns`

**Purpose:** MySQL and MariaDB practices for production server applications: schemas, queries, indexes, transactions, replication, and connection pools. Use when designing schemas/indexes or diagnosing query, transaction, or replica latency.

## Short Prompt
```text
/ecc-mysql-patterns Analyze a slow MySQL/MariaDB query and suggest indexing options that account for transactions.
```

## Template Prompt
```text
/ecc-mysql-patterns
Context: [project path / snippet / system / symptom].
Task: analyze a MySQL/MariaDB schema or query latency for [goal or subject].
Focus: schema, indexes, transactions, replication, connection pools, and query latency.
Constraints: Read-only: do not modify files or run active/external checks.
Output format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt
```text
/ecc-mysql-patterns
Perform the task “analyze a MySQL/MariaDB schema or query latency” for [project/component/scenario].
1. Record baseline information, scope, and success criteria; list missing information.
2. Study only relevant context and assess schema, indexes, transactions, replication, connection pools, and query latency.
3. Form conclusions and next steps without applying changes or presenting assumptions as facts.
4. Compare results with criteria, cite evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Read-only: do not modify files or run active/external checks.
Include outcome, important findings/actions, unverified areas, risks, and safe next steps.
```
