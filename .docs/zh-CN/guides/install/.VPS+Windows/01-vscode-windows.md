# 1. 在 Windows 上使用 VS Code 连接 VPS

## 安装

1. 下载与 x64 或 Arm64 匹配的当前 Windows User Installer，安装 VS Code。[VS Code 下载](https://code.visualstudio.com/Download)
2. 在 Windows PowerShell 中检查 OpenSSH。如果系统找不到该命令，请在 Windows 的「可选功能」中安装 **OpenSSH Client**，然后重新打开 PowerShell。

```powershell
ssh -V
```

3. 在 VS Code 的扩展面板中安装 Microsoft 的 **Remote - SSH**。
4. 如果还没有用于该 VPS 的 SSH 密钥，请创建一对密钥。私钥保留在 Windows。

```powershell
ssh-keygen -t ed25519 -C "vscode-vps"
```

在服务商控制台中，将公钥 `id_ed25519.pub` 添加至 SSH 用户。如果服务器仍允许密码登录，也可在 PowerShell 中替换用户名和服务器地址后执行以下命令。

```powershell
Get-Content "$env:USERPROFILE\.ssh\id_ed25519.pub" | ssh YOUR_LINUX_USER@VPS_IP_OR_DOMAIN "umask 077; mkdir -p ~/.ssh; cat >> ~/.ssh/authorized_keys"
```

5. 在 `%USERPROFILE%\.ssh\config` 中添加以下配置并替换占位符。文件名为 `config`，不带扩展名。

```sshconfig
Host dsh-vps
    HostName VPS_IP_OR_DOMAIN
    User YOUR_LINUX_USER
    IdentityFile ~/.ssh/id_ed25519
```

首次连接时，通过服务商核对服务器指纹。

## 更新

使用 **Help → Check for Updates** 更新 VS Code，并在 **Extensions** 面板更新 Remote - SSH。重新连接时，VS Code 会自动管理服务器组件。

## 连接和验证

先在 Windows PowerShell 中测试连接，结束后输入 `exit`。

```powershell
ssh dsh-vps
```

在 VS Code 中运行 **Remote-SSH: Connect to Host...**，选择 `dsh-vps`，并打开服务器上的项目。在 **SSH: dsh-vps** 窗口打开终端。

```bash
hostname
uname -a
```

主机名应与 VPS 一致，`uname` 应显示 Linux。

## 断开连接和卸载

用 **File → Close Remote Connection** 结束 SSH 会话。如需停止 DSH，请单独操作。不再使用 Remote - SSH 时，可在 Windows 的扩展面板卸载。若停用此连接，可在服务器上撤销对应公钥。

[Remote SSH 官方指南](https://code.visualstudio.com/docs/remote/ssh)
