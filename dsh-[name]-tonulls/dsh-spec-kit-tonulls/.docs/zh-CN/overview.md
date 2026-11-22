# 面向 DeepSeek Harness (DSH) 的 DSH Spec Kit

[Русский](../../README.md) | [English](../en/overview.md) | **简体中文**

## 说明

将 GitHub Spec Kit 适配到 DSH，指导从需求、规范到实现和验证的过程。

## 安装

安装到 `web` 配置。可按需替换为自己的配置名称。

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-spec-kit-tonulls/packages/dsh-spec-kit-tonulls-zh'
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

使用以下命令控制当前 Agent 的技能自动选择。

```text
/dsh-spec-kit-tonulls on
/spec-kit specify Describe the user-visible outcome and constraints for this feature.
```

## 更新

```sh
dsh plugin --profile web update dsh-spec-kit-tonulls-zh
```

## 重启

更新后重启 DSH 配置。

## 停止

```text
/dsh-spec-kit-tonulls off
```

使用上面的命令关闭当前 Agent 的技能自动选择。在终端按 `Ctrl+C` 停止 DSH Web。

## 卸载

```sh
dsh plugin --profile web remove dsh-spec-kit-tonulls-zh
```

## 文档

- [原始项目](https://github.com/github/spec-kit)
- [组件来源及核对记录（俄语）](../ru/upstream.md)
- [文档索引](README.md)
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

许可证及署名 — [LICENSE](../../packages/dsh-spec-kit-tonulls-zh/LICENSE) · [NOTICE.md](../../packages/dsh-spec-kit-tonulls-zh/NOTICE.md).

🛠️ 使用 Codex 修改
