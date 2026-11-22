# `/ecc-swift-concurrency-6-2`

解释 Swift 6.2 Approachable Concurrency 方法：默认单线程执行、通过 `@concurrent` 显式移出后台任务，以及 isolated conformances。

## 简单请求
```text
/ecc-swift-concurrency-6-2 分析此 Swift 6.2 MainActor 隔离错误，并提出安全方案：[代码/错误]
```
## 模板请求
```text
/ecc-swift-concurrency-6-2
代码/操作：[片段]
编译器诊断：[不含敏感信息的文本]
Swift 版本和目标平台：[值]
解释何处需要 @concurrent 或隔离；不要建议不受控地关闭检查。
```
## 详细请求
```text
/ecc-swift-concurrency-6-2
分析[模块/函数]迁移到 Swift 6.2 模型的方案。先确定当前 actor 隔离和状态所有者；然后判定哪些逻辑应留在 MainActor，哪些 CPU/IO 工作可通过 @concurrent 明确移出；评估 Sendable 和 isolated conformances；提出最小且安全的设计及数据竞争验证场景。不要仅为消除诊断而使用 unsafe 绕过方案。未经许可，不要修改文件、安装工具或运行构建。结果包括原因分析、修复草案、兼容性和验证方式。
```
