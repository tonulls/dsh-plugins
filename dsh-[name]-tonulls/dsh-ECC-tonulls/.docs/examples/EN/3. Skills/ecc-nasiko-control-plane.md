# `/ecc-nasiko-control-plane`

**Purpose:** Manages the lifecycle of the experimental Nasiko CLI through ECC: read-only status checks, installation of a pinned verified version only after dry-run and user consent, removal with ownership verification, and explicit telemetry/secret safeguards. Use when asked to install, check, remove, or determine whether Nasiko CLI is installed.

## Short Prompt
```text
/ecc-nasiko-control-plane Check whether Nasiko CLI is installed and its version; do not install or remove it yet.
```

## Template Prompt
```text
/ecc-nasiko-control-plane
Context: [project path / snippet / system / symptom].
Task: check Nasiko CLI installation status for [goal or subject].
Focus: read-only status first, pinned verified version, dry-run, ownership check, and explicit consent for install/remove.
Constraints: Diagnostic mode: do not change the device, configuration, or external state; request approval before active checks.
Output format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt
```text
/ecc-nasiko-control-plane
Perform the task “check Nasiko CLI installation status” for [project/component/scenario].
1. Record baseline information, scope, and success criteria; list missing information.
2. Study only relevant context and verify read-only status first, pinned verified version, dry-run, ownership check, and explicit consent for install/remove.
3. Form conclusions and next steps without applying changes or presenting assumptions as facts.
4. Compare results with criteria, cite evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Diagnostic mode: do not change the device, configuration, or external state; request approval before active checks.
Include outcome, important findings/actions, unverified areas, risks, and safe next steps.
```
