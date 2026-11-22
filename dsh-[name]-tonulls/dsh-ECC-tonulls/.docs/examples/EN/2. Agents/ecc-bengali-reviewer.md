# `/ecc-bengali-reviewer` — Prompt Examples

## Purpose

Reviews code that processes Bengali (Bangla) text: Unicode and normalization correctness, script handling, and internationalization practices. Apply it to specific paths and scenarios involving Bengali data.

## 1. Short Request

```text
/ecc-bengali-reviewer Check the handling of Bengali text in the search form for Unicode and localization errors. Analysis only; do not change the code.
```

## 2. Template Request

```text
/ecc-bengali-reviewer Review {files/module} in a {stack} project. Scenarios: {input, storage, search, display of Bengali text}. Check Unicode normalization, string operations, and localization. For each finding, provide the file/lines, an input example, and the observable consequence; do not modify files.
```

## 3. Detailed Request

```text
/ecc-bengali-reviewer Conduct a read-only review of Bengali (Bangla) text handling in {path or module}. Context: {where the data comes from and how it is used}; expected scenarios: {sorting, search, input, display, storage}.

1. Find where text is decoded, normalized, compared, split, or transformed; trace the data from input to output.
2. Check whether the code assumes that one visible character equals one code unit; assess Unicode normalization and combining-mark operations for the actual scenario.
3. Check Bangla generation, storage, search, and display, including localization assumptions. Do not claim an issue without a concrete counterexample or demonstrable risk.
4. Compare observations with relevant tests, if available; do not create or run additional tests without approval.

First report confirmed issues with priority, exact locations, an example text/condition, and a fix; then list potential risks, areas checked, and gaps. Do not change code, install dependencies, access the network, or deploy.
```