# 在 macOS 上安装 DeepSeek Harness

Node.js、DSH 和 VS Code 在 Mac 上运行。请在「终端」中执行命令。

## 安装依赖

1. 根据芯片类型选择 Apple Silicon 或 Intel 的 macOS `.pkg` 安装包，安装当前 **Node.js LTS**。[Node.js 下载](https://nodejs.org/en/download)
2. 如果尚未安装 Git，运行 `xcode-select --install` 安装命令行工具。
3. 打开新的终端窗口。通过 `.pkg` 在系统范围内安装时，全局 npm 操作使用 `sudo`。如果通过版本管理器在主目录中安装 Node.js，则省略这些操作中的 `sudo`。

## 安装 DeepSeek Harness

先将已安装的 Node.js 版本与软件包要求进行比较。

```bash
node --version
npm view pnpm@latest engines.node
npm view @deepseek-ai/dsh@latest version engines.node
```

满足两项要求后，安装 npm 当前发布版本。

```bash
sudo npm install --global pnpm@latest @deepseek-ai/dsh@latest
```

npm 的 `latest` 标签可能指向预发行版。[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## 启动和验证

```bash
command -v node npm pnpm git dsh
dsh --version
dsh plugin --profile web list
dsh web --host 127.0.0.1 --no-open
```

在本机浏览器中打开终端输出的启动链接。 启动链接可能包含一次性登录信息，请仅在自己的浏览器中使用。

## 在 VS Code 中使用 DSH 面板

1. 安装 [VS Code](https://code.visualstudio.com/Download)。
2. 从 [DSH for VS Code 最新发行版](https://github.com/tonulls/dsh-vscode/releases/latest)的 **Assets** 下载 `.vsix`。
3. 运行 **Extensions: Install from VSIX...**，选择文件并点击 DSH 图标。从面板启动前，先用 `Ctrl+C` 停止手动启动的服务。

## Codex Connect

如需使用 `openai-codex`，运行 `dsh --version` 并查阅[兼容性矩阵](https://github.com/franksong2702/dsh-codex-connect/blob/main/verified-compatibility.json)。通过 `npm view dsh-codex-connect@latest version engines.node` 查看当前发布版本。按提示输入与已安装 DSH 匹配的最新已发布版本。如果尚无匹配版本，请跳过安装。

```bash
printf '兼容的 Codex Connect 版本：'
read -r codex_connect_version
if [ -n "$codex_connect_version" ] &&
   npm view "dsh-codex-connect@$codex_connect_version" version; then
  dsh plugin --profile web add "dsh-codex-connect@$codex_connect_version"
fi
```

重启 DSH，在 Codex Connect 设置中登录 ChatGPT，然后选择 `openai-codex`。运行 `dsh plugin --profile web list` 和 `dsh --profile web --dump-config` 检查软件包和 `llm-openai-codex` 配置项。[Codex Connect 指南](https://github.com/franksong2702/dsh-codex-connect/blob/main/INSTALL.md)

## 安装 dsh-tonulls

```bash
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-tonulls/packages/dsh-tonulls-zh'
```

重启 DSH。使用 `/dsh-tonulls on` 或 `/dsh-tonulls off` 为当前 Agent 开启或关闭自动技能选择。[技能包文档](../../../../../dsh-tonulls/.docs/zh-CN/README.md)

## 更新

1. 通过原安装渠道更新 Node.js LTS。使用 Codex Connect 时，请先检查目标 DSH 版本的 Node.js 要求和插件兼容性。
2. 再次运行 `sudo npm install --global pnpm@latest @deepseek-ai/dsh@latest`，然后检查 `dsh --version`。
3. 重新选择最新的兼容 Codex Connect 版本。更新 dsh-tonulls 时，重新执行 GitHub 安装命令。
4. 下载最新 VSIX，在对应的 VS Code 窗口中重新安装。

## 停止和卸载

在启动 DSH 的终端按 `Ctrl+C`。如果通过扩展启动，请在 VS Code 中运行 **DSH: Stop Service**。

如果要删除保存的 ChatGPT 授权，请先在 Codex Connect 中退出登录。仅运行需要卸载的软件包对应的命令。

```bash
dsh plugin --profile web remove dsh-codex-connect
dsh plugin --profile web remove dsh-tonulls-zh
sudo npm uninstall --global @deepseek-ai/dsh
```

在 **Extensions** 面板中卸载扩展。CLI 和用户配置环境单独管理。如果其他项目不再需要 pnpm，可运行 `sudo npm uninstall --global pnpm` 卸载。
