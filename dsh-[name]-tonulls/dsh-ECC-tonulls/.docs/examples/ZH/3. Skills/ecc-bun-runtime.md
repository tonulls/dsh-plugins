# `/ecc-bun-runtime`

帮助评估 Bun 作为 runtime、package manager、bundler 和 test runner 的适用性，在 Bun 和 Node 之间做出选择、规划迁移并考虑 Vercel 支持。适用于工程决策；不要假设所有工具天然兼容。

## 简短请求

```text
/ecc-bun-runtime 为我们的 TypeScript CLI 比较 Bun 和 Node：考虑 runtime API、测试及依赖兼容性。
```

## 模板

```text
/ecc-bun-runtime 评估[在项目中使用 Bun/从 Node 迁移]的方案：[应用类型、版本和关键依赖]。考虑 Bun 所需角色：[runtime / package manager / bundler / test runner]、实际兼容性、Vercel [如适用]及迁移成本。不要运行安装操作或修改 lockfile。
```

## 分步请求

```text
/ecc-bun-runtime 为[项目/场景]制定使用 Bun 的决策。当前环境：[Node/Bun 版本、操作系统/CI、framework、hosting]。标准：[速度、兼容性、可复现性、团队支持能力]。
1. 区分不同角色：应用执行、软件包安装、构建和测试；分别检查每项要求和限制。
2. 将项目当前版本及依赖与可用兼容性证据进行对照。不要将某个版本的结果泛化到所有版本。
3. 如果目标托管平台是 Vercel，针对指定运行方式单独检查其 runtime/build 限制；没有证据时不要承诺支持。
4. 提出渐进式试迁移计划以及停止/回滚标准。未经同意，不要安装、访问网络或更改配置。

结果：按四种角色整理对比表、风险和未知项、附条件的建议及最小验证计划。不要编造 benchmark 或兼容性结果。
```
