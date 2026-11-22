# `/ecc-backend-patterns`

Backend architecture, APIs, data access, and database optimization practices for Node.js, Express, and Next.js routes. Use when developing or analyzing these server components.

## Prompt Examples

### 1. Short Request
```text
/ecc-backend-patterns Check handler [path/endpoint] for common backend issues in our stack. Analysis only.
```

### 2. Template Request
```text
/ecc-backend-patterns Help implement [server-side feature] in [Node.js/Express/Next.js]. Data context: [model/storage], constraints: [list]. First follow the repository's current structure and conventions; changes are permitted only within [scope].
```

### 3. Detailed Request
```text
/ecc-backend-patterns Analyze [route/data-access layer] in a project using [Node.js, Express, or Next.js]. 1) Study neighboring implementations and establish the actual stack and task boundaries. 2) Check separation of routing and logic, input validation, error handling, database queries, and possible performance issues. 3) Support each finding with evidence and distinguish defects from recommendations. 4) If implementation is requested, change only files needed for [task], with no unrelated refactoring, package installation, or network actions; otherwise leave the code unchanged. Format: findings by severity, followed by a scoped plan or diff summary.
```
