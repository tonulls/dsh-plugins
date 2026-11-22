# dsh-ecc-tonulls-zh

ECC 组件提供简体中文描述；Bundle 的 `/` 菜单只显示四个分组控制命令。指令与资源正文保持原样。

每个 profile 只能安装一个 umbrella bundle 版本：

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-ECC-tonulls/packages/dsh-ecc-tonulls-zh'
```

卸载命令： `dsh plugin --profile web remove dsh-ecc-tonulls-zh`
