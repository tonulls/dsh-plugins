# ecc-healthcare-cdss-patterns

**Command:** `/ecc-healthcare-cdss-patterns`

**Purpose:** Clinical decision support system (CDSS) development practices: drug interactions and dosage checks, clinical scores (NEWS2, qSOFA), alert severity classification, and EMR workflow integration. Use when creating such systems.

## Prompts

### 1. Short Request
> /ecc-healthcare-cdss-patterns Assess the safety of this CDSS clinical rule.

### 2. Template with Context
> /ecc-healthcare-cdss-patterns Scenario: [interaction/dose/score], population: [description], rule source: [source]. State clinical assumptions and whether specialist validation is required.

### 3. Detailed Request
> /ecc-healthcare-cdss-patterns Analyze CDSS design for [scenario]. Check inputs, units, alert severity, false positives, and workflow integration. Do not provide patient-specific clinical advice; require review by a qualified professional and validated sources. Return risks and a test plan.
