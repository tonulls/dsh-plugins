# 在 Windows 和 Ubuntu VPS 上使用 DeepSeek Harness

VS Code 和浏览器运行在 Windows。Remote - SSH 会在 VPS 上安装 VS Code Server。DSH、插件和项目文件位于 VPS。

## 开始之前

- VPS 应运行受支持的 Ubuntu Server LTS，并提供具有 `sudo` 权限的普通 SSH 用户。先按服务商的说明配置 SSH 访问。
- 在服务商的防火墙中允许来自您的地址的 SSH 连接。DSH 保持监听回环地址，通过 SSH 访问面板。

## 安装顺序

1. [在 Windows 上安装 VS Code 并连接 VPS](01-vscode-windows.md)。
2. [在 VPS 上安装 Node.js、npm、pnpm、Git 和 SSH](03-ubuntu-vps-dependencies.md)。
3. [在 VPS 上安装 DeepSeek Harness](04-deepseek-harness-ubuntu.md)。
4. [在 SSH 主机上安装 DSH for VS Code](02-dsh-vscode-remote.md)。
5. [在 DSH 配置环境中安装 Codex Connect](05-dsh-codex-connect-ubuntu.md)。

## 发布渠道

使用当前 Node.js LTS，以及 pnpm 和 DSH 的 npm `latest` 标签。VSIX 从 [GitHub 最新发行版](https://github.com/tonulls/dsh-vscode/releases/latest)下载。Codex Connect 选择与当前 DSH 匹配的最新已发布版本。[兼容性矩阵](https://github.com/franksong2702/dsh-codex-connect/blob/main/verified-compatibility.json)

## SSH 和账号访问

在 VPS 上以 SSH 用户身份执行命令。仅在系统安装时使用 `sudo`。SSH 私钥保留在 Windows。Codex Connect 会将授权信息保存在 VPS，请使用自己控制的服务器，并妥善保管授权链接、验证码和日志。

[VS Code Remote SSH](https://code.visualstudio.com/docs/remote/ssh) · [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) · [Codex Connect](https://github.com/franksong2702/dsh-codex-connect/blob/main/INSTALL.md)
