# 提示词示例：`/ecc-ruby-reviewer`

**调用命令：** `/ecc-ruby-reviewer`

## 用途

审查 Ruby/Rails 代码的语言惯用性、Active Record 安全性、Rails 默认安全设置及 RSpec/Minitest 质量。只做审查。

## 1. 简短请求

```text
/ecc-ruby-reviewer 对 {路径} 中的 Ruby/Rails 更改进行只读审查。
```

## 2. 模板请求

```text
/ecc-ruby-reviewer 针对场景 {场景}，对 Ruby/Rails 更改 {路径/diff} 进行只读审查。检查 Active Record 查询安全和 N+1 问题、Rails 保护措施、错误处理及相关测试。指出有把握的缺陷，并注明文件/行和建议；不要修改代码。
```

## 3. 详细请求

```text
/ecc-ruby-reviewer 请针对任务 {场景/更改} 执行分步分析。

1. 记录初始背景，仅研究相关材料。
2. 检查此角色关注的关键风险和标准：Ruby/Rails 代码的语言惯用性、Active Record 安全性、Rails 默认安全设置及 RSpec/Minitest 质量。只做审查。
3. 区分已确认的事实与推测，并指出缺失的信息。
4. 生成按优先级排序的结果，附上证据、验证限制和具体后续步骤。

边界：不要泄露机密或个人数据；未经明确许可，不要执行网络操作、安装软件包、部署或运行潜在危险的命令。分析期间不要修改文件；任何更改、删除、启动循环或应用配置的操作，都必须先协商并等待我的确认。
```
