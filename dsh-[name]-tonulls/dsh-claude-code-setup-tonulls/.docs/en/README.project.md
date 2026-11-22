# Claude Code Setup for DSH

[Русский](../../README.md) | **English** | [简体中文](../zh-CN/README.project.md)

## Description

Helps review Claude Code settings, project rules, and configuration layout.

## Installation

Install into the `web` profile. Substitute your profile name as needed.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-claude-code-setup-tonulls/packages/dsh-claude-code-setup-tonulls-en'
```

## Start

Start DSH with the profile where the package is installed.

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
/dsh-claude-code-setup-tonulls on
/dsh-claude-code-setup-tonulls off
```

Direct skill invocation — `/claude-code-setup`.

## Update

```sh
dsh plugin --profile web update dsh-claude-code-setup-tonulls-en
```

## Restart

Restart the DSH profile after updating.

## Stop

```text
/dsh-claude-code-setup-tonulls off
```

Turn off automatic selection for the current Agent with the command above. Press `Ctrl+C` in the terminal to stop DSH Web.

## Uninstall

```sh
dsh plugin --profile web remove dsh-claude-code-setup-tonulls-en
```

## Documentation

- [Source project](https://github.com/anthropics/claude-code)
- [Component source and verification (Russian)](../ru/upstream.md)
- [Documentation index](README.md)
- [Setup guide](guide/setup.md)
- [Upstream metadata](../../packages/dsh-claude-code-setup-tonulls-en/UPSTREAM.json)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## Donate

🔹EVM: `0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C`

🔹BTC: `bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93`

🔹TRON: `TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv`

🔹SOLANA: `8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH`

🔹GRAM-TON: `UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg`

🔹USDT-TON: `UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg`

## Acknowledgments and license

Thanks to the source project authors and the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) developers.

License and attribution — [LICENSE](../../packages/dsh-claude-code-setup-tonulls-en/LICENSE) · [NOTICE.md](../../packages/dsh-claude-code-setup-tonulls-en/NOTICE.md).

🛠️ Modified with Codex
