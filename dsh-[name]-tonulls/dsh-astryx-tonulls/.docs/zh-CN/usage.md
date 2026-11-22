# 使用 Astryx 技能

bundle 激活后，DSH skill registry 应能发现 `astryx`。请在技能目录/命令界面中选择它，或要求当前 Agent 在 React 项目中使用 Astryx。该技能会检查项目说明和版本，并指向已安装 CLI 的参考文档。

CLI 查询示例（仅在目标项目已安装 CLI 时使用）：

```sh
pnpm exec astryx --help
pnpm exec astryx manifest --json
pnpm exec astryx search <query> --json
pnpm exec astryx component <exact-selector> --json
pnpm exec astryx hook <name> --json
pnpm exec astryx docs <topic> --json
pnpm exec astryx docs tokens --json
```

首先通过已安装版本的 `--help`/`manifest` 核实可用命令和选项。这些示例不是 DSH 命令；它们由当前 Agent 在目标项目中通过已有工具执行。

该技能不会运行 CLI、安装软件包或生成代码。不要使用无 scope 的 `npx astryx`；安装官方 `@astryxdesign/cli` 需要单独的用户明确请求，并授权下载/运行该软件包。
