# 2. Node.js, npm, pnpm, Git, and SSH on the Ubuntu VPS

Run the commands in the VPS terminal as a regular user with `sudo` access.

## Install

Prepare the Ubuntu packages and keep SSH enabled for future connections.

```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg git openssh-server
sudo systemctl enable --now ssh
```

Download the NodeSource setup script for the current Node.js LTS. Continue with APT after the setup succeeds.

```bash
node_setup=$(mktemp)
curl -fsSL https://deb.nodesource.com/setup_lts.x -o "$node_setup" && sudo bash "$node_setup"
rm -f "$node_setup"
```

```bash
sudo apt install -y nodejs
```

Check the installed Node.js version and the current npm package requirements.

```bash
node --version
npm --version
```

```bash
npm view @deepseek-ai/dsh@latest engines.node
npm view dsh-codex-connect@latest engines.node
npm view pnpm@latest engines.node
```

Install pnpm system-wide so that SSH sessions and VS Code Server can find it. Run DSH profile commands as your regular user.

```bash
sudo npm install --global pnpm@latest
```

## Update

```bash
sudo apt update
sudo apt install --only-upgrade nodejs git openssh-server
sudo npm install --global pnpm@latest
```

APT updates Node.js within the configured branch. To switch to a newer LTS branch, check application requirements and rerun the NodeSource setup for LTS. Reconnect VS Code to refresh its environment after updating.

## Verify

```bash
whoami
hostname
cat /etc/os-release
node --version
npm --version
pnpm --version
git --version
command -v node npm pnpm git
systemctl is-active ssh
```

Check that the host is your VPS, your user is the profile owner, the tools are on `PATH`, and SSH is active.

## Disconnect and uninstall

Close the VS Code remote connection to end your session. Keep the SSH service running while it is your route into the VPS. Remove DSH and its plugins before removing their dependencies.

```bash
sudo npm uninstall --global pnpm
```

For complete NodeSource removal, follow the vendor procedure. Remove SSH Server only when you have another way to reach the VPS.

[NodeSource](https://github.com/nodesource/distributions) · [Node.js downloads](https://nodejs.org/en/download) · [pnpm installation](https://pnpm.io/installation)
