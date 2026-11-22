# `/ecc-django-security`

Conducts Django security reviews: authentication and authorization, CSRF, SQL injection, XSS, input handling, and secure deployment settings.

## Simple Request

```text
/ecc-django-security Review this Django view for authorization and CSRF errors; do not modify files.
```

## Template Request

```text
/ecc-django-security
Path/snippet: [code]
Django version: [version]
Scenario and roles: [description]
Trust boundaries: [data]
Static analysis only; do not modify files or run exploit checks.
```

## Detailed Request

```text
/ecc-django-security Conduct a read-only audit of the specified Django code: [paths/snippets]. Do not modify files, exploit vulnerabilities, make network requests, or change data. Trace authentication and object-level authorization, CSRF, safe user input handling, ORM/raw SQL, template output and XSS, file uploads, and relevant production settings. Account for actual data flows and roles; do not expose secrets. For each finding, provide exact location, triggering condition, impact, severity, and recommendation; clearly mark uncertainty. End with analysis coverage, prioritized findings, and safe tests for follow-up verification.
```
