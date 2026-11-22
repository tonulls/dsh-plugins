# DSH Web Search Plugin DSH reference package

A reference Skill for understanding and planning DSH Web Search Plugin configuration and search workflows. Automatic selection is off by default for each Agent; use `/dsh-web-search-plugin-tonulls on` and `/dsh-web-search-plugin-tonulls off`. Direct invocation remains available.

## Install

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-web-search-plugin-tonulls/packages/dsh-web-search-plugin-tonulls-en'
```

## Use

Invoke `/web-search-setup` directly, or enable selection for the current Agent with `/dsh-web-search-plugin-tonulls on`. Use `/dsh-web-search-plugin-tonulls off` to turn it off.

## License

Original materials and license notices are included in this package. Installation is adapted for DSH.

🛠️ Modified with Codex
