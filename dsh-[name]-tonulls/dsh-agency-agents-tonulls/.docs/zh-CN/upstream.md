# 上游来源与 DSH 适配

## 固定快照

- 仓库：[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)
- 提交：[`8ae6164602c95ca78828b148b9052460ee426885`](https://github.com/msitarzewski/agency-agents/commit/8ae6164602c95ca78828b148b9052460ee426885)，提交日期为 2026 年 10 月 25 日。
- Bundle 包含 18 个类别中的 283 个 Markdown 角色。`packages/dsh-agency-agents-tonulls-en/UPSTREAM.json` 记录角色清单；catalog 根据 `assets/agents/` 下的嵌套源文件生成，并同步到所有语言包。
- 上游材料采用 MIT 许可证。每个包都包含版权声明和许可证文本，见[简体中文包的 `LICENSES.md`](../../packages/dsh-agency-agents-tonulls-zh/LICENSES.md)。

上游在其 [DSH 集成指南](https://github.com/msitarzewski/agency-agents/blob/8ae6164602c95ca78828b148b9052460ee426885/integrations/dsh/README.md)中说明了如何将角色转换为 DSH skills。本项目沿用 `agency-<slug>` 命名方式，通过 DSH 插件包注册 skills，不运行上游的 `convert.sh` 或 `install.sh`。不要同时安装两种版本，否则会出现相同的 skill 名称。

提供三个安装包：`dsh-agency-agents-tonulls-ru`、`dsh-agency-agents-tonulls-en` 和 `dsh-agency-agents-tonulls-zh`。这些包只本地化控制命令的描述和响应，不会翻译角色目录。skill 名称、描述和源指令不会由这些包翻译，且大多仍为英文。包的语言不保证模型的回答语言。每个 profile 只安装一个版本。

## 适配器行为

1. catalog 记录 `agency-<slug>`、上游标题和描述、类别、Markdown 路径及来源 URL。
2. Provider 校验固定 commit、条目数量、名称唯一性、类别，并通过 allowlist 校验每个相对资源路径。
3. 仅在请求 `get` 时加载角色；上游 YAML frontmatter 不会进入指令正文。
4. 正文前后会加入文字说明，要求模型仅使用当前会话能力、不假设隐式授权，并在安全测试前确认授权范围。这些内容用于指导模型，不会从技术上阻止工具调用。
5. 通过 `userInvocable: false` 禁止用户直接调用单独角色。原生 DSH 命令 `/dsh-agency-agents-tonulls on|off` 可为当前 Agent 启用或停用模型自动选择。此控制命令是 DSH command，不是 skill。

角色正文和 skill 描述大多为英文，也可能包含其他语言。俄语是项目文档的主语言。根目录 README 的英文和简体中文译本分别位于 `.docs/en/README.md` 和 `.docs/zh-CN/README.md`。`.docs/ru/overview/README.md` 是项目详细说明和按类别整理的可供模型选择的角色索引；每个类别文件列出角色名称，而非用户 slash 命令。英文和中文 `overview.md` 是简短索引，并链接到俄语文档。各语言的 `upstream.md` 介绍来源与适配方式。本次不翻译全部 283 个角色提示词。

## 当前验证 — 2026-11-03

- `npm test` 的 12 项检查全部通过；唯一的测试文件位于 EN 包中，测试 provider，但不覆盖所有语言包的完整生命周期。`npm run check:catalog` 确认 RU、EN 和 ZH catalog 均为最新。三个软件包各包含 283 个角色文件，角色清单一致，JavaScript 文件语法检查通过。
- 语言版本更新后，尚未通过 Git URL 安装，也未在运行中的 DSH 实例中启动角色。尚未验证实际工具权限边界、副作用确认流程及 DSH 工具的强制执行。未修改 `web` profile。

## 更新上游

该快照不会自动更新。更新时应选择并审核新的完整 commit SHA，将上游转换器类别中的角色 Markdown 文件同步到三个语言包，更新 `UPSTREAM.json`，运行 `npm run build:catalog` 和 `npm test`，复核数量与 slug，并纳入最新版权声明。上游快照变更应单独审核，不要跟踪会移动的 `main` 分支。
