# `/ecc-santa-method`

Organizes independent adversarial reviews by two reviewers using one rubric, a fix-and-recheck cycle, and escalation to a human if disagreement remains unresolved.

## Simple Request
```text
/ecc-santa-method Independently review this text before publication for facts, risks, and requirement compliance: [text]
```

## Template Request
```text
/ecc-santa-method
Material: [text/change]
Purpose and audience: [context]
Acceptance rubric: [criteria]
Conduct two independent reviews and report whether all mandatory criteria pass. Do not publish or modify anything.
```

## Detailed Request
```text
/ecc-santa-method Decide whether [material/change] is ready for [publication/release]. Criteria: [rubric], critical claims: [list]. Organize two independent passes against the same criteria, preserve rating differences, compare supporting evidence, suggest only necessary fixes, and recheck after they are applied. Do not publish, deploy, or modify files; any external side effect requires my separate approval. Limit the number of cycles and stop for human decision if reviewers disagree or evidence is insufficient. Report: verdict, both review results, findings by severity, unresolved questions, and escalation condition.
```
