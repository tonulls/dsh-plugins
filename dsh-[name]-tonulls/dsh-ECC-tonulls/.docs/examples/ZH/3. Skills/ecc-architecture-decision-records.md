# `/ecc-architecture-decision-records`

将已作出的架构决策记录为编号 Markdown ADR，包含背景、考虑过的替代方案、后果和 README 索引。

## 提示词示例

### 1. 简短请求
```text
/ecc-architecture-decision-records 将选定方案[决策]整理为 ADR：背景、替代方案和后果。先检查现有 ADR 及其编号。
```

### 2. 模板请求
```text
/ecc-architecture-decision-records 记录选择[技术/方法]而非[替代方案]的 ADR。背景：[原因和限制]。方案优缺点：[事实]。遵循现有 ADR 的结构和编号；仅当项目惯例如此时才更新索引。
```

### 3. 详细请求
```text
/ecc-architecture-decision-records 将[架构问题]的决策记录为 ADR。1) 研究 docs/adr 目录及本地命名/索引规则；不要覆盖现有条目。2) 仅使用已确认的信息：背景、决策状态、选定方案、实际替代方案、论据和后果。3) 如果决策尚未作出或信息不足，不要替用户决定；应准备带有待解决问题的草稿。4) 仅按照既定模板创建/更新相关 ADR Markdown 文件和索引；不要修改代码。结果：受影响路径、简要内容和不确定事项。
```
