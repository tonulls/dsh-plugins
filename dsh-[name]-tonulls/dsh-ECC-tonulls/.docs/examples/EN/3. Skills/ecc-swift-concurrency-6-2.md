# `/ecc-swift-concurrency-6-2`

Explains Swift 6.2 Approachable Concurrency approaches: single-thread execution by default, explicit background work with `@concurrent`, and isolated conformances.

## Simple Request
```text
/ecc-swift-concurrency-6-2 Analyze this MainActor isolation error in Swift 6.2 and suggest a safe option: [code/error]
```
## Template Request
```text
/ecc-swift-concurrency-6-2
Code/operation: [snippet]
Compiler diagnostic: [text without sensitive data]
Swift versions and target platforms: [values]
Explain where @concurrent or isolation is needed; do not suggest unchecked disabling of safety checks.
```
## Detailed Request
```text
/ecc-swift-concurrency-6-2 Analyze migration of [module/function] to the Swift 6.2 model. First identify current actor isolation and state owners; then determine what should remain on MainActor and which CPU/IO work could be explicitly moved using @concurrent; assess Sendable and isolated conformances; suggest a minimal safe design and race-check scenarios. Do not use unsafe workarounds just to suppress diagnostics. Do not modify files, install tools, or run a build without approval. Result: root-cause analysis, fix sketch, compatibility, and checks.
```
