# ecc-kotlin-patterns

Command: `/ecc-kotlin-patterns`

Helps write and review idiomatic Kotlin: null safety, coroutines, and DSLs.

### Short Request
```text
/ecc-kotlin-patterns Review this Kotlin code for idiomatic style and unsafe null handling: [snippet]
```

### Template Request
```text
/ecc-kotlin-patterns Help design a Kotlin component for [task]. Context: [Kotlin version/platform], constraints [performance/compatibility]. Suggest idiomatic structure, types, and error handling; note null-safety and coroutine decisions where applicable.
```

### Detailed Request
```text
/ecc-kotlin-patterns Analyze task [description] for project [context and Kotlin version]. 1) Identify suitable idioms and structure. 2) Show a minimal code example with safe null and error handling. 3) If asynchronous, explain coroutine scope selection and cancellation. 4) State trade-offs and potential anti-patterns. Do not modify files or run commands. Report recommendations, example, and assumptions.
```
