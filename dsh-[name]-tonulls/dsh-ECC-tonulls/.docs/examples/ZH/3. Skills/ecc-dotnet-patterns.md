# `/ecc-dotnet-patterns`

帮助编写和审查符合惯例的 C#/.NET 代码：组织方式、dependency injection、async/await，以及构建可靠应用的实践。

## 简单请求

```text
/ecc-dotnet-patterns 检查此 async .NET 方法是否正确处理取消和异常。
```

## 模板请求

```text
/ecc-dotnet-patterns
目标 .NET/C# 版本：[版本]
组件：[描述]
代码：[片段或路径]
要求：[性能/兼容性]
考虑 DI 和 async，提出符合惯例的方案；先只做审查。
```

## 详细请求

```text
/ecc-dotnet-patterns
分析[组件]，目标为[.NET/C# 版本]。将方案与项目现有风格对照。检查类型职责和 DI lifetime、异步处理及 CancellationToken 传递、资源管理、异常和错误契约、nullability 及可读性。指出哪些地方值得更改，哪些抽象会显得冗余。未经我确认，不要编辑文件、添加软件包或进行外部调用。提供简洁的代码方案、测试场景和潜在迁移风险；明确区分事实与假设。
```
