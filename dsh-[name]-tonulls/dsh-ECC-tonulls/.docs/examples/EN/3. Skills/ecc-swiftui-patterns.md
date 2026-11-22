# `/ecc-swiftui-patterns`

Suggests SwiftUI architecture: state with `@Observable`, view composition, navigation, and UI performance optimization.

## Simple Request
```text
/ecc-swiftui-patterns Suggest how to separate state and SwiftUI views for screen [description].
```
## Template Request
```text
/ecc-swiftui-patterns
Screen and scenarios: [description]
Current views/model: [code]
Target iOS/macOS versions: [versions]
Recommend @Observable, navigation, and composition in the context of the existing project.
```
## Detailed Request
```text
/ecc-swiftui-patterns Analyze screen [description] in an app for [platform/version]. Steps: identify state owner and update flow; suggest @Observable and model boundaries; decompose views into compositional parts; describe navigation and dependency passing; assess potential unnecessary redraws and accessibility based on available information. Do not modify files, add packages, or perform network/publishing actions. Provide recommended structure, SwiftUI sketch, trade-offs, and specific behavior/performance checks.
```
