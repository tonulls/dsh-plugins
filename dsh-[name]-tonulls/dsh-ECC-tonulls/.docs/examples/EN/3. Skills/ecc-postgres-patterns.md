# `/ecc-postgres-patterns`

**Purpose:** PostgreSQL practices: query optimization, schema design, indexing, and security based on Supabase recommendations. Use when designing schemas/indexes/RLS policies or investigating slow queries.

## Short Prompt
```text
/ecc-postgres-patterns Analyze this PostgreSQL query and suggest verifiable optimization without connecting to a database.
```

## Template Prompt
```text
/ecc-postgres-patterns
Context: [SQL/schema/migration, PostgreSQL version, representative load, and anonymized query plan].
Task: review or design PostgreSQL schema, queries, indexes, or RLS for [target component/outcome].
Focus: query plan, indexes, data integrity, access security, and applicable Supabase practices.
Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Format: [brief summary, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-postgres-patterns
Perform the task “review or design PostgreSQL schema, queries, indexes, or RLS” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess query plan, indexes, data integrity, access security, and applicable Supabase practices.
3. State findings or options with facts, risks, verification criteria, and unresolved questions; apply nothing.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
