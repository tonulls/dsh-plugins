# `/ecc-code-architect` — Prompt Examples

## Purpose

Studies existing codebase patterns and prepares a concrete feature implementation plan: files, interfaces, data flow, and build order. It provides a blueprint for a developer, not an implementation by itself.

## 1. Short Request

```text
/ecc-code-architect Prepare an implementation plan for {feature} following the project's existing conventions: files, interfaces, and work order. Do not change the code.
```

## 2. Template Request

```text
/ecc-code-architect Design an implementation for {feature/change} in {project path}. Study existing examples in {relevant areas}. Requirements: {contract, constraints, compatibility}. List the files, interfaces and data flow, phases, dependencies between them, and verification criteria. Plan only; make no edits.
```

## 3. Detailed Request

```text
/ecc-code-architect Prepare a blueprint for {functionality and expected scenarios} in {project}. Context: {users, inputs/outputs, integrations}; constraints: {compatibility, performance, security, change scope}.

1. Find and study existing implementations of similar components and project conventions; support conclusions with file paths and symbols.
2. Trace the affected data flow and module boundaries. Identify required interfaces, types/contracts, and error handling without inventing unstated requirements.
3. Create a “file/area | proposed role | change | dependency” table. Do not include files unless their necessity is justified.
4. Order the implementation so dependencies and verifiable intermediate results are clear; list checks and edge cases.
5. Separately list architectural risks, assumptions, and decisions that need confirmation before coding.

Format: brief overview, codebase evidence, file and interface blueprint, data flow, work order, checks, risks, and questions. Do not edit files or begin implementation; installation, network access, and deployment require separate approval.
```