# ECC Prompt Examples — English

This collection provides examples for invoking ECC components and controlling their automatic selection in DeepSeek Harness. Each component and toggle has a separate Markdown file with concise, standard-template, and detailed prompt variants.

## Sections

| Section | Components | Description |
| --- | ---: | --- |
| [Bundle](<1. Bundle/README.md>) | 4 | User-controlled toggles for automatic selection of Agents, Skills, and verified Commands in the current session. |
| [Agents](<2. Agents/README.md>) | 71 | Roles explicitly invoked in the current DSH session. |
| [Skills](<3. Skills/README.md>) | 236 | Skills and specialized workflows. |
| [Commands](<4. Commands/README.md>) | 3 | User-defined ECC commands for DSH. |

The Agents, Skills, and Commands sections use the exact invocation names `/ecc-*`. Bundle toggles are invoked in a separate direct message as `/dsh-ecc-<component> on|off`; send the task only in the next message, after the mode is confirmed. Replace placeholders with your project context and clearly state any constraints on changes, command execution, and network actions.
