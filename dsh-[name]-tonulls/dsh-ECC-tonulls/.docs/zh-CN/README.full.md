# ECC for DeepSeek Harness (DSH)

[Русский](../../README.md) | [English](../en/README.full.md) | **简体中文**

## 说明

此 DSH 版本基于 [Everything Claude Code (ECC)](https://github.com/affaan-m/ECC)，包含 71 个 Agent 角色、236 项技能和 3 条命令。可以安装整个包，也可以单独选择组件。

## 安装

安装到 `web` 配置。可按需替换为自己的配置名称。

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-ECC-tonulls/packages/dsh-ecc-tonulls-zh'
```

## 启动

启动已安装此包的 DSH 配置。

```sh
dsh web
```

## 验证

检查 DSH 配置。

```sh
dsh plugin --profile web list
```

## 使用

默认关闭技能自动选择。使用以下命令控制当前 Agent 的技能自动选择。

```text
/dsh-ecc-tonulls on
/dsh-ecc-tonulls off
```

可使用 `ecc-remotion-video-creation` 创建 Remotion 合成并渲染 MP4，使用 `ecc-manim-video` 制作讲解视频，或使用 `ecc-video-editing` 进行本地剪辑。`ecc-videodb` 使用单独配置的 VideoDB 连接。

## 更新

```sh
dsh plugin --profile web update dsh-ecc-tonulls-zh
```

## 重启

更新后重启 DSH 配置。

## 停止

使用 `/dsh-ecc-tonulls off` 关闭自动选择。在终端按 `Ctrl+C` 停止 DSH Web。

## 卸载

```sh
dsh plugin --profile web remove dsh-ecc-tonulls-zh
```

## 文档

- [原始项目](https://github.com/affaan-m/ECC)
- [组件来源及核对记录（俄语）](../ru/upstream.md)
- [文档索引](README.md)
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

许可证及署名 — [LICENSES.md](../../packages/dsh-ecc-tonulls-zh/LICENSES.md).

🛠️ 使用 Codex 修改
