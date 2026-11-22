# `/ecc-swift-actor-persistence`

帮助使用 actor、内存缓存和文件存储设计线程安全的 Swift 持久化架构，从设计层面消除数据竞争。

## 简单请求
```text
/ecc-swift-actor-persistence 为[模型]设计带缓存和文件持久化的 Swift actor 存储。
```
## 模板请求
```text
/ecc-swift-actor-persistence
模型和操作：[描述]
存储格式/路径：[条件]
一致性和错误要求：[要求]
提出 actor API、IO 处理和可测试边界；不要泄露用户数据。
```
## 详细请求
```text
/ecc-swift-actor-persistence
需要在 Swift 中将[数据类型]保存在内存和磁盘上。1) 确定并发访问不变量和数据生命周期。2) 提出 actor API 及读取/写入/恢复策略。3) 分析原子性、文件系统错误、编码、清理和缓存一致性。4) 提出并发和故障测试，避免访问真实用户文件。不要修改文件或执行磁盘写入；未经同意，不要添加软件包。结果：状态模型、接口草案、竞争条件风险和测试计划。
```
