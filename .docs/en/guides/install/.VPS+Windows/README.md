# DeepSeek Harness with Windows and an Ubuntu VPS

VS Code and the browser run on Windows. Remote - SSH installs VS Code Server on the VPS, where DSH, plugins, and project files reside.

## Before you start

- Use a supported Ubuntu Server LTS with a regular SSH user who has `sudo` access. Start with the SSH access provided by your VPS provider.
- Allow inbound SSH from your address in the provider firewall. Keep DSH on loopback and access its panel through SSH.

## Installation order

1. [Install VS Code and connect from Windows](01-vscode-windows.md).
2. [Install Node.js, npm, pnpm, Git, and SSH on the VPS](03-ubuntu-vps-dependencies.md).
3. [Install DeepSeek Harness on the VPS](04-deepseek-harness-ubuntu.md).
4. [Install DSH for VS Code on the SSH host](02-dsh-vscode-remote.md).
5. [Install Codex Connect in the DSH profile](05-dsh-codex-connect-ubuntu.md).

## Release channels

Use current Node.js LTS and the npm `latest` tags for pnpm and DSH. Download the VSIX from the [latest GitHub release](https://github.com/tonulls/dsh-vscode/releases/latest). Choose the newest published Codex Connect version verified for your DSH. [Compatibility matrix](https://github.com/franksong2702/dsh-codex-connect/blob/main/verified-compatibility.json)

## SSH and account access

Run VPS commands as your SSH user. Use `sudo` for system installation only. Keep the SSH private key on Windows. Codex Connect saves authorization on the VPS, so use a server you control and keep authorization links, codes, and logs private.

[VS Code Remote SSH](https://code.visualstudio.com/docs/remote/ssh) · [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) · [Codex Connect](https://github.com/franksong2702/dsh-codex-connect/blob/main/INSTALL.md)
