# `ecc-hexagonal-architecture`

**命令：** `/ecc-hexagonal-architecture`

**用途：**为 TypeScript、Java、Kotlin 和 Go 服务设计、实现及重构 Ports & Adapters 系统，明确领域边界、依赖反转，并确保用例编排可测试。适用于引入或重构此架构，或在领域逻辑与 I/O 混杂时。

## 提示词

### 1. 简短请求

> /ecc-hexagonal-architecture 找出此模块中违反 Ports & Adapters 的地方。

### 2. 带上下文的模板

> /ecc-hexagonal-architecture 模块：[路径]，语言：[TS/Java/Kotlin/Go]，问题：[描述]。说明领域依赖并提出改进建议；不要编辑文件。

### 3. 详细请求

> /ecc-hexagonal-architecture 分析[系统部分]的 domain/application/adapters 边界。追踪依赖、I/O 和 use-case 编排；提出重构顺序及可测试的 ports。不要修改文件。报告：当前结构、附证据的违规点、目标结构和风险。
