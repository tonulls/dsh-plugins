# `/ecc-security-review`

Applies a security checklist to authentication, user input handling, API creation, secrets, and payment or other sensitive functionality.

## Simple Request
```text
/ecc-security-review Conduct a read-only security review of this change: [link/diff]. Do not modify files.
```
## Template Request
```text
/ecc-security-review
Change/component: [paths or diff]
Threat context: [users, trust boundaries]
Focus: [authentication/input/API/payments]
Analysis only; find substantiated risks and cite code evidence.
```
## Detailed Request
```text
/ecc-security-review Conduct a read-only security audit of [component/change]. Study trust boundaries and data flows; check authentication/authorization, input validation, secrets, APIs, and sensitive operations as applicable; trace each potential issue to specific code and assess reachability and impact. Do not modify files, fix findings, run active tests, access the network, or reveal secret values. For each finding, state severity, path/location, risk scenario, and safe recommendation; mark unsubstantiated suspicions separately. End with coverage reviewed, limitations, and remediation priorities.
```
