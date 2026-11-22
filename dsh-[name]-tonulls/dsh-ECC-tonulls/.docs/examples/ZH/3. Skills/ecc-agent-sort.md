# `/ecc-agent-sort`

为特定仓库制定有依据的 ECC 安装计划：根据项目需求分析，将 skills、commands、rules、hooks 和 extras 分配到 DAILY 或 LIBRARY。此项是配置规划，不会自动安装。

## 提示词示例

### 1. 简短请求
```text
/ecc-agent-sort 分析此仓库，建议哪些 ECC skills 和命令适合日常使用，哪些应留在资料库。不要安装任何内容。
```

### 2. 模板请求
```text
/ecc-agent-sort 为[仓库/项目类型]制定 ECC 组件配置计划。考虑[语言、框架、常见任务、团队限制]。审视 skills、commands、rules、hooks 和 extras；根据仓库证据，建议每项归入 DAILY 或 LIBRARY。仅提供建议，不要修改文件。
```

### 3. 详细请求
```text
/ecc-agent-sort 为[仓库]制定有证据支持的 ECC 精简计划。1) 研究结构、manifest/config 和实际使用的技术；不要仅根据文件名推断。2) 分别审查 skills、commands、rules、hooks 和 extras，并汇总重叠项。3) 对每项标为 DAILY（经常需要）或 LIBRARY（少见/专用），并关联发现的证据；将不确定项单独列出。4) 不要删除、移动或安装组件。结果包括：项目简况、“组件 — 分组 — 理由”表格、潜在缺口/重复项，以及仅在另行确认后执行的实施计划。
```
