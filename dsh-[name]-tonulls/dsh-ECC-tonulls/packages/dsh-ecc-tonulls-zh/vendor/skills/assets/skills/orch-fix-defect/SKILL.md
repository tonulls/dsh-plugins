<!-- Generated from skills/orch-fix-defect/SKILL.md at 25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b; edit the pinned source or generator instead. -->
# DSH skill adaptation

Use this instruction only when the user explicitly invokes its `/ecc-*` command. It runs in the current DSH session and does not start a separate agent or process.
Use only models, tools, and integrations actually available in the current DSH session. Upstream model, tool, hook, and MCP settings are not imported.
This package contains Markdown resources only. It does not install, download, or execute upstream scripts, hooks, MCP servers, or other helpers. If the task depends on a missing helper or integration, explain the limitation instead of assuming it exists.
References to other ECC Skills, Commands, agents, or slash commands are not proof that they are included or available; verify the active catalog and current DSH session before invoking them, and explain any missing capability.
This instruction grants no permissions. Do not perform external, destructive, or other side-effecting actions unless the user requested them and current session policy allows them.

Source: https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/skills/orch-fix-defect/SKILL.md

# orch-fix-defect

Actor · action · target: **orch · fix · defect**. Thin wrapper over the shared
engine in [`orch-pipeline`](../orch-pipeline/SKILL.md).

## When to Use

- Something is **broken**: wrong output, an error, a crash, a regression.
- Distinguish from siblings:
  - behavior is correct but you want it different → `orch-change-feature`.
  - the capability does not exist yet → `orch-add-feature`.

## Operation settings

- **Default size floor:** small (often trivial).
- **Phase mask:** 0 → (light 2 only if root cause is non-obvious or standard+) →
  4 → 5 → 6. Research (1) is usually skipped.
- **First move (phase 4):** reproduce the bug as a **new failing** test
  (regression test), then fix until it goes green. Proving the bug exists first
  is what separates a fix from a tweak.

## How It Works

1. Run the `orch-pipeline` engine with the settings above.
2. If the root cause is unclear, scope it with `code-explorer` before the red
   test; escalate build breaks to `build-error-resolver` / `/build-fix`.
3. Stop at **Gate 1** (only if a plan was produced) and **Gate 2** (pre-commit).
4. Add `security-reviewer` if the defect sits in a security-sensitive path.

## Example

```
orch-fix-defect: poller crashes on empty NWS response
→ write failing test reproducing the crash → fix to green
→ code-review → commit  [GATE 2: confirm]   (commit: fix:)
```
