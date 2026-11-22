# ecc-kotlin-coroutines-flows

**Command:** `/ecc-kotlin-coroutines-flows`

**Purpose:** Kotlin Coroutines and Flow practices for Android and KMP: structured concurrency, Flow operators, StateFlow, error handling, and testing. Use when writing coroutines/Flow or debugging cancellation and concurrency.

## Prompts

### 1. Short Request
> /ecc-kotlin-coroutines-flows Find a possible coroutine leak in this code.

### 2. Template with Context
> /ecc-kotlin-coroutines-flows File: [path], context: [Android/KMP], symptom: [cancellation/duplication]. Check structured concurrency, Flow, and error handling.

### 3. Detailed Request
> /ecc-kotlin-coroutines-flows Analyze [code] using Coroutines/Flow. Trace scope and cancellation, Flow operators, StateFlow, exception handling, and testing; find races and leaks. Change nothing. Report specific execution paths, fixes, and cancellation tests.
