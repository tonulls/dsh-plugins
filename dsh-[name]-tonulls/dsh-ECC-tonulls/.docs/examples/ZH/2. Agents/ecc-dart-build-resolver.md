# `/ecc-dart-build-resolver`

**用途：**诊断并最小化修复 `dart analyze`、Flutter 构建、pub 依赖冲突和 `build_runner` 错误。适用于 Dart/Flutter 构建失败。

## 简短提示词

```text
/ecc-dart-build-resolver 分析 dart analyze 和 Flutter 构建错误；只修复已确认的原因，不要安装软件包。
```

## 模板提示词

```text
/ecc-dart-build-resolver
背景：[项目路径 / 片段 / 系统 / 症状]。
任务：为 [目标或对象] 最小化修复 Dart/Flutter 分析或构建错误。
重点：dart analyze/Flutter 输出、pub/build_runner 冲突和已确认的根因。
限制：只使用已有本地工具，在 [允许范围] 内进行最小更改；不要安装或下载任何内容。若需进行范围较大的更改，请暂停并征求确认。
结果格式：[简要结论、依据、优先级和后续步骤]。
```

## 详细提示词

```text
/ecc-dart-build-resolver
为 [项目/组件/场景] 执行任务“最小化修复 Dart/Flutter 分析或构建错误”。
1. 记录初始信息、工作范围和结果标准；列出缺少的信息。
2. 仅研究与任务相关的背景并检查：dart analyze/Flutter 输出、pub/build_runner 冲突和已确认的根因。
3. 仅在确认根因后进行最小修复，并重复执行适当的本地检查。
4. 根据标准核对结果，提供证据并区分已确认的结论和假设。

限制：只使用已有本地工具，在 [允许范围] 内进行最小更改；不要安装或下载任何内容。若需进行范围较大的更改，请暂停并征求确认。
报告应注明结论、重要发现/操作、未检查部分、风险和安全的后续步骤。
```
