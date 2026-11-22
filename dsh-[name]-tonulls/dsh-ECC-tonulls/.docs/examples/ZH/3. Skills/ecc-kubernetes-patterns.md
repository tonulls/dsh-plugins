# `ecc-kubernetes-patterns`

**命令：** `/ecc-kubernetes-patterns`

帮助设计和分析 Kubernetes 清单、资源、RBAC、probes、自动扩缩容和配置。

### 简短请求
```text
/ecc-kubernetes-patterns 检查此 Deployment：[清单]。找出 probes 和资源限制的风险。
```

### 模板请求
```text
/ecc-kubernetes-patterns 分析[环境]中[服务]的清单。负载[描述]，可用性要求[要求]，资源限制[数值]。提出安全的 probes、RBAC 和扩缩容设置。
```

### 详细请求
```text
/ecc-kubernetes-patterns 对[环境]中附带的 Kubernetes 清单进行静态分析。检查 requests/limits、startup/readiness/liveness probes、最小权限 RBAC、自动扩缩容及 ConfigMap/Secret 处理。区分已确认的问题和假设，以片段形式提出最小修复。不要将任何内容应用到集群，不要运行 kubectl 或修改文件。报告注明优先级、证据和建议。
```
