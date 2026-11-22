# DSH Tonulls bundle

[Русский](../../README.md) | **English** | [简体中文](../zh-CN/README.md)

## Description

`dsh-tonulls` combines 37 skill projects for development, design, research, security, and tools. Install the bundle from GitHub and control automatic skill selection for the current Agent with one command.

## Installation

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-tonulls/packages/dsh-tonulls-en'
```

## Start

```sh
dsh web
```

## Verify

```sh
dsh plugin --profile web list
```

## Usage

```text
/dsh-tonulls on
/dsh-tonulls off
```

`on` enables automatic skill selection and `off` disables it. Skills are selected based on the current Agent’s task. The only bundle command in the slash menu is `/dsh-tonulls`.

To save design corrections as project rules, ask explicitly. With automatic selection enabled, the Agent can select `learn-taste`, propose rules, and wait for approval before writing.

## Update

```sh
dsh plugin --profile web update dsh-tonulls-en
```

## Restart

Stop DSH Web with `Ctrl+C` and start the profile again.

## Stop

Use `/dsh-tonulls off` to turn off automatic selection for the current Agent. Press `Ctrl+C` to stop DSH Web.

## Uninstall

```sh
dsh plugin --profile web remove dsh-tonulls-en
```

## Documentation

- [Component sources (Russian)](../ru/upstream.md)
- [Project catalog](../../../.docs/en/projects.md)

## Donate

🔹EVM:      ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC:      ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON:     ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA:   ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Acknowledgements and license

Thanks to the authors of [Agency Agents](https://github.com/msitarzewski/agency-agents), the developers of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness), and the authors of the other included projects. The [bundle](../../packages/dsh-tonulls-en/LICENSES.md) includes source materials and attribution notices.

🛠️ Modified with Codex
