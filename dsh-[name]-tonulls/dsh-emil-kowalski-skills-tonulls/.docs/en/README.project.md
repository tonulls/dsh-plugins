# Emil Kowalski Skills for DeepSeek Harness (DSH)

[Русский](../../README.md) | **English** | [简体中文](../zh-CN/README.project.md)

## Description

The bundle includes 16 skills from [Emil Kowalski Skills](https://github.com/emilkowalski/skills) for interface animation, motion performance, and visual polish. `gestures` helps design drag and swipe gestures. In the standalone package, invoke `learn-taste` manually to record agreed design rules.

## Installation

Install into the `web` profile. Substitute your profile name as needed.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-emil-kowalski-skills-tonulls/packages/dsh-emil-kowalski-skills-tonulls-en'
```

## Start

Start DSH with the profile where the package is installed.

```sh
dsh web
```

## Verify

Check the DSH profile.

```sh
dsh --version
dsh plugin --profile web list
dsh --profile web --dump-config
```

## Usage

Automatic selection is off by default. Use these commands to control automatic skill selection for the current Agent.

```text
/dsh-emil-kowalski-skills-tonulls on
/dsh-emil-kowalski-skills-tonulls off
```

Direct skill invocation — `/animate`.

## Update

```sh
dsh plugin --profile web update dsh-emil-kowalski-skills-tonulls-en
```

## Restart

Restart the DSH profile after updating.

## Stop

```text
/dsh-emil-kowalski-skills-tonulls off
```

Turn off automatic selection for the current Agent with the command above. Press `Ctrl+C` in the terminal to stop DSH Web.

## Uninstall

```sh
dsh plugin --profile web remove dsh-emil-kowalski-skills-tonulls-en
```

## Documentation

- [Source project](https://github.com/emilkowalski/skills)
- [Component source and verification (Russian)](../ru/upstream.md)
- [Documentation index](README.md)
- [Upstream metadata](../../packages/dsh-emil-kowalski-skills-tonulls-en/UPSTREAM.json)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## Acknowledgments and license

Thanks to the source project authors and the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) developers.

License and attribution — [LICENSES.md](../../packages/dsh-emil-kowalski-skills-tonulls-en/LICENSES.md).

🛠️ Modified with Codex
