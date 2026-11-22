# `/ecc-netmiko-ssh-automation`

**Purpose:** Safe Python Netmiko practices: read-only collection, bounded parallel SSH connections, TextFSM parsing, controlled configuration changes, timeouts, and network automation error handling. Use for network-device automation, including data collection and configuration changes.

## Short Prompt
```text
/ecc-netmiko-ssh-automation Review this Netmiko script for collecting device status; do not run configuration-changing commands by default.
```

## Template Prompt
```text
/ecc-netmiko-ssh-automation
Context: [project path / snippet / system / symptom].
Task: design safe network-device automation using Netmiko for [goal or subject].
Focus: read-only collection, bounded parallel SSH, TextFSM, timeouts, and guarded configuration changes.
Constraints: Diagnostic mode: do not change the device, configuration, or external state; request approval before active checks.
Output format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt
```text
/ecc-netmiko-ssh-automation
Perform the task “design safe network-device automation using Netmiko” for [project/component/scenario].
1. Record baseline information, scope, and success criteria; list missing information.
2. Study only relevant context and assess read-only collection, bounded parallel SSH, TextFSM, timeouts, and guarded configuration changes.
3. Form conclusions and next steps without applying changes or presenting assumptions as facts.
4. Compare results with criteria, cite evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Diagnostic mode: do not change the device, configuration, or external state; request approval before active checks.
Include outcome, important findings/actions, unverified areas, risks, and safe next steps.
```
