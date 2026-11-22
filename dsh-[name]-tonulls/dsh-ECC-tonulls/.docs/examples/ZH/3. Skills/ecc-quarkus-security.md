# `/ecc-quarkus-security`

**用途：**Quarkus 安全实践：JWT 和 OIDC 身份验证、通过 `@RolesAllowed` 与 SecurityIdentity 检查实施 RBAC、Bean Validation 和自定义验证器、参数化 Panache 查询、BCrypt 哈希、CORS 和安全标头、速率限制、审计、通过 Vault 或环境变量管理机密，以及依赖 CVE 检查。适用于配置访问控制、输入验证、机密管理和加固 Quarkus 应用。

## 简短提示词

```text
/ecc-quarkus-security 对 Quarkus endpoint 执行只读审计，检查 auth/authz、验证和机密泄露。
```

## 模板提示词

```text
/ecc-quarkus-security
背景：[endpoint、角色、输入类型和不含机密值的安全配置]。
任务：为 [目标组件/结果] 检查 Quarkus 服务的安全性。
重点：JWT/OIDC、RBAC、SecurityIdentity、Bean Validation、参数化查询、CORS、速率限制、审计和机密。
限制：仅分析；不要修改文件或数据，也不要运行外部/破坏性检查。
格式：[简要结论、证据/理由、风险和下一步]。
```

## 详细提示词

```text
/ecc-quarkus-security
为 [目标系统/场景] 执行任务“检查 Quarkus 服务的安全性”。
1. 明确目标、范围、初始信息和结果标准；列出缺失背景。
2. 仅研究与请求相关的材料并核查：JWT/OIDC、RBAC、SecurityIdentity、Bean Validation、参数化查询、CORS、速率限制、审计和机密。
3. 根据事实提出发现或备选方案，注明风险、验证标准和未解决问题；不要应用任何更改。
4. 根据给定标准检查结论，注明证据、假设和未核实事项。

限制：仅分析；不要修改文件或数据，也不要运行外部/破坏性检查。
按以下格式整理结果：[预期格式]。不要编造事实；如需执行未预期的副作用操作，请暂停并征求同意。
```
