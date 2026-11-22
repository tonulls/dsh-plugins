# `/ecc-enterprise-agent-ops`

帮助运维长期运行的 Agent 系统：生命周期、可观测性、权限限制、kill switch，以及受控 rollout/rollback。

## 简单请求

```text
/ecc-enterprise-agent-ops 为生产环境的 Agent 集群制定监控和安全停止检查清单。
```

## 模板请求

```text
/ecc-enterprise-agent-ops
运行环境：[PM2/systemd/容器]
Agent 数量和角色：[描述]
可用日志/指标/跟踪：[列表]
权限策略和 kill switch：[描述]
仅进行只读评估；不要停止进程或执行 rollout。
```

## 详细请求

```text
/ecc-enterprise-agent-ops
评估 Agent 服务[系统]在[PM2/systemd/容器平台]上的运维控制措施。检查所提生命周期（启动/暂停/停止/重启）、日志/指标/跟踪、最小安全权限范围和可验证的 kill switch、审计轨迹、rollout/rollback gate 及成功/成本指标。找出监控缺口和事故场景；提出停止标准和恢复方法。未经单独明确确认，不要执行控制命令、修改配置、部署或访问网络。报告包括：按优先级排列的风险、必要遥测、安全更改方案和验证/回滚计划。
```
