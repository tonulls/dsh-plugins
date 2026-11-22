# `/ecc-redis-patterns`

**Purpose:** Redis practices: data structures, caching strategies, distributed locks, rate limiting, pub/sub messaging, and connection management for production applications. Use when adding these capabilities or reviewing key schemas.

## Short Prompt
```text
/ecc-redis-patterns Review the Redis key schema and selected data structure for [workload].
```

## Template Prompt
```text
/ecc-redis-patterns
Context: [operation/workload, key schema, TTL, clients/pools, and observed symptom].
Task: review or design Redis pattern for application [target component/outcome].
Focus: data structure, cache invalidation, distributed locks, rate limiting, pub/sub, and connection management.
Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-redis-patterns
Perform the task “review or design Redis pattern for an application” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess data structure, cache invalidation, distributed locks, rate limiting, pub/sub, and connection management.
3. State findings or options with facts, risks, verification criteria, and unresolved questions; apply nothing.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
