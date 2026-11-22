# `/ecc-csharp-testing`

Suggests C#/.NET testing practices with xUnit, FluentAssertions, mocks, integration tests, and an organized test structure.

## Simple Request

```text
/ecc-csharp-testing Write xUnit tests to verify handling of an empty order list.
```

## Template Request

```text
/ecc-csharp-testing
Component: [type/method]
Expected behavior: [rules]
Current test stack: [xUnit, FluentAssertions, mocking libraries]
Edge cases: [list]
Suggest a test structure and do not install packages.
```

## Detailed Request

```text
/ecc-csharp-testing Develop test coverage for [feature] in a .NET project using [xUnit/FluentAssertions/mocks]. Follow the existing structure. Define success, boundary, and error scenarios; distinguish unit from integration checks, use mocks only at external boundaries, and keep tests deterministic. If a package or project change is required, ask permission first and suggest an alternative without it. Do not access external systems or change production behavior without a separate request. After agreement, make scoped changes and run only the local test suite; report commands and actual results.
```
