# `/ecc-terminal-ops`

Organizes evidence-based command execution in a repository: checks, CI error diagnosis, and focused fixes with precise records of what ran and was verified.

## Simple Request
```text
/ecc-terminal-ops Analyze this CI error from available logs and suggest a safe check: [log]
```
## Template Request
```text
/ecc-terminal-ops
Repository/task: [context]
Command or error: [data]
Authorized scope: [read-only/specific local checks]
First list the command plan and side effects; do not run anything outside the agreed scope.
```
## Detailed Request
```text
/ecc-terminal-ops Verify/diagnose [task] in repository [scope]. First inspect relevant files and available instructions, then prepare a minimal plan of safe local commands and expected side effects. Before running commands, writing files, accessing the network, installing, changing Git, pushing, or deploying, request my separate approval for the relevant action. Record exact commands and actual exit codes/output; mask secrets. Do not claim a check succeeded if it was not run. Result: actions performed, evidence, checks not performed, and next safe step.
```
