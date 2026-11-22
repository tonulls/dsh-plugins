# `ecc-nuxt4-patterns`

**命令：** `/ecc-nuxt4-patterns`

**用途：**Nuxt 4 实践：安全 hydration、性能、route rules、延迟加载，以及通过 `useFetch` 和 `useAsyncData` 安全地进行 SSR 数据获取。

## 提示词

### 1. 简短请求

> /ecc-nuxt4-patterns 找出此 Nuxt 4 组件 hydration mismatch 的原因，并提出 SSR 安全修复方案：[代码/错误]。

### 2. 带上下文的模板

> /ecc-nuxt4-patterns Nuxt/Vue 版本：[版本]；路由：[路径]；渲染：[SSR/CSR/静态生成]；数据来源：[API/本地数据]。页面代码和错误信息：[粘贴]。检查服务端与客户端首次渲染差异、`useFetch`/`useAsyncData` 的适用性、键/缓存及延迟加载可能性。不要假设配置未证实的行为。

### 3. 详细请求

> /ecc-nuxt4-patterns 审查 Nuxt 4 页面[路由/用途]，重点关注[hydration/SSR 请求/性能/route rules]。1) 研究实现和路由配置；标明服务端和客户端渲染路径，以及可能导致结果不同的位置（时间、随机值、window、用户数据）。2) 对于数据获取，将当前代码与 `useFetch` 和 `useAsyncData` 对比：SSR 结果传递、键、重复请求和错误处理；仅在实际背景范围内判断。3) 评估延迟加载和 route rules；不要改变路由语义，也不要在无测量时假定性能收益。4) 提出最小修复和针对服务端 HTML 与客户端 hydration 的检查。不要部署或安装软件包。格式：按优先级排列并附文件/行号的发现、原因说明、建议 diff 概念和可验证标准。
