# `/ecc-unified-notifications-ops`

Helps organize a unified notification workflow across GitHub, Linear, desktop alerts, hooks, and connected channels: routing, deduplication, escalation, and inbox-noise reduction.

## Simple Request
```text
/ecc-unified-notifications-ops Suggest deduplication and escalation rules for notifications for [team/project].
```
## Template Request
```text
/ecc-unified-notifications-ops
Notification sources: [GitHub/Linear/other]
Channels and audience: [description]
Problem: [duplicates/noise/missed alerts]
Escalation constraints: [conditions]
Prepare a routing design; do not change live settings.
```
## Detailed Request
```text
/ecc-unified-notifications-ops Design a unified notification workflow for [team/goal]. 1) Inventory only supplied sources and rules. 2) Define deduplication keys and signal priorities. 3) Suggest routes, owners, escalation windows, and protections against loops/noise. 4) Describe auditing and missed/duplicate metrics. Do not connect to accounts, change subscriptions/hooks/rules, or send notifications without separate approval. Do not expose tokens. Result: design, example decisions, unknown settings, and a safe implementation plan with approval checkpoints.
```
