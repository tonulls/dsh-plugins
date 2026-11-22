---
name: anthropic-cybersecurity-web-access-log-triage
description: Analyze user-provided Apache or Nginx access logs for possible intrusion indicators; do not use this skill to scan or test a live web server.
upstream-skill: analyzing-web-server-logs-for-intrusion
adaptation: Rewritten for DSH as read-only analysis of user-provided or authorized logs; upstream code, GeoIP enrichment, and dependency-install instructions were removed.
license: Apache-2.0
---
# Web-server access-log triage

Use only for defensive analysis of Apache or Nginx access logs supplied by the user or explicitly authorized for review. This procedure does not send requests to a server, validate an exploit, or confirm a compromise.

## Workflow

1. Confirm the log format, time zone, time window, and authorized scope. If these are unclear, ask before proceeding. Use a redacted excerpt or an explicitly selected log; do not inspect unrelated files.
2. Parse only fields available in the provided records, such as timestamp, method, URI, response status, response size, user-agent, and referer. Redact query values that may contain credentials, session IDs, personal data, or other secrets.
3. Look for patterns that may merit review, while preserving context:
   - Path traversal or local-file probes, including `../`, encoded variants, or requests for sensitive system paths.
   - SQL-injection- or script-injection-like strings in a URI or parameter.
   - Known scanner names in user-agent strings, unusual request rates, or repeated POST failures on authentication routes.
   - Sudden changes in response codes, response sizes, or request frequency compared with the baseline the user supplied.
4. Treat every pattern as an indicator, not a verdict. Consider scanners, monitoring systems, proxies, shared IP addresses, malformed clients, retries, and normal application behavior as alternative explanations. Do not attribute activity to a person from an IP or user-agent.
5. Report the time window, a minimally redacted example, the observed pattern, confidence, likely benign explanations, and safe read-only follow-up questions. Do not claim a successful attack based solely on a request string.

## Output discipline

Do not install packages, execute an upstream script, geolocate a source, or contact any host. Do not edit logs, web-server configuration, firewall rules, or accounts; do not isolate systems or claim containment. Any operational response requires a separate explicit user request and confirmation.
