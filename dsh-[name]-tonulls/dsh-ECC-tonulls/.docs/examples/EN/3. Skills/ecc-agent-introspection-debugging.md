# `/ecc-agent-introspection-debugging`

Helps reproducibly diagnose agent startup failures: record observations, localize causes, perform bounded recovery, and produce a self-analysis report instead of blindly retrying.

## Prompt Examples

### 1. Short Request
```text
/ecc-agent-introspection-debugging Analyze the latest agent failure using available logs: first record symptoms and the suspected failure layer; do not rerun it.
```

### 2. Template Request
```text
/ecc-agent-introspection-debugging Investigate startup failure [ID/time] in [environment]. Use only available [logs, traces, inputs]. Reproduction is allowed only under [conditions/not allowed]. Separate confirmed facts from hypotheses and suggest bounded recovery without file changes.
```

### 3. Detailed Request
```text
/ecc-agent-introspection-debugging Conduct a structured diagnosis of agent failure [ID]. 1) Preserve available run facts: task, action sequence, tool responses, and failure point; do not reveal secrets. 2) Map symptoms to possible layers, separating evidence from assumptions. 3) Do not automatically retry or change code/settings. 4) If verification requires rerunning or a side effect, stop and request approval. Result: brief timeline, reproducible conditions, likely cause with evidence, safe next step, and self-analysis report.
```
