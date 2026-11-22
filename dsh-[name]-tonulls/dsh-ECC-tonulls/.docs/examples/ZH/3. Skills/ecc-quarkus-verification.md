# `/ecc-quarkus-verification`

**用途：**Quarkus 项目验证流程：构建、静态分析（Checkstyle、PMD、SpotBugs）、测试及 JaCoCo 覆盖率、OWASP 依赖和容器安全检查、GraalVM 原生编译、health checks 及配置验证。适用于 PR 前、大型重构或依赖升级后，以及部署前。

## 简短提示词

```text
/ecc-quarkus-verification 根据配置制定 Quarkus PR 验证计划；暂时不要运行命令。
```

## 模板提示词

```text
/ecc-quarkus-verification
背景：[分支/PR、构建和测试配置、本地工具及环境限制]。
任务：为 [目标组件/结果] 检查 Quarkus 更改的 PR/release 就绪情况。
重点：build、static analysis、tests/coverage、security scans、native build、health/config checks，以及每项检查的副作用。
限制：仅分析；不要修改文件或数据，也不要运行外部/破坏性检查。
格式：[简要结论、证据/理由、风险和下一步]。
```

## 详细提示词

```text
/ecc-quarkus-verification
为 [目标系统/场景] 执行任务“检查 Quarkus 更改的 PR/release 就绪情况”。
1. 明确目标、范围、初始信息和结果标准；列出缺失背景。
2. 仅研究与请求相关的材料并核查：build、static analysis、tests/coverage、security scans、native build、health/config checks，以及每项检查的副作用。
3. 根据事实提出发现或备选方案，注明风险、验证标准和未解决问题；不要应用任何更改。
4. 根据给定标准检查结论，注明证据、假设和未核实事项。

限制：仅分析；不要修改文件或数据，也不要运行外部/破坏性检查。
按以下格式整理结果：[预期格式]。不要编造事实；如需执行未预期的副作用操作，请暂停并征求同意。
```
