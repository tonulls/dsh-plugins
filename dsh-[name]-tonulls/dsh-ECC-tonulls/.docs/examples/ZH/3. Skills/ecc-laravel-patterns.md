# `ecc-laravel-patterns`

**命令：** `/ecc-laravel-patterns`

**用途：**设计和审查生产级 Laravel 应用：路由与控制器、Eloquent、服务层、队列、事件、缓存和 API resources。

## 提示词

### 1. 简短请求

> /ecc-laravel-patterns 检查此 Laravel 控制器及其 Eloquent 查询：找出具体的结构或性能问题并提出最小修复方案。暂时只做分析。

### 2. 带占位符的模板

> /ecc-laravel-patterns 需要为 Laravel 模块[路径/领域]实现[场景]。当前使用[模型、控制器、服务]，限制：[兼容性/事务/负载]。根据仓库架构审查方案，检查路由、验证、Eloquent 和 API resources。先列出计划和涉及文件；仅在此范围内修改代码，不要安装依赖。

### 3. 详细分步请求

> /ecc-laravel-patterns 分析 Laravel 功能[描述]在[模块]中的实现。1) 找出当前路由、控制器、模型和既定服务层。2) 追踪验证、授权、Eloquent 关系加载及响应序列化。3) 仅在代码有证据时指出 N+1、隐式副作用、事务及缓存风险。4) 提出目标结构和验收标准。格式：先列附文件和行号的发现，再列更改计划和问题。未经我同意，不要修改任何内容；不要安装软件包或访问网络。
