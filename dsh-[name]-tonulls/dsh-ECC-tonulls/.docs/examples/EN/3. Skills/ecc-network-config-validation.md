# `/ecc-network-config-validation`

**Purpose:** Pre-deployment checks for router and switch configuration: dangerous commands, duplicate addresses, subnet overlaps, stale references, management-plane risks, and IOS-style security requirements. Use before deploying network configuration.

## Short Prompt
```text
/ecc-network-config-validation Review this router configuration snippet for dangerous commands, address conflicts, and management risks; do not apply it.
```

## Template Prompt
```text
/ecc-network-config-validation
Context: [project path / snippet / system / symptom].
Task: validate router or switch configuration before changes for [goal or subject].
Focus: dangerous commands, duplicate IPs, subnet overlaps, stale references, management-plane risks, and IOS security.
Constraints: Diagnostic mode: do not change the device, configuration, or external state; request approval before active checks.
Output format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt
```text
/ecc-network-config-validation
Perform the task “validate router or switch configuration before changes” for [project/component/scenario].
1. Record baseline information, scope, and success criteria; list missing information.
2. Study only relevant context and assess dangerous commands, duplicate IPs, subnet overlaps, stale references, management-plane risks, and IOS security.
3. Form conclusions and next steps without applying changes or presenting assumptions as facts.
4. Compare results with criteria, cite evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Diagnostic mode: do not change the device, configuration, or external state; request approval before active checks.
Include outcome, important findings/actions, unverified areas, risks, and safe next steps.
```
