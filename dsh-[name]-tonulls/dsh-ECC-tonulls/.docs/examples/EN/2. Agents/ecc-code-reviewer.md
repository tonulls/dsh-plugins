# `/ecc-code-reviewer` — Prompt Examples

## Purpose

Reviews changed code for quality, security, and maintainability defects. The result should be evidence-based findings with priorities; a review must not silently turn into a fix.

## 1. Short Request

```text
/ecc-code-reviewer Conduct a read-only review of my changes. Report only confirmed issues with priorities and exact locations; do not change the code.
```

## 2. Template Request

```text
/ecc-code-reviewer Review the diff {branch/commit/paths} in the context of {change goal}. Focus on correctness, security, and maintainability; avoid subjective style preferences. For each defect, provide severity, file/lines, a scenario in which it occurs, and your reasoning. Analysis only: do not modify files or apply fixes.
```

## 3. Detailed Request

```text
/ecc-code-reviewer Perform a read-only review of the change set {diff/commit/paths}. Stated goal: {goal and requirements}; permitted scope: {modules}.

1. Study the diff together with necessary context from calling code, contracts, and relevant tests; do not treat a change itself as a defect.
2. Check for regressions in correctness, input/output boundaries, security, and maintainability that follow directly from the code. Trace a concrete scenario for each suspected issue.
3. Separate confirmed findings from questions; do not present unverified assumptions as defects. Consider tests as evidence, but do not treat the absence of a test alone as an implementation bug.
4. Do not edit anything or apply fixes. Do not install packages or use the network; run checks only if they are explicitly approved and safe.

First list findings in severity order: brief title, level, file and lines, reproduction condition, actual consequence, and recommended direction for a fix. Then list areas checked and limitations. If there are no confirmed issues, state that explicitly and describe the review's limits.
```