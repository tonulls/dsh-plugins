# `/ecc-api-connector-builder`

Adds an API connector or provider by following the repository's established integration pattern rather than introducing a parallel architecture.

## Prompt Examples

### 1. Short Request
```text
/ecc-api-connector-builder Add a connector for [provider] following the project's existing integrations. First study the local pattern.
```

### 2. Template Request
```text
/ecc-api-connector-builder Implement integration for [service/API] in [project]. Existing example to study: [path or name]. Required operations: [list]. Change only connector-related files; do not install dependencies or access the network. If the pattern or contract is unclear, stop and state the question.
```

### 3. Detailed Request
```text
/ecc-api-connector-builder Create a connector for [provider] in [repository/module]. 1) Find and study an existing connector: interface, configuration, errors, serialization, and testing approach. 2) Check locally available API requirements and list gaps; do not invent endpoints. 3) Implement only the required integration files in the same style; do not change unrelated modules, install packages, or make network requests. 4) Review the diff and report which checks were not run. Result: example used, change list, assumptions, and limitations.
```
