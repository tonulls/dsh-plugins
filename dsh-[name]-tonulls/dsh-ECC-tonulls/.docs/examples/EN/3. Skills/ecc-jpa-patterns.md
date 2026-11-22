# ecc-jpa-patterns

**Command:** `/ecc-jpa-patterns`

**Purpose:** JPA/Hibernate practices for designing entities and relationships, query optimization, transactions, auditing, indexing, pagination, and connection pools in Spring Boot. Use when designing entities/relationships or resolving Hibernate query, transaction, and N+1 issues.

## Prompts

### 1. Short Request
> /ecc-jpa-patterns Analyze the cause of N+1 in this JPA query.

### 2. Template with Context
> /ecc-jpa-patterns Entities: [names], query: [description], DB: [type]. Check relationships, fetch strategy, transactions, indexes, and pagination.

### 3. Detailed Request
> /ecc-jpa-patterns Investigate [repository/scenario] using JPA/Hibernate. Trace entity relationships and SQL; check N+1, transaction boundaries, auditing, indexes, pagination, and pool. Do not run migrations or modify data. Return substantiated cause, alternatives, and a test/measurement to verify.
