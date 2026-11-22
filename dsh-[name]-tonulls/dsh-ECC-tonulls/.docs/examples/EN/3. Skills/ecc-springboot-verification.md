# `/ecc-springboot-verification`

Runs phased Spring Boot checks: Maven/Gradle build, SpotBugs/PMD/Checkstyle static analysis, tests and coverage, dependency/secret checks, and diff review.

## Simple Request
```text
/ecc-springboot-verification Prepare a readiness report for this Spring Boot change; first check available checks, and change nothing.
```
## Template Request
```text
/ecc-springboot-verification
Change: [branch/diff]
Build tool: [Maven/Gradle]
Coverage/release criteria: [conditions]
Run available verification phases without installing tools or fixing files without approval; state what actually ran.
```
## Detailed Request
```text
/ecc-springboot-verification Prepare a verifiable readiness report for Spring Boot change [description]. First identify available commands and environment boundaries. Then by phase: Maven/Gradle build; SpotBugs, PMD, Checkstyle; unit and available Testcontainers tests with JaCoCo; safe dependency and secret-leak analysis without printing values; diff review. Do not access the network, install tools, deploy, or modify files without separate approval. If a command requires an external database/secrets or changes state, stop and request approval. For each phase report PASS/FAIL/BLOCKED/NOT RUN, exact command and actual result, limitations, and an overall readiness assessment.
```
