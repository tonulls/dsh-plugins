# `/ecc-module-regression`

**Purpose:** Manages cross-module regression risk in large repositories using `REGRESSION.md`, which lists each module's consumers and executable acceptance commands. After changes, checks the modified module and all affected commands; exit codes are evidence under project rules. Use for regression/dependency analysis and changes where a fix in A could break B.

## Short Prompt
```text
/ecc-module-regression Assess which modules and commands could regress because of this change; build the dependency chain.
```

## Template Prompt
```text
/ecc-module-regression
Context: [project path / snippet / system / symptom].
Task: assess cross-module regression risk after a change for [goal or subject].
Focus: module consumers, dependencies, contract paths, and relevant acceptance commands.
Constraints: Read-only: do not modify files or run active/external checks.
Output format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt
```text
/ecc-module-regression
Perform the task “assess cross-module regression risk after a change” for [project/component/scenario].
1. Record baseline information, scope, and success criteria; list missing information.
2. Study only relevant context and assess module consumers, dependencies, contract paths, and relevant acceptance commands.
3. Form conclusions and next steps without applying changes or presenting assumptions as facts.
4. Compare results with criteria, cite evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Read-only: do not modify files or run active/external checks.
Include outcome, important findings/actions, unverified areas, risks, and safe next steps.
```
