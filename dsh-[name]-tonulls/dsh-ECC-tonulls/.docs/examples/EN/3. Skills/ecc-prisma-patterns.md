# `/ecc-prisma-patterns`

**Purpose:** Prisma ORM practices for TypeScript backends: schema design, query optimization, transactions, and pagination; important pitfalls include `updateMany` returning a count rather than records, `$transaction` timeouts, database reset with `migrate dev`, skipped `@updatedAt` on bulk writes, and serverless connection exhaustion. Use for Prisma schemas/queries, transactions, migrations, and connection limits.

## Short Prompt
```text
/ecc-prisma-patterns Analyze Prisma query [snippet] and check transactions, pagination, and N+1 risk.
```

## Template Prompt
```text
/ecc-prisma-patterns
Context: [Prisma model, query/repository, DBMS, version, and observed symptom].
Task: review Prisma schema, query, or backend transaction path for [target component/outcome].
Focus: transaction timeouts, updateMany, migration behavior, serverless connection limits, and actual data model.
Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-prisma-patterns
Perform the task “review Prisma schema, query, or backend transaction path” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess transaction timeouts, updateMany, migration behavior, serverless connection limits, and actual data model.
3. State findings or options with facts, risks, verification criteria, and unresolved questions; apply nothing.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
