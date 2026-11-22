# `/ecc-database-migrations`

Helps design safe and reversible database migrations: expand-contract, nonblocking indexes, batched backfills, and practices for common migration tools.

## Simple Request

```text
/ecc-database-migrations How can I rename a large PostgreSQL column without application downtime?
```

## Template Request

```text
/ecc-database-migrations
Database and tool: [PostgreSQL/Prisma/Drizzle/Kysely/Django/golang-migrate]
Current schema and volume: [description]
Change: [column/index/data]
Availability and rollback constraints: [conditions]
Suggest safe migration phases; do not run anything against a shared/production database.
```

## Detailed Request

```text
/ecc-database-migrations Plan a change to [schema/data] for [DBMS, version, tool]; the table contains approximately [volume], and the application must remain available. Consider expand-contract, compatibility between old and new application versions, concurrent index creation, batched backfill, and progress monitoring. Identify reversible steps and where rollback requires a compensating migration; list locks and stop criteria. Do not apply the migration, connect to the database, or modify files without approval. First provide the plan, SQL/sketch if needed, prechecks, monitoring, and step-by-step rollback; note what must be verified in staging.
```
