# 2. 在 Ubuntu VPS 上安装 Node.js、npm、pnpm、Git 和 SSH

在 VPS 终端中，以具有 `sudo` 权限的普通用户执行命令。

## 安装

安装 Ubuntu 软件包并保持 SSH 服务启用，以便后续连接。

```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg git openssh-server
sudo systemctl enable --now ssh
```

下载 NodeSource 当前 Node.js LTS 的配置脚本。配置成功后再通过 APT 安装。

```bash
node_setup=$(mktemp)
curl -fsSL https://deb.nodesource.com/setup_lts.x -o "$node_setup" && sudo bash "$node_setup"
rm -f "$node_setup"
```

```bash
sudo apt install -y nodejs
```

检查已安装的 Node.js 版本，以及当前 npm 软件包的版本要求。

```bash
node --version
npm --version
```

```bash
npm view @deepseek-ai/dsh@latest engines.node
npm view dsh-codex-connect@latest engines.node
npm view pnpm@latest engines.node
```

全局安装 pnpm，使 SSH 会话和 VS Code Server 都能找到它。以普通用户运行 DSH 配置环境相关命令。

```bash
sudo npm install --global pnpm@latest
```

## 更新

```bash
sudo apt update
sudo apt install --only-upgrade nodejs git openssh-server
sudo npm install --global pnpm@latest
```

APT 在已配置的分支内更新 Node.js。如需切换到更新的 LTS，先检查应用要求，再重新执行 NodeSource 的 LTS 配置步骤。更新后重新连接 VS Code，使其读取新的环境。

## 验证

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

确认主机是目标 VPS，当前用户是配置环境的所有者，相关工具位于 `PATH` 中，并且 SSH 正在运行。

## 断开连接和卸载

关闭 VS Code 远程连接即可结束会话。如果仍依赖 SSH 访问 VPS，请保持服务运行。卸载依赖前，应先卸载 DSH 及其插件。

```bash
sudo npm uninstall --global pnpm
```

如需完整移除 NodeSource，请按其官方步骤操作。仅在已有其他 VPS 访问方式时卸载 SSH Server。

[NodeSource](https://github.com/nodesource/distributions) · [Node.js 下载](https://nodejs.org/en/download) · [安装 pnpm](https://pnpm.io/installation)
