# `/ecc-healthcare-reviewer`

**Purpose:** Reviews healthcare application code for clinical safety, CDSS accuracy, PHI protection, and medical data integrity. Specializes in EMR/EHR and clinical decision support systems.

## Short Prompt

```text
/ecc-healthcare-reviewer Conduct a read-only review of the healthcare change for clinical risks, PHI, and data integrity; do not include real patient data in the response.
```

## Template Prompt

```text
/ecc-healthcare-reviewer
Context: [project path / excerpt / system / symptom].
Task: review the healthcare application for safety and integrity risks affecting [goal or subject].
Focus: clinical safety, CDSS correctness, PHI protection, and EMR/EHR integrity.
Constraints: Read-only: do not modify files or run active or external checks.
Result format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt

```text
/ecc-healthcare-reviewer
Perform the task “review the healthcare application for safety and integrity risks” for [project/component/scenario].
1. Record the input, scope, and success criteria; list any missing information.
2. Study only task-relevant context and check clinical safety, CDSS correctness, PHI protection, and EMR/EHR integrity.
3. Present findings and next steps without making changes or stating assumptions as facts.
4. Compare the result with the criteria, provide evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Read-only: do not modify files or run active or external checks.
Report the outcome, important findings/actions, unchecked areas, risks, and safe next steps.
```