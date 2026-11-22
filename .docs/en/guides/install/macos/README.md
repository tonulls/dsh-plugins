# DeepSeek Harness on macOS

Node.js, DSH, and VS Code run on your Mac. Run the commands in Terminal.

## Install dependencies

1. Install the current **Node.js LTS** using the macOS `.pkg` installer for Apple Silicon or Intel. [Node.js downloads](https://nodejs.org/en/download)
2. If Git is missing, run `xcode-select --install` to install Command Line Tools.
3. Open a new Terminal window. For a system-wide `.pkg` installation, use `sudo` for global npm operations. If you use a version manager that installs Node.js in your home directory, omit `sudo` from those operations.

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

Open the launch URL printed in the terminal in your local browser. The link can contain one-time sign-in data. Keep it in your own browser.

## DSH panel in VS Code

1. Install [VS Code](https://code.visualstudio.com/Download).
2. Download the `.vsix` from **Assets** in the [latest DSH for VS Code release](https://github.com/tonulls/dsh-vscode/releases/latest).
3. Run **Extensions: Install from VSIX...**, select the file, and click the DSH icon. Stop the manual server with `Ctrl+C` before starting from the panel.

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
