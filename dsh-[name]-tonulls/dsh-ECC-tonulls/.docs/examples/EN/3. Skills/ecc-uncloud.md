# `/ecc-uncloud`

Helps manage an Uncloud cluster using `uc`: service deployments, Caddy ingress, static routes, port publishing, scaling, logs, machines, and volumes.

## Simple Request
```text
/ecc-uncloud Explain how to safely check the status of Uncloud service [name] without changes.
```
## Template Request
```text
/ecc-uncloud
Cluster/service: [identifier]
Task: [logs/scale/route/volume]
Authorized mode: read-only only
Describe the required `uc` commands and expected effects; do not run them or change the cluster without approval.
```
## Detailed Request
```text
/ecc-uncloud I need to perform [task] for Uncloud [cluster/service]. First create a plan and classify each command as read-only or state-changing; state impact on availability, routing, data/volumes, and rollback options. Do not deploy, scale, change Caddy/ports/machines/volumes, or delete anything without my separate explicit approval for the specific action. Do not print secrets or access the network without permission. After approval, perform only the agreed scope and report exact commands, results, and status verification; without approval, provide the plan only.
```
