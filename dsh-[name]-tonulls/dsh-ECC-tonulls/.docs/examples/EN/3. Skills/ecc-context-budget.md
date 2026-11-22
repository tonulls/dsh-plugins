# `/ecc-context-budget`

Checks remaining context using the built-in Codex or Claude Code counter without scanning files; performs a static component audit only when separately requested.

## Simple Request

```text
/ecc-context-budget How much context is left right now?
```

## Template Request

```text
/ecc-context-budget
Mode: [check current remaining budget / explicitly request a static component audit]
Environment: [Codex/Claude Code/other]
If the built-in counter is unavailable, say so; do not scan files without my explicit request.
```

## Detailed Request

```text
/ecc-context-budget Check the current context budget using the available built-in Codex or Claude Code counter. Do not traverse directories, read source files, or estimate file sizes for this check. If the environment does not provide a counter, state the limitation; do not substitute a guess for a measurement. Only if I separately enable the audit: [YES/NO], perform a bounded static review of the listed components [list] and describe the method and scope. Return the measured value/available status, time and source of the reading, or a clear explanation of why it cannot be obtained.
```
