# `ecc-healthcare-eval-harness`

**命令：** `/ecc-healthcare-eval-harness`

**用途：**医疗应用发布时的患者安全评估框架：自动检查 CDSS 准确性、PHI 泄漏、临床流程完整性及集成合规性。安全检查未通过时阻止发布。适用于发布流程依赖这些检查的场景。

## 提示词

### 1. 简短请求

> /ecc-healthcare-eval-harness 为医疗产品发布制定 safety-gate 测试。

### 2. 带上下文的模板

> /ecc-healthcare-eval-harness 应用：[描述]，CDSS：[功能]，集成：[列表]。确定准确性、PHI 和 workflow 完整性检查；不要运行部署。

### 3. 详细请求

> /ecc-healthcare-eval-harness 为[系统]发布定义自动化 eval harness。按模块说明 CDSS 准确性、PHI 泄漏、workflow 完整性和集成合规性；制定阻断标准和安全的合成 fixtures。不要部署，也不要使用真实 PHI。提供 pass/fail 报告格式。
