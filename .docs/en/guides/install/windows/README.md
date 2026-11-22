# DeepSeek Harness on Windows with WSL 2

The DSH CLI, Node.js, and the `web` profile run inside Ubuntu on this computer. VS Code and the browser run on Windows. For a separate server, see [Windows + Ubuntu VPS](../.VPS+Windows/README.md).

## Install WSL and dependencies

In an elevated PowerShell window, install Ubuntu. If Ubuntu already runs in WSL 2, open it directly.

```powershell
wsl --install -d Ubuntu
```

Restart Windows if prompted and create a Linux user on first launch. Run `wsl --list --verbose` in PowerShell to see the distribution name and WSL version. [Install WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

In **Ubuntu**, follow the [Linux dependency setup](../linux/README.md#install-dependencies). Run the remaining Bash commands in Ubuntu. Use `sudo` for global npm packages and your regular Linux account for DSH.

## Install DeepSeek Harness

Compare the installed Node.js version with the package requirements.

```bash
node --version
npm view pnpm@latest engines.node
npm view @deepseek-ai/dsh@latest version engines.node
```

If it meets both requirements, install the current npm releases.

```bash
sudo npm install --global pnpm@latest @deepseek-ai/dsh@latest
```

The npm `latest` tag can point to a prerelease. [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## Start and verify

```bash
command -v node npm pnpm git dsh
dsh --version
dsh plugin --profile web list
dsh web --host 127.0.0.1 --no-open
```

Open the loopback launch URL printed in Ubuntu in your Windows browser. [WSL networking](https://learn.microsoft.com/en-us/windows/wsl/networking) The link can contain one-time sign-in data. Keep it in your own browser.

## DSH panel in VS Code

1. Install [VS Code for Windows](https://code.visualstudio.com/Download) and Microsoft's **WSL** extension.
2. Open your project in a **WSL: Ubuntu** window. You can run `code .` from the Ubuntu project directory. [VS Code with WSL](https://code.visualstudio.com/docs/remote/wsl)
3. Download the `.vsix` from **Assets** in the [latest release](https://github.com/tonulls/dsh-vscode/releases/latest) and use **Extensions: Install from VSIX...**. Verify that the extension is installed in **WSL: Ubuntu**.
4. Enable `dsh.remote.enabled` in the remote window, run **Developer: Reload Window**, and click the DSH icon. Stop the manual server with `Ctrl+C` before starting from the panel.

## Codex Connect

For `openai-codex`, compare `dsh --version` with the [verified compatibility matrix](https://github.com/franksong2702/dsh-codex-connect/blob/main/verified-compatibility.json). Use `npm view dsh-codex-connect@latest version engines.node` to inspect the current release. Enter the newest published version verified for your installed DSH. If no matching release is published, skip installation.

```bash
printf 'Codex Connect version: '
read -r codex_connect_version
if [ -n "$codex_connect_version" ] &&
   npm view "dsh-codex-connect@$codex_connect_version" version; then
  dsh plugin --profile web add "dsh-codex-connect@$codex_connect_version"
fi
```

Restart DSH and sign in to ChatGPT from the Codex Connect settings, then select `openai-codex`. Use `dsh plugin --profile web list` and `dsh --profile web --dump-config` to verify the package and the `llm-openai-codex` entry. [Codex Connect guide](https://github.com/franksong2702/dsh-codex-connect/blob/main/INSTALL.md)

## Install dsh-tonulls

```bash
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-tonulls/packages/dsh-tonulls-en'
```

Restart DSH. Use `/dsh-tonulls on` or `/dsh-tonulls off` to toggle automatic skill selection for the current Agent. [Bundle documentation](../../../../../dsh-tonulls/.docs/en/README.md)

## Update

1. Update Node.js LTS through the same installation channel. If you use Codex Connect, check Node.js requirements and compatibility with the target DSH release first.
2. Repeat `sudo npm install --global pnpm@latest @deepseek-ai/dsh@latest` and check `dsh --version`.
3. Select the latest compatible Codex Connect release again. For dsh-tonulls, repeat the GitHub installation command.
4. Download the latest VSIX and reinstall it in the appropriate VS Code window.

## Stop and uninstall

Press `Ctrl+C` in the terminal that started DSH, or run **DSH: Stop Service** in VS Code for a service started by the extension.

To delete saved ChatGPT authorization, sign out in Codex Connect before uninstalling it. Run only the commands for packages you want to remove.

```bash
dsh plugin --profile web remove dsh-codex-connect
dsh plugin --profile web remove dsh-tonulls-en
sudo npm uninstall --global @deepseek-ai/dsh
```

Remove the extension from the **Extensions** panel. The CLI and user profile are managed separately. If other projects no longer need pnpm, remove it with `sudo npm uninstall --global pnpm`.
