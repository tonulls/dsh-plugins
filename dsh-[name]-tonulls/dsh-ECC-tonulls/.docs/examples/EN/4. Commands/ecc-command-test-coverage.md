# `/ecc-command-test-coverage`

**Purpose:** Analyze existing test coverage, identify uncovered functions, branches, and edge cases, then add missing tests within an explicitly specified project scope. Use only locally available tools and existing project conventions; installing/downloading packages is prohibited.

## Prompt Examples

### 1. Short Request
```text
/ecc-command-test-coverage Analyze coverage for the order-validation module and add missing tests for that module only. Do not install dependencies.
```

### 2. Request with Context
```text
/ecc-command-test-coverage
Check coverage for component [path/name] in project [path or repository]. Find an available local coverage command, compare metrics by file, and first focus on [important functions, branches, or errors].

Add tests only in [exact scope], following the project's established location and style. Target coverage: [e.g. 80% / improve current metric only]. Do not change production code without separate approval. Use only tools already installed; do not run npx if it downloads code and do not install packages. If coverage cannot be measured with existing tools, report that instead of installing anything.
```

### 3. Detailed Request
```text
/ecc-command-test-coverage
Analyze and improve test coverage for [folder/module] toward [threshold or specific improvement]. Work sequentially:
1. Identify the test framework and locally available coverage tool from project configuration. Do not download tools/packages; if no suitable tool exists, stop and state the limitation.
2. Obtain baseline metrics and list files below target, starting with the least covered. For each, identify untested functions, branches, error handling, and edge cases.
3. Suggest tests in priority order: core behavior, errors, edge/empty inputs, and remaining branches. Add them only within [exact approved scope], using existing patterns, assertions, and mocking approaches. Do not include real secrets or send data to external services.
4. Run the available local test command and measure coverage again. Do not change production behavior or configuration, or create files outside the test scope without prior approval. Deleting/overwriting files and any side-effecting action require separate approval.
5. Report before/after coverage for changed target files and overall if available, scenarios added, checks and results, remaining gaps, and blockers.

If tests fail or improvement would require changing the application, stop, explain why, and request approval for next steps.
```
