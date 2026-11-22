# `/ecc-contract-first`

通过单一机器可读契约（OpenAPI、AsyncAPI、Protobuf 或 JSON Schema）、类型生成和集成验证，协调消费者与提供方之间的更改。

## 简单请求

```text
/ecc-contract-first 帮助前端和订单服务就新的 REST 端点达成一致契约。
```

## 模板请求

```text
/ecc-contract-first
提供方：[服务和技术栈]
消费者：[客户端]
契约格式：[OpenAPI/AsyncAPI/Protobuf/JSON Schema]
更改：[字段和行为]
兼容性限制：[描述]
请提出唯一事实来源和验证方法，以避免 mock 与生产契约不一致。
```

## 详细请求

```text
/ecc-contract-first
为[提供方]与[消费者]之间的更改[API/事件]提出 contract-first 计划。先检查当前接口和兼容性限制；从 OpenAPI、AsyncAPI、Protobuf 或 JSON Schema 中选择适合的契约格式；明确必填项、错误、版本和字段演进；说明类型生成和集成验证方法，确保 mock 符合真实格式。将提供方和消费者的工作分别拆分，并制定就绪标准。未经确认，不要修改文件或添加工具/依赖。结果包括：契约草案、阶段、检查、风险和未知事项。
```
