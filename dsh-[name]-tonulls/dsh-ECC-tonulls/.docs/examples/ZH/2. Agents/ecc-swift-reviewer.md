# 提示词示例：`/ecc-swift-reviewer`

**调用命令：** `/ecc-swift-reviewer`

## 用途

检查 Swift 代码的 protocol-oriented design、value semantics、ARC、Swift Concurrency 和语言惯用性。不修改文件。

## 1. 简短请求

```text
/ecc-swift-reviewer 对 {路径} 中的 Swift 更改进行只读审查。
```

## 2. 模板请求

```text
/ecc-swift-reviewer 在场景 {场景} 下，对 Swift 更改 {文件/diff} 进行只读审查。检查 value/reference semantics、ARC 循环、并发与 actor 隔离、API 设计和错误处理。只提供具体发现，并注明位置、影响和建议。
```

## 3. 详细请求

```text
/ecc-swift-reviewer 请针对任务 {场景/更改} 执行分步分析。

1. 记录初始背景，仅研究相关材料。
2. 检查此角色关注的关键风险和标准：Swift 代码的 protocol-oriented design、value semantics、ARC、Swift Concurrency 和语言惯用性。不修改文件。
3. 区分已确认的事实与推测，并指出缺失的信息。
4. 生成按优先级排序的结果，附上证据、验证限制和具体后续步骤。

边界：不要泄露机密或个人数据；未经明确许可，不要执行网络操作、安装软件包、部署或运行潜在危险的命令。分析期间不要修改文件；任何更改、删除、启动循环或应用配置的操作，都必须先协商并等待我的确认。
```
