# DSH Humanizer

[Русский](../../README.md) | [English](../en/README.project.md) | **简体中文**

## 说明

修改模板化表达，使文字更自然，同时保留原意和已证实的事实。

## 安装

安装到 `web` 配置。可按需替换为自己的配置名称。

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-humanizer-tonulls/packages/dsh-humanizer-tonulls-zh'
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
/dsh-humanizer-tonulls on
/dsh-humanizer-tonulls off
```

直接调用技能 — `/humanizer`.

## 更新

```sh
dsh plugin --profile web update dsh-humanizer-tonulls-zh
```

## 重启

更新后重启 DSH 配置。

## 停止

```text
/dsh-humanizer-tonulls off
```

使用上面的命令关闭当前 Agent 的技能自动选择。在终端按 `Ctrl+C` 停止 DSH Web。

## 卸载

```sh
dsh plugin --profile web remove dsh-humanizer-tonulls-zh
```

## 文档

- [原始项目](https://github.com/blader/humanizer)
- [组件来源及核对记录（俄语）](../ru/upstream.md)
- [文档索引](README.md)
- [上游来源记录](../../packages/dsh-humanizer-tonulls-zh/UPSTREAM.json)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## 致谢与许可证

感谢原始项目作者和 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 的开发者。

许可证及署名 — [LICENSES.md](../../packages/dsh-humanizer-tonulls-zh/LICENSES.md).

🛠️ 使用 Codex 修改
