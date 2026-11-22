# DSH Web Search Plugin DSH reference package

用于了解和规划 DSH Web Search Plugin 配置及搜索流程的参考 Skill。 自动选择默认在每个 Agent 中关闭；使用 `/dsh-web-search-plugin-tonulls on` 和 `/dsh-web-search-plugin-tonulls off` 切换。仍可直接调用 Skill。

## 安装

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-web-search-plugin-tonulls/packages/dsh-web-search-plugin-tonulls-zh'
```

## 使用

直接调用 `/web-search-setup`，或使用 `/dsh-web-search-plugin-tonulls on` 为当前 Agent 启用自动选择。使用 `/dsh-web-search-plugin-tonulls off` 关闭。

## 许可

适配许可见 [LICENSE](LICENSE)。上游和单独材料的使用条件需分别核对。

🛠️ 使用 Codex 修改
