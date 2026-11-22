# `/ecc-android-clean-architecture`

Helps structure Android and Kotlin Multiplatform projects using Clean Architecture: modules, dependency boundaries, UseCase, Repository, and data layer.

## Prompt Examples

### 1. Short Request
```text
/ecc-android-clean-architecture Assess the Android module structure [path/description] for adherence to Clean Architecture boundaries. Analysis only for now.
```

### 2. Template Request
```text
/ecc-android-clean-architecture Propose an architecture for [feature] in Android/KMP project [stack]. Current modules: [list]. Describe dependency direction and the responsibilities of UseCase, Repository, and data layer; do not create files.
```

### 3. Detailed Request
```text
/ecc-android-clean-architecture Analyze the organization of [feature/module] in [Android or KMP, technologies used]. 1) First study existing modules and conventions; do not assume the structure. 2) Trace data flow from the UI to the data source and back. 3) Identify boundary violations, unnecessary dependencies, and places for UseCase/Repository only when justified. 4) Propose a target structure and safe migration sequence. Do not modify files. Provide a module diagram, rationale, and risks; distinguish facts from recommendations.
```
