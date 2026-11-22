# ecc-evm-token-decimals

**Command:** `/ecc-evm-token-decimals`

**Purpose:** Prevents subtle decimal-place errors on EVM networks: runtime decimals retrieval, chain-aware caching, bridged-token precision mismatches, and safe normalization for bots, dashboards, and DeFi tools. Use when handling token amounts across EVM networks or diagnosing an order-of-magnitude error in a balance, price, or transfer.

## Prompts

### 1. Short Request
> /ecc-evm-token-decimals Check why this token amount is displayed incorrectly.

### 2. Template with Context
> /ecc-evm-token-decimals Chain: [chain], token: [address/symbol], observed amount: [value]. Analyze decimals, chain-aware caching, and normalization without transactions.

### 3. Detailed Request
> /ecc-evm-token-decimals Analyze amount calculation in [file/function] for token [address] on chains [list]. Check runtime decimals, bridged precision, and cache keys; do not make network requests or transactions without approval. Return causes, safe fix, and test cases.
