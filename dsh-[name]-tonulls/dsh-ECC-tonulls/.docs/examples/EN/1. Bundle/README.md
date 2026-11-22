# ECC Bundle Toggle Examples

This section contains four user-controlled toggles from the umbrella bundle. They enable or disable **automatic selection** of the corresponding group of ECC components for the current DSH session and are available only to the user.

Send a toggle command as a separate direct user message—exactly as shown, without quotes or additional text. After the mode is confirmed, send the task in the next message. Toggles do not create a separate agent or disable explicit `/ecc-*` invocations.

| Toggle | Purpose | Examples |
| --- | --- | --- |
| `/dsh-ecc-agents on\|off` | Automatically select ECC Agents role instructions in this session. | [Three modes, nine prompts](<dsh-ecc-agents.md>) |
| `/dsh-ecc-skills on\|off` | Automatically select ECC Skills in this session. | [Three modes, nine prompts](<dsh-ecc-skills.md>) |
| `/dsh-ecc-commands on\|off` | Automatically select verified ECC Commands in this session. | [Three modes, nine prompts](<dsh-ecc-commands.md>) |
| `/dsh-ecc-tonulls on\|off` | Automatically select all enabled ECC components in this session. `off` disables all three groups. | [Three modes, nine prompts](<dsh-ecc-tonulls.md>) |

After `/dsh-ecc-tonulls on|off`, you can use an individual toggle to change only that group's mode. For bundle details, see the [package README](<../../../../packages/dsh-ecc-tonulls-en/README.md>).
