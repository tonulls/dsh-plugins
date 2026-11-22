# `/ecc-architecture-decision-records`

Records an adopted architectural decision in a numbered Markdown ADR with context, considered alternatives, consequences, and a README index.

## Prompt Examples

### 1. Short Request
```text
/ecc-architecture-decision-records Document the selected decision [decision] as an ADR: context, alternatives, and consequences. First check existing ADRs and their numbering.
```

### 2. Template Request
```text
/ecc-architecture-decision-records Record an ADR about choosing [technology/approach] over [alternative]. Context: [reason and constraints]. Pros/cons of options: [facts]. Follow the structure and numbering of existing ADRs; update the index only if that is the project's practice.
```

### 3. Detailed Request
```text
/ecc-architecture-decision-records Record the decision on [architectural question] in an ADR. 1) Study docs/adr and local naming/index rules; do not overwrite existing records. 2) Use only confirmed information: context, decision status, selected option, actual alternatives, rationale, and consequences. 3) If no decision has been made or information is insufficient, do not choose on the user's behalf; prepare a draft with open questions. 4) Create/update only relevant ADR Markdown files and the index using the accepted template; do not change code. Result: affected paths, brief summary, and uncertainties.
```
