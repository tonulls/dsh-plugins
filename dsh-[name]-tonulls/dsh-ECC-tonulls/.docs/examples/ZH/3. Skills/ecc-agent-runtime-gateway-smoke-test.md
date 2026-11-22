# `/ecc-agent-runtime-gateway-smoke-test`

使用无工具任务检查本地 Agent API、临时 gateway 隧道和远程沙箱 callback 的连通性，然后恢复应用原始连接。

## 提示词示例

### 1. 简短请求
```text
/ecc-agent-runtime-gateway-smoke-test 制定安全的 smoke 检查计划，验证本地 API、临时 gateway 和沙箱 callback。暂时不要连接或运行任何内容。
```

### 2. 模板请求
```text
/ecc-agent-runtime-gateway-smoke-test 检查[本地环境]中的连通性：API [地址/检查方式]，临时 gateway [可用机制]，callback [沙箱]。只使用无工具任务。记录原始连接；未经同意，不要向外暴露隧道或更改配置。请提供步骤、成功标准和恢复方法。
```

### 3. 详细请求
```text
/ecc-agent-runtime-gateway-smoke-test 对“本地 Agent API → 临时 gateway 隧道 → 远程沙箱 callback”链路执行 smoke 检查。1) 操作前记录当前连接配置及准确的恢复方法。2) 检查是否存在获准使用的本地 API 和临时隧道机制；未经我同意，不要安装软件或访问网络。3) 只使用不需要调用工具的任务，并检查是否收到 callback。4) 不要发送真实数据，也不要让隧道保持活动状态。5) 恢复原始连接，并报告是否确认恢复成功。报告格式：前置条件、每项检查结果、错误/未核查环节、恢复后的状态。如果需要外部访问或不安全更改，请暂停并征求许可。
```
