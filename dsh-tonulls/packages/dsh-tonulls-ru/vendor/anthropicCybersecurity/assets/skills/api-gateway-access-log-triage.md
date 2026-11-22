---
name: anthropic-cybersecurity-api-gateway-log-triage
description: Analyze user-provided API Gateway access logs for defensive indicators such as unusual object access, authentication failures, and method anomalies; do not use this skill to test live endpoints.
upstream-skill: analyzing-api-gateway-access-logs
adaptation: Rewritten for DSH as read-only analysis of user-provided or authorized logs; upstream code and dependency-install instructions were removed.
license: Apache-2.0
---
# API Gateway access-log triage

Use only for defensive analysis of access logs supplied by the user or explicitly authorized for review. This procedure does not test an API, establish that an authorization bug exists, or confirm an incident.

## Workflow

1. Confirm the log format, time zone, time window, and authorized scope. If these are unclear, ask before proceeding. Request a redacted export or excerpt; do not read unrelated local files.
2. Identify available fields such as timestamp, route, method, status, request identifier, pseudonymized account identifier, resource identifier, response size, and source address. Do not repeat credentials, cookies, tokens, email addresses, or other personal data in findings.
3. Review for defensive indicators in the supplied records:
   - One account accessing unusually many distinct or sequential object identifiers on a route; treat this as a possible BOLA/IDOR indicator, not proof of an authorization failure.
   - Bursts of authentication failures, unusual status-code ratios, or rate-limit responses that differ from the supplied baseline.
   - Methods such as `DELETE` or `PATCH` appearing on routes expected to be read-only, after confirming the route's documented behavior.
   - Injection-like strings or malformed parameters in logged requests. Redact examples and do not replay them.
4. Correlate only within the provided time range and relevant records. Account for retries, shared NAT/proxies, automated clients, pagination, batch jobs, and legitimate administrative activity before assigning severity.
5. Produce a concise report with time window, redacted evidence, affected route, indicator, confidence, plausible benign explanations, and safe read-only follow-up questions. State explicitly what the logs cannot establish.

## Output discipline

Do not identify a person from an IP address, infer successful access from a request alone, or claim data exposure without evidence. Do not contact endpoints, modify API configuration, block addresses, disable accounts, or create/execute a remediation plan unless the user separately requests and confirms that action.
