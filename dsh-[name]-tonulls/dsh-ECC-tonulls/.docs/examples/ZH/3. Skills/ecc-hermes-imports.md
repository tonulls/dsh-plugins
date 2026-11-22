# `ecc-hermes-imports`

**命令：** `/ecc-hermes-imports`

**用途：**将 Hermes 本地操作流程转换为经过核查的 ECC skill 和软件包发布产物。适用于准备公开复用的 Hermes 流程，同时不泄露工作区中的个人内容、凭据和本地路径。

## 提示词

### 1. 简短请求

> /ecc-hermes-imports 为 Hermes workflow 准备安全的脱敏检查。

### 2. 带上下文的模板

> /ecc-hermes-imports Workflow：[名称/路径]，用途：[描述]。从建议的导出内容中移除本地路径、workspace 状态和机密；暂时只提供计划。

### 3. 详细请求

> /ecc-hermes-imports 检查本地 Hermes workflow，使其成为可复用的 ECC skill。步骤：确定环境依赖，匿名化示例，移除凭据/私人状态/本地路径，生成产物清单。不要发布或复制机密；先展示 diff 计划，并在写入前征求同意。
