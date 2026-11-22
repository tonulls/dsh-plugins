# ECC for DeepSeek Harness (DSH)

[Русский](../../README.md) | **English** | [简体中文](../zh-CN/README.full.md)

## Description

This DSH adaptation of [Everything Claude Code (ECC)](https://github.com/affaan-m/ECC) contains 71 Agent roles, 236 skills, and 3 commands. Install the bundle or choose individual components.

## Installation

Install into the `web` profile. Substitute your profile name as needed.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-ECC-tonulls/packages/dsh-ecc-tonulls-en'
```

## Start

Start DSH with the profile where the package is installed.

```sh
dsh web
```

## Verify

Check the DSH profile.

```sh
dsh plugin --profile web list
```

## Usage

Automatic selection is off by default. Use these commands to control automatic skill selection for the current Agent.

```text
/dsh-ecc-tonulls on
/dsh-ecc-tonulls off
```

Use `ecc-remotion-video-creation` for Remotion compositions and MP4 rendering, `ecc-manim-video` for explainers, and `ecc-video-editing` for local edits. `ecc-videodb` uses a separately configured VideoDB connection.

## Update

```sh
dsh plugin --profile web update dsh-ecc-tonulls-en
```

## Restart

Restart the DSH profile after updating.

## Stop

Use `/dsh-ecc-tonulls off` to disable automatic selection. Press `Ctrl+C` in the terminal to stop DSH Web.

## Uninstall

```sh
dsh plugin --profile web remove dsh-ecc-tonulls-en
```

## Documentation

- [Source project](https://github.com/affaan-m/ECC)
- [Component source and verification (Russian)](../ru/upstream.md)
- [Documentation index](README.md)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## Donate

🔹EVM:      ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC:      ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON:     ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA:   ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Acknowledgments and license

Thanks to the source project authors and the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) developers.

License and attribution — [LICENSES.md](../../packages/dsh-ecc-tonulls-en/LICENSES.md).

🛠️ Modified with Codex
