# dsh-impeccable-tonulls-zh

Impeccable 的简体中文 DSH 插件版本。插件元数据和命令回复使用简体中文；技能正文保留 upstream 语言。

## 生命周期

示例使用 `web` profile。每个 profile 只安装一个语言版本。

**安装：**

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-Impeccable-tonulls/packages/dsh-impeccable-tonulls-zh'
```

**安装或更新后启动/重启 profile：**

```sh
dsh web
```

如果运行中的会话未加载更改，请在终端按 `Ctrl+C` 停止，再次启动 `dsh web`。

**验证：**运行 `dsh --version` 和 `dsh plugin --profile web list`。

**使用：**在 DSH 中运行 `/dsh-impeccable on`，然后调用 `/impeccable` 或描述设计任务。Skill 没有独立进程，由当前 Agent 使用。`/dsh-impeccable off` 会停用技能，但不会停止 DSH 或删除 package。

**更新已安装的 package：**

```sh
dsh plugin --profile web update dsh-impeccable-tonulls-zh
```

此命令会将更新操作转交给 profile 中的 pnpm。更新后重启 profile。

**停止宿主：**在运行 `dsh web` 的终端按 `Ctrl+C`；这不会卸载 package。

**从 profile 删除：**

```sh
dsh plugin --profile web remove dsh-impeccable-tonulls-zh
```

删除会修改 profile 依赖，但不会删除本地 checkout。完整说明见[主 README](../../README.md)。

🛠️ 使用 Codex 修改
