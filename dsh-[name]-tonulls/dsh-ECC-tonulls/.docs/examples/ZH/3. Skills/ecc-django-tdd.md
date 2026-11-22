# `/ecc-django-tdd`

帮助通过 pytest-django、factory_boy 和 mock，以测试驱动方式开发 Django/DRF，并检查测试覆盖率。

## 简单请求

```text
/ecc-django-tdd 为按状态筛选订单的 DRF 端点编写 pytest-django 测试。
```

## 模板请求

```text
/ecc-django-tdd
功能/端点：[描述]
预期规则：[列表]
当前 pytest-django 设置：[片段]
工厂和身份验证：[现有内容]
请制定测试矩阵并遵循仓库风格；不要安装软件包。
```

## 详细请求

```text
/ecc-django-tdd 使用现有 pytest-django 技术栈，为 Django/DRF 项目中的[功能/缺陷]实现测试。先确定可观察行为并编写测试计划：成功场景、验证、权限、空/边界数据和错误。使用现有 factory_boy 工厂，仅在外部边界使用 mock；针对缺陷，在修复实现前先记录回归用例。不要调用真实外部 API，也不要在隔离测试数据库之外更改数据。新增依赖/配置必须事先同意。确认后仅修改必要的测试文件，以及明确授权时的生产代码；运行选定的本地测试并报告实际结果。
```
