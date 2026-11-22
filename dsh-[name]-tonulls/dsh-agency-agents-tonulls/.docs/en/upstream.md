# Upstream source and DSH adaptation

## Pinned snapshot

- Repository: [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)
- Commit: [`8ae6164602c95ca78828b148b9052460ee426885`](https://github.com/msitarzewski/agency-agents/commit/8ae6164602c95ca78828b148b9052460ee426885), dated 25 October 2026.
- The bundle contains 283 Markdown roles in 18 categories. `packages/dsh-agency-agents-tonulls-en/UPSTREAM.json` records the exact set; the catalog is generated from the nested source files under `assets/agents/` and synchronized across all language packages.
- Upstream source materials are MIT-licensed. Each package includes the copyright notice and license text in [`LICENSES.md`](../../packages/dsh-agency-agents-tonulls-en/LICENSES.md).

Upstream documents conversion of its roles to DSH skills in its [DSH integration guide](https://github.com/msitarzewski/agency-agents/blob/8ae6164602c95ca78828b148b9052460ee426885/integrations/dsh/README.md). This project uses the same `agency-<slug>` naming scheme but registers skills through a DSH package; it does not run upstream `convert.sh` or `install.sh`. Do not install both variants at once because they publish identical skill names.

Three package variants localize the control command description and responses: `dsh-agency-agents-tonulls-ru`, `dsh-agency-agents-tonulls-en`, and `dsh-agency-agents-tonulls-zh`. They do not translate the role catalog. Skill names and descriptions and source instruction bodies are not localized by these packages and remain mostly in English. The package language does not guarantee the model's response language. Install only one variant per profile.

## Adapter behavior

1. The catalog records `agency-<slug>`, the upstream title and description, category, Markdown path, and source URL.
2. The provider validates the pinned commit, entry count, unique names, category, and every relative asset path against an allowlist.
3. A role is loaded only when `get` is requested; the upstream YAML frontmatter is removed from the instruction body.
4. Textual guidance is added before and after the body to use only current-session capabilities, assume no implicit permissions, and confirm authorization scope for security testing. This guides the model; it does not technically block tool calls.
5. Direct human invocation of individual roles is disabled with `userInvocable: false`. The native `/dsh-agency-agents-tonulls on|off` command enables or disables automatic model selection for the current Agent. This control is a DSH command, not a skill.

Role bodies and skill descriptions remain mostly in English and may include other languages. Russian is the canonical project-documentation language. The root README is translated into English and Simplified Chinese and placed at `.docs/en/README.md` and `.docs/zh-CN/README.md`. `.docs/ru/overview/README.md` contains the detailed project overview and an index of model-selectable roles by category; each category file lists role names, not user-facing slash commands. The English and Chinese `overview.md` files are short indexes that link to the Russian documentation. Each localized `upstream.md` describes the source and adaptation in that language. Translating all 283 role prompts is outside this release's scope.

## Current verification — 2026-11-03

- `npm test` passed all 12 checks; the only test file is in the EN package and exercises the provider, not the full lifecycle of every language package. `npm run check:catalog` confirmed that the RU, EN, and ZH catalogs are current. Each package contains 283 role files with the same roster, and the JavaScript files pass syntax checks.
- Git-URL installation and launch in a live DSH instance have not been checked after the language variants were added. Actual tool permission boundaries, confirmation of side effects, and enforcement by DSH tools have not been verified. The `web` profile was not changed.

## Updating upstream

The snapshot is not updated automatically. To update it, select and review a new full commit SHA, refresh only the agent Markdown files in the upstream converter's categories across all three language packages, update `UPSTREAM.json`, run `npm run build:catalog` and `npm test`, verify counts and slugs, and include the current license notice. Treat an upstream snapshot change as a separate review; do not track the moving `main` branch.
