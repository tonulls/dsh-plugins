# `/ecc-security-bounty-hunter`

Helps find potentially exploitable vulnerabilities in a repository, prioritizing remotely reachable issues suitable for responsible disclosure over noisy local findings.

## Simple Request
```text
/ecc-security-bounty-hunter Perform a read-only analysis of this repository for serious remotely reachable vulnerabilities and describe the evidence.
```
## Template Request
```text
/ecc-security-bounty-hunter
Repository scope: [paths/components]
Threat model: [accessible interfaces and boundaries]
Authorized mode: static read-only analysis only
Look for verifiable paths from external input to impact. Do not exploit the system, send requests, or modify files.
```
## Detailed Request
```text
/ecc-security-bounty-hunter Perform local read-only code analysis of [scope] as part of an authorized assessment. Steps: identify externally reachable inputs; trace data to sensitive operations; check exploitation prerequisites and safeguards; rank only substantiated material findings; for each, prepare a safe impact description and reproducible static code references. Do not run exploits/scanners, make network requests, or act against real systems; do not extract secrets or modify files. If verification requires active testing, stop and request explicit authorization and a safe scope. Report: brief summary, findings with evidence and reachability conditions, false positives/unverified hypotheses, and limitations.
```
