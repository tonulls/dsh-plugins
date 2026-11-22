# ecc-kotlin-exposed-patterns

**Command:** `/ecc-kotlin-exposed-patterns`

**Purpose:** JetBrains Exposed ORM practices: DSL queries, DAO, transactions, HikariCP connection pools, Flyway migrations, and repository pattern. Use when working with Exposed DSL/DAO queries, transactions, pools, or migrations.

## Prompts

### 1. Short Request
> /ecc-kotlin-exposed-patterns Optimize an Exposed query for [scenario].

### 2. Template with Context
> /ecc-kotlin-exposed-patterns Using [DSL/DAO], entities: [description], issue: [query/transaction/pool]. Review SQL, HikariCP, and migrations, but do not run them.

### 3. Detailed Request
> /ecc-kotlin-exposed-patterns Study JetBrains Exposed usage in [module]. Compare DSL/DAO, transaction boundaries, HikariCP, repository pattern, and Flyway migration plan. Do not connect to the database or apply migrations. Provide a specific recommendation, risks, and tests.
