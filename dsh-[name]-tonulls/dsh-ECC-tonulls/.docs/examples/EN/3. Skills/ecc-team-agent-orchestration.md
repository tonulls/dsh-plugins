# `/ecc-team-agent-orchestration`

Helps coordinate parallel work by a team of agents: decomposition with owners and boundaries, Kanban states, branch isolation, control panel, and merge conditions.

## Simple Request
```text
/ecc-team-agent-orchestration Break [task] into independent work items for an agent team, with owners and acceptance criteria.
```
## Template Request
```text
/ecc-team-agent-orchestration
Goal: [outcome]
Scope and constraints: [description]
Available agents/environment: [if known]
Suggest work items, owners, dependencies, statuses, and merge gates; do not launch agents or change branches without approval.
```
## Detailed Request
```text
/ecc-team-agent-orchestration Plan team work on [task]. Steps: identify independent parts and shared interfaces; assign each task an owner, inputs/outputs, and readiness criteria; map dependencies and Kanban transitions; suggest branch/worktree isolation and conflict controls; define checks and merge/stop conditions. Do not create branches, worktrees, files, or launch agents before my explicit approval; do not merge/push/deploy. Result: work plan, dependency map, coordination risks, checkpoints, and integration order.
```
