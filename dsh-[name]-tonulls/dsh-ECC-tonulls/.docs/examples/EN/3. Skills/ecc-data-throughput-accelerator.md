# `/ecc-data-throughput-accelerator`

Finds bottlenecks in large imports, backfills, ETL, and synchronization; compares options and requires evidence of row and timestamp completeness.

## Simple Request

```text
/ecc-data-throughput-accelerator Find why our event-table backfill is so slow without sacrificing data completeness.
```

## Template Request

```text
/ecc-data-throughput-accelerator
Pipeline: [ingest/ETL/export/backfill]
Current volume and duration: [measurements]
Source and destination: [systems]
Integrity/window constraints: [conditions]
Available logs/metrics: [description]
First suggest a safe way to measure the bottleneck; do not run bulk operations.
```

## Detailed Request

```text
/ecc-data-throughput-accelerator Optimize [data flow] with zero data loss and duplication. Start with a baseline and break down time by stage, defining metrics and a bounded test volume. For each option, state one hypothesis, measurable gain, and correctness gate; compare speed only among options that pass the gate. Evidence must account for row counts, timestamp range, gaps/duplicates, and reruns. Do not run a backfill, write, export, network operation, or production change without separate approval and a rollback plan. Provide measurement method, results (if actually obtained), data-accounting calculation, best safe option, and next steps.
```
