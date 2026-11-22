# 1. Connect to the VPS from VS Code on Windows

## Install

1. Download the current Windows User Installer for x64 or Arm64 and install VS Code. [VS Code downloads](https://code.visualstudio.com/Download)
2. Check OpenSSH from Windows PowerShell. If it is missing, add **OpenSSH Client** under Windows Optional Features and reopen PowerShell.

```powershell
ssh -V
```

3. Install **Remote - SSH** by Microsoft from the VS Code Extensions panel.
4. Create an SSH key if you do not already have one for the VPS. Keep the private key on Windows.

```powershell
ssh-keygen -t ed25519 -C "vscode-vps"
```

Add the public `id_ed25519.pub` key to your SSH account using the provider console. If password access is available, you can append it from PowerShell after replacing the user and server placeholders.

```powershell
Get-Content "$env:USERPROFILE\.ssh\id_ed25519.pub" | ssh YOUR_LINUX_USER@VPS_IP_OR_DOMAIN "umask 077; mkdir -p ~/.ssh; cat >> ~/.ssh/authorized_keys"
```

5. Add the following to `%USERPROFILE%\.ssh\config`, replacing the placeholders. Use a file named `config` without an extension.

```sshconfig
Host dsh-vps
    HostName VPS_IP_OR_DOMAIN
    User YOUR_LINUX_USER
    IdentityFile ~/.ssh/id_ed25519
```

Confirm the server fingerprint with your provider when connecting for the first time.

## Update

Use **Help → Check for Updates** for VS Code and the **Extensions** panel for Remote - SSH. VS Code Server is managed automatically on reconnect.

## Connect and verify

Test the connection in Windows PowerShell first, then type `exit`.

```powershell
ssh dsh-vps
```

Run **Remote-SSH: Connect to Host...**, select `dsh-vps`, and open your project on the server. Open a terminal in the **SSH: dsh-vps** window.

```bash
hostname
uname -a
```

The host name should match the VPS, and `uname` should report Linux.

## Disconnect and uninstall

Use **File → Close Remote Connection** to close the SSH session. Stop DSH separately if required. Uninstall **Remote - SSH** from the Windows Extensions panel when you no longer need it. Revoke the matching public key on the server if you are retiring this connection.

[Official Remote SSH guide](https://code.visualstudio.com/docs/remote/ssh)
