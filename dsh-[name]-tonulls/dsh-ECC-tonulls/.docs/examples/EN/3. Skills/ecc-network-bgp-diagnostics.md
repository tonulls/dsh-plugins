# `/ecc-network-bgp-diagnostics`

**Purpose:** BGP troubleshooting without configuration changes: neighbor status, route exchange, prefix policies, AS path analysis, and safe evidence collection. Use when a BGP peer is unavailable, routes are missing, or policies/AS paths need review.

## Short Prompt
```text
/ecc-network-bgp-diagnostics Use these diagnostic outputs to find why a BGP peer is unavailable or routes are missing; do not change configuration.
```

## Template Prompt
```text
/ecc-network-bgp-diagnostics
Context: [project path / snippet / system / symptom].
Task: diagnose a BGP issue from supplied data for [goal or subject].
Focus: neighbor state, route exchange, prefix policy, AS path, and evidence collection; diagnostics only.
Constraints: Diagnostic mode: do not change the device, configuration, or external state; request approval before active checks.
Output format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt
```text
/ecc-network-bgp-diagnostics
Perform the task “diagnose a BGP issue from supplied data” for [project/component/scenario].
1. Record baseline information, scope, and success criteria; list missing information.
2. Study only relevant context and assess neighbor state, route exchange, prefix policy, AS path, and evidence collection; diagnostics only.
3. Form conclusions and next steps without applying changes or presenting assumptions as facts.
4. Compare results with criteria, cite evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Diagnostic mode: do not change the device, configuration, or external state; request approval before active checks.
Include outcome, important findings/actions, unverified areas, risks, and safe next steps.
```
