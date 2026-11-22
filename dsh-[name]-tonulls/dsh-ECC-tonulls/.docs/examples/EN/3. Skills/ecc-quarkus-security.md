# `/ecc-quarkus-security`

**Purpose:** Quarkus security practices: JWT/OIDC authentication, RBAC with `@RolesAllowed` and SecurityIdentity checks, Bean Validation and custom validators, parameterized Panache queries, BCrypt hashing, CORS/security headers, rate limiting, auditing, Vault/environment-variable secrets, and dependency CVE scanning. Use when configuring access, validating input, managing secrets, or hardening Quarkus apps.

## Short Prompt
```text
/ecc-quarkus-security Conduct a read-only audit of a Quarkus endpoint for auth/authz, validation, and secret leaks.
```

## Template Prompt
```text
/ecc-quarkus-security
Context: [endpoint, roles, input type, security configuration without secret values].
Task: review Quarkus service security for [target component/outcome].
Focus: JWT/OIDC, RBAC, SecurityIdentity, Bean Validation, parameterized queries, CORS, rate limits, audit, and secrets.
Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-quarkus-security
Perform the task “review Quarkus service security” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess JWT/OIDC, RBAC, SecurityIdentity, Bean Validation, parameterized queries, CORS, rate limits, auditing, and secrets.
3. State findings or options with facts, risks, verification criteria, and unresolved questions; apply nothing.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
