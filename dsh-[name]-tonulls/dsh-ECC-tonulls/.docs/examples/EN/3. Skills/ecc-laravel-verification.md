# ecc-laravel-verification

**Command:** `/ecc-laravel-verification`

**Purpose:** Phased verification of a Laravel project before merge/release: environment, lint, static analysis, tests and coverage, security scanning, and deployment readiness.

## Prompts

### 1. Short Request
> /ecc-laravel-verification Create a read-only verification plan for this Laravel PR before merge: environment, lint, analysis, tests, security, and open risks. Do not run or deploy anything.

### 2. Template with Placeholders
> /ecc-laravel-verification Prepare verification for Laravel project [path/branch] before [merge/release]. Known commands: [commands or “find in configuration”], target coverage [threshold/unspecified], environment constraints [description]. Check available lint/static-analysis/tests/security settings, suggest a safe order and PASS/FAIL criteria. Do not install dependencies or run destructive commands; checks affecting data or environment require prior approval.

### 3. Detailed Phased Request
> /ecc-laravel-verification Conduct a preliminary readiness audit for Laravel change [description/PR] without running checks. 1) Determine required PHP/Laravel versions and availability of local tools from project configuration; do not install missing tools. 2) Order phases: formatting/lint, static analysis, tests with explicitly configured coverage targets, security checks, migrations, and configuration. 3) For each phase, give an exact command only if confirmed by repository files, plus side effects and stop condition on failure. 4) Label deployment readiness as an assessment, not authorization to deploy. Output: “phase / basis / command / criterion / risk” table, then blockers and missing information. Analysis only: do not run commands, modify files, install packages, access the network, or deploy.
