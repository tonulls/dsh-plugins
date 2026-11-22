# `/ecc-django-verification`

在 PR/发布前分阶段验证 Django 项目：环境、lint、迁移、pytest 和覆盖率、安全扫描、设置及 diff。

## 简单请求

```text
/ecc-django-verification 为我的 Django PR 准备检查报告，不要修复任何问题。
```

## 模板请求

```text
/ecc-django-verification
项目：[路径/Django 版本]
更改范围：[描述]
项目检查项：[已知命令]
获准的本地命令：[列表]
仅审计：不要修改文件、安装软件包或运行网络扫描器。
```

## 详细请求

```text
/ecc-django-verification
为 Django PR [描述] 准备分阶段通过/失败报告。执行前，列出所需命令，并确认它们均在本地运行且不会更改环境或数据；仅运行明确获准的命令[列表]。检查环境是否可用、lint/type checks、迁移安全、pytest 和指定覆盖率、现有本地 pip-audit/bandit 检查、settings/logging 配置及 diff。不要安装依赖、访问网络、应用迁移或修复文件。说明无法执行的检查及原因。报告中逐阶段注明命令、退出代码/观察结果、结果、风险和就绪结论；不得将未运行的检查报告为成功。
```
