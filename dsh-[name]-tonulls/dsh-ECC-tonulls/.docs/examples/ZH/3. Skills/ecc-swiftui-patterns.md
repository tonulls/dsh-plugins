# `/ecc-swiftui-patterns`

提供 SwiftUI 架构建议：使用 `@Observable` 管理状态、组合视图、导航和 UI 性能优化。

## 简单请求
```text
/ecc-swiftui-patterns 建议如何为屏幕[描述]拆分 SwiftUI 状态和视图。
```
## 模板请求
```text
/ecc-swiftui-patterns
屏幕和场景：[描述]
当前 View/模型：[代码]
目标 iOS/macOS 版本：[版本]
请结合当前项目，就 @Observable、导航和视图组合提出建议。
```
## 详细请求
```text
/ecc-swiftui-patterns
分析[平台/版本]应用中的屏幕[描述]。步骤：确定状态所有者和更新流；提出 @Observable 用法和模型边界；将 View 拆分为可组合部分；描述导航和依赖传递；根据现有信息评估潜在的不必要重绘及无障碍性。不要修改文件、添加软件包或执行网络/发布操作。输出推荐结构、SwiftUI 草案、权衡及具体行为/性能检查。
```
