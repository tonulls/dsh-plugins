# `/ecc-defi-amm-security`

Reviews Solidity AMMs, liquidity pools, and swap flows for reentrancy, CEI, oracle manipulation, slippage, admin controls, and integer arithmetic risks.

## Simple Request

```text
/ecc-defi-amm-security Conduct a security review of the swap function in this Solidity AMM; do not modify files.
```

## Template Request

```text
/ecc-defi-amm-security
Contract/snippet: [path or code]
Solidity version and dependencies: [data]
AMM/pool type: [description]
Trust boundaries and roles: [description]
Analysis only: do not modify files, run transactions, or interact with the network.
```

## Detailed Request

```text
/ecc-defi-amm-security Perform a static audit of the supplied Solidity AMM contracts. Do not modify files; do not exploit vulnerabilities, run transactions, deploy, or perform network actions. Trace external calls and state flows; check reentrancy and CEI order, donation/inflation attacks, oracle assumptions, slippage calculations, rounding/overflow, liquidity constraints, and administrative privileges. For each finding, provide exact location, exploitation prerequisites, impact, severity, and safe recommendation; distinguish confirmed defects from hypotheses. Do not provide instructions for stealing funds. End with prioritized findings, audit scope, and unverified assumptions.
```
