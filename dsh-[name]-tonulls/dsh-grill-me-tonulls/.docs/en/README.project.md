# DSH Grill Me

[Русский](../../README.md) | **English** | [简体中文](../zh-CN/README.project.md)

## Description

Combines `grill-me` and `grilling` to examine a plan or decision through focused follow-up questions.

## Installation

Install into the `web` profile. Substitute your profile name as needed.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-grill-me-tonulls/packages/dsh-grill-me-tonulls-en'
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
/dsh-grill-me-tonulls on
/dsh-grill-me-tonulls off
```

Direct skill invocation — `/grill-me`.

## Update

```sh
dsh plugin --profile web update dsh-grill-me-tonulls-en
```

## Restart

Restart the DSH profile after updating.

## Stop

```text
/dsh-grill-me-tonulls off
```

Turn off automatic selection for the current Agent with the command above. Press `Ctrl+C` in the terminal to stop DSH Web.

## Uninstall

```sh
dsh plugin --profile web remove dsh-grill-me-tonulls-en
```

## Documentation

- [Source project](https://github.com/mattpocock/skills)
- [Component source and verification (Russian)](../ru/upstream.md)
- [Documentation index](README.md)
- [Upstream metadata](../../packages/dsh-grill-me-tonulls-en/UPSTREAM.json)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## Acknowledgments and license

Thanks to the source project authors and the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) developers.

License and attribution — [LICENSES.md](../../packages/dsh-grill-me-tonulls-en/LICENSES.md).

🛠️ Modified with Codex
