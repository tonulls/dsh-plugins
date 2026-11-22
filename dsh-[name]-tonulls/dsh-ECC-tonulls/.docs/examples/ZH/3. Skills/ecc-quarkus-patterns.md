# `/ecc-quarkus-patterns`

**用途：**采用 Camel 进行消息处理的 Quarkus 3.x LTS 架构实践：REST API 设计、CDI 服务、通过 Panache 访问数据以及异步处理。适用于事件驱动架构的 Java Quarkus 后端，尤其是使用 Camel 或 Panache 时。

## 简短提示词

```text
/ecc-quarkus-patterns 检查采用[Camel/Panache]的 Quarkus 服务结构，并提出改进建议，不要修改文件。
```

## 模板提示词

```text
/ecc-quarkus-patterns
背景：[模块/endpoint、版本、所用 extensions 和预期数据流]。
任务：为 [目标组件/结果] 检查或设计生产级 Quarkus 服务。
重点：Quarkus 3、REST/CDI、Panache、Camel 消息处理、异步处理和模块边界。
限制：仅分析；不要修改文件或数据，也不要运行外部/破坏性检查。
格式：[简要结论、证据/理由、风险和下一步]。
```

## 详细提示词

```text
/ecc-quarkus-patterns
为 [目标系统/场景] 执行任务“检查或设计生产级 Quarkus 服务”。
1. 明确目标、范围、初始信息和结果标准；列出缺失背景。
2. 仅研究与请求相关的材料并核查：Quarkus 3、REST/CDI、Panache、Camel 消息处理、异步处理和模块边界。
3. 根据事实提出发现或备选方案，注明风险、验证标准和未解决问题；不要应用任何更改。
4. 根据给定标准检查结论，注明证据、假设和未核实事项。

限制：仅分析；不要修改文件或数据，也不要运行外部/破坏性检查。
按以下格式整理结果：[预期格式]。不要编造事实；如需执行未预期的副作用操作，请暂停并征求同意。
```
