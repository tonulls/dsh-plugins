# ecc-healthcare-phi-compliance

**Command:** `/ecc-healthcare-phi-compliance`

**Purpose:** PHI and PII protection practices for healthcare applications: data classification, row-level access controls, tamper-resistant audit logs, schema labeling, and common leakage channels—logs, URLs, and browser storage. Use when handling patient/clinician data, implementing HIPAA/GDPR controls, or auditing leaks.

## Prompts

### 1. Short Request
> /ecc-healthcare-phi-compliance Conduct a read-only check for PHI leaks in the code.

### 2. Template with Context
> /ecc-healthcare-phi-compliance Scope: [paths/flows], data categories: [list]. Check logs, URLs, browser storage, access controls, and auditing; do not show real identifiers.

### 3. Detailed Request
> /ecc-healthcare-phi-compliance Audit [component] for PHI/PII handling without modifying files. Trace data classification, row-level access, audit trail, and leakage through logs/URLs/storage. Use only anonymized examples; do not copy PHI. Rank substantiated risks and suggest safeguards; do not act on data.
