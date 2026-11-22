# `/ecc-database-reviewer`

**Purpose:** PostgreSQL expert: query optimization, schema design, security, and performance. Use it when working with SQL and migrations or diagnosing a database; it takes Supabase practices into account.

## Short Prompt

```text
/ecc-database-reviewer Review this PostgreSQL query or migration for correctness, security, and performance; do not run anything against the database.
```

## Template Prompt

```text
/ecc-database-reviewer
Context: [project path / excerpt / system / symptom].
Task: review a PostgreSQL query, schema, or migration for [goal or subject].
Focus: SQL correctness, query plans, indexes, integrity, security, and applicable Supabase practices.
Constraints: Read-only: do not modify files or run active or external checks.
Result format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt

```text
/ecc-database-reviewer
Perform the task “review a PostgreSQL query, schema, or migration” for [project/component/scenario].
1. Record the input, scope, and success criteria; list any missing information.
2. Study only task-relevant context and check SQL correctness, query plans, indexes, integrity, security, and applicable Supabase practices.
3. Present findings and next steps without making changes or stating assumptions as facts.
4. Compare the result with the criteria, provide evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Read-only: do not modify files or run active or external checks.
Report the outcome, important findings/actions, unchecked areas, risks, and safe next steps.
```