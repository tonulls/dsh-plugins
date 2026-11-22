# `/ecc-springboot-patterns`

Suggests Spring Boot architecture patterns for REST APIs, layered services, data access, caching, asynchronous processing, and logging.

## Simple Request
```text
/ecc-springboot-patterns Suggest a Spring Boot endpoint structure for [task], separating controller and service.
```
## Template Request
```text
/ecc-springboot-patterns
Java/Spring versions: [values]
Feature or API: [description]
Current architecture: [layers/code]
Constraints: [DB, transactions, load]
Suggest a solution consistent with the existing project and explain trade-offs.
```
## Detailed Request
```text
/ecc-springboot-patterns Design [feature] for a project using [Java and Spring Boot versions]. 1) Align the solution with current packages and conventions. 2) Define REST contract, validation, service boundaries, and transactions. 3) Analyze data access, caching/async only when justified. 4) Describe error handling and safe logging. 5) List test scenarios and risks. Do not modify files, add dependencies, or connect external services without my approval. Result: proposed structure/code sketch, rationale, assumptions, and checks.
```
