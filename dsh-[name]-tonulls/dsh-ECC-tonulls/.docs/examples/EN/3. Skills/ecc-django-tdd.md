# `/ecc-django-tdd`

Helps drive Django/DRF development through tests using pytest-django, factory_boy, and mocks, including TDD and coverage checks.

## Simple Request

```text
/ecc-django-tdd Write pytest-django tests for a DRF endpoint that filters orders by status.
```

## Template Request

```text
/ecc-django-tdd
Feature/endpoint: [description]
Expected rules: [list]
Current pytest-django setup: [snippets]
Factories and authentication: [what already exists]
Create a test matrix and follow repository style; do not install packages.
```

## Detailed Request

```text
/ecc-django-tdd Test [feature/defect] in a Django/DRF project using the existing pytest-django stack. First identify observable behavior and prepare a test plan: success scenarios, validation, permissions, empty/boundary data, and errors. Use existing factory_boy factories and mocks only at external boundaries; for a defect, capture a regression before changing the implementation. Do not call real external APIs or change data outside an isolated test database. Agree on new dependencies/configuration in advance. After approval, modify only necessary test files and, if explicitly requested, production files; run the selected local tests and report actual results.
```