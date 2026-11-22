# `/ecc-browser-qa`

通过可用的 browser automation MCP（claude-in-chrome、Playwright 或 Puppeteer）自动检查已部署界面：控制台错误、Core Web Vitals、表单和身份验证场景、三个宽度下的视觉回归、axe-core 审计，并给出 SHIP / DO-NOT-SHIP 结论。

## 简短请求

```text
/ecc-browser-qa 检查 staging 结账页面：主要错误、表单、无障碍性和响应式布局；最后给出 SHIP 或 DO-NOT-SHIP 结论。
```

## 模板

```text
/ecc-browser-qa 对更改[功能/PR]的已部署版本[URL/环境]进行浏览器 QA。使用可用的 MCP [工具（如已知）]。检查[场景，包括表单/auth]、控制台、Core Web Vitals、三个宽度[数值]和 axe-core。不要对真实数据执行危险操作，也不要修改生产环境。
```

## 分步请求

```text
/ecc-browser-qa 检查功能[名称]在[staging/preview URL]上的表现，关联 PR [标识符]。条件：测试凭据[报告中不含机密]，安全测试数据[描述]。
1. 确认 browser automation MCP 可用，并且目标 URL 确实指向 staging/preview；否则停止并说明限制。
2. 记录控制台错误和可用的 Core Web Vitals 指标。
3. 执行商定的表单和登录/登出场景；不要提交真实付款、发送消息或更改账户。
4. 比较窄、中、宽三个 breakpoint 下的视觉结果；仅在工具支持时保存截图/链接。
5. 运行 axe-core 审计，按严重程度归类问题并提供可复现步骤。

结论：提供带状态和证据的检查表、附复现步骤的缺陷，以及明确的 SHIP / DO-NOT-SHIP 结论。不要声称执行了工具未运行的检查。未经同意，不要部署或更改环境。
```
