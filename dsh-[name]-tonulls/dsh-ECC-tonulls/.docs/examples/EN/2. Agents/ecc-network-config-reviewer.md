# Prompt Example: `/ecc-network-config-reviewer`

**Invocation command:** `/ecc-network-config-reviewer`

## Purpose

Reviews router and switch configurations for security, correctness, stale references, and risky commands. Analysis only; makes no changes.

## 1. Short Request

```text
/ecc-network-config-reviewer Review this network configuration in read-only mode and list risky settings: {path}.
```

## 2. Template Request

```text
/ecc-network-config-reviewer Conduct a read-only review of configuration {device/file}, context {planned change}. Find errors, insecure settings, stale references, and dangerous maintenance-window commands. Do not connect to devices or apply anything; provide findings by severity, evidence, and safe recommendations.
```

## 3. Detailed Request

```text
/ecc-network-config-reviewer Conduct a systematic analysis of configuration {device/file} before change {goal/maintenance window}.

1. Identify the platform and review scope from the supplied context; do not connect to the device.
2. Check configuration correctness and security, stale references, and commands that could interrupt management or traffic.
3. For each finding, provide the relevant snippet/location, potential impact, and confidence; distinguish facts from assumptions.
4. Create a prioritized list of risks, missing checks, and safe recommendations before the maintenance window.
5. End with a brief readiness assessment and analysis limitations.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```