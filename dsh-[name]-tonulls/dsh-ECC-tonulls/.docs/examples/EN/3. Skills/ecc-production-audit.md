# `/ecc-production-audit`

**Purpose:** Assesses application production readiness using local evidence: before launch, after merge, and to answer “what will break in production?” Repository data is not sent to an external audit service.

## Short Prompt
```text
/ecc-production-audit Audit [service] for production readiness using local evidence only.
```

## Template Prompt
```text
/ecc-production-audit
Context: [service path, changed areas, configs, and local logs without secrets].
Task: assess local application production readiness before release or after merge for [target component/outcome].
Focus: configuration and environment, observability, migrations, security, failure modes, and local evidence without uploading the repository to an external audit.
Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-production-audit
Perform the task “assess local application production readiness before release or after merge” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess configuration/environment, observability, migrations, security, failure modes, and local evidence without uploading the repository to an external audit.
3. State findings or options with facts, risks, verification criteria, and unresolved questions; apply nothing.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
