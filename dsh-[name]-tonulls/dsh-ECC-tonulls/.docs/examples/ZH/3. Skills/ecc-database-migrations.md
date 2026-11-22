# `/ecc-database-migrations`

帮助设计安全且可逆的数据库迁移：expand-contract、无锁索引、分批 backfill，以及常见迁移工具的实践。

## 简单请求

```text
/ecc-database-migrations 如何在不让应用停机的情况下重命名大型 PostgreSQL 列？
```

## 模板请求

```text
/ecc-database-migrations
数据库和工具：[PostgreSQL/Prisma/Drizzle/Kysely/Django/golang-migrate]
当前架构和数据量：[描述]
更改：[列/索引/数据]
可用性和回滚限制：[条件]
提出安全迁移步骤；不要在共享/生产数据库上执行任何操作。
```

## 详细请求

```text
/ecc-database-migrations
为[数据库、版本、工具]制定[架构/数据]更改计划；表中约有[数据量]，应用必须保持可用。考虑 expand-contract、新旧应用版本兼容性、并发建索引、分批 backfill 和进度监控。说明哪些步骤可逆，哪些回滚需要补偿迁移；列出锁定风险和停止标准。未经确认，不要应用迁移、连接数据库或修改文件。先给出计划，必要时提供 SQL/草案、预检、监控和逐步回滚流程；注明需在 staging 核实的信息。
```
