# `/ecc-content-hash-cache-pattern`

Proposes a pattern for caching expensive file processing by SHA-256 content, independent of path, with automatic invalidation and separation of the service layer.

## Simple Request

```text
/ecc-content-hash-cache-pattern How can I cache a file parsing result so that changing the content automatically invalidates the cache?
```

## Template Request

```text
/ecc-content-hash-cache-pattern
Stack: [language and storage]
Processing: [expensive computation]
Volume/frequency: [estimate]
Lifetime and concurrency requirements: [conditions]
Propose a SHA-256 cache design and service-layer boundaries, considering the current code: [excerpts].
```

## Detailed Request

```text
/ecc-content-hash-cache-pattern Design a cache for operation [processing] in [stack]. Requirements: identical content at different paths must reuse the result; changed bytes must invalidate the entry; collision/error/parallel processing behavior must be defined; the cache must not change business results. Describe the key and serialization, separation of computation and storage, cleanup policy, and safe failure behavior step by step. Include an API example and tests for reuse, content changes, different paths, and concurrent requests. Analysis and proposal only: do not modify files or install dependencies. Report: design, trade-offs, test plan, and required clarifications.
```
