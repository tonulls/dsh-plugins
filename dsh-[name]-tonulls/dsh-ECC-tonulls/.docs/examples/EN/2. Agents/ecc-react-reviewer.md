# Prompt Example: `/ecc-react-reviewer`

**Invocation command:** `/ecc-react-reviewer`

## Purpose

Reviews React/JSX for hook correctness, rendering performance, server/client boundaries, accessibility, and security. Does not modify files.

## 1. Short Request

```text
/ecc-react-reviewer Conduct a read-only review of the React changes in {path}; do not edit anything.
```

## 2. Template Request

```text
/ecc-react-reviewer Conduct a read-only review of React changes {files/diff} for scenario {behavior}. Check hooks, unnecessary renders, server/client boundaries, accessibility, and React-specific security risks. Report only specific findings with location, impact, and recommendation; do not modify files.
```

## 3. Detailed Request

```text
/ecc-react-reviewer Conduct a systematic analysis of task {scenario/change} for the react-reviewer.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: React/JSX hook correctness, rendering performance, server/client boundaries, accessibility, and security. Do not modify files.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```