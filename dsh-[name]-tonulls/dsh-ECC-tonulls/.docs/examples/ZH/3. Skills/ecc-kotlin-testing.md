# `ecc-kotlin-testing`

**命令：** `/ecc-kotlin-testing`

提供 Kotest、MockK、协程、property-based tests 和 Kover 的 Kotlin 测试实践。

### 简短请求
```text
/ecc-kotlin-testing 为[Kotlin 函数/类]编写 Kotest 测试。
```

### 模板请求
```text
/ecc-kotlin-testing 为[组件]制定测试策略。使用[ Kotest/MockK]，行为：[场景]，依赖：[描述]。考虑异步性[如适用]并提出覆盖率检查方法。
```

### 详细请求
```text
/ecc-kotlin-testing 针对[组件]先明确契约和边界情况，然后制定 Kotest 测试集：成功场景、错误、边界值和属性。对于 coroutine 代码，说明如何确定性地测试时间和取消；MockK 仅用于外部依赖。描述如何运行和解读 Kover。不要修改文件或安装依赖。返回测试结构、示例和覆盖率缺口。
```
