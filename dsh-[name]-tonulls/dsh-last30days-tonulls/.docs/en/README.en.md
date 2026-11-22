# DSH Last 30 Days — web-only

[Русский](../../README.md) | **English** | [简体中文](../zh-CN/README.zh-CN.md)

## Description

This DSH adaptation of [last30days-skill](https://github.com/mvanhorn/last30days-skill) helps research information from public web sources over the past 30 days using the search and page-reading tools available in the session.

## Installation

Install into the `web` profile. Substitute your profile name as needed.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-last30days-tonulls/packages/dsh-last30days-tonulls'
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
/dsh-last30days on
```

After enabling automatic selection, ask the Agent to research a topic over the past 30 days. You can also invoke `/last30days` directly while automatic selection is off.

## Update

```sh
dsh plugin --profile web update dsh-last30days-tonulls
```

## Restart

Restart the DSH profile after updating.

## Stop

```text
/dsh-last30days off
```

Turn off automatic selection for the current Agent with the command above. Press `Ctrl+C` in the terminal to stop DSH Web.

## Uninstall

```sh
dsh plugin --profile web remove dsh-last30days-tonulls
```

## Documentation

- [Component source and verification (Russian)](../ru/upstream.md)
- [Documentation index](README.md)
- [Upstream metadata](../../packages/dsh-last30days-tonulls/UPSTREAM.json)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Acknowledgments and license

Thanks to the authors of [last30days-skill](https://github.com/mvanhorn/last30days-skill) for the original skill and the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) developers for the platform. The source project uses the MIT license. The package includes the [license](../../packages/dsh-last30days-tonulls/LICENSE) and [attribution notice](../../packages/dsh-last30days-tonulls/NOTICE.md).

🛠️ Modified with Codex
