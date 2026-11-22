# `/ecc-data-throughput-accelerator`

定位大规模加载、backfill、ETL 和同步流程中的瓶颈，对比不同方案，并要求提供行数和时间戳完整性的证据。

## 简单请求

```text
/ecc-data-throughput-accelerator 查明事件表 backfill 速度过慢的原因，同时不牺牲数据完整性。
```

## 模板请求

```text
/ecc-data-throughput-accelerator
管道：[ingest/ETL/export/backfill]
当前数据量和耗时：[测量值]
来源和目标：[系统]
完整性/窗口限制：[条件]
可用日志/指标：[描述]
先提出安全的瓶颈测量方法；不要运行大规模操作。
```

## 详细请求

```text
/ecc-data-throughput-accelerator
在不丢失、不重复数据的前提下优化[数据流]性能。先建立基线并分解各阶段耗时，确定指标和受限测试规模。每种方案只提出一个假设，并提供可测量的收益和正确性门槛；只比较通过门槛的方案。证明中应考虑行数、时间戳范围、缺失/重复数据及重复运行行为。未经单独许可和回滚计划，不要运行 backfill、写入、导出、网络访问或修改生产系统。请提供测量方法、实际获得的结果、数据核对计算、最佳安全方案和后续步骤。
```
