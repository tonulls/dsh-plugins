# `/ecc-docker-patterns`

帮助创建和检查 Docker/Compose 配置、容器安全、网络和卷，以及 CLI 安装器的测试 harness。

## 简单请求

```text
/ecc-docker-patterns 检查我的 Python 服务 Dockerfile 是否权限过高或镜像过大。
```

## 模板请求

```text
/ecc-docker-patterns
Docker/Compose 文件：[路径或内容]
目标：[本地开发/生产/安装器测试]
环境：[操作系统和架构]
网络、卷和用户限制：[描述]
只做审查；不要构建/运行容器或修改文件。
```

## 详细请求

```text
/ecc-docker-patterns
为任务[描述]分析[Dockerfile/Compose/安装器 harness]。不要修改文件或运行容器。检查最小权限和用户、层及可复现性、机密信息（不要显示其值）、网络、卷和访问边界、health checks 及服务交互。对于安装器 harness，注明实际覆盖的操作系统，以及哪些情况需要原生 macOS/Windows 验证；不要把模拟测试说成原生测试。提出具体安全改进和验证方法；不要安装软件包或进行网络操作。结果包括：附路径的发现、严重程度、建议更改和平台验证矩阵。
```
