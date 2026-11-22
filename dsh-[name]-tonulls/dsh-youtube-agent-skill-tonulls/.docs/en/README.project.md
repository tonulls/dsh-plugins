# DSH YouTube Agent Skills

[Русский](../../README.md) · **English** · [简体中文](../zh-CN/README.project.md)

## Description

This bundle adapts seven prompt-based skills from [YouTube Agent Skill](https://github.com/Jakeschincariol/youtube-agent-skill) for video planning, scriptwriting, SEO, and content audits. The skills use information you provide to help prepare materials for your channel.

## Installation

You need DSH and a profile. The examples use the `web` profile. Substitute your profile name as needed.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-youtube-agent-skill-tonulls/packages/dsh-youtube-agent-skill-tonulls-en'
```

## Start

Start DSH with the profile where you installed the package.

```sh
dsh web
```

## Verify

Check the DSH version, installed plugins, and profile configuration.

```sh
dsh --version
dsh plugin --profile web list
dsh --profile web --dump-config
```

## Usage

Automatic skill selection starts off for each Agent. Use these commands to turn it on or off.

```text
/dsh-youtube-agent-skill-tonulls on
/dsh-youtube-agent-skill-tonulls off
```

The command applies to the current Agent. You can still invoke `/youtube-agent-skill` directly when automatic selection is off.

## Update

Update the package in the `web` profile.

```sh
dsh plugin --profile web update dsh-youtube-agent-skill-tonulls-en
```

## Restart

Restart the DSH profile after updating.

## Stop

Turn off automatic skill selection for the current Agent.

```text
/dsh-youtube-agent-skill-tonulls off
```

To stop DSH, press `Ctrl+C` in the terminal.

## Uninstall

Remove the package from the `web` profile.

```sh
dsh plugin --profile web remove dsh-youtube-agent-skill-tonulls-en
```

## Documentation

- [Upstream source and verification (Russian)](../ru/upstream.md)

- [Russian index](../ru/README.md) · [English index](../en/README.md) · [Chinese index](../zh-CN/README.md)
- [Upstream and licenses](../../packages/dsh-youtube-agent-skill-tonulls-en/LICENSES.md) · [Provenance](../../packages/dsh-youtube-agent-skill-tonulls-en/UPSTREAM.json)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Acknowledgments and license

Thanks to the authors of [YouTube Agent Skill](https://github.com/Jakeschincariol/youtube-agent-skill) for the source materials and to the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) developers for the platform. The package includes the original license and notices and adapts installation for DSH.

🛠️ Modified with Codex
