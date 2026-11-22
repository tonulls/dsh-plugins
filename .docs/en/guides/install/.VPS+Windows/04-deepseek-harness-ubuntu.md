# 3. DeepSeek Harness on the Ubuntu VPS

## Install

Complete [dependency setup](03-ubuntu-vps-dependencies.md), then install DSH globally from the current npm `latest` tag.

```bash
sudo npm install --global @deepseek-ai/dsh@latest
```

```bash
command -v dsh
dsh --version
```

Run `dsh` as your regular SSH user so it uses your profile.

## Update

Check the target release and Node.js requirements with `npm view @deepseek-ai/dsh@latest version engines.node`. If you use Codex Connect, check for a published match before updating. [Compatibility matrix](https://github.com/franksong2702/dsh-codex-connect/blob/main/verified-compatibility.json)

```bash
sudo npm install --global @deepseek-ai/dsh@latest
```

## Start and verify

Start from the [VS Code panel](02-dsh-vscode-remote.md) or keep an SSH terminal open and start the Web UI manually.

```bash
dsh web
```

Use the startup URL through SSH port forwarding. Keep the DSH service on loopback and use the authorization link only in your own browser.

```bash
dsh --version
command -v dsh
whoami
hostname
```

Confirm the VPS user and CLI version, then open the DSH panel or forwarded Web UI.

## Stop and uninstall

For a manual start, press `Ctrl+C` in its terminal. For the extension, run **DSH: Stop Service**. Closing the SSH window closes its tunnel.

Remove [Codex Connect](05-dsh-codex-connect-ubuntu.md) first if installed and no longer needed. Then remove the global DSH CLI. User profiles and project files are stored separately.

```bash
sudo npm uninstall --global @deepseek-ai/dsh
```

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) · [npm package](https://www.npmjs.com/package/@deepseek-ai/dsh)
