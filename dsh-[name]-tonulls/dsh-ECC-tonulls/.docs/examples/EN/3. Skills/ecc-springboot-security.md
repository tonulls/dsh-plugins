# `/ecc-springboot-security`

Reviews Spring Security practices: authentication and authorization, validation, CSRF, secrets, headers, rate limiting, and dependencies.

## Simple Request
```text
/ecc-springboot-security Conduct a read-only review of this Spring Security configuration: [snippet]. Do not modify files.
```
## Template Request
```text
/ecc-springboot-security
Component/diff: [paths or snippet]
Login mechanism and roles: [description]
Client type: [browser/API]
Check authn/authz, CSRF, validation, secrets, and headers; do not expose secret values or fix code.
```
## Detailed Request
```text
/ecc-springboot-security Conduct a security audit of [scope] in Spring Boot/Spring Security, strictly without modifying files. Trace filter-chain configuration, authentication and authorization boundaries, endpoint access, validation, CSRF by client type, security headers, rate limiting, secret management, and dependency risks. Provide code evidence and scenarios for each conclusion; distinguish confirmed findings from assumptions. Do not run active tests, make network requests, print secrets, or make fixes. Result: severity, scope, impact, recommendation, and priority; note unverified environment settings.
```
