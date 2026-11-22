# `/ecc-workspace-surface-audit`

审计活跃仓库、MCP 服务器、插件、连接器、环境变量接口和 harness 配置，然后推荐合适的 ECC 技能、hooks、agents 和工作流。

## 简单请求
```text
/ecc-workspace-surface-audit 只读清点当前仓库和可用集成；不要输出机密。
```
## 模板请求
```text
/ecc-workspace-surface-audit
仓库和目标：[背景]
可用配置：[路径/接口]
限制：仅只读
清点实际可用的组件并推荐相关 ECC 功能；不要读取机密值或修改设置。
```
## 详细请求
```text
/ecc-workspace-surface-audit
以只读方式评估[仓库/目标]的 harness 配置。分步执行：仅研究可访问的配置和项目结构；清点 MCP、plugins、connectors、环境变量接口和本地 workflow，并区分已发现项与假设；在不输出 credential 值的前提下检查可用性；将实际需求与 ECC skills/hooks/agents 对照并提出优先级。不要连接外部系统、修改文件/设置、安装组件或在报告中包含机密。任何主动连接或更改都需我单独许可。结果：附证据的清单、缺口、建议和检查限制。
```
