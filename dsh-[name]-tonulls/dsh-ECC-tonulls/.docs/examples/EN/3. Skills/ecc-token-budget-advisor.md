# `/ecc-token-budget-advisor`

Suggests a response depth (25%, 50%, 75%, or 100%) with an approximate token estimate, then responds at the selected scale.

## Simple Request
```text
/ecc-token-budget-advisor Give a short version of the answer to: [question]
```
## Template Request
```text
/ecc-token-budget-advisor
Topic: [question]
Preferred depth: [25/50/75/100% or ask me to choose]
Required format: [list/explanation/example]
If I did not specify depth, first estimate the size and tokens of the options; then answer at the selected level.
```
## Detailed Request
```text
/ecc-token-budget-advisor I need an answer about [topic] for [audience/goal]. Offer depth options of 25/50/75/100% with approximate token counts and what each includes/excludes; do not present estimates as an exact count. Wait for my choice if none was specified. After selection, answer at that scale while preserving important caveats and factual accuracy. Do not confuse text budget with a cryptographic/payment token. Briefly state estimation assumptions.
```
