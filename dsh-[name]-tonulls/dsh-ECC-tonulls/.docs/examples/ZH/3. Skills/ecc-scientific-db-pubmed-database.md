# `/ecc-scientific-db-pubmed-database`

帮助构建 PubMed/NCBI E-utilities 查询、检索生物医学文献、按 PMID 查找记录、获取引文并规划监测。

## 简单请求
```text
/ecc-scientific-db-pubmed-database 为[主题]设计 PubMed 检索策略，并解释查询中的关键术语。
```
## 模板请求
```text
/ecc-scientific-db-pubmed-database
问题：[研究问题]
人群/干预/结局：[如适用]
时间范围和语言：[限制]
准备可复现的 PubMed 查询和筛选标准；不要编造检索到的论文。
```
## 详细请求
```text
/ecc-scientific-db-pubmed-database
为问题[问题]准备 PubMed 检索：1) 将问题拆分为概念和 MeSH/同义词；2) 编写并解释带字段和日期的查询；3) 设定纳入/排除标准和筛选流程；4) 描述如何获取 PMID 和书目信息；5) 指出检索完整性的限制。不要提供医疗建议，也不要泄露个人数据。未经许可，不要执行网络请求；若无法访问 PubMed，只提供可复现的计划。结果包括查询、标准、检索日志字段和实际核查记录的 PMID/链接；若未执行检索则明确说明。
```
