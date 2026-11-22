# `/ecc-rust-testing`

Helps write and diagnose Rust tests: unit, integration, async, and property-based, and assess coverage in a TDD style.

## Simple Request
```text
/ecc-rust-testing Suggest tests for this Rust function, including edge cases: [code]
```

## Template Request
```text
/ecc-rust-testing
Behavior under test: [description]
Code/interface: [snippet]
Current issue: [bug or coverage gap]
Environment and test stack: [data]
Create a test suite; do not suggest new dependencies without justification and approval.
```

## Detailed Request
```text
/ecc-rust-testing Verify [module/behavior]. First derive expected contracts from the supplied code and requirements. Then create tests for normal cases, boundaries, errors, async scenarios, and properties where appropriate. For a defect, first show a test that reproduces it and how to confirm it fails; after a minimal fix, verify it passes. Do not modify files or run commands without approval; do not install packages or use the network. Report: invariants covered, omitted risks, recommended verification commands, and results only for checks actually performed.
```
