# 面向 DeepSeek Harness (DSH) 的 Agency Agents

[Русский](../../README.md) | [English](../en/README.md) | **简体中文**

## 说明

[Agency Agents](https://github.com/msitarzewski/agency-agents) 技能包包含 283 个专业角色。每个角色以 `agency-<slug>` 技能按需加载。DSH 适配版包含 `agency-vulnerability-remediation`，用于审查本地代码、修复已确认的问题并测试改动。

## 安装

安装到 `web` 配置。可按需替换为自己的配置名称。

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-agency-agents-tonulls/packages/dsh-agency-agents-tonulls-zh'
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
/dsh-agency-agents-tonulls on
```

模型会根据请求选择角色。用户菜单中不提供单独的 `/agency-<slug>` 命令。

## 更新

```sh
dsh plugin --profile web update dsh-agency-agents-tonulls-zh
```

## 重启

更新后重启 DSH 配置。

## 停止

```text
/dsh-agency-agents-tonulls off
```

使用上面的命令关闭当前 Agent 的技能自动选择。在终端按 `Ctrl+C` 停止 DSH Web。

## 卸载

```sh
dsh plugin --profile web remove dsh-agency-agents-tonulls-zh
```

## 文档

- [原始项目](https://github.com/msitarzewski/agency-agents)
- [组件来源及核对记录（俄语）](../ru/upstream.md)
- [上游来源记录](../../packages/dsh-agency-agents-tonulls-zh/UPSTREAM.json)
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

许可证及署名 — [LICENSES.md](../../packages/dsh-agency-agents-tonulls-zh/LICENSES.md).

🛠️ 使用 Codex 修改
