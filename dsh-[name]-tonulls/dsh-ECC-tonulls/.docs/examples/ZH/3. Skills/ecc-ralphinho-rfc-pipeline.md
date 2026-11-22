# `/ecc-ralphinho-rfc-pipeline`

**用途：**将 RFC 拆分为多 Agent 执行图：把工作划分为具备依赖关系和验收测试的单元，协调每个单元的研究、规划、实现、测试和审查，然后通过 rebase 队列整合更改并进行最终系统检查。适用于大型功能、多 Agent 执行 RFC 和管理合并队列。

## 简短提示词

```text
/ecc-ralphinho-rfc-pipeline 将 RFC [路径]拆分为具有依赖关系和 acceptance tests 的 work units；仅规划 pipeline。
```

## 模板提示词

```text
/ecc-ralphinho-rfc-pipeline
背景：[RFC、文件/分支限制、独立 work units 和可验证标准]。
任务：为 [目标组件/结果] 设计基于独立 work units 的 multi-agent RFC 执行 DAG。
重点：分解、依赖关系、验收标准、研究/实现/测试/审查及 gated merge queue。
限制：仅生成可直接粘贴的步骤/命令；不要调用，也不要声称已执行。
格式：[简要结论、证据/理由、风险和下一步]。
```

## 详细提示词

```text
/ecc-ralphinho-rfc-pipeline
为 [目标系统/场景] 执行任务“设计基于独立 work units 的 multi-agent RFC 执行 DAG”。
1. 明确目标、范围、初始信息和结果标准；列出缺失背景。
2. 仅研究与请求相关的材料并核查：工作分解、依赖关系、验收标准、研究/实现/测试/审查及 gated merge queue。
3. 对每一步注明准确的有文档依据的调用和范围；若命令不能限定步骤范围，不要纳入并注明阻碍。
4. 根据给定标准检查结论，注明证据、假设和未核实事项。

限制：仅生成可直接粘贴的步骤/命令；不要调用，也不要声称已执行。
按以下格式整理结果：[预期格式]。不要编造事实；如需执行未预期的副作用操作，请暂停并征求同意。
```
