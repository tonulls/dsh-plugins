# Prompt Example: `/ecc-network-architect`

**Invocation command:** `/ecc-network-architect`

## Purpose

Designs enterprise or multi-site network architecture based on requirements, equipment, and constraints.

## 1. Short Request

```text
/ecc-network-architect Propose a safe network design for {number} workstations across {number} sites.
```

## 2. Template Request

```text
/ecc-network-architect Design a network for {sites/number of users}, requirements {services/availability}, constraints {budget/equipment/expertise}. Describe topology, segmentation, routing, resilience, and migration phases with verification and rollback. Do not change or access the live network.
```

## 3. Detailed Request

```text
/ecc-network-architect Conduct a systematic analysis of task {scenario/change} for the network-architect.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: design enterprise or multi-site network architecture based on requirements, equipment, and constraints.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, starting a loop, or applying configuration.
```