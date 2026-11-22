# `/ecc-django-patterns`

帮助构建和检查 Django 应用：架构、DRF API、ORM 查询、缓存、信号、middleware 和生产代码组织。

## 简单请求

```text
/ecc-django-patterns 检查订单列表的 ORM 查询是否存在 N+1 问题，并提出改进方案。
```

## 模板请求

```text
/ecc-django-patterns
Django 版本：[版本]
组件：[模型/API/view/service]
当前实现：[路径/代码]
性能和行为限制：[描述]
请在现有架构和迁移方案内提出解决方案。
```

## 详细请求

```text
/ecc-django-patterns
分析 Django [版本] 中的[功能]，使用[DRF/ORM/缓存]。先研究项目相关约定；然后提出职责划分、API 形式/验证、高效查询，以及在证据支持时需要的 select_related/prefetch_related 或缓存。检查事务和信号副作用；提出行为和边界测试。不要修改文件或数据库架构，也不要安装软件包。如果实现会影响数据或 API 契约，请先说明兼容性并征求确认。输出分析、具体方案、风险和验证方法。
```
