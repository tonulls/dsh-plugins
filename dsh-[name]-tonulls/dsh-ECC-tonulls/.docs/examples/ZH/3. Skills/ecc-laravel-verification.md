# `ecc-laravel-verification`

**命令：** `/ecc-laravel-verification`

**用途：**在合并或发布前分阶段验证 Laravel 项目：环境、lint、静态分析、测试和覆盖率、安全扫描及部署准备情况。

## 提示词

### 1. 简短请求

> /ecc-laravel-verification 为此 Laravel PR 制定只读合并前检查计划：环境、lint、分析、测试、安全和未决风险。不要运行或部署任何内容。

### 2. 带占位符的模板

> /ecc-laravel-verification 为 Laravel 项目[路径/分支]准备[合并/发布]前检查。已知命令：[命令或“从配置中查找”]，目标覆盖率[阈值/未指定]，环境限制[描述]。核查可用的 lint/static analysis/tests/security 配置，提出安全的执行顺序和 PASS/FAIL 标准。不要安装依赖或运行破坏性命令；任何影响数据或环境的检查都需事先商定。

### 3. 详细分步请求

> /ecc-laravel-verification 在不运行检查的情况下，预审 Laravel 更改[描述/PR]的就绪情况。1) 根据项目配置确定所需 PHP/Laravel 版本和本地工具是否可用；不要安装缺失工具。2) 制定有序阶段：格式化/lint、静态分析、测试及实际配置的覆盖率目标、安全检查、迁移和配置。3) 仅当仓库文件能证实时，才为每阶段列出准确命令，并注明副作用及失败时的停止条件。4) 将 deployment readiness 作为评估，而非部署许可。输出：“阶段 / 依据 / 命令 / 标准 / 风险”表格，随后列出阻碍项和缺失信息。只做分析：不要运行命令、修改文件、安装软件包、访问网络或部署。
