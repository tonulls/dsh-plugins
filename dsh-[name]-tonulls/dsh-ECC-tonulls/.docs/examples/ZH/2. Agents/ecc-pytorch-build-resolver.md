# 提示词示例：`/ecc-pytorch-build-resolver`

**调用命令：** `/ecc-pytorch-build-resolver`

## 用途

诊断 PyTorch 训练/推理故障：张量形状、设备、梯度、DataLoader 和 mixed precision；修复应尽量小。

## 1. 简短请求

```text
/ecc-pytorch-build-resolver 分析 PyTorch 故障 {错误消息}；不要启动训练或下载依赖。
```

## 2. 模板请求

```text
/ecc-pytorch-build-resolver {模型/步骤} 的训练/推理失败：{错误}，输入形状 {形状}，设备和 precision 为 {参数}。追踪张量形状和设备直至故障点，并提出可能的根因/最小修复。不要启动训练、下载模型/软件包或未经确认修改文件。
```

## 3. 详细请求

```text
/ecc-pytorch-build-resolver 请针对任务 {场景/更改} 执行分步分析。

1. 记录初始背景，仅研究相关材料。
2. 检查此角色关注的关键风险和标准：张量形状、设备、梯度、DataLoader 和 mixed precision；修复应尽量小。
3. 区分已确认的事实与推测，并指出缺失的信息。
4. 生成按优先级排序的结果，附上证据、验证限制和具体后续步骤。

边界：不要泄露机密或个人数据；未经明确许可，不要执行网络操作、安装软件包、部署或运行潜在危险的命令。分析期间不要修改文件；任何更改、删除、启动循环或应用配置的操作，都必须先协商并等待我的确认。
```
