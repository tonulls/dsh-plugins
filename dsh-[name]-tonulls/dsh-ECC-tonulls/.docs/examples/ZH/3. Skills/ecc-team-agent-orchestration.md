# `/ecc-team-agent-orchestration`

帮助协调多 Agent 并行工作：按负责人和边界拆分任务、设置 Kanban 状态、隔离分支、建立控制面板并定义合并条件。

## 简单请求
```text
/ecc-team-agent-orchestration 将[任务]拆分为由 Agent 团队承担的独立工作项，并明确负责人和验收标准。
```
## 模板请求
```text
/ecc-team-agent-orchestration
目标：[结果]
范围和限制：[描述]
可用 Agent/环境：[如已知]
提出工作项、负责人、依赖关系、状态和 merge gates；未经确认，不要启动 Agent 或更改分支。
```
## 详细请求
```text
/ecc-team-agent-orchestration
为[任务]规划团队协作。步骤：划分独立部分和共享接口；为每项任务指定负责人、输入/输出和完成标准；记录依赖关系和 Kanban 状态流转；提出分支/worktrees 隔离和冲突控制方案；定义检查及合并/停止条件。未经我明确确认，不要创建分支、worktrees 或文件，也不要启动 Agent；不要执行 merge/push/deploy。结果：工作计划、依赖图、协作风险、检查点和集成顺序。
```
