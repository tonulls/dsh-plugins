# `/ecc-dynamic-workflow-mode`

帮助设计特定任务的 harness 和 eval gates，并从 Agent 的自适应工作流程中提取可复用技能。

## 简单请求

```text
/ecc-dynamic-workflow-mode 为提取发票字段的 Agent 设计 eval gate。
```

## 模板请求

```text
/ecc-dynamic-workflow-mode
Agent 任务：[描述]
典型输入和错误：[不含敏感数据的示例]
成功标准：[可衡量条件]
工具限制：[描述]
提出 task-local harness 和 eval 集；不要对真实数据运行任务。
```

## 详细请求

```text
/ecc-dynamic-workflow-mode
为[描述]中的重复任务，在[Claude dynamic workflow/其他自适应 harness]中设计一个范围受限的 harness。定义输入/输出契约、任务拆解、允许的操作、禁止事项、完成和停止标准。设计 eval 集方案，使用有代表性的正向、边界和对抗性输入，不包含真实机密/个人数据；确定质量指标和 gate 阈值。随后评估哪些指令真正具有普遍适用性，可成为可复用 skill。不要在真实系统上执行任务；未经确认，不要更改配置或文件。报告包括：harness 方案、eval 计划、针对测试集过拟合的风险，以及可复用指令候选。
```
