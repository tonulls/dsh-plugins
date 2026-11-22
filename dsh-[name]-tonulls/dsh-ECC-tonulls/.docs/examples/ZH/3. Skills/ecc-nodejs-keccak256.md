# `ecc-nodejs-keccak256`

**命令：** `/ecc-nodejs-keccak256`

**用途：**避免 JavaScript/TypeScript 中的 Ethereum 哈希错误：Node.js 的 `sha3-256` 是 NIST SHA-3，并非 Ethereum Keccak-256；这一区别对 selector、签名、storage slots 和地址派生至关重要。

## 提示词

### 1. 简短请求

> /ecc-nodejs-keccak256 检查此代码是否误用 NIST SHA3 代替 Ethereum Keccak-256：[片段]。说明后果和正确验证方法。

### 2. 带上下文的模板

> /ecc-nodejs-keccak256 环境：[Node.js/TS、版本]；哈希库：[名称/版本]；输入字节和编码：[描述]；预期结果：[hex/值]；实际结果：[值]。确定 SHA3-256 和 Keccak-256 可能混淆的位置。检查输入编码和输出格式；不要替换算法，也不要编造预期哈希。

### 3. 详细请求

> /ecc-nodejs-keccak256 诊断附件 JavaScript/TypeScript 中[selector/signature/storage slot/address derivation]的 Ethereum 哈希错误。1) 追踪准确输入字节的构造：文本编码、前缀、padding 和序列化。2) 确认 API 实际使用的算法；单独核查 `sha3-256` 是否为 NIST SHA-3，而不是 Keccak-256。3) 检查该结果是否适用于所述 Ethereum 用例，以及转换为 selector/slot/address 的规则；没有依据时不要混淆 Keccak 与 EIP-55 或 ABI 规则。4) 提出库调用方式和使用已知向量的独立校验测试，但不要编造测试向量。不要修改文件或安装依赖。格式：发现原因、字节 → 算法 → 结果链路、最小建议及测试标准。
