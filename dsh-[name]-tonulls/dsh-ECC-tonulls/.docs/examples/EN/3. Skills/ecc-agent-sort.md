# `/ecc-agent-sort`

Creates an evidence-based ECC installation plan for a specific repository, distributing skills, commands, rules, hooks, and extras between DAILY and LIBRARY sets after analyzing project needs. This plans the selection; it does not automatically install anything.

## Prompt Examples

### 1. Short Request
```text
/ecc-agent-sort Analyze this repository and suggest which ECC skills and commands are needed daily and which should stay in the library. Install nothing.
```

### 2. Template Request
```text
/ecc-agent-sort Prepare an ECC selection plan for [repository/project type]. Consider [languages, frameworks, typical tasks, team constraints]. Review skills, commands, rules, hooks, and extras; assign each to DAILY or LIBRARY with repository evidence. Recommendation only—do not change files.
```

### 3. Detailed Request
```text
/ecc-agent-sort Create an evidence-based ECC reduction plan for [repository]. 1) Study structure, manifests/config, and technologies actually used; do not infer only from filenames. 2) Conduct separate repository-aware passes over skills, commands, rules, hooks, and extras, then consolidate overlap. 3) For each item, recommend DAILY (frequently needed) or LIBRARY (rare/specialized), tied to observed evidence; flag uncertain cases separately. 4) Do not delete, move, or install components. Result: brief project profile, “component — category — rationale” table, potential gaps/duplicates, and implementation plan only after separate approval.
```
