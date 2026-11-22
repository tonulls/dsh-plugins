# `/ecc-deployment-patterns`

帮助设计 CI/CD 和容器化方案、health checks 及回滚策略，并检查 Web 应用是否已做好发布准备。

## 简单请求

```text
/ecc-deployment-patterns 审查 Web 应用发布计划，提出安全检查和回滚策略。
```

## 模板请求

```text
/ecc-deployment-patterns
应用技术栈：[描述]
CI/CD 和容器：[工具]
环境：[本地/staging/production]
预期可用性和 rollback：[限制]
只需要计划和审查；不要部署或推送任何内容。
```

## 详细请求

```text
/ecc-deployment-patterns
评估[技术栈]应用的发布准备情况并提出 pipeline。考虑构建和测试、容器化及最小权限、health/readiness checks、通过标准存储管理机密（不输出其值）、迁移、逐步启用和可验证回滚。为每阶段定义 gate 和成功/停止信号；考虑 staging 与 production 的差异。未经我单独确认，不要安装软件包、访问网络、运行 CI、部署或更改配置。请提供流程架构、风险、检查清单和回滚计划。
```
