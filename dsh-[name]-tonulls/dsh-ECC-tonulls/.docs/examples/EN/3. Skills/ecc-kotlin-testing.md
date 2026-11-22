# ecc-kotlin-testing

Command: `/ecc-kotlin-testing`

Suggests Kotlin testing practices using Kotest, MockK, coroutines, property-based tests, and Kover.

### Short Request
```text
/ecc-kotlin-testing Write tests for [Kotlin function/class] using Kotest.
```

### Template Request
```text
/ecc-kotlin-testing Prepare a test strategy for [component]. We use [Kotest/MockK], behavior: [scenarios], dependencies: [description]. Account for async behavior [if any] and suggest coverage checks.
```

### Detailed Request
```text
/ecc-kotlin-testing For [component], first identify its contract and edge cases, then create a Kotest suite: success scenarios, errors, boundary values, and properties. For coroutine code, specify deterministic checks for time and cancellation; use MockK only for external dependencies. Describe how to run and interpret Kover. Do not modify files or install dependencies. Return test structure, examples, and coverage gaps.
```
