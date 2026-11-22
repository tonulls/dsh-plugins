# `/ecc-bengali-nlp`

For Bengali (Bangla) text processing: Unicode normalization, script detection, tokenization, correct handling of conjunct sequences, and NLP considerations for AI applications.

## Short Request

```text
/ecc-bengali-nlp Check tokenization of Bengali strings: account for Unicode normalization and conjunct characters, and suggest test cases.
```

## Template

```text
/ecc-bengali-nlp Analyze [module/section] for Bengali text processing. Inputs: [examples, including mixed text]. Needed: [normalization / script detection / tokenization / other]. Preserve language-significant distinctions; do not assume bytes, code points, and user-perceived characters are equivalent.
```

## Step-by-Step Request

```text
/ecc-bengali-nlp Analyze the Bengali/Bangla processing pipeline in [path/function] for scenario [search/classification/generation].
1. Trace input encoding and normalization; identify which Unicode transformations are valid and where they may distort data.
2. Check Bengali script detection and mixed strings using concrete examples: [examples].
3. Assess tokenization and handling of conjunct forms, marks, and boundaries; do not claim linguistic correctness without supporting examples.
4. Suggest a compact set of regression cases and expected-behavior criteria.

Result: “input / observed issue / expected behavior” table, priorities, and minimal fix plan. If only a review was requested, make no edits. For implementation, change only task-related files; do not install packages, use the network, or deploy without separate approval.
```
