# `/ecc-fastapi-reviewer` — 提示词示例

## 用途

对 FastAPI 进行专业审查：异步代码和依赖注入的正确性、Pydantic 架构、安全性、OpenAPI 质量、测试及生产就绪性。这是分析，不是修改。

## 简短请求

```text
/ecc-fastapi-reviewer 仅审查 FastAPI 代码 {路径/diff}；检查 async、依赖、架构和安全性。不要进行任何更改。
```

## 模板请求

```text
/ecc-fastapi-reviewer 检查 {路径或 diff} 中的 {endpoint/模块}。评估 async 调用、dependency injection、Pydantic 验证、授权、错误处理和 OpenAPI 契约的正确性。只列出已确认的问题，并注明优先级、文件/行、风险场景和建议；不要进行更改。
```

## 详细请求

```text
/ecc-fastapi-reviewer 以只读方式审查 FastAPI 更改 {diff/路径}，尤其关注场景 {endpoint 用途}。
1. 追踪请求路由和依赖：执行顺序、async 上下文中的阻塞操作、资源生命周期及错误处理。
2. 检查 Pydantic 架构和信任边界：输入/输出验证、字段泄露、授权及敏感数据。
3. 评估 HTTP 状态码、OpenAPI 契约，以及是否存在针对重要行为的测试。
4. 只报告有代码依据的具体缺陷或风险；不要将风格偏好当作 bug。

格式：按严重程度降序列出发现（优先级、文件/行、复现条件、影响、建议），然后说明已检查范围和信息缺口。只做分析：不要编辑代码；未经同意，不要安装依赖、访问网络或部署。
```
