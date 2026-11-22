# `ecc-llm-trading-agent-security`

**命令：** `/ecc-llm-trading-agent-security`

**用途：**审查具有钱包或交易权限的自主交易 Agent 安全性：prompt injection、支出限额、发送前模拟、circuit breakers、MEV 防护和密钥管理。

## 提示词

### 1. 简短请求

> /ecc-llm-trading-agent-security 对此具有交易权限的 Agent 进行只读安全分析：检查 prompt injection、限额、发送前模拟和密钥保护。不要执行任何操作。

### 2. 带占位符的模板

> /ecc-llm-trading-agent-security Agent [用途]具有[钱包/交易类型/限额]权限。研究[代码/架构]，追踪不可信输入到签名和发送的路径。根据现有证据评估 prompt injection、支出限额、pre-send simulation、circuit breaker、MEV 和密钥存储。结果包括：按优先级排列的风险、文件/行号、影响和建议。只做分析；不要进行真实交易或暴露机密。

### 3. 详细分步请求

> /ecc-llm-trading-agent-security 对具有[权限描述]的自主交易 Agent [仓库/组件]执行防御性审计。1) 构建控制流：不可信消息/市场数据 → 模型决策 → 工具调用 → 交易构建、模拟、签名和发送。2) 检查 prompt injection 是否可能转化为操作，以及指令与数据是否隔离。3) 检查资金和操作硬限制、危险操作的独立审批、circuit breaker，以及故障时的安全停止机制。4) 核查签名/发送前是否执行模拟，以及如何处理 slippage、nonce 和 MEV 风险；没有证据时不要假设机制不存在。5) 检查密钥访问边界及日志/上下文中是否泄露机密。输出：威胁模型、附证据和严重程度的发现、防护控制及安全修复计划。不要泄露机密、签名或发送交易、执行攻击性测试、修改代码、访问网络或安装工具。
