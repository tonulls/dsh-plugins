# `/ecc-defi-amm-security`

检查 Solidity AMM、流动性池和 swap 流程中的重入、CEI、预言机操纵、slippage、管理员控制和整数运算风险。

## 简单请求

```text
/ecc-defi-amm-security 对此 Solidity AMM 的 swap 函数进行安全审查；不要修改文件。
```

## 模板请求

```text
/ecc-defi-amm-security
合约/片段：[路径或代码]
Solidity 版本和依赖：[信息]
AMM/池类型：[描述]
信任边界和角色：[描述]
只做分析：不要修改文件、运行交易或与网络交互。
```

## 详细请求

```text
/ecc-defi-amm-security
对提供的 Solidity AMM 合约执行静态审计。不要修改文件，也不要进行漏洞利用、交易、部署或网络操作。追踪外部调用和状态流，检查重入及 CEI 顺序、捐赠/通胀攻击、预言机假设、slippage 计算、舍入/溢出、流动性限制和管理权限。对每项发现标明准确位置、利用前提、影响、严重程度和安全建议；区分已确认缺陷与假设。不要提供盗取资金的指引。最后按优先级列出发现、检查范围和未经验证的假设。
```
