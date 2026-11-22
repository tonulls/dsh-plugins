# ecc-healthcare-eval-harness

**Command:** `/ecc-healthcare-eval-harness`

**Purpose:** Patient-safety evaluation system for healthcare application releases: automated checks of CDSS accuracy, PHI leakage, clinical workflow integrity, and integration compliance. Blocks a release if safety requirements fail. Use when release readiness depends on these checks.

## Prompts

### 1. Short Request
> /ecc-healthcare-eval-harness Create safety-gate tests for a healthcare release.

### 2. Template with Context
> /ecc-healthcare-eval-harness Application: [description], CDSS: [features], integrations: [list]. Define accuracy, PHI, and workflow-integrity checks; do not run deployment.

### 3. Detailed Request
> /ecc-healthcare-eval-harness Define an automated evaluation harness for release of [system]. Describe CDSS accuracy, PHI leaks, workflow integrity, and integration compliance by category; set blocking criteria and safe synthetic fixtures. Do not deploy or use real PHI. Provide a pass/fail report format.
