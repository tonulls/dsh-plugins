# ECC 提示词示例 — 简体中文

此处汇集了调用 ECC 组件以及控制其在 DeepSeek Harness 中自动选择的示例。每个组件和切换开关都有单独的 Markdown 文件，提供简短、常规模板和详细版本的提示词。

## 章节

| 章节 | 组件 | 说明 |
| --- | ---: | --- |
| [Bundle](<1. Bundle/README.md>) | 4 | 用户控制的开关，用于在当前会话中自动选择 Agents、Skills 和经过验证的 Commands。 |
| [Agents](<2. Agents/README.md>) | 71 | 用于在当前 DSH 会话中显式调用的角色。 |
| [Skills](<3. Skills/README.md>) | 236 | 技能和专用工作流程。 |
| [Commands](<4. Commands/README.md>) | 3 | 面向 DSH 的用户自定义 ECC 命令。 |

在 Agents、Skills 和 Commands 章节中，使用准确的调用名称 `/ecc-*`。Bundle 开关需单独发送直接消息 `/dsh-ecc-<组件> on|off`；收到模式确认后，再在下一条消息中发送任务。请将占位符替换为项目上下文，并明确说明对更改、命令运行和网络操作的限制。
