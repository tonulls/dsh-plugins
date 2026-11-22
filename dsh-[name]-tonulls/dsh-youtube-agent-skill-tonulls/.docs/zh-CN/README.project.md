# DSH YouTube Agent Skills

[Русский](../../README.md) · [English](../en/README.project.md) · **简体中文**

## 说明

此技能包将 [YouTube Agent Skill](https://github.com/Jakeschincariol/youtube-agent-skill) 的七项提示词技能适配到 DSH，用于视频策划、脚本编写、搜索优化和内容审核。技能根据你提供的信息协助准备频道素材。

## 安装

请先安装 DSH 并准备一个配置。示例使用 `web` 配置，可按需替换为自己的配置名称。

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-youtube-agent-skill-tonulls/packages/dsh-youtube-agent-skill-tonulls-zh'
```

## 启动

启动已安装此包的 DSH 配置。

```sh
dsh web
```

## 验证

检查 DSH 版本、已安装的插件和配置内容。

```sh
dsh --version
dsh plugin --profile web list
dsh --profile web --dump-config
```

## 使用

每个 Agent 默认关闭技能自动选择。使用以下命令开启或关闭。

```text
/dsh-youtube-agent-skill-tonulls on
/dsh-youtube-agent-skill-tonulls off
```

命令仅作用于当前 Agent。关闭自动选择后，仍可直接调用 `/youtube-agent-skill`。

## 更新

更新 `web` 配置中的包。

```sh
dsh plugin --profile web update dsh-youtube-agent-skill-tonulls-zh
```

## 重启

更新后重启 DSH 配置。

## 停止

关闭当前 Agent 的技能自动选择。

```text
/dsh-youtube-agent-skill-tonulls off
```

在终端按 `Ctrl+C` 停止 DSH。

## 卸载

从 `web` 配置中卸载此包。

```sh
dsh plugin --profile web remove dsh-youtube-agent-skill-tonulls-zh
```

## 文档

- [上游来源及核对记录（俄语）](../ru/upstream.md)

- [俄语索引](../ru/README.md) · [英语索引](../en/README.md) · [中文索引](../zh-CN/README.md)
- [上游项目与许可证](../../packages/dsh-youtube-agent-skill-tonulls-zh/LICENSES.md) · [来源记录](../../packages/dsh-youtube-agent-skill-tonulls-zh/UPSTREAM.json)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## 捐赠

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## 致谢与许可证

感谢 [YouTube Agent Skill](https://github.com/Jakeschincariol/youtube-agent-skill) 的作者提供原始材料，也感谢 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 的开发者提供平台。此包附带原始许可证和声明，并适配了 DSH 的安装方式。

🛠️ 使用 Codex 修改
