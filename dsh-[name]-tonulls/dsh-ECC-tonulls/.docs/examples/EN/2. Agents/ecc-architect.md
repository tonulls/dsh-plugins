# `/ecc-architect` — Prompt Examples

## Purpose

Plans or reviews software system architecture, compares design options, and identifies system-level risks. This is architectural analysis, not implementation.

## 1. Short Request

```text
/ecc-architect Review the architecture of the notification service: suggest options and identify system-level risks. Do not change the code.
```

## 2. Template Request

```text
/ecc-architect Plan/review the architecture of {system or change} for this context {load, users, integrations}. Constraints: {compatibility, operations, timeline}. Compare {options, if known} in terms of reliability, complexity, and consequences; justify your recommendation and list open questions. Analysis only; do not modify files.
```

## 3. Detailed Request

```text
/ecc-architect Analyze this architectural change: {goal and scenarios}. Context: {current components, data flows, load, external dependencies}. Constraints: {technologies, compatibility, availability, operations}.

1. Clarify system boundaries and key requirements; identify unknown assumptions separately.
2. Trace affected data flows and component interactions; identify failure points and dependencies.
3. Compare at least two realistic options when the context allows; describe trade-offs and reasons for the choice.
4. Provide a target design at the component, interface, and rollout-sequence level without moving on to code.
5. List system risks, mitigations, verification criteria, and questions that require the owner's decision.

Format: brief conclusion, confirmed context, options and comparison, recommendation, risks, phases, and open questions. Do not change anything; do not install dependencies, use the network, or deploy without separate approval.
```