# `/ecc-enterprise-agent-ops`

Helps operate long-lived agent systems: lifecycle, observability, permission limits, kill switch, and controlled rollout/rollback.

## Simple Request

```text
/ecc-enterprise-agent-ops Create a checklist for monitoring and safely stopping a production fleet of agents.
```

## Template Request

```text
/ecc-enterprise-agent-ops
Runtime environment: [PM2/systemd/containers]
Number and roles of agents: [description]
Available logs/metrics/traces: [list]
Permission policy and kill switch: [description]
Provide a read-only assessment; do not stop processes or perform a rollout.
```

## Detailed Request

```text
/ecc-enterprise-agent-ops Assess operational controls for agent service [system] on [PM2/systemd/container platform]. Review the proposed lifecycle (start/pause/stop/restart), logs/metrics/traces, least-privilege safety scopes and verifiable kill switch, audit trail, rollout/rollback gates, and success/cost metrics. Identify monitoring gaps and incident scenarios; propose stop criteria and recovery steps. Do not run management commands, change configuration, deploy, or access the network without separate explicit approval. Report: prioritized risks, required telemetry, safe change design, and verification/rollback plan.
```
