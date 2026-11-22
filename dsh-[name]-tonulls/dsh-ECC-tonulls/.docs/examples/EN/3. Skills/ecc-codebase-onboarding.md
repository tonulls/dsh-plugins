# `/ecc-codebase-onboarding`

**Purpose:** Explores an unfamiliar codebase and creates a structured onboarding document: architecture map, key entry points, conventions, and starter CLAUDE.md. Use when joining a new project or setting up Claude Code in a repository for the first time.

## Short Prompt
```text
/ecc-codebase-onboarding Study this repository and prepare a concise onboarding guide with an architecture map and entry points.
```

## Template Prompt
```text
/ecc-codebase-onboarding
Context: [project path / snippet / system / symptom].
Task: prepare a newcomer to work in an unfamiliar codebase for [goal or subject].
Focus: architecture, entry points, conventions, development commands, and verified information sources.
Constraints: Create or edit only the explicitly specified output file; do not add other files without approval.
Output format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt
```text
/ecc-codebase-onboarding
Perform the task “prepare a newcomer to work in an unfamiliar codebase” for [project/component/scenario].
1. Record baseline information, scope, and success criteria; list missing information.
2. Study only relevant context and assess architecture, entry points, conventions, development commands, and verified information sources.
3. Prepare the result in the precisely specified format and location; if path/permission is unspecified, show a draft and request approval to write first.
4. Compare results with criteria, cite evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Create or edit only the explicitly specified output file; do not add other files without approval.
Include outcome, important findings/actions, unverified areas, risks, and safe next steps.
```
