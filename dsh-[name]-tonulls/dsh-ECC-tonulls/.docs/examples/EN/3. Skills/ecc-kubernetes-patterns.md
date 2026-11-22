# ecc-kubernetes-patterns

Command: `/ecc-kubernetes-patterns`

Helps design and analyze Kubernetes manifests, resources, RBAC, probes, autoscaling, and configuration.

### Short Request
```text
/ecc-kubernetes-patterns Review this Deployment: [manifest]. Find probe and resource-limit risks.
```

### Template Request
```text
/ecc-kubernetes-patterns Analyze manifests for [service] in [environment]. Load [description], availability requirements [requirements], resource constraints [values]. Suggest safe probe, RBAC, and scaling settings.
```

### Detailed Request
```text
/ecc-kubernetes-patterns Perform a static review of the supplied Kubernetes manifests for [environment]. Check requests/limits, startup/readiness/liveness probes, least-privilege RBAC, autoscaling, and ConfigMap/Secret handling. Distinguish confirmed issues from assumptions and suggest minimal fixes as snippets. Do not apply anything to the cluster, run kubectl, or modify files. Report priority, evidence, and recommendations.
```
