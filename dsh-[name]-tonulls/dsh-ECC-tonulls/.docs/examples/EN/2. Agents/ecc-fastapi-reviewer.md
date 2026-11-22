# `/ecc-fastapi-reviewer` — Prompt Examples

## Purpose

Conducts focused FastAPI reviews: async code and dependency injection correctness, Pydantic schemas, security, OpenAPI quality, testing, and operational readiness. This is analysis, not editing.

## Short Request

```text
/ecc-fastapi-reviewer Review only the FastAPI code in {paths/diff}; check async, dependencies, schemas, and security. Do not change anything.
```

## Template Request

```text
/ecc-fastapi-reviewer Review {endpoint/module} in {path or diff}. Assess async call correctness, dependency injection, Pydantic validation, authorization, errors, and the OpenAPI contract. Report only confirmed findings, with priority, file/line, risk scenario, and recommendation; make no changes.
```

## Detailed Request

```text
/ecc-fastapi-reviewer Perform a read-only review of the FastAPI change {diff/path}, especially for the scenario {endpoint purpose}.
1. Trace the request route and dependencies: execution order, blocking operations in async context, resource lifecycle, and error handling.
2. Check Pydantic schemas and trust boundaries: input/output validation, field leaks, authorization, and sensitive data.
3. Assess HTTP status codes, the OpenAPI contract, and whether tests cover significant behavior.
4. Report only specific defects or risks supported by the code; do not present style preferences as bugs.

Format: findings in descending severity (priority, file/line, reproduction condition, consequences, recommendation), followed by checked areas and gaps. Analysis only: do not edit code; do not install dependencies, access the network, or deploy without approval.
```