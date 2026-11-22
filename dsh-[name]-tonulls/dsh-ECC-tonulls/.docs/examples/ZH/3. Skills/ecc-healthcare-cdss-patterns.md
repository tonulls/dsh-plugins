# `ecc-healthcare-cdss-patterns`

**命令：** `/ecc-healthcare-cdss-patterns`

**用途：**临床决策支持系统 (CDSS) 开发实践：药物相互作用和剂量检查、临床评分（NEWS2、qSOFA）、警报重要性分类，以及与 EMR 流程集成。适用于构建此类系统。

## 提示词

### 1. 简短请求

> /ecc-healthcare-cdss-patterns 评估这条 CDSS 临床规则的安全性。

### 2. 带上下文的模板

> /ecc-healthcare-cdss-patterns 场景：[相互作用/剂量/评分]，人群：[描述]，规则来源：[来源]。说明临床假设及是否需要专家验证。

### 3. 详细请求

> /ecc-healthcare-cdss-patterns 分析[场景]的 CDSS 设计。检查输入数据、计量单位、警报严重程度、误报和工作流集成。不要对患者提供临床建议；要求合格专业人员审核并使用已验证来源。列出风险和测试计划。
