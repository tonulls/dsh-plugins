# Agency Agents for DeepSeek Harness (DSH)

[Русский](../../README.md) | **English** | [简体中文](../zh-CN/README.md)

## Description

The [Agency Agents](https://github.com/msitarzewski/agency-agents) bundle provides 283 specialized roles. Each role loads on demand as an `agency-<slug>` skill. The DSH adaptation includes `agency-vulnerability-remediation`, which reviews local code, fixes confirmed issues, and tests the changes.

## Installation

Install into the `web` profile. Substitute your profile name as needed.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-agency-agents-tonulls/packages/dsh-agency-agents-tonulls-en'
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
```

```sh
dsh plugin --profile web list
```

```sh
dsh --profile web --dump-config
```

## Usage

Use these commands to control automatic skill selection for the current Agent.

```text
/dsh-agency-agents-tonulls on
```

The model selects a role based on your request. Individual `/agency-<slug>` commands are unavailable in the user menu.

## Update

```sh
dsh plugin --profile web update dsh-agency-agents-tonulls-en
```

## Restart

Restart the DSH profile after updating.

## Stop

```text
/dsh-agency-agents-tonulls off
```

Turn off automatic selection for the current Agent with the command above. Press `Ctrl+C` in the terminal to stop DSH Web.

## Uninstall

```sh
dsh plugin --profile web remove dsh-agency-agents-tonulls-en
```

## Documentation

- [Source project](https://github.com/msitarzewski/agency-agents)
- [Component source and verification (Russian)](../ru/upstream.md)
- [Upstream metadata](../../packages/dsh-agency-agents-tonulls-en/UPSTREAM.json)
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

License and attribution — [LICENSES.md](../../packages/dsh-agency-agents-tonulls-en/LICENSES.md).

🛠️ Modified with Codex
