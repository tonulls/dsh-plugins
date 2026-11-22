# DSH Impeccable

[Русский](../../README.md) | **English** | [简体中文](../zh-CN/README.full.md)

## Description

Helps design and refine interfaces through visual hierarchy, layout, typography, and interaction details.

## Installation

Install into the `web` profile. Substitute your profile name as needed.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-Impeccable-tonulls/packages/dsh-impeccable-tonulls-en'
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
/dsh-impeccable on
```

```text
/impeccable critique the settings page
```

## Update

```sh
dsh plugin --profile web update dsh-impeccable-tonulls-en
```

## Restart

Restart the DSH profile after updating.

## Stop

```text
/dsh-impeccable off
```

Turn off automatic selection for the current Agent with the command above. Press `Ctrl+C` in the terminal to stop DSH Web.

## Uninstall

```sh
dsh plugin --profile web remove dsh-impeccable-tonulls-en
```

## Documentation

- [Source project](https://github.com/pbakaus/impeccable)
- [Component source and verification (Russian)](../ru/upstream.md)
- [Documentation index](README.md)
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

License and attribution — [LICENSE](../../packages/dsh-impeccable-tonulls-en/LICENSE) · [NOTICE.md](../../packages/dsh-impeccable-tonulls-en/NOTICE.md).

🛠️ Modified with Codex
