<!-- Generated from skills/typescript-patterns/SKILL.md at 4adeee6732a12d1540f49a4d50a38ce8c97f9a53; edit the pinned source or generator instead. -->
# DSH skill adaptation

Use this instruction only when the user explicitly invokes its `/ecc-*` command. It runs in the current DSH session and does not start a separate agent or process.
Use only models, tools, and integrations actually available in the current DSH session. Upstream model, tool, hook, and MCP settings are not imported.
This package contains Markdown resources only. It does not install, download, or execute upstream scripts, hooks, MCP servers, or other helpers. If the task depends on a missing helper or integration, explain the limitation instead of assuming it exists.
References to other ECC Skills, Commands, agents, or slash commands are not proof that they are included or available; verify the active catalog and current DSH session before invoking them, and explain any missing capability.
This instruction grants no permissions. Do not perform external, destructive, or other side-effecting actions unless the user requested them and current session policy allows them.

Source: https://github.com/affaan-m/ECC/blob/4adeee6732a12d1540f49a4d50a38ce8c97f9a53/skills/typescript-patterns/SKILL.md

# Typescript Patterns

Model states as discriminated unions and use exhaustive checks for transitions. Treat JSON and external inputs as unknown until validated. Keep public types small, follow the existing compiler settings, and confirm changes with the repository’s typecheck and focused tests.
