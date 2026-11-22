# dsh-taste-skill-tonulls-zh

Taste Skill 的简体中文 DSH 插件版本。技能说明和命令回复使用简体中文；upstream 技能正文为英文。

## 生命周期

示例使用 `web` profile。每个 profile 只安装一个语言版本。

**安装：**

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-taste-skill-tonulls/packages/dsh-taste-skill-tonulls-zh'
```

**安装或更新后启动/重启 profile：**

```sh
dsh web
```

如果当前会话未加载更改，请在终端按 `Ctrl+C` 停止，再运行 `dsh web`。

**验证：**运行 `dsh --version`、`dsh --profile web --dump-config` 和 `dsh plugin --profile web list`。

**使用：**在 DSH 中运行 `/dsh-taste-skill-tonulls on`，然后调用 `/design-taste-frontend` 或提交相关请求。Skill 不是独立进程，由当前 Agent 执行。`/dsh-taste-skill-tonulls off` 仅对当前 Agent 停用它。

**更新已安装的 package：**

```sh
dsh plugin --profile web update dsh-taste-skill-tonulls-zh
```

此命令会将更新操作转交给 profile 中的 pnpm。必要时在更新后重启 profile。

**停止宿主：**在运行 `dsh web` 的终端按 `Ctrl+C`；这不会从 profile 移除 package。

**从 profile 删除 package：**

```sh
dsh plugin --profile web remove dsh-taste-skill-tonulls-zh
```

停用 Skill、停止 DSH 和删除 package 是不同操作。完整说明见[主 README](../../README.md)。

🛠️ 使用 Codex 修改
