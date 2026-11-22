# `/ecc-orch-fix-defect`

Orchestrates defect resolution through a reproducing regression test, a fix until green, and review.

## Simple Request
```text
/ecc-orch-fix-defect Fix the bug: the filter drops records at the range boundary. Reproduce it with a test first.
```

## Template Request
```text
/ecc-orch-fix-defect Symptom: [what is wrong]. Reproduction steps: [steps]. Expected: [result], actual: [result]. Scope: [module]. Do not commit without separate approval.
```

## Detailed Request
```text
/ecc-orch-fix-defect Investigate defect [description]. 1) Study the relevant code and find a local reproduction method. 2) Add a regression test that first confirms the failure. 3) Make a minimal fix without expanding task scope. 4) Run required local checks and review the diff. Do not install dependencies, access the network, or deploy. Stop for separate approval before committing. Report: cause, fix, tests, and remaining uncertainties.
```
