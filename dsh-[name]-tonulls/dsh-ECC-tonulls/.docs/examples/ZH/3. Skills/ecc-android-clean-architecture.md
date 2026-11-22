# `/ecc-android-clean-architecture`

帮助按照 Clean Architecture 组织 Android 和 Kotlin Multiplatform 项目：模块、依赖边界、UseCase、Repository 和数据层。

## 提示词示例

### 1. 简短请求
```text
/ecc-android-clean-architecture 评估 Android 模块结构 [路径/描述] 是否符合 Clean Architecture 边界。暂时只做分析。
```

### 2. 模板请求
```text
/ecc-android-clean-architecture 为 Android/KMP 项目[技术栈]中的[功能]提出架构方案。当前模块：[列表]。描述依赖方向以及 UseCase、Repository 和数据层的职责；不要创建文件。
```

### 3. 详细请求
```text
/ecc-android-clean-architecture 分析[Android 或 KMP，所用技术]中[功能/模块]的组织方式。1) 先研究现有模块和约定，不要假设项目结构。2) 追踪从 UI 到数据源再返回的数据流。3) 只有存在依据时才指出边界违规、多余依赖以及适合引入 UseCase/Repository 的位置。4) 提出目标结构和安全的迁移顺序。不要修改文件。输出模块图、理由和风险，并区分事实与建议。
```
