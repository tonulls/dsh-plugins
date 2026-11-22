# 提示词示例：`/ecc-rust-build-resolver`

**调用命令：** `/ecc-rust-build-resolver`

## 用途

以最小更改诊断并修复 Rust、borrow checker 和 Cargo.toml 的构建错误。

## 1. 简短请求

```text
/ecc-rust-build-resolver 分析 cargo 错误 {日志}，提出最小修复方向，不添加依赖。
```

## 2. 模板请求

```text
/ecc-rust-build-resolver crate {名称} 中的命令 {cargo check/build/test} 失败，日志为 {日志}。追踪类型、所有权/借用和 Cargo 配置，并提出范围有限的修复。未经确认，不要添加依赖、执行网络操作或修改文件。
```

## 3. 详细请求

```text
/ecc-rust-build-resolver 请针对任务 {场景/更改} 执行分步分析。

1. 记录初始背景，仅研究相关材料。
2. 检查此角色关注的关键风险和标准：最小化诊断并修复 Rust、borrow checker 和 Cargo.toml 的构建错误。
3. 区分已确认的事实与推测，并指出缺失的信息。
4. 生成按优先级排序的结果，附上证据、验证限制和具体后续步骤。

边界：不要泄露机密或个人数据；未经明确许可，不要执行网络操作、安装软件包、部署或运行潜在危险的命令。分析期间不要修改文件；任何更改、删除、启动循环或应用配置的操作，都必须先协商并等待我的确认。
```
