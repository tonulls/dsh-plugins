# `ecc-jpa-patterns`

**命令：** `/ecc-jpa-patterns`

**用途：**Spring Boot 中的 JPA/Hibernate 实践：实体和关系设计、查询优化、事务、审计、索引、分页及连接池。适用于设计实体/关系，或排查 Hibernate 查询、事务和 N+1 问题。

## 提示词

### 1. 简短请求

> /ecc-jpa-patterns 分析此 JPA 查询中 N+1 问题的原因。

### 2. 带上下文的模板

> /ecc-jpa-patterns 实体：[名称]，查询：[描述]，数据库：[类型]。检查关系、fetch、事务、索引和分页。

### 3. 详细请求

> /ecc-jpa-patterns 研究[仓库/场景]中的 JPA/Hibernate。追踪实体关系和 SQL，检查 N+1、事务边界、审计、索引、分页和连接池。不要运行迁移或修改数据。提供已证实的原因、备选方案以及用于验证的测试/测量方法。
