# 提示词示例：`/ecc-kotlin-reviewer`

**调用命令：** `/ecc-kotlin-reviewer`

## 用途

审查 Kotlin/Android/KMP 代码：语言惯用法、协程/Flow、Compose、架构边界和常见 Android 风险。只报告发现，不修改文件。

## 1. 简短请求

```text
/ecc-kotlin-reviewer 检查 Kotlin 代码中的协程和 Compose 错误；不要进行任何更改。
```

## 2. 模板请求

```text
/ecc-kotlin-reviewer 对 {Android/KMP/Compose} 的 {已修改文件或 diff} 进行只读审查。检查协程取消、Flow、生命周期、Compose 重绘和模块边界；只报告有把握的问题，并注明位置、理由和修复建议。
```

## 3. 详细请求

```text
/ecc-kotlin-reviewer 请针对任务 {场景/更改} 执行分步分析。

1. 记录初始背景，仅研究相关材料。
2. 检查此角色关注的关键风险和标准：语言惯用法、协程/Flow、Compose、架构边界和常见 Android 风险。只报告发现，不修改文件。
3. 区分已确认的事实与推测，并指出缺失的信息。
4. 生成按优先级排序的结果，附上证据、验证限制和具体后续步骤。

边界：不要泄露机密或个人数据；未经明确许可，不要执行网络操作、安装软件包、部署或运行潜在危险的命令。分析期间不要修改文件；任何更改、删除、启动循环或应用配置的操作，都必须先协商并等待我的确认。
```
