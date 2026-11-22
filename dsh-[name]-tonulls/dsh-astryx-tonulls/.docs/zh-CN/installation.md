# 安装与维护

每个 profile 只能安装一个语言版本；所有版本共用 Cordis plugin id `astryx-tonulls`。

## 安装

以下示例将简体中文版本安装到 `web` profile：

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-astryx-tonulls/packages/dsh-astryx-tonulls-zh'
```

俄文或英文版本请将 package path 改为 `dsh-astryx-tonulls-ru` 或 `dsh-astryx-tonulls-en`。随后运行 `dsh web` 或重启当前 profile。

## 验证

```sh
dsh --version
dsh plugin --profile web list
dsh --profile web --dump-config
```

请在列表中确认 `dsh-astryx-tonulls-zh`，并在配置中确认 `astryx-tonulls` Cordis row。`active` 状态只确认 plugin 已激活，不代表已验证视觉输出。从 DSH 面向用户的技能目录中加载 `astryx`，以确认说明可用。

## 更新与卸载

```sh
dsh plugin --profile web update dsh-astryx-tonulls-zh
dsh plugin --profile web remove dsh-astryx-tonulls-zh
```

请替换为实际安装的软件包名称和 profile。从 profile 移除 bundle 不会删除本地 checkout。

## Workspace 检查

在仓库根目录运行 `npm test` 和 `npm run check:variants`。软件包没有 install/build scripts，也不会安装依赖。
