# 提示词示例：`/ecc-swift-build-resolver`

**调用命令：** `/ecc-swift-build-resolver`

## 用途

诊断 Swift/Xcode 构建、编译、SPM 和 code signing 错误，并进行最小修复。

## 1. 简短请求

```text
/ecc-swift-build-resolver 分析 Swift/Xcode 错误 {日志}；不要下载依赖或更改 signing。
```

## 2. 模板请求

```text
/ecc-swift-build-resolver {项目} 的构建 {swift build / Xcode scheme} 因 {错误} 失败。判断原因属于 Swift、Xcode、SPM 还是 signing，并提出最小修复。未经确认，不要下载依赖、更改 signing 设置或修改文件。
```

## 3. 详细请求

```text
/ecc-swift-build-resolver 请针对任务 {场景/更改} 执行分步分析。

1. 记录初始背景，仅研究相关材料。
2. 检查此角色关注的关键风险和标准：诊断 Swift/Xcode 构建、编译、SPM 和 code signing 错误，并进行最小修复。
3. 区分已确认的事实与推测，并指出缺失的信息。
4. 生成按优先级排序的结果，附上证据、验证限制和具体后续步骤。

边界：不要泄露机密或个人数据；未经明确许可，不要执行网络操作、安装软件包、部署或运行潜在危险的命令。分析期间不要修改文件；任何更改、删除、启动循环或应用配置的操作，都必须先协商并等待我的确认。
```
