# ecc-hipaa-compliance

**Command:** `/ecc-hipaa-compliance`

**Purpose:** Entry point for healthcare privacy and security tasks involving HIPAA. Use when a task explicitly concerns HIPAA, PHI handling, covered entities, BAAs, breach readiness, or US healthcare requirements.

## Prompts

### 1. Short Request
> /ecc-hipaa-compliance Create a list of HIPAA questions for this data flow.

### 2. Template with Context
> /ecc-hipaa-compliance System: [description], roles: [roles], PHI data: [categories], jurisdiction/context: US. This is not a legal opinion; identify unknowns.

### 3. Detailed Request
> /ecc-hipaa-compliance Assess the supplied architecture in a HIPAA context: PHI flow, roles/access, audit, BAA dependencies, and breach posture. Do not give legal assurances or expose real data; identify questions for privacy/security counsel and suggest verifiable actions requiring approval.
