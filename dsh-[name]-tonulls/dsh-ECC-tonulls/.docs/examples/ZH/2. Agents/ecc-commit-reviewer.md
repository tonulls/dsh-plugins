# `/ecc-commit-reviewer`

**用途：**审查已准备的更改，并结合仓库历史中的实际约定提出 Conventional Commits 格式的提交说明。可在提交前使用，或用于审查提交说明。

## 简短提示词

```text
/ecc-commit-reviewer 检查 staged diff，并提出准确的 Conventional Commits 提交说明。不要提交。
```

## 模板提示词

```text
/ecc-commit-reviewer
背景：[项目路径 / 片段 / 系统 / 症状]。
任务：审查已准备的更改，并为 [目标或对象] 拟定 Conventional Commits 提交说明。
重点：staged diff、仓库历史中的实际约定、type/scope/summary，以及提交说明与更改的一致性。
限制：只读；不要修改文件，也不要运行主动或外部检查。
结果格式：[简要结论、依据、优先级和后续步骤]。
```

## 详细提示词

```text
/ecc-commit-reviewer
为 [项目/组件/场景] 执行任务“审查已准备的更改并拟定 Conventional Commits 提交说明”。
1. 记录初始信息、工作范围和结果标准；列出缺少的信息。
2. 仅研究与任务相关的背景并检查：staged diff、仓库历史中的实际约定、type/scope/summary，以及提交说明与更改的一致性。
3. 提出结论和后续步骤；不要应用更改，也不要把假设说成事实。
4. 根据标准核对结果，提供证据并区分已确认的结论和假设。

限制：只读；不要修改文件，也不要运行主动或外部检查。
报告应注明结论、重要发现/操作、未检查部分、风险和安全的后续步骤。
```
