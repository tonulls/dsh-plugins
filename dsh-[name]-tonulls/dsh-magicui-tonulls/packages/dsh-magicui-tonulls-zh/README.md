# Magic UI DSH reference package

用于评估 Magic UI 组件和动画是否适合项目的参考 Skill。 自动选择默认在每个 Agent 中关闭；使用 `/dsh-magicui-tonulls on` 和 `/dsh-magicui-tonulls off` 切换。仍可直接调用 Skill。

## 安装

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-magicui-tonulls/packages/dsh-magicui-tonulls-zh'
```

## 使用

直接调用 `/magic-ui-review`，或使用 `/dsh-magicui-tonulls on` 为当前 Agent 启用自动选择。使用 `/dsh-magicui-tonulls off` 关闭。

## 许可

适配许可见 [LICENSE](LICENSE)。上游和单独材料的使用条件需分别核对。

🛠️ 使用 Codex 修改
