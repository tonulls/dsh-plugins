# DSH 最近 30 天 — 仅限网页

[Русский](../../README.md) | [English](../en/README.en.md) | **简体中文**

## 说明

此 DSH 技能基于 [last30days-skill](https://github.com/mvanhorn/last30days-skill)，使用当前会话中的搜索和网页读取工具，研究过去 30 天的公开网络信息。

## 安装

安装到 `web` 配置。可按需替换为自己的配置名称。

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-last30days-tonulls/packages/dsh-last30days-tonulls'
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
/dsh-last30days on
```

开启自动选择后，请 Agent 调研某个主题在过去 30 天内的进展。关闭自动选择时，也可以直接调用 `/last30days`。

## 更新

```sh
dsh plugin --profile web update dsh-last30days-tonulls
```

## 重启

更新后重启 DSH 配置。

## 停止

```text
/dsh-last30days off
```

使用上面的命令关闭当前 Agent 的技能自动选择。在终端按 `Ctrl+C` 停止 DSH Web。

## 卸载

```sh
dsh plugin --profile web remove dsh-last30days-tonulls
```

## 文档

- [组件来源及核对记录（俄语）](../ru/upstream.md)
- [文档索引](README.md)
- [上游来源记录](../../packages/dsh-last30days-tonulls/UPSTREAM.json)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## 捐赠

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## 致谢与许可证

感谢 [last30days-skill](https://github.com/mvanhorn/last30days-skill) 的作者提供原始技能，以及 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 的开发者提供平台。原始项目采用 MIT 许可证。包中包含[许可证](../../packages/dsh-last30days-tonulls/LICENSE)和[署名声明](../../packages/dsh-last30days-tonulls/NOTICE.md)。

🛠️ 使用 Codex 修改
