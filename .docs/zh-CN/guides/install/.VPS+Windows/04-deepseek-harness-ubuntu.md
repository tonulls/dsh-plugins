# 3. 在 Ubuntu VPS 上安装 DeepSeek Harness

## 安装

完成[依赖安装](03-ubuntu-vps-dependencies.md)，然后使用 npm 当前的 `latest` 标签全局安装 DSH。

```bash
sudo npm install --global @deepseek-ai/dsh@latest
```

```bash
command -v dsh
dsh --version
```

以普通 SSH 用户运行 `dsh`，确保使用自己的配置环境。

## 更新

使用 `npm view @deepseek-ai/dsh@latest version engines.node` 检查目标版本及其 Node.js 要求。如果使用 Codex Connect，更新前先确认已有兼容的发布版本。[兼容性矩阵](https://github.com/franksong2702/dsh-codex-connect/blob/main/verified-compatibility.json)

```bash
sudo npm install --global @deepseek-ai/dsh@latest
```

## 启动和验证

从 [VS Code 面板](02-dsh-vscode-remote.md)启动，或在 SSH 终端手动启动 Web UI，并保持终端开启。

```bash
dsh web
```

通过 SSH 端口转发访问启动链接。让 DSH 监听回环地址，并仅在自己的浏览器中使用授权链接。

```bash
dsh --version
command -v dsh
whoami
hostname
```

确认 VPS 用户和 CLI 版本，然后打开 DSH 面板或通过端口转发访问 Web UI。

## 停止和卸载

手动启动时在对应终端按 `Ctrl+C`。通过扩展启动时运行 **DSH: Stop Service**。关闭 SSH 窗口会关闭对应隧道。

如果已安装 [Codex Connect](05-dsh-codex-connect-ubuntu.md)且不再需要，请先卸载。随后移除全局 DSH CLI。用户配置环境与项目文件单独保存。

```bash
sudo npm uninstall --global @deepseek-ai/dsh
```

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) · [npm 软件包](https://www.npmjs.com/package/@deepseek-ai/dsh)
