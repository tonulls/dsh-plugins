# `/ecc-django-patterns`

Helps build and review Django applications: architecture, DRF APIs, ORM queries, caching, signals, middleware, and production code organization.

## Simple Request

```text
/ecc-django-patterns Check the ORM query for the order list for N+1 issues and suggest an improvement.
```

## Template Request

```text
/ecc-django-patterns
Django version: [version]
Component: [model/API/view/service]
Current implementation: [path/code]
Performance and behavior constraints: [description]
Suggest a solution within the existing architecture and migrations.
```

## Detailed Request

```text
/ecc-django-patterns Analyze task [feature] in Django [version], using [DRF/ORM/cache]. First study relevant project conventions; then suggest separation of responsibilities, API shape/validation, efficient queries, and needed select_related/prefetch_related or caching when justified. Check transactions and signal side effects; suggest behavior and edge-case tests. Do not modify files or database schema, or install packages. If implementation affects data or the API contract, first describe compatibility and request approval. Provide analysis, a concrete option, risks, and checks.
```
