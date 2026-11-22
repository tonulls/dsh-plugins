# `/ecc-quarkus-verification`

**Purpose:** Quarkus project verification cycle: build, static analysis (Checkstyle, PMD, SpotBugs), tests and JaCoCo coverage, OWASP dependency/container security checks, GraalVM native compilation, health checks, and configuration validation. Use before a PR, after major refactoring or dependency updates, and before deployment.

## Short Prompt
```text
/ecc-quarkus-verification Prepare a configuration-backed verification plan for a Quarkus PR; do not run commands yet.
```

## Template Prompt
```text
/ecc-quarkus-verification
Context: [branch/PR, build and test configs, local tools, and environment constraints].
Task: assess Quarkus change readiness for PR/release for [target component/outcome].
Focus: build, static analysis, tests/coverage, security scans, native build, health/config checks, and side effects of each check.
Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-quarkus-verification
Perform the task “assess Quarkus change readiness for PR/release” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess build, static analysis, tests/coverage, security scans, native build, health/config checks, and side effects of each check.
3. State findings or options with facts, risks, verification criteria, and unresolved questions; apply nothing.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
