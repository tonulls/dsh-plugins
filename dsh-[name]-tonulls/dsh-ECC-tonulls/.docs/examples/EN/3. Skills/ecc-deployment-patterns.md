# `/ecc-deployment-patterns`

Helps design CI/CD and containerization, health checks, rollback, and assess web application release readiness.

## Simple Request

```text
/ecc-deployment-patterns Review the web application release plan and suggest safe checks and a rollback strategy.
```

## Template Request

```text
/ecc-deployment-patterns
Application stack: [description]
CI/CD and containers: [tools]
Environments: [local/staging/production]
Expected availability and rollback: [constraints]
Plan and review only; do not deploy or publish anything.
```

## Detailed Request

```text
/ecc-deployment-patterns Assess release readiness for application [stack] and suggest a pipeline. Consider build and tests, containerization and least privilege, health/readiness checks, secrets through the standard store without exposing values, migrations, gradual rollout, and verifiable rollback. Define a gate and success/stop signal for each phase; account for differences between staging and production. Do not install packages, access the network, run CI, deploy, or change configuration without my separate approval. Provide process architecture, risks, checklist, and rollback plan.
```
