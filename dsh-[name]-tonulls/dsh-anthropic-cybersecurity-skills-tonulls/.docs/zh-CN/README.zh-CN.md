# Anthropic Cybersecurity Skills for DeepSeek Harness（DSH）

[Русский](../../README.md) | [English](../en/README.en.md) | **简体中文**

## 说明

此包提供两项防御性技能，用于分析用户提供的 Web 服务器和 API 网关访问日志，并标记需要进一步核查的可疑活动。技能自动选择默认关闭，可按 Agent 单独设置。

## 安装

安装到 `web` 配置。可按需替换为自己的配置名称。

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-anthropic-cybersecurity-skills-tonulls/packages/dsh-anthropic-cybersecurity-skills-tonulls'
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
```

```sh
dsh plugin --profile web list
```

```sh
dsh --profile web --dump-config
```

## 使用

使用以下命令控制当前 Agent 的技能自动选择。

```text
/dsh-anthropic-cybersecurity-skills-tonulls on
```

```text
/dsh-anthropic-cybersecurity-skills-tonulls off
```

```text
/anthropic-cybersecurity-api-gateway-log-triage
/anthropic-cybersecurity-web-access-log-triage
```

## 更新

```sh
dsh plugin --profile web update dsh-anthropic-cybersecurity-skills-tonulls
```

## 重启

更新后重启 DSH 配置。

## 停止

```text
/dsh-anthropic-cybersecurity-skills-tonulls off
```

使用上面的命令关闭当前 Agent 的技能自动选择。在终端按 `Ctrl+C` 停止 DSH Web。

## 卸载

```sh
dsh plugin --profile web remove dsh-anthropic-cybersecurity-skills-tonulls
```

## 文档

- [原始项目](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)
- [组件来源及核对记录（俄语）](../ru/upstream.md)
- [文档索引](README.md)
- [上游来源记录](../../packages/dsh-anthropic-cybersecurity-skills-tonulls/UPSTREAM.json)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## 捐赠

🔹EVM:      ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC:      ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON:     ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA:   ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## 致谢与许可证

感谢原始项目作者和 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 的开发者。

许可证及署名 — [LICENSE](../../packages/dsh-anthropic-cybersecurity-skills-tonulls/LICENSE) · [NOTICE.md](../../packages/dsh-anthropic-cybersecurity-skills-tonulls/NOTICE.md).

🛠️ 使用 Codex 修改
