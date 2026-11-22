# Prompt Example: `/ecc-opensource-packager`

**Invocation command:** `/ecc-opensource-packager`

## Purpose

Prepares a set of files to package an already-sanitized project for open source: documentation, license, setup, and issue templates.

## 1. Short Request

```text
/ecc-opensource-packager Suggest the contents of an open-source package for project {path}; do not create files yet.
```

## 2. Template Request

```text
/ecc-opensource-packager For the verified, sanitized project {path}, propose open-source package contents for audience {audience}, license {license}. First list proposed files and identified gaps; do not create or overwrite files until I explicitly approve the exact list. Do not install software or publish.
```

## 3. Detailed Request

```text
/ecc-opensource-packager Conduct a systematic analysis of task {scenario/change} for the opensource-packager.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: documentation, license, setup, and issue templates.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```