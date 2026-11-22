# `/ecc-springboot-tdd`

Helps drive Spring Boot development through tests: JUnit 5, Mockito, MockMvc, Testcontainers, and JaCoCo where applicable.

## Simple Request
```text
/ecc-springboot-tdd Create JUnit tests for scenario [behavior] in this Spring Boot service.
```
## Template Request
```text
/ecc-springboot-tdd
Change/defect: [description]
Code and contract: [snippets]
Test stack: [JUnit/Mockito/MockMvc/Testcontainers]
First suggest a test that captures expected behavior, then a minimal implementation and regression checks.
```
## Detailed Request
```text
/ecc-springboot-tdd Implement task [description] for Spring Boot using TDD. Steps: extract acceptance criteria and behavior boundaries; propose JUnit 5 tests for happy path, validation, errors, and integration contracts; first establish the expected failing test; then implement the change minimally; rerun checks and refactor without changing behavior. Use Mockito/MockMvc/Testcontainers only where appropriate and already available. Do not install dependencies or modify files without my approval; run test commands only with permission. Result: criteria-to-test mapping, checks actually run, and remaining gaps.
```
