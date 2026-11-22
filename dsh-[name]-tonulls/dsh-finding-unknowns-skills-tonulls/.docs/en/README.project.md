# DSH Finding Unknowns Skills

[Русский](../../README.md) | **English** | [简体中文](../zh-CN/README.project.md)

## Description

The bundle includes 14 skills from [Finding Unknowns](https://github.com/Neeeophytee/finding-unknowns-skills) to uncover missing requirements, hidden assumptions, and conditions that need verification. They help clarify the task and choose what to check before and during implementation.

## Installation

Install into the `web` profile. Substitute your profile name as needed.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-finding-unknowns-skills-tonulls/packages/dsh-finding-unknowns-skills-tonulls-en'
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
/dsh-finding-unknowns-skills-tonulls on
/dsh-finding-unknowns-skills-tonulls off
```

Direct skill invocation — `/finding-unknowns-skills`.

## Update

```sh
dsh plugin --profile web update dsh-finding-unknowns-skills-tonulls-en
```

## Restart

Restart the DSH profile after updating.

## Stop

```text
/dsh-finding-unknowns-skills-tonulls off
```

Turn off automatic selection for the current Agent with the command above. Press `Ctrl+C` in the terminal to stop DSH Web.

## Uninstall

```sh
dsh plugin --profile web remove dsh-finding-unknowns-skills-tonulls-en
```

## Documentation

- [Source project](https://github.com/Neeeophytee/finding-unknowns-skills)
- [Component source and verification (Russian)](../ru/upstream.md)
- [Documentation index](README.md)
- [Upstream metadata](../../packages/dsh-finding-unknowns-skills-tonulls-en/UPSTREAM.json)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## Acknowledgments and license

Thanks to the source project authors and the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) developers.

License and attribution — [LICENSES.md](../../packages/dsh-finding-unknowns-skills-tonulls-en/LICENSES.md).

🛠️ Modified with Codex
