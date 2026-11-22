# `/ecc-compose-multiplatform-patterns`

帮助在 KMP 中使用 Compose Multiplatform 和 Jetpack Compose 设计与实现 UI：状态、导航、主题、性能及平台特性。

## 简单请求

```text
/ecc-compose-multiplatform-patterns 建议如何组织 Compose Multiplatform 中目录屏幕的状态。
```

## 模板请求

```text
/ecc-compose-multiplatform-patterns
项目：[KMP 平台和版本]
屏幕/功能：[描述]
当前状态架构：[描述或代码片段]
结合现有约定，提出状态管理、导航以及共享 UI 与平台 UI 分离的方案。
```

## 详细请求

```text
/ecc-compose-multiplatform-patterns 分析 KMP 应用中适用于[Android/iOS/desktop/web；版本]的任务[屏幕或更改]。研究提供的文件和仓库现有模式。按步骤：确定状态所有者和事件流；提出 composable 结构和导航；说明哪些内容适合放入共享模块，哪些应保留为平台实现；检查无障碍性、recomposition 和潜在瓶颈；提出可验证的测试。未经我确认，不要添加依赖或修改文件。报告中给出建议方案、权衡、涉及位置和测试场景。
```
