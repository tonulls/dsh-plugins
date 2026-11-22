# 上游来源与适配

**状态：** 已依据 commit `2c606141936f1eeef17fa3043a72095b4765b9c2` 核对上游内容。

## 来源

- 仓库：[multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)。
- 技能原文：[`skills/karpathy-guidelines/SKILL.md`](https://github.com/multica-ai/andrej-karpathy-skills/blob/2c606141936f1eeef17fa3043a72095b4765b9c2/skills/karpathy-guidelines/SKILL.md)。
- 汇总材料：[`README.md`](https://github.com/multica-ai/andrej-karpathy-skills/blob/2c606141936f1eeef17fa3043a72095b4765b9c2/README.md)、[`CLAUDE.md`](https://github.com/multica-ai/andrej-karpathy-skills/blob/2c606141936f1eeef17fa3043a72095b4765b9c2/CLAUDE.md) 和 Cursor 规则 [`karpathy-guidelines.mdc`](https://github.com/multica-ai/andrej-karpathy-skills/blob/2c606141936f1eeef17fa3043a72095b4765b9c2/.cursor/rules/karpathy-guidelines.mdc)。
- 上游 README 和技能 frontmatter 声明采用 MIT 许可证；该 commit 的上游文件树没有独立的 `LICENSE` 文件。

## 包含内容

插件包含一个名为 `karpathy-guidelines` 的技能，涵盖四项原则：编码前先思考、优先简单、精准修改、以目标驱动执行。英文包保留英文说明；俄文和中文包提供翻译。所有版本都附有简短的 DSH 边界说明：技能文本不授予权限，也不替代技术限制。

## 未包含内容

Claude Code Marketplace 元数据和 Cursor 规则不作为 DSH 清单使用。插件仅打包技能说明和少量 DSH 适配代码，不包含或启动第三方工具及额外进程。

## 本地化与验证

各包的结构标识符（`name`、资源路径和 plugin ID）保持一致。`ru` 和 `zh` 内容为翻译；`karpathy-guidelines` 标识符不变。发布前请在目标 DSH 版本中核实翻译准确性和技能发现行为。
