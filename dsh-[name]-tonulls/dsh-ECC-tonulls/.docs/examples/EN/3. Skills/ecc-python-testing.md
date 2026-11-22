# `/ecc-python-testing`

**Purpose:** Python testing practices with pytest and TDD: fixtures, mocks, parametrization, and coverage requirements. Use when writing pytest tests or working with fixtures, mocks, parametrization, or coverage.

## Short Prompt
```text
/ecc-python-testing Suggest pytest tests for [function]: fixtures, parameters, errors, and boundary inputs.
```

## Template Prompt
```text
/ecc-python-testing
Context: [function, expected behavior, invalid/edge inputs, and existing tests].
Task: design pytest tests for Python code for [target component/outcome].
Focus: TDD, suitable fixtures/mocks/parametrize, important boundaries, and actual coverage.
Constraints: Prepare a test plan/examples in repository style; do not run commands or install dependencies without approval.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-python-testing
Perform the task “design pytest tests for Python code” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess TDD, suitable fixtures/mocks/parametrize, important boundaries, and actual coverage.
3. Form a test suite or code sketch using only the stack already in the project; distinguish proposed checks from those actually run.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Prepare a test plan/examples in repository style; do not run commands or install dependencies without approval.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
