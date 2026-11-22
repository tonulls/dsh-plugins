<!-- Generated from skills/google-workspace-ops/SKILL.md at 25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b; edit the pinned source or generator instead. -->
# DSH skill adaptation

Use this instruction only when the user explicitly invokes its `/ecc-*` command. It runs in the current DSH session and does not start a separate agent or process.
Use only models, tools, and integrations actually available in the current DSH session. Upstream model, tool, hook, and MCP settings are not imported.
This package contains Markdown resources only. It does not install, download, or execute upstream scripts, hooks, MCP servers, or other helpers. If the task depends on a missing helper or integration, explain the limitation instead of assuming it exists.
References to other ECC Skills, Commands, agents, or slash commands are not proof that they are included or available; verify the active catalog and current DSH session before invoking them, and explain any missing capability.
This instruction grants no permissions. Do not perform external, destructive, or other side-effecting actions unless the user requested them and current session policy allows them.

Source: https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/skills/google-workspace-ops/SKILL.md

# Google Workspace Ops

This skill is for operating shared docs, spreadsheets, and decks as working systems, not just editing one file in isolation.

## When to Use

- User needs to find a doc, sheet, or deck and update it in place
- Consolidating plans, trackers, notes, or customer lists stored in Google Drive
- Cleaning or restructuring a shared spreadsheet
- Importing, repairing, or reformatting a Google Slides deck
- Producing summaries from Docs, Sheets, or Slides for decision-making

## Preferred Tool Surface

Use Google Drive as the entry point, then switch to the right specialist:

- Google Docs for text-heavy docs
- Google Sheets for tabular work, formulas, and charts
- Google Slides for decks, imports, template migration, and cleanup

Do not guess structure from filenames alone. Inspect first.

## Workflow

### 1. Find the asset

Start with the Drive search surface to locate:

- the exact file
- sibling assets
- likely duplicates
- recently modified versions

If several documents look similar, confirm by title, owner, modified time, or folder.

### 2. Inspect before editing

Before making changes:

- summarize current structure
- identify tabs, headings, or slide count
- detect whether the task is local cleanup or structural surgery

Pick the smallest tool that can safely perform the work.

### 3. Edit with precision

- For Docs: use index-aware edits, not vague rewrites
- For Sheets: operate on explicit tabs and ranges
- For Slides: distinguish content edits from visual cleanup or template migration

If the requested work is visual or layout-sensitive, iterate with inspection and verification instead of one giant blind update.

### 4. Keep the working system clean

When the file is part of a larger workflow, also surface:

- duplicate trackers
- outdated decks
- stale docs vs canonical docs
- whether the asset should be archived, merged, or renamed

## Output Format

Use:

```text
ASSET
- file name
- type
- why this is the right file

CURRENT STATE
- structure summary
- key problems or blockers

ACTION
- edits made or recommended

FOLLOW-UPS
- archive / merge / duplicate cleanup / next file to update
```

## Good Use Cases

- "Find the active planning doc and condense it"
- "Clean up this customer spreadsheet and show me the churn-risk rows"
- "Import this deck into Slides and make it presentable"
- "Find the current tracker, not the stale duplicate"
