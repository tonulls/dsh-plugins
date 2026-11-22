# `/ecc-evm-token-decimals`

**命令：** `/ecc-evm-token-decimals`

**用途：**预防 EVM 网络中的隐蔽小数位错误：运行时获取 decimals、按网络缓存、处理 bridged token 精度差异，以及为机器人、仪表板和 DeFi 工具进行安全标准化。适用于跨 EVM 网络处理代币金额，或余额、价格、转账出现数量级错误时。

## 提示词

### 1. 简短请求

> /ecc-evm-token-decimals 检查代币金额显示错误的原因。

### 2. 带上下文的模板

> /ecc-evm-token-decimals 网络：[chain]，代币：[地址/符号]，观察到的金额：[值]。分析 decimals、按网络缓存和标准化；不要发起交易。

### 3. 详细请求

> /ecc-evm-token-decimals 分析文件/函数 [路径/函数] 中对网络[列表]上代币[地址]金额的计算。检查运行时 decimals、bridged precision 和缓存键；未经许可，不要访问网络或发起交易。返回原因、安全修复建议和测试用例。
