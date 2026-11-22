# `/ecc-django-celery`

帮助使用 Celery 配置 Django 后台和周期性任务：配置、retries、canvas、监控和测试。

## 简单请求

```text
/ecc-django-celery 为处理已上传报告的 Django 应用提出可靠的 Celery 任务方案。
```

## 模板请求

```text
/ecc-django-celery
Django/Celery 版本和 broker：[信息]
任务及预期耗时：[描述]
重试/幂等性要求：[条件]
当前配置：[片段]
请按项目风格提出任务、错误处理、监控和测试方案。
```

## 详细请求

```text
/ecc-django-celery
为 Django [版本] 和 Celery [版本]、broker [类型]设计[操作]的后台处理。确定事务边界和任务入队时机、幂等键、带 backoff 的超时/retry、耗尽重试次数后的行为、队列路由，以及必要时的周期性调度。考虑参数可序列化性、重复投递和可观测性。提出不调用外部服务的单元/集成测试。先只提供建议；只有确认后才能修改或安装依赖。结果包括任务方案、配置位置、风险、测试及本地验证命令。
```
