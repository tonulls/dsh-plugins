# `/ecc-cpp-testing`

Supports writing and fixing C++ tests, configuring GoogleTest/CTest, diagnosing flaky tests, and adding coverage or sanitizers.

## Simple Request

```text
/ecc-cpp-testing Add edge-case tests for the C++ range parser.
```

## Template Request

```text
/ecc-cpp-testing
Component: [description/path]
Test stack: [GoogleTest/CTest/other]
Expected behavior: [rules and edge cases]
Existing tests: [path or example]
First propose a case matrix; after agreement, modify only the necessary test files.
```

## Detailed Request

```text
/ecc-cpp-testing Add coverage for [function/defect] in a C++ project using [GoogleTest/CTest/configuration]. Study current conventions; create tests for normal, boundary, and invalid inputs, and for a defect, first create a reproducible regression case. Keep tests deterministic and independent of networks and external services; suggest sanitizers/coverage only when appropriate. Before changing files, present a plan and clarify if new dependencies or build changes are needed. After approval, modify only related test/configuration files and run only authorized local commands. Report: changed areas, scenarios, and actual check results.
```
