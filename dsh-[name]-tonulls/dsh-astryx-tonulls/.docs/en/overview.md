# Integration overview

The DSH bundle registers one packaged `astryx` skill through the Host `skills.registerProvider` service. Its instructions are bundled and localized; the model loads them on demand. Three workspace packages (`-ru`, `-en`, `-zh`) share the implementation and carry their own translations, patch rows, skill catalog, Plugin Manager metadata, and icon.

## Capability boundaries

The bundle provides instructions and exposes the skill for user and model invocation. It does not implement a DSH Tool or run the Astryx CLI. A user/agent applies CLI commands through tools already available to the current DSH Agent. The CLI must be installed in the target project; the bundle does not install Astryx runtime, dependencies, themes, or CLI and does not edit the project.

The skill asks the agent to inspect the project and CLI version, preserve an incumbent design system unless asked, treat external material as untrusted data, and avoid installation or code generation without an explicit user request. This is model guidance, not an enforcement boundary for system permissions.

## Upstream

`UPSTREAM.json` records the CLI documentation snapshot: `@astryxdesign/cli` `0.7.17`, checked on 2026-11-21. This bundle does not redistribute Astryx source or binaries; its catalog describes one bundled skill.

## Sources

- [Astryx repository](https://github.com/meta/astryx)
- [Astryx CLI docs](https://astryx.atmeta.com/docs/cli)
- [Component lookup docs](https://astryx.atmeta.com/docs/cli-component-lookups)
- [DSH skill provider](https://github.com/deepseek-ai/deepseek-harness)
