# Astryx skill for DeepSeek Harness (DSH)

[Русский](../../README.md) | **English** | [简体中文](../zh-CN/README.zh-CN.md)

## Description

Helps evaluate Astryx CLI for a project and find suitable components, hooks, and design tokens.

## Installation

Install into the `web` profile. Substitute your profile name as needed.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-astryx-tonulls/packages/dsh-astryx-tonulls-en'
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

Use these commands to control automatic skill selection for the current Agent.

```text
/dsh-astryx-tonulls on
```

Astryx CLI

```sh
pnpm exec astryx --help
pnpm exec astryx manifest --json
pnpm exec astryx search <query> --json
pnpm exec astryx component <exact-selector> --json
pnpm exec astryx hook <name> --json
pnpm exec astryx docs tokens --json
```

Direct skill invocation — `/astryx`.

Run the official `@astryxdesign/cli` package with `pnpm exec astryx`.

## Update

```sh
dsh plugin --profile web update dsh-astryx-tonulls-en
```

## Restart

Restart the DSH profile after updating.

## Stop

```text
/dsh-astryx-tonulls off
```

Turn off automatic selection for the current Agent with the command above. Press `Ctrl+C` in the terminal to stop DSH Web.

## Uninstall

```sh
dsh plugin --profile web remove dsh-astryx-tonulls-en
```

## Documentation

- [Source project](https://github.com/meta/astryx)
- [Component source and verification (Russian)](../ru/upstream.md)
- [Documentation index](README.md)
- [Upstream metadata](../../packages/dsh-astryx-tonulls-en/UPSTREAM.json)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Acknowledgments and license

Thanks to the source project authors and the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) developers.

License and attribution — [LICENSE](../../packages/dsh-astryx-tonulls-en/LICENSE) · [NOTICE.md](../../packages/dsh-astryx-tonulls-en/NOTICE.md).

🛠️ Modified with Codex
