# Prompt Example: `/ecc-vue-reviewer`

**Invocation command:** `/ecc-vue-reviewer`

## Purpose

Reviews Vue code for Composition API and reactivity correctness, component architecture, template security, and performance. Makes no edits.

## 1. Short Request

```text
/ecc-vue-reviewer Check the Vue changes in {path} for reactivity and template security; make no edits.
```

## 2. Template Request

```text
/ecc-vue-reviewer Conduct a read-only review of Vue changes {files/diff} in component {scenario}; account for Pinia/Router/Nuxt if used. Check Composition API, reactive dependencies, template escaping, lifecycle, and performance. Report only confirmed issues with location and remediation; do not modify files.
```

## 3. Detailed Request

```text
/ecc-vue-reviewer Conduct a systematic analysis of task {scenario/change} for the vue-reviewer.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: Vue Composition API and reactivity correctness, component architecture, template security, and performance. Make no edits.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```