# DSH Tonulls bundle

[Русский](../../README.md) | [English](../en/README.md) | **简体中文**

## 简介

`dsh-tonulls` 整合 37 个面向开发、设计、研究、安全和工具使用的技能项目。从 GitHub 安装 bundle，并通过一条命令为当前 Agent 管理技能自动选择。

## 安装

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-tonulls/packages/dsh-tonulls-zh'
```

## 启动

```sh
dsh web
```

## 检查

```sh
dsh plugin --profile web list
```

## 使用

```text
/dsh-tonulls on
/dsh-tonulls off
```

`on` 开启技能自动选择，`off` 关闭。系统会根据当前 Agent 的任务自动选择技能。斜杠命令菜单中只显示此技能包的 `/dsh-tonulls` 命令。

## 更新

```sh
dsh plugin --profile web update dsh-tonulls-zh
```

## 重启

按 `Ctrl+C` 停止 DSH Web，再重新启动该配置。

## 停止

使用 `/dsh-tonulls off` 为当前 Agent 关闭自动选择。按 `Ctrl+C` 停止 DSH Web。

## 卸载

```sh
dsh plugin --profile web remove dsh-tonulls-zh
```

## 文档

- [组件来源（俄语）](../ru/upstream.md)
- [项目目录](../../../.docs/zh-CN/projects.md)

## 捐赠

🔹EVM:      ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC:      ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON:     ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA:   ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## 致谢与许可证

感谢 [Agency Agents](https://github.com/msitarzewski/agency-agents) 的作者、[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 的开发者，以及其他收录项目的作者。[技能包](../../packages/dsh-tonulls-zh/LICENSES.md)包含源材料和署名声明。

🛠️ 使用 Codex 修改
