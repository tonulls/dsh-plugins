# 4. DSH for VS Code with a Windows UI and an Ubuntu VPS

The Windows client displays the panel. The extension runs on the SSH host and starts DSH there. Complete [SSH setup](01-vscode-windows.md) and [DSH installation](04-deepseek-harness-ubuntu.md) first.

## Install

1. Download the `.vsix` from **Assets** and check the DSH requirements for that release. [Latest release](https://github.com/tonulls/dsh-vscode/releases/latest)
2. In VS Code, run **Extensions: Install from VSIX...** and select the file.
3. Connect to `dsh-vps` and use **Install in SSH: dsh-vps** from the Extensions panel. Confirm that DSH for VS Code is installed on the SSH host.
4. Enable `dsh.remote.enabled` in the remote settings, then run **Developer: Reload Window**.

## Update

Download the current VSIX and update the installation in **SSH: dsh-vps**. If you also use a local copy, update it in the Windows window. Reload the SSH window.

## Start and verify

Open your project in **SSH: dsh-vps** and check the CLI in its terminal.

```bash
command -v dsh
dsh --version
```

Click the DSH icon and confirm the panel loads. Keep the server port private. If DSH is missing from the remote extension host's `PATH`, reconnect after CLI installation. Use **DSH: Show Logs** for diagnostics and check logs for authorization data before sharing them.

## Stop and uninstall

Run **DSH: Stop Service** to stop a service started by the extension. **File → Close Remote Connection** closes the SSH connection. If you installed Bridge and no longer need it, run **DSH: Uninstall Bridge** first. Uninstall the extension in **SSH: dsh-vps** and remove the Windows copy separately if needed.

[Extension user guide](https://github.com/tonulls/dsh-vscode/blob/tonulls/docs/user-guide.ru.md)
