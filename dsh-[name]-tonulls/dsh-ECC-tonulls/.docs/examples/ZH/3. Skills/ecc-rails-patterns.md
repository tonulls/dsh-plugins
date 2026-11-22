# `/ecc-rails-patterns`

**用途：**Ruby on Rails 7.1+ 和 8.x 应用实践：目录结构、使用 service objects 的精简控制器、独立的表单对象和查询对象、符合惯用写法的 ActiveRecord、后台任务、ViewComponent、Hotwire 及 Rails 8 的 Solid 技术栈。适用于开发或审查 Rails 应用、控制器、模型、服务、任务和视图。

## 简短提示词

```text
/ecc-rails-patterns 检查 Rails 控制器和模型中的 N+1、职责混杂和项目模式不一致问题。
```

## 模板提示词

```text
/ecc-rails-patterns
背景：[Rails 模块路径、版本、使用场景和仓库已采用的模式]。
任务：为 [目标组件/结果] 检查 Rails 应用架构或实现。
重点：精简控制器、service/query/form objects、ActiveRecord、jobs、ViewComponent/Hotwire，以及适用时的 Rails Solid 技术栈。
限制：仅分析；不要修改文件或数据，也不要运行外部/破坏性检查。
格式：[简要结论、证据/理由、风险和下一步]。
```

## 详细提示词

```text
/ecc-rails-patterns
为 [目标系统/场景] 执行任务“检查 Rails 应用架构或实现”。
1. 明确目标、范围、初始信息和结果标准；列出缺失背景。
2. 仅研究与请求相关的材料并核查：精简控制器、service/query/form objects、ActiveRecord、jobs、ViewComponent/Hotwire，以及适用时的 Rails Solid 技术栈。
3. 根据事实提出发现或备选方案，注明风险、验证标准和未解决问题；不要应用任何更改。
4. 根据给定标准检查结论，注明证据、假设和未核实事项。

限制：仅分析；不要修改文件或数据，也不要运行外部/破坏性检查。
按以下格式整理结果：[预期格式]。不要编造事实；如需执行未预期的副作用操作，请暂停并征求同意。
```
