# `ecc-kotlin-patterns`

**命令：** `/ecc-kotlin-patterns`

帮助编写和检查符合惯例的 Kotlin：null 安全、协程和 DSL。

### 简短请求
```text
/ecc-kotlin-patterns 检查此 Kotlin 代码是否符合惯例，并查找不安全的 null 操作：[片段]
```

### 模板请求
```text
/ecc-kotlin-patterns 帮助为[任务]设计 Kotlin 组件。背景：[Kotlin 版本/平台]，限制：[性能/兼容性]。提出符合惯例的结构、类型和错误处理；如适用，说明 null 安全和协程方面的设计决定。
```

### 详细请求
```text
/ecc-kotlin-patterns 分析项目[背景和 Kotlin 版本]中的任务[描述]。1) 确定适用的惯用写法和结构。2) 展示安全处理 null 和错误的最小代码示例。3) 如果涉及异步操作，说明 coroutine scope 选择及取消方式。4) 指出权衡和潜在反模式。不要修改文件或运行命令。报告中提供建议、示例和假设清单。
```
