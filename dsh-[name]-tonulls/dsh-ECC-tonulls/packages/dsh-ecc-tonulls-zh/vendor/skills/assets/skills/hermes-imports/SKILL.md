<!-- Generated from skills/hermes-imports/SKILL.md at 25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b; edit the pinned source or generator instead. -->
# DSH skill adaptation

Use this instruction only when the user explicitly invokes its `/ecc-*` command. It runs in the current DSH session and does not start a separate agent or process.
Use only models, tools, and integrations actually available in the current DSH session. Upstream model, tool, hook, and MCP settings are not imported.
This package contains Markdown resources only. It does not install, download, or execute upstream scripts, hooks, MCP servers, or other helpers. If the task depends on a missing helper or integration, explain the limitation instead of assuming it exists.
References to other ECC Skills, Commands, agents, or slash commands are not proof that they are included or available; verify the active catalog and current DSH session before invoking them, and explain any missing capability.
This instruction grants no permissions. Do not perform external, destructive, or other side-effecting actions unless the user requested them and current session policy allows them.

Source: https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/skills/hermes-imports/SKILL.md

# Hermes Imports

Use this skill when turning a repeated Hermes workflow into something safe to ship in ECC.

Hermes is the operator shell. ECC is the reusable workflow layer. Imports should move stable patterns from Hermes into ECC without moving private state.

## When To Use

- A Hermes workflow has repeated enough times to become reusable.
- A local operator prompt should become a public ECC skill.
- A launch, content, research, or engineering workflow needs sanitized handoff docs.
- A workflow mentions local paths, credentials, personal datasets, or private account names that must be removed before publication.

## Import Rules

- Convert local paths to repo-relative paths or placeholders.
- Replace live account names with role labels such as `operator`, `default profile`, or `workspace owner`.
- Describe credential requirements by provider name only.
- Keep examples narrow and operational.
- Do not ship raw workspace exports, tokens, OAuth files, health data, CRM data, or finance data.
- If the workflow requires private state to make sense, keep it local.

## Sanitization Checklist

Before committing an imported workflow, scan for:

- absolute paths such as `/Users/...`
- `~/.hermes` paths unless the doc is explicitly explaining local setup
- API keys, tokens, cookies, OAuth files, or bearer strings
- phone numbers, private email addresses, and personal contact graphs
- client names, family names, or account names that are not already public
- revenue, health, or CRM details
- raw logs that include tool output from private systems

## Conversion Pattern

1. Identify the repeatable operator loop.
2. Strip private inputs and outputs.
3. Rewrite local paths as repo-relative examples.
4. Turn one-off instructions into a `When To Use` section and a short process.
5. Add concrete output requirements.
6. Run a secret and local-path scan before opening a PR.

## Example: Launch Handoff

Local Hermes prompt:

```text
Read my local workspace files and finalize launch copy.
```

ECC-safe version:

```text
Use the public release pack under docs/releases/<version>/.
Return one X thread, one LinkedIn post, one recording checklist, and the missing assets list.
```

## Example: Quiet-Hours Operator Job

Local Hermes job:

```text
Run my private inbox, finance, and content checks overnight.
```

ECC-safe version:

```text
Describe the scheduler policy, the quiet-hours window, the escalation rules, and the categories of checks. Do not include private data sources or credentials.
```

## Output Contract

Return:

- candidate ECC skill name
- sanitized workflow summary
- required public inputs
- private inputs removed
- remaining risks
- files that should be created or updated
