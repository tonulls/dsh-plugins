# Prompt Example: `/ecc-network-troubleshooter`

**Invocation command:** `/ecc-network-troubleshooter`

## Purpose

Diagnoses network symptoms across OSI layers using only observable data and produces an evidence-based root-cause summary.

## 1. Short Request

```text
/ecc-network-troubleshooter Help diagnose {symptom} without changing network settings.
```

## 2. Template Request

```text
/ecc-network-troubleshooter Investigate issue {symptom} on {segment/device}; start time {time}, known changes {changes}, check results {data}. Work from the physical/link layers through DNS/routing/policies; do not change configuration or scan the network. Separate facts from hypotheses and suggest safe checks.
```

## 3. Detailed Request

```text
/ecc-network-troubleshooter Conduct a systematic analysis of task {scenario/change} for the network-troubleshooter.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: diagnose network symptoms across OSI layers using only observable data and produce an evidence-based root-cause summary.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, starting a loop, or applying configuration.
```