# `/ecc-contract-first`

Coordinates changes between consumers and providers through one machine-readable contract (OpenAPI, AsyncAPI, Protobuf, or JSON Schema), type generation, and integration checks.

## Simple Request

```text
/ecc-contract-first Help align the contract for a new REST endpoint between the frontend and the order service.
```

## Template Request

```text
/ecc-contract-first
Provider: [service and stack]
Consumers: [clients]
Contract format: [OpenAPI/AsyncAPI/Protobuf/JSON Schema]
Change: [fields and behavior]
Compatibility constraints: [description]
Suggest a single source of truth and checks that prevent mocks from diverging from production.
```

## Detailed Request

```text
/ecc-contract-first For change [API/event] between [provider] and [consumers], propose a contract-first plan. First review current interfaces and compatibility constraints; choose an appropriate format from OpenAPI, AsyncAPI, Protobuf, or JSON Schema; define requiredness, errors, versioning, and field evolution; describe type generation and integration checks so mocks match the real format. Split the work between provider and consumers with readiness criteria. Do not modify files or add tools/dependencies without approval. Result: contract draft, phases, checks, risks, and unknowns.
```
