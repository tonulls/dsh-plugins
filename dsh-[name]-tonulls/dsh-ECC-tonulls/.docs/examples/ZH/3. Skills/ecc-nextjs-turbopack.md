# `ecc-nextjs-turbopack`

**命令：** `/ecc-nextjs-turbopack`

**用途：**Next.js 16+ 和 Turbopack 建议：增量构建、文件缓存、dev/HMR 启动、Turbopack 与 webpack 选择，以及从 `middleware.ts` 迁移至 `proxy.ts`。

## 提示词

### 1. 简短请求

> /ecc-nextjs-turbopack 为什么我的 Next.js [版本] dev/HMR 启动慢？分析附带日志，提出不修改项目的检查方式。

### 2. 带上下文的模板

> /ecc-nextjs-turbopack Next.js：[版本]；包管理器：[名称]；bundler：[Turbopack/webpack]；操作系统：[OS]；项目大小：[大致规模]；症状：[启动/HMR/构建]。启动命令：[命令]，日志/测量：[粘贴]。将可能原因与缓存、增量编译和 bundler 配置对照；列出最小检查和选择方案的权衡。

### 3. 详细请求

> /ecc-nextjs-turbopack 分析 Next.js [版本；如低于 16，必须注明] 的问题：[症状或目标]。1) 根据 package.json、配置和日志确认实际使用的 bundler 和运行模式；不要假设该版本支持所需行为。2) 对启动/HMR 缓慢问题提出可测量假设、验证方式和预期观察；区分文件缓存影响与其他原因。3) 若需在 Turbopack 和 webpack 间选择，对比限制、兼容性和决策标准；没有测量时不要承诺提速。4) 如果涉及 middleware，请针对当前版本核查 `middleware.ts` → `proxy.ts` 重命名迁移背景，并列出潜在更改。不要编辑文件或执行网络/部署操作。输出诊断、假设表和包含成功标准的安全测量计划。
