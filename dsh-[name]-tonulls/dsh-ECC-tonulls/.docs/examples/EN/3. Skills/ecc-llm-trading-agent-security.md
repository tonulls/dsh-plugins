# ecc-llm-trading-agent-security

**Command:** `/ecc-llm-trading-agent-security`

**Purpose:** Security review of autonomous trading agents with wallet or transaction permissions: prompt injection, spending limits, pre-send simulation, circuit breakers, MEV protection, and key handling.

## Prompts

### 1. Short Request
> /ecc-llm-trading-agent-security Conduct a read-only security analysis of this transaction-enabled trading agent: check prompt injection, limits, pre-send simulation, and key protection. Do not execute anything.

### 2. Template with Placeholders
> /ecc-llm-trading-agent-security Agent [purpose] has permissions [wallet/transaction types/limits]. Study [code/architecture] and trace the path from untrusted input to signing and submission. Assess prompt injection, spending limits, pre-send simulation, circuit breakers, MEV, and key storage based on available evidence. Result: prioritized risks, file/line, impact, and recommendation. Analysis only; no real transactions or secrets.

### 3. Detailed Phased Request
> /ecc-llm-trading-agent-security Perform a defensive audit of autonomous trading agent [repository/component] with [permission description]. 1) Map control flow: untrusted messages/market data → model decision → tool calls → transaction construction, simulation, signing, and submission. 2) Check whether prompt injection can trigger actions and whether instructions are separated from data. 3) Review hard limits on funds and operations, independent approval for dangerous actions, circuit breakers, and safe failure stops. 4) Determine whether simulation occurs before signing/submission and how slippage, nonce, and MEV risks are handled; do not assume missing mechanisms exist. 5) Check key access boundaries and ensure secrets do not enter logs/context. Output: threat model, findings with evidence and severity, safeguards, and safe remediation plan. Do not reveal secrets, sign/submit transactions, perform offensive testing, change code, access the network, or install tools.
