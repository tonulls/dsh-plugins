# `/ecc-csharp-testing`

提供 C#/.NET 测试实践，涵盖 xUnit、FluentAssertions、mock、集成测试和组织良好的测试结构。

## 简单请求

```text
/ecc-csharp-testing 编写 xUnit 测试，检查空订单列表的处理。
```

## 模板请求

```text
/ecc-csharp-testing
组件：[类型/方法]
预期行为：[规则]
当前测试技术栈：[xUnit、FluentAssertions、mock 库]
边界情况：[列表]
提出测试结构，不要安装软件包。
```

## 详细请求

```text
/ecc-csharp-testing 为使用 [xUnit/FluentAssertions/mock] 的 .NET 项目中的[功能]设计测试覆盖。参考现有结构。制定成功、边界和错误场景；区分单元测试与集成测试，仅在外部边界使用 mock，并确保测试具有确定性。如果需要软件包或项目更改，请先征求许可并提出不依赖它的方案。不要访问外部系统，也不要在未经单独请求时更改生产行为。商定后进行有限更改，并仅运行获准的本地测试集；报告执行的命令和实际结果。
```
