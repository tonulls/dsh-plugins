# 5. 在 Ubuntu VPS 的 DSH 配置环境中安装 Codex Connect

Codex Connect 使用 ChatGPT 授权添加 `openai-codex` 提供方。请以普通 SSH 用户安装到目标 DSH 配置环境。如果使用其他配置环境，请替换 `web`。

## 安装

```bash
dsh --version
npm view dsh-codex-connect@latest version engines.node
```

在[兼容性矩阵](https://github.com/franksong2702/dsh-codex-connect/blob/main/verified-compatibility.json)的 `verifiedDshVersions` 中找到当前 DSH 版本，选择与该版本匹配的最新已发布插件。如果尚无已发布的兼容版本，请跳过安装。

```bash
read -r -p '兼容的 Codex Connect 版本：' codex_connect_version
if [ -n "$codex_connect_version" ] &&
   npm view "dsh-codex-connect@$codex_connect_version" version; then
  dsh plugin --profile web add "dsh-codex-connect@$codex_connect_version"
fi
```

如果 DSH 正在运行，请重启，然后检查软件包是否出现在目标配置环境中。

```bash
dsh plugin --profile web list
```

## 更新

根据已安装或准备升级到的 DSH 版本重新选择插件版本，安装后重启 DSH。

## 登录和验证

如果账号支持设备码登录，可从 VPS 发起登录流程。

```bash
dsh plugin --profile web exec dsh-codex-connect login --device-code
```

在 Windows 浏览器打开授权页面并完成登录。请妥善保管授权链接和一次性验证码。然后在 DSH 中选择 `openai-codex`。

```bash
dsh plugin --profile web exec dsh-codex-connect doctor --json
dsh plugin --profile web exec dsh-codex-connect status
```

`doctor` 检查本地配置，`status` 显示登录状态。在 DSH 中发送一条简短的测试请求，验证模型访问。

## 退出登录和卸载

如要暂停使用 Codex，可切换到其他提供方并保留登录状态。如果要移除 Codex Connect 保存的授权，请运行：

```bash
dsh plugin --profile web exec dsh-codex-connect logout
```

如要卸载插件，请运行以下命令并重启 DSH。如果还要清除保存的授权，请先退出登录。

```bash
dsh plugin --profile web remove dsh-codex-connect
```

[Codex Connect 安装和登录指南](https://github.com/franksong2702/dsh-codex-connect/blob/main/INSTALL.md) · [npm 已发布版本](https://www.npmjs.com/package/dsh-codex-connect?activeTab=versions)
