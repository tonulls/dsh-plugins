# `/ecc-project-flow-ops`

**Purpose:** Manages work across GitHub and Linear: triages issues and pull requests, links active tasks, keeps GitHub as the public interface and Linear as the internal execution tool. Use for backlog management, PR triage, and GitHub/Linear coordination.

## Short Prompt
```text
/ecc-project-flow-ops Prepare a triage plan for [issues/PRs], linking public GitHub with internal Linear; change nothing.
```

## Template Prompt
```text
/ecc-project-flow-ops
Context: [issue/PR list, related Linear tickets, prioritization criteria, and access constraints].
Task: coordinate issue and PR triage between GitHub and Linear for [target component/outcome].
Focus: statuses, active-work links, backlog priorities, public/internal boundaries, and no publication without approval.
Constraints: Prepare a plan and verification criteria; do not change code, data, schedules, or external systems.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-project-flow-ops
Perform the task “coordinate issue and PR triage between GitHub and Linear” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess statuses, active-work links, backlog priorities, public/internal boundaries, and safeguards against unapproved publication.
3. State findings or options with facts, risks, verification criteria, and unresolved questions; apply nothing.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Prepare a plan and verification criteria; do not change code, data, schedules, or external systems.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
