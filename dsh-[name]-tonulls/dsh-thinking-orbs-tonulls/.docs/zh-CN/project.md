# Thinking Orbs for DeepSeek Harness (DSH)

[Русский](../../README.md) | [English](../en/project.md) | **简体中文**

## 说明

帮助规划 Thinking Orbs 集成，兼顾动画、无障碍和界面行为。

## 安装

安装到 `web` 配置。可按需替换为自己的配置名称。

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-thinking-orbs-tonulls/packages/dsh-thinking-orbs-tonulls-zh'
```

## 启动

启动已安装此包的 DSH 配置。

```sh
dsh web
```

## 验证

检查 DSH 配置。

```sh
dsh --version
dsh plugin --profile web list
dsh --profile web --dump-config
```

## 使用

默认关闭技能自动选择。使用以下命令控制当前 Agent 的技能自动选择。

```text
/dsh-thinking-orbs-tonulls on
/dsh-thinking-orbs-tonulls off
```

直接调用技能 — `/thinking-orbs-integration`.

## 更新

```sh
dsh plugin --profile web update dsh-thinking-orbs-tonulls-zh
```

## 重启

更新后重启 DSH 配置。

## 停止

```text
/dsh-thinking-orbs-tonulls off
```

使用上面的命令关闭当前 Agent 的技能自动选择。在终端按 `Ctrl+C` 停止 DSH Web。

## 卸载

```sh
dsh plugin --profile web remove dsh-thinking-orbs-tonulls-zh
```

## 文档

- [原始项目](https://github.com/Jakubantalik/thinking-orbs)
- [组件来源及核对记录（俄语）](../ru/upstream.md)
- [文档索引](README.md)
- [配置指南](guide/setup.md)
- [上游来源记录](../../packages/dsh-thinking-orbs-tonulls-zh/UPSTREAM.json)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## 捐赠

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## 致谢与许可证

感谢原始项目作者和 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 的开发者。

许可证及署名 — [LICENSE](../../packages/dsh-thinking-orbs-tonulls-zh/LICENSE) · [NOTICE.md](../../packages/dsh-thinking-orbs-tonulls-zh/NOTICE.md).

🛠️ 使用 Codex 修改
