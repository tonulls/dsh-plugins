# DSH Web Search Plugin for DeepSeek Harness (DSH)

[Русский](../../README.md) | [English](../en/project.md) | **简体中文**

## 说明

帮助评估搜索后端方案，并检查 DSH 如何使用网页搜索结果。

## 安装

安装到 `web` 配置。可按需替换为自己的配置名称。

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-web-search-plugin-tonulls/packages/dsh-web-search-plugin-tonulls-zh'
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
/dsh-web-search-plugin-tonulls on
/dsh-web-search-plugin-tonulls off
```

直接调用技能 — `/web-search-setup`.

## 更新

```sh
dsh plugin --profile web update dsh-web-search-plugin-tonulls-zh
```

## 重启

更新后重启 DSH 配置。

## 停止

```text
/dsh-web-search-plugin-tonulls off
```

使用上面的命令关闭当前 Agent 的技能自动选择。在终端按 `Ctrl+C` 停止 DSH Web。

## 卸载

```sh
dsh plugin --profile web remove dsh-web-search-plugin-tonulls-zh
```

## 文档

- [原始项目](https://github.com/deepseek-ai/dsh-web-search-plugin)
- [组件来源及核对记录（俄语）](../ru/upstream.md)
- [文档索引](README.md)
- [配置指南](guide/setup.md)
- [上游来源记录](../../packages/dsh-web-search-plugin-tonulls-zh/UPSTREAM.json)
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

许可证及署名 — [LICENSE](../../packages/dsh-web-search-plugin-tonulls-zh/LICENSE) · [NOTICE.md](../../packages/dsh-web-search-plugin-tonulls-zh/NOTICE.md).

🛠️ 使用 Codex 修改
