# `/ecc-swift-protocol-di-testing`

Helps test Swift code using narrow dependency-injection protocols, substituting filesystem, network, and external APIs in Swift Testing.

## Simple Request
```text
/ecc-swift-protocol-di-testing Suggest a protocol and test mock for this external Swift dependency: [code]
```
## Template Request
```text
/ecc-swift-protocol-di-testing
Component: [description]
External dependencies: [files/network/API]
Required scenarios: [success/error/retry]
Show a narrow protocol and Swift Testing tests without calling real services.
```
## Detailed Request
```text
/ecc-swift-protocol-di-testing Make [Swift function/service] testable; it uses [filesystem, network, or API]. 1) Find the minimal dependency boundary. 2) Suggest a protocol and injection without excessive abstraction. 3) Create a conceptual mock/fake with controllable results and errors. 4) Describe Swift Testing tests for success, failure, and edge cases. Exclude real network calls and reading/writing user files; do not modify the project or add dependencies without approval. Result: protocol interface, test examples, verifiable invariants, and limitations.
```
