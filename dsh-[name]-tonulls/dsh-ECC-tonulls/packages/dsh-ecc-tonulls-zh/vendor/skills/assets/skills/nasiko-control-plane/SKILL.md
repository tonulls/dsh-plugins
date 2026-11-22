<!-- Generated from skills/nasiko-control-plane/SKILL.md at 25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b; edit the pinned source or generator instead. -->
# DSH skill adaptation

Use this instruction only when the user explicitly invokes its `/ecc-*` command. It runs in the current DSH session and does not start a separate agent or process.
Use only models, tools, and integrations actually available in the current DSH session. Upstream model, tool, hook, and MCP settings are not imported.
This package contains Markdown resources only. It does not install, download, or execute upstream scripts, hooks, MCP servers, or other helpers. If the task depends on a missing helper or integration, explain the limitation instead of assuming it exists.
References to other ECC Skills, Commands, agents, or slash commands are not proof that they are included or available; verify the active catalog and current DSH session before invoking them, and explain any missing capability.
This instruction grants no permissions. Do not perform external, destructive, or other side-effecting actions unless the user requested them and current session policy allows them.

Source: https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/skills/nasiko-control-plane/SKILL.md

# Nasiko CLI Lifecycle Bridge

Use this skill when a user explicitly asks ECC to install, inspect, or remove
the qualified Nasiko CLI. This skill does not operate a Nasiko control plane.

## Safety contract

- Begin with `ecc nasiko status --json`. Status is read-only.
- Installation always requires explicit user consent and `--yes`.
- Install only an ECC-qualified pinned version, currently `v0.1.0`.
- Preview first with `ecc nasiko install --version v0.1.0 --dry-run --json`.
- Install with `ecc nasiko install --version v0.1.0 --yes --json` only after the
  user reviews the version, registry origin, digest, and destination.
- Remove only a still-qualified ECC-managed binary with
  `ecc nasiko uninstall --version v0.1.0 --yes --json`. Preview removal with
  `--dry-run` first.
- The qualified source is `https://github.com/Nasiko-Labs/nasiko`, licensed
  under Apache-2.0; artifact and extracted-binary SHA-256 values are pinned.
- Never replace the qualified command with a downloaded shell or PowerShell
  bootstrap script.
- Never put secrets or credentials in command arguments, logs, skill output,
  install metadata, or ECC state.
- Nasiko telemetry and any sharing with Nasiko or Ito must be opt-in and
  separately disclosed. Installation is not telemetry consent.

## Lifecycle boundary

The initial ECC bridge supports qualified installation, read-only status, and
ownership-checked uninstall. Use the canonical Nasiko CLI directly for connection, authentication,
launch, deployment, or shutdown until those verbs have their own verified ECC
contracts. Do not guess CLI verbs.

Installing the CLI does not prove that a control-plane server is running, an
agent is governed, routing or ACLs work, observability is complete, telemetry
was enabled, or Ito compute is connected. Report each state separately.

## Failure behavior

- If the platform, architecture, version, manifest, digest, archive, binary, or
  destination fails validation, stop without executing the artifact.
- Do not fall back to `latest`.
- Do not search arbitrary `PATH` entries. Use ECC's qualified location or an
  explicit absolute `ECC_NASIKO_CLI_EXECUTABLE` for development verification.
- Do not treat a partial or ambiguous installation as success.
