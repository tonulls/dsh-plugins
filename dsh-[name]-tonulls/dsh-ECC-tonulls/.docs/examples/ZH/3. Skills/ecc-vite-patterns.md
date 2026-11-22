# `/ecc-vite-patterns`

提供 Vite 实践建议：配置和插件、HMR、环境变量、proxy、SSR、library mode、依赖预构建和构建优化。

## 简单请求
```text
/ecc-vite-patterns 分析此 Vite config/HMR 问题的原因并提出诊断方案：[描述]
```
## 模板请求
```text
/ecc-vite-patterns
Vite 版本和技术栈：[信息]
任务/错误：[描述]
vite.config.ts 及相关片段：[代码]
提出兼容的方案和验证方式；未经同意，不要修改配置或安装插件。
```
## 详细请求
```text
/ecc-vite-patterns
分析 Vite 问题：[HMR/proxy/SSR/library mode/build]。步骤：研究现有配置和版本；识别相关设置及相互作用；提出最小方案；考虑环境变量的机密性以及 dev/build 的区别；制定预期结果和回归检查。不要输出机密值、访问网络或未经单独许可添加/安装插件。计划获批前不要修改文件。报告说明原因、建议的配置片段、兼容性、检查方式和风险。
```
