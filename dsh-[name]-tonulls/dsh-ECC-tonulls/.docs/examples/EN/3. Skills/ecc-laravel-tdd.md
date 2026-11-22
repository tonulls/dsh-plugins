# ecc-laravel-tdd

**Command:** `/ecc-laravel-tdd`

**Purpose:** Develop and fix Laravel tests using PHPUnit or Pest: model factories, HTTP tests, Sanctum authentication checks, mocks, and coverage; also drive features test-first.

## Prompts

### 1. Short Request
> /ecc-laravel-tdd Write a Pest test for this Laravel HTTP endpoint: verify successful response and denial without required permissions, using existing project factories.

### 2. Template with Placeholders
> /ecc-laravel-tdd Add tests for [feature/endpoint] covering [success scenario, errors, permissions]. Project uses [PHPUnit/Pest], factories [models], authentication [Sanctum/other]. First study existing conventions and test helpers. Modify only tests [list of paths]; do not install dependencies or change production code without separate approval.

### 3. Detailed Phased Request
> /ecc-laravel-tdd Do test-first work for scenario [description] in Laravel. 1) Find analogous tests, PHPUnit/Pest configuration, and factories; clarify behavior boundaries. 2) Create a case matrix: valid request, validation errors, missing/insufficient authorization, side effects, and data boundaries. 3) Add minimal isolated tests, preferring factories and the HTTP layer when testing endpoints; use mocks only for external boundaries. 4) Show verification commands, but do not run them without need/approval. At the end list changed files, covered expectations, and untested cases. Do not change application code, install packages, or use the network.
