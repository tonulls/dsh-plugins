# `/ecc-django-celery`

Helps configure background and periodic Django tasks with Celery: configuration, retries, canvas, monitoring, and testing.

## Simple Request

```text
/ecc-django-celery Suggest a reliable Django Celery task for processing an uploaded report.
```

## Template Request

```text
/ecc-django-celery
Django/Celery versions and broker: [data]
Task and expected duration: [description]
Retry/idempotency requirements: [conditions]
Current configuration: [snippets]
Suggest the task, error handling, monitoring, and tests in the project's style.
```

## Detailed Request

```text
/ecc-django-celery Design background processing for [operation] using Django [version], Celery [version], broker [type]. Define transaction boundaries and enqueue timing, idempotency key, timeouts/retries with backoff, behavior after retries are exhausted, queue routing, and periodic schedule if needed. Consider argument serialization, redelivery, and observability. Suggest unit/integration tests that do not call external services. Recommendation only at first; make changes or install dependencies only after approval. Result: task design, configuration locations, risks, tests, and local verification commands.
```
