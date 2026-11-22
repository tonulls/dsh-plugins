# `ecc-healthcare-phi-compliance`

**命令：** `/ecc-healthcare-phi-compliance`

**用途：**医疗应用中的 PHI 和 PII 保护实践：数据分类、行级访问控制、防篡改审计日志、架构标记，以及常见泄漏渠道（日志、URL 和浏览器存储）。适用于处理患者或医生数据、实施 HIPAA/GDPR 控制，或审查信息泄漏风险。

## 提示词

### 1. 简短请求

> /ecc-healthcare-phi-compliance 对代码中的 PHI 泄漏执行只读检查。

### 2. 带上下文的模板

> /ecc-healthcare-phi-compliance 范围：[路径/数据流]，数据类别：[列表]。检查日志、URL、浏览器存储、访问权限和审计；不要展示真实标识符。

### 3. 详细请求

> /ecc-healthcare-phi-compliance 在不修改文件的情况下审计[组件]的 PHI/PII 处理。追踪数据分类、row-level access、audit trail，以及通过日志/URL/storage 泄漏的风险。仅使用匿名示例，不要复制 PHI。按优先级列出有证据支持的风险并提出防护措施；不要对数据执行任何操作。
