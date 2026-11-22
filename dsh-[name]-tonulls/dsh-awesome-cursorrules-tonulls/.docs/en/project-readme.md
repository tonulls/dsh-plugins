# Awesome Cursor Rules for DeepSeek Harness (DSH)

[Русский](../../README.md) | **English** | [简体中文](../zh-CN/project-readme.md)

## Description

Helps find and evaluate Cursor rules for a project's languages, frameworks, and conventions.

## Installation

Install into the `web` profile. Substitute your profile name as needed.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-awesome-cursorrules-tonulls/packages/dsh-awesome-cursorrules-tonulls-en'
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
/dsh-awesome-cursorrules-tonulls on
/dsh-awesome-cursorrules-tonulls off
```

Direct skill invocation — `/cursor-rules-selector`.

## Update

```sh
dsh plugin --profile web update dsh-awesome-cursorrules-tonulls-en
```

## Restart

Restart the DSH profile after updating.

## Stop

```text
/dsh-awesome-cursorrules-tonulls off
```

Turn off automatic selection for the current Agent with the command above. Press `Ctrl+C` in the terminal to stop DSH Web.

## Uninstall

```sh
dsh plugin --profile web remove dsh-awesome-cursorrules-tonulls-en
```

## Documentation

- [Source project](https://github.com/PatrickJS/awesome-cursorrules)
- [Component source and verification (Russian)](../ru/upstream.md)
- [Documentation index](README.md)
- [Setup guide](guide/setup.md)
- [Upstream metadata](../../packages/dsh-awesome-cursorrules-tonulls-en/UPSTREAM.json)
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

License and attribution — [LICENSE](../../packages/dsh-awesome-cursorrules-tonulls-en/LICENSE) · [NOTICE.md](../../packages/dsh-awesome-cursorrules-tonulls-en/NOTICE.md).

🛠️ Modified with Codex
