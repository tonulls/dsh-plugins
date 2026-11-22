# `/ecc-quarkus-tdd`

**Purpose:** Test-driven development for Quarkus 3.x LTS with JUnit 5, Mockito, REST Assured, Camel testing, and JaCoCo. Use when adding features, fixing defects, or refactoring event-driven services.

## Short Prompt
```text
/ecc-quarkus-tdd Create a test-first matrix and JUnit/REST Assured examples for [Quarkus scenario].
```

## Template Prompt
```text
/ecc-quarkus-tdd
Context: [feature/defect, API, project test stack, and behavior criteria].
Task: design TDD checks for Quarkus service [target component/outcome].
Focus: JUnit 5, Mockito, REST Assured, Camel tests, JaCoCo, and behavior before/after the change.
Constraints: Prepare a test plan/examples in repository style; do not run commands or install dependencies without approval.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-quarkus-tdd
Perform the task “design TDD checks for Quarkus service” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess JUnit 5, Mockito, REST Assured, Camel tests, JaCoCo, and behavior before/after the change.
3. Form a test suite or code sketch using only the stack already in the project; distinguish proposed checks from those actually run.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Prepare a test plan/examples in repository style; do not run commands or install dependencies without approval.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
