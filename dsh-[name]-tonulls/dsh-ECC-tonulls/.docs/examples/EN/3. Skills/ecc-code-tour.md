# `/ecc-code-tour`

**Purpose:** Creates CodeTour `.tour` files—step-by-step walkthroughs with real file and line references, tailored to the target audience. Use for onboarding, architecture reviews, PRs, RCAs, and structured explanations of code behavior.

## Short Prompt
```text
/ecc-code-tour Create a CodeTour for module [path] for a new team member; first list the route and links to real files.
```

## Template Prompt
```text
/ecc-code-tour
Context: [project path / snippet / system / symptom].
Task: prepare a step-by-step CodeTour for the specified audience for [goal or subject].
Focus: real files and lines, entry-point sequence, clear transitions, and current references.
Constraints: Create or edit only the explicitly specified output file; do not add other files without approval.
Output format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt
```text
/ecc-code-tour
Perform the task “prepare a step-by-step CodeTour for the specified audience” for [project/component/scenario].
1. Record baseline information, scope, and success criteria; list missing information.
2. Study only relevant context and verify real files and lines, entry-point sequence, clear transitions, and current references.
3. Prepare the result in the precisely specified format and location; if path/permission is unspecified, show a draft and request approval to write first.
4. Compare results with criteria, cite evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Create or edit only the explicitly specified output file; do not add other files without approval.
Include outcome, important findings/actions, unverified areas, risks, and safe next steps.
```
