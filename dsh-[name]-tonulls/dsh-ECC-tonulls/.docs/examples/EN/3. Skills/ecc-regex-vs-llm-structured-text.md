# `/ecc-regex-vs-llm-structured-text`

Helps design a cost-effective hybrid parser for structured text: regular expressions extract typical data, confidence scoring identifies ambiguous cases, and an LLM is suggested only as an exception validator.

## Simple Request

```text
/ecc-regex-vs-llm-structured-text Design invoice parsing: regex for common fields, confidence checks, and ambiguous-case handling.
```

## Template Request
```text
/ecc-regex-vs-llm-structured-text
Document types: [invoices/forms/receipts/tables]
Required fields: [list]
Input examples: [anonymized excerpts]
Cost and accuracy constraints: [values]
Suggest a regex-first pipeline, confidence scoring, and criteria for routing individual cases to an LLM. Do not use real personal data or secrets.
```

## Detailed Request
```text
/ecc-regex-vs-llm-structured-text Develop a data extraction plan for [document types] and fields [list]. Work in phases:
1. Record input formats, representation variants, and correctness criteria.
2. Separate fields extractable with regular expressions from those requiring contextual interpretation.
3. Describe regex-first extraction and normalization without assumptions unsupported by examples.
4. Suggest confidence scoring, manual review thresholds, and routing only borderline cases to an LLM.
5. Define test examples, precision/recall and cost metrics, and error-handling rules.
Constraints: do not send data over the network or to third-party services; do not use real personal data; do not install anything or modify the project. First provide the design, then list assumptions, risks, and verification plan.
```
