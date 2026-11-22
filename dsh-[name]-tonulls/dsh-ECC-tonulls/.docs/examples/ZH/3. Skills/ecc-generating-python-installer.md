# `ecc-generating-python-installer`

**命令：** `/ecc-generating-python-installer`

**用途：**为 Windows 创建商业级 Python 安装程序：使用 Nuitka 极致编译、缩小 dist、分析 DLL 体积，并通过 Inno Setup 打包，从而实现体积更小、启动更快的安装程序。适用于将 Python 应用发布为最小化且启动快速的 Windows 安装程序；不适用于简单地将脚本转换为 exe。触发场景：Nuitka 极致优化、商业 Python 打包、Python 极致编译、缩小 dist、DLL 分析、最小安装程序、快速启动和商业化打包风格。

## 提示词

### 1. 简短请求

> /ecc-generating-python-installer 评估 Python 应用最小化 Windows 安装程序的计划。

### 2. 带上下文的模板

> /ecc-generating-python-installer 应用：[描述]，目标 Windows：[版本]，体积/启动限制：[数值]。评估 Nuitka、DLL 和 Inno Setup；不要安装工具。

### 3. 详细请求

> /ecc-generating-python-installer 制定使用 Nuitka 和 Inno Setup 将[应用]打包成精简 Windows 安装程序的计划。分步评估依赖/DLL、dist 大小、启动时间和结果验证。未经我同意，不要运行构建、安装软件包或下载内容。提供可测量的标准和风险。
