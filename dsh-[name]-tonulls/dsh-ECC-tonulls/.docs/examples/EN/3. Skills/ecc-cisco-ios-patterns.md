# `/ecc-cisco-ios-patterns`

**Purpose:** Cisco IOS and IOS-XE review practices: show commands, configuration hierarchy, wildcard masks, ACL placement, interface status, and safe checks during a change window. Use when reading, writing, or reviewing configurations or planning a change window.

## Short Prompt

```text
/ecc-cisco-ios-patterns Review the supplied Cisco IOS/XE configuration snippet and flag risky areas without making device changes.
```

## Template Prompt

```text
/ecc-cisco-ios-patterns
Context: [project path / snippet / system / symptom].
Task: review Cisco IOS/IOS-XE configuration or prepare a safe change window for [goal or subject].
Focus: show commands, configuration hierarchy, wildcard ACLs, interfaces, and verification/rollback plan.
Constraints: Diagnostic mode only: do not change the device, configuration, or external state; request approval before any active check.
Output format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt

```text
/ecc-cisco-ios-patterns
Perform the task “review Cisco IOS/IOS-XE configuration or prepare a safe change window” for [project/component/scenario].
1. Record baseline information, scope, and success criteria; list missing information.
2. Study only relevant context and assess show commands, configuration hierarchy, wildcard ACLs, interfaces, and verification/rollback plan.
3. Form conclusions and next steps without applying changes or presenting assumptions as facts.
4. Compare results with criteria, cite evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Diagnostic mode only: do not change the device, configuration, or external state; request approval before any active check.
In the report include outcome, important findings/actions, unverified areas, risks, and safe next steps.
```
