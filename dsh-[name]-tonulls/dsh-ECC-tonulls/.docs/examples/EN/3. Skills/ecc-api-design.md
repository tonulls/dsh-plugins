# `/ecc-api-design`

REST API design and analysis: resource naming, HTTP statuses, pagination, filtering, error formats, versioning, and rate limits.

## Prompt Examples

### 1. Short Request
```text
/ecc-api-design Review the design of REST endpoint [method and path]: resources, statuses, and errors. Analysis only; do not change code.
```

### 2. Template Request
```text
/ecc-api-design Design a REST API for [scenario] in [system]. Clients: [clients]; expected volume/constraints: [data]. Suggest paths, methods, pagination, and errors; explicitly identify unknown requirements.
```

### 3. Detailed Request
```text
/ecc-api-design Review the contract [endpoints/specification] for [task]. 1) Determine resources and operations from the supplied requirements. 2) For each route, specify method, path, input/output, and suitable statuses. 3) Check pagination, filters, a consistent error format, versioning, and rate limiting where applicable. 4) Check compatibility with existing clients if their contracts are available. Do not change code or invent requirements. Result: route table, justified findings, and questions for clarification.
```
