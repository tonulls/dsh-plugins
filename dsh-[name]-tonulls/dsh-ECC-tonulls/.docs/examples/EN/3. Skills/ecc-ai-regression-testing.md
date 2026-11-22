# `/ecc-ai-regression-testing`

Regression-testing strategies for AI-assisted development: isolated API checks without a database, automated defect discovery, and protection against blind spots when the same model writes and reviews a change.

## Prompt Examples

### 1. Short Request
```text
/ecc-ai-regression-testing Suggest regression checks for this AI-generated change: [description]. Note what errors the authoring model may have missed.
```

### 2. Template Request
```text
/ecc-ai-regression-testing For change [feature/API] in [project/stack], create a regression coverage plan. Constraints: [whether database/external services may be accessed]. List scenarios, expected results, and how to test them in isolation; separately add independent checks to catch model blind spots.
```

### 3. Detailed Request
```text
/ecc-ai-regression-testing Develop a verifiable regression plan for change [path/description] in [stack]. 1) Derive behavior before and after the change from available requirements and code. 2) Create positive, negative, and edge-case scenarios, including likely AI implementation errors. 3) For APIs, suggest sandbox checks without a database dependency when applicable. 4) Do not modify files or install dependencies. Result: a “scenario — input — expected result — isolation level” table, followed by coverage gaps and priorities.
```
