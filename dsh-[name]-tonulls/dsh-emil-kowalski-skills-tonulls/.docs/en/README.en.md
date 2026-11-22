# Emil Kowalski Skills for DeepSeek Harness (DSH)

A separate DSH bundle with a curated set of UI and motion instructions from [emilkowalski/skills](https://github.com/emilkowalski/skills).

## Languages

The workspace contains three interchangeable packages: `dsh-emil-kowalski-skills-tonulls-ru`, `dsh-emil-kowalski-skills-tonulls-en`, and `dsh-emil-kowalski-skills-tonulls-zh`. Install only one variant per DSH profile; all three use the Cordis plugin ID `emil-kowalski-skills-tonulls`. Metadata is localized; instructions and references remain English.

## Description

User-invoked skills cover animation and performance, interface polish, Apple-inspired motion, mobile web, animation review/improvement, and Sonner. Each package lists its 16 skills in `assets/skills/catalog.json`.

Upstream is pinned to [`64eb3deb9a5fbfa041faf783e0bc3fd635872e9c`](https://github.com/emilkowalski/skills/commit/64eb3deb9a5fbfa041faf783e0bc3fd635872e9c). The adaptation preserves the English instructions and linked Markdown references, adds RU/EN/ZH metadata, and applies DSH invocation boundaries.

**Limits:** the bundle provides prompt instructions and Markdown references, with no upstream executables, hooks, APIs, or runtime integrations. Skills are available only through direct user invocation, not automatic model selection. Ask before changing files, creating plans, installing dependencies, or running checks. Do not claim real browser/device QA unless it was performed. `prototype`, `break-ui`, `pick-ui-library`, and `write-swift` are excluded; see the [upstream overview](README.project.md).

## Use

Invoke a skill directly in DSH, for example `animate`, `review-animations`, or `animation-performance`. Skills supply English instructions and associated Markdown references. Registering the provider does not run upstream code or perform changes by itself.

## Install from GitHub

The command below installs the Russian variant in profile `web`; replace `web` with your profile name and the final `-ru` suffix with `-en` or `-zh` for another language:

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-emil-kowalski-skills-tonulls/packages/dsh-emil-kowalski-skills-tonulls-ru'
```

Install only one variant per profile; all language packages share a plugin ID. Update or remove the Russian variant:

```sh
dsh plugin --profile web update dsh-emil-kowalski-skills-tonulls-ru
dsh plugin --profile web remove dsh-emil-kowalski-skills-tonulls-ru
```

Start the profile with `dsh web`. These commands install from GitHub, not from a local directory. They will work after the project is present on branch `tonulls`; the current changes have not been pushed. This session did not change a profile or perform installation or push.

## Development and validation

From the project root:

```sh
npm run build:variants
npm test
```

## Documentation and license

- [Upstream and DSH adaptation overview](README.project.md)
- [Upstream repository](https://github.com/emilkowalski/skills)
- [Upstream MIT license](https://github.com/emilkowalski/skills/blob/64eb3deb9a5fbfa041faf783e0bc3fd635872e9c/LICENSE); copies and attribution are included in each package (`UPSTREAM.LICENSE`, `LICENSES.md`).
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
