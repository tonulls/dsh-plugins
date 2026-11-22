# 4. 在 Windows 和 Ubuntu VPS 上使用 DSH for VS Code

Windows 客户端显示面板。扩展在 SSH 主机上运行，并在那里启动 DSH。请先完成 [SSH 设置](01-vscode-windows.md)和 [DSH 安装](04-deepseek-harness-ubuntu.md)。

## 安装

1. 从 **Assets** 下载 `.vsix`，并检查该发行版对 DSH 的要求。[最新发行版](https://github.com/tonulls/dsh-vscode/releases/latest)
2. 在 VS Code 中运行 **Extensions: Install from VSIX...** 并选择文件。
3. 连接 `dsh-vps`，在扩展面板点击 **Install in SSH: dsh-vps**。确认 DSH for VS Code 已安装在 SSH 主机上。
4. 在远程设置中启用 `dsh.remote.enabled`，然后运行 **Developer: Reload Window**。

## 更新

下载当前 VSIX，在 **SSH: dsh-vps** 中更新扩展。如果也使用 Windows 本地副本，请在本地窗口更新。随后重新加载 SSH 窗口。

## 启动和验证

在 **SSH: dsh-vps** 中打开项目，并在终端检查 CLI。

```bash
command -v dsh
dsh --version
```

点击 DSH 图标并确认面板可以加载。DSH 端口仅供本地和 SSH 隧道访问。如果远程扩展主机的 `PATH` 中没有 DSH，请在安装 CLI 后重新连接。可用 **DSH: Show Logs** 排查问题，分享日志前先检查其中是否包含授权信息。

## 停止和卸载

使用 **DSH: Stop Service** 停止扩展启动的服务。**File → Close Remote Connection** 用于关闭 SSH 连接。如果安装了 Bridge 且不再需要，请先执行 **DSH: Uninstall Bridge**。在 **SSH: dsh-vps** 中卸载扩展，按需另行卸载 Windows 副本。

[扩展使用指南](https://github.com/tonulls/dsh-vscode/blob/tonulls/docs/user-guide.ru.md)
