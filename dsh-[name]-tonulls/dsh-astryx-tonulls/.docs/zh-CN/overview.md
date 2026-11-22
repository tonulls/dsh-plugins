# 集成概览

此 DSH bundle 通过 Host service `skills.registerProvider` 注册一个打包的 `astryx` 技能。说明随包分发并已本地化；模型按需加载。三个 workspace 软件包（`-ru`、`-en`、`-zh`）共享实现，但分别包含对应翻译、patch row、技能目录、Plugin Manager 元数据和图标。

## 能力边界

此 bundle 提供说明，并允许用户和模型调用该技能；它不实现 DSH Tool，也不运行 Astryx CLI。用户/Agent 通过当前 DSH Agent 已有的工具执行 CLI 命令。目标项目必须自行安装 CLI；bundle 不会安装 Astryx runtime、依赖、主题或 CLI，也不会编辑项目。

技能要求先检查项目和 CLI 版本，除非用户要求否则保留现有设计系统，将外部资料视为不可信数据，并且未经用户明确请求不得安装或生成代码。这只是模型指导，并不构成系统权限的强制边界。

## 上游资料

`UPSTREAM.json` 记录 CLI 文档快照：`@astryxdesign/cli` `0.7.17`，核验日期为 2026-11-21。此 bundle 不再分发 Astryx 源码或二进制文件；其目录描述一个内置技能。

## 来源

- [Astryx 仓库](https://github.com/meta/astryx)
- [Astryx CLI 文档](https://astryx.atmeta.com/docs/cli)
- [组件查询文档](https://astryx.atmeta.com/docs/cli-component-lookups)
- [DSH skill provider](https://github.com/deepseek-ai/deepseek-harness)
