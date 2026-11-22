# ECC Bundle 开关示例

本节介绍 umbrella bundle 中的四个用户自定义开关。它们会为当前 DSH 会话启用或停用相应 ECC 组件组的**自动选择**，且仅对用户可用。

请将切换命令作为用户单独发送的一条直接消息，严格使用所示形式，不加引号或其他文字。收到模式确认后，再在下一条消息中发送任务。开关不会创建单独的代理，也不会禁用显式调用 `/ecc-*`。

| 开关 | 用途 | 示例 |
| --- | --- | --- |
| `/dsh-ecc-agents on\|off` | 在此会话中自动选择 ECC Agents 角色指令。 | [三种模式，九个提示词](<dsh-ecc-agents.md>) |
| `/dsh-ecc-skills on\|off` | 在此会话中自动选择 ECC Skills。 | [三种模式，九个提示词](<dsh-ecc-skills.md>) |
| `/dsh-ecc-commands on\|off` | 在此会话中自动选择经过验证的 ECC Commands。 | [三种模式，九个提示词](<dsh-ecc-commands.md>) |
| `/dsh-ecc-tonulls on\|off` | 在此会话中自动选择所有已启用的 ECC 组件。`off` 会关闭全部三组。 | [三种模式，九个提示词](<dsh-ecc-tonulls.md>) |

执行 `/dsh-ecc-tonulls on|off` 后，可使用单独的开关仅更改某一组的模式。有关 bundle 的详情，请参阅[软件包 README](<../../../../packages/dsh-ecc-tonulls-en/README.md>)。
