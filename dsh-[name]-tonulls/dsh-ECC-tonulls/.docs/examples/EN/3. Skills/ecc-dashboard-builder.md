# `/ecc-dashboard-builder`

Helps build dashboards in Grafana, SigNoz, and similar systems around real operator questions rather than decorative charts.

## Simple Request

```text
/ecc-dashboard-builder Design a Grafana dashboard that helps the on-call engineer quickly understand task queue health.
```

## Template Request

```text
/ecc-dashboard-builder
Dashboard user: [role]
Questions it must answer: [list]
Available metrics and labels: [list]
Platform: [Grafana/SigNoz/other]
Suggest panels, thresholds, and variables; do not change the live configuration.
```

## Detailed Request

```text
/ecc-dashboard-builder Design an operational dashboard for [system/service] in [Grafana/SigNoz]. Target role: [role], decision scenarios: [incident/daily monitoring], available sources and metrics: [list]. First map each operator question to a signal; then suggest panels, time ranges, variables, groupings, and thresholds, distinguishing symptoms from causes. Avoid vanity metrics and unverified SLOs. Consider cardinality and readability during incidents. Do not connect data sources, change dashboards, or call APIs without explicit approval. Report: layout, panel purpose, queries/metrics if data is available, instrumentation gaps, and verification criteria.
```
