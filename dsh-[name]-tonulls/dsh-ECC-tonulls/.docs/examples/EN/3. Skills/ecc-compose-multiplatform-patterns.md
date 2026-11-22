# `/ecc-compose-multiplatform-patterns`

Helps design and implement UI with Compose Multiplatform and Jetpack Compose in KMP: state, navigation, themes, performance, and platform-specific considerations.

## Simple Request

```text
/ecc-compose-multiplatform-patterns Suggest how to organize state for a catalog screen in Compose Multiplatform.
```

## Template Request

```text
/ecc-compose-multiplatform-patterns
Project: [KMP platforms and versions]
Screen/feature: [description]
Current state architecture: [description or excerpts]
Suggest an approach to state, navigation, and separation of shared and platform-specific UI, considering existing conventions.
```

## Detailed Request

```text
/ecc-compose-multiplatform-patterns Analyze task [screen or change] in a KMP application for [Android/iOS/desktop/web; versions]. Study the supplied files and repository patterns. Step by step: identify state ownership and event flow; propose composable structure and navigation; state what can safely go in a shared module versus remaining platform-specific; check accessibility, recomposition, and potential bottlenecks; suggest verifiable tests. Do not add dependencies or modify files without my approval. Report the recommended design, trade-offs, affected areas, and test scenarios.
```
