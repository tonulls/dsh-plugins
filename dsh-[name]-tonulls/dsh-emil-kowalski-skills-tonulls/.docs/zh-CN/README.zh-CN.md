# Emil Kowalski Skills for DeepSeek Harness (DSH)

这是一个独立的 DSH bundle，精选改编自 [emilkowalski/skills](https://github.com/emilkowalski/skills) 的界面与动效指南。

## 语言

workspace 提供三个可互换的软件包：`dsh-emil-kowalski-skills-tonulls-ru`、`dsh-emil-kowalski-skills-tonulls-en` 和 `dsh-emil-kowalski-skills-tonulls-zh`。每个 DSH profile 只安装一个版本；三个版本共用 Cordis plugin ID `emil-kowalski-skills-tonulls`。元数据已本地化，指令和参考资料仍为英文。

## 说明

用户主动调用的技能涵盖动画与性能、界面润色、Apple 风格动效、移动 Web、动画审查/改进和 Sonner。每个软件包的 `assets/skills/catalog.json` 列出 16 项技能。

上游固定在提交 [`64eb3deb9a5fbfa041faf783e0bc3fd635872e9c`](https://github.com/emilkowalski/skills/commit/64eb3deb9a5fbfa041faf783e0bc3fd635872e9c)。适配保留英文指令及其 Markdown 参考文件，添加 RU/EN/ZH 元数据，并遵守 DSH 调用边界。

**限制：** bundle 仅包含提示词指令和 Markdown 参考资料，不含上游可执行程序、hooks、API 或运行时集成。技能只由用户直接调用，不进行模型自动选择。修改文件、创建计划、安装依赖或运行检查前需先征得用户同意。未实际执行时，不得声称完成真实浏览器/设备 QA。未包含 `prototype`、`break-ui`、`pick-ui-library` 和 `write-swift`；详见[上游概览](README.project.md)。

## 使用

在 DSH 中直接调用技能，例如 `animate`、`review-animations` 或 `animation-performance`。技能提供英文指令和相关 Markdown 参考资料。注册 provider 本身不会运行上游代码或执行修改。

## 从 GitHub 安装

以下命令将俄语版本安装到 `web` profile；请将 `web` 替换为自己的 profile 名称，并将 URL 最后的 `-ru` 改为 `-en` 或 `-zh` 以选择其他语言：

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-emil-kowalski-skills-tonulls/packages/dsh-emil-kowalski-skills-tonulls-ru'
```

每个 profile 只安装一个版本；所有语言软件包共用 plugin ID。更新或删除俄语版本：

```sh
dsh plugin --profile web update dsh-emil-kowalski-skills-tonulls-ru
dsh plugin --profile web remove dsh-emil-kowalski-skills-tonulls-ru
```

使用 `dsh web` 启动 profile。命令从 GitHub 安装，而不是从本地目录安装。项目进入 `tonulls` 分支后这些命令才会生效；当前更改尚未 push。本次未修改 profile，也未执行安装或 push。

## 开发与验证

在项目根目录运行：

```sh
npm run build:variants
npm test
```

## 文档与许可证

- [上游与 DSH 适配概览](README.project.md)
- [上游仓库](https://github.com/emilkowalski/skills)
- [上游 MIT 许可证](https://github.com/emilkowalski/skills/blob/64eb3deb9a5fbfa041faf783e0bc3fd635872e9c/LICENSE)；每个软件包均包含许可证副本和来源说明 (`UPSTREAM.LICENSE`、`LICENSES.md`)。
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
