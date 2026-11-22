# `/ecc-swift-actor-persistence`

Helps design thread-safe Swift storage using an actor, in-memory cache, and file storage, eliminating data races architecturally.

## Simple Request
```text
/ecc-swift-actor-persistence Design a Swift actor store with cache and file persistence for [model].
```
## Template Request
```text
/ecc-swift-actor-persistence
Model and operations: [description]
Storage format/path: [conditions]
Consistency and error requirements: [requirements]
Suggest an actor API, IO handling, and testable boundaries without exposing user data.
```
## Detailed Request
```text
/ecc-swift-actor-persistence Persist [data type] in Swift in memory and on disk. 1) Define concurrent-access invariants and data lifecycle. 2) Suggest actor API and read/write/recovery strategy. 3) Analyze atomicity, filesystem errors, encoding, cleanup, and cache consistency. 4) Suggest concurrency and failure tests without accessing real user files. Do not modify files or write to disk; do not add packages without approval. Report: state model, interface sketch, race risks, and test plan.
```
