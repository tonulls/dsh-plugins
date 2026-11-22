# `/ecc-verification-loop`

Runs a six-phase check of Claude Code session work: build, type checks, lint, tests with coverage, security-leak scan, and diff review, ending with a PASS/FAIL report.

## Simple Request
```text
/ecc-verification-loop Check readiness of the current change and report by phase; do not modify files.
```
## Template Request
```text
/ecc-verification-loop
Change/diff: [scope]
Project criteria: [build, tests, coverage]
Permitted checks: [list]
First report the plan and side effects; do not reveal secrets or make changes.
```
## Detailed Request
```text
/ecc-verification-loop Verify completed work [description] before a PR. First identify available commands and agree on a plan. Run phases: build; type check; lint; tests and coverage; safe scan for suspicious secrets without printing values; diff review. Do not fix files, install dependencies, or access the network without my separate approval. Do not run commands that change state or require an external database/secrets without approval. For each phase state PASS/FAIL/BLOCKED/NOT RUN, command actually run, and evidence; the final verdict must account for skipped checks and must not claim PASS without complete verification.
```
