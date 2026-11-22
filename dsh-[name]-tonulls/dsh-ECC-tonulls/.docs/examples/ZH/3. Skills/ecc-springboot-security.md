# `/ecc-springboot-security`

审查 Spring Security 实践：身份验证和授权、验证、CSRF、机密、安全标头、速率限制及依赖。

## 简单请求
```text
/ecc-springboot-security 对 Spring Security 配置进行只读检查：[片段]。不要修改文件。
```
## 模板请求
```text
/ecc-springboot-security
组件/diff：[路径或片段]
登录机制和角色：[描述]
客户端类型：[浏览器/API]
检查 authn/authz、CSRF、验证、机密和安全标头；不要泄露机密值，也不要修复代码。
```
## 详细请求
```text
/ecc-springboot-security
严格只读审计 Spring Boot/Spring Security [范围] 的安全性。追踪 filter chain 配置、身份验证和授权边界、endpoint 访问、验证、根据客户端类型适用的 CSRF、防护标头、速率限制、机密管理和依赖风险。每项结论均给出代码证据及风险场景，并区分已确认事实与假设。不要运行主动测试、发起网络请求、打印机密或应用修复。结果包括严重程度、范围、影响、建议和优先级；标记未经检查的环境设置。
```
