# `/ecc-quality-nonconformance`

**Purpose:** Quality control and nonconformance management in regulated manufacturing (FDA 21 CFR 820, IATF 16949, AS9100): NCR lifecycle/disposition, root-cause analysis with 5 Why/Ishikawa/fault tree/8D, CAPA, SPC interpretation, AQL sampling, and supplier quality audits. Use when investigating nonconformances, root causes, CAPA, SPC, or supplier quality issues.

## Short Prompt
```text
/ecc-quality-nonconformance Analyze nonconformance [description] and prepare an evidence-backed root-cause/CAPA plan.
```

## Template Prompt
```text
/ecc-quality-nonconformance
Context: [NCR number or description without sensitive data, process, quality criteria, and available measurements].
Task: analyze manufacturing nonconformance and prepare CAPA for [target component/outcome].
Focus: NCR lifecycle/disposition, 5 Why/Ishikawa/8D, SPC/AQL, and supplier quality; do not make legal assurances.
Constraints: Prepare a plan and verification criteria; do not change code, data, schedules, or external systems.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-quality-nonconformance
Perform the task “analyze manufacturing nonconformance and prepare CAPA” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess NCR lifecycle/disposition, 5 Why/Ishikawa/8D, SPC/AQL, and supplier quality; do not make legal assurances.
3. State findings or options with facts, risks, verification criteria, and unresolved questions; apply nothing.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Prepare a plan and verification criteria; do not change code, data, schedules, or external systems.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
