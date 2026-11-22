# `ecc-network-interface-health`

**命令：** `/ecc-network-interface-health`

**用途：**诊断路由器、交换机和 Linux 主机网络接口的错误和丢包：CRC、drops、duplex/speed 不匹配、链路抖动及计数器变化趋势。

## 提示词

### 1. 简短请求

> /ecc-network-interface-health 根据这些计数器分析接口[名称/设备]的错误和 drops：[输出]。指出可能原因和安全检查方法。

### 2. 带上下文的模板

> /ecc-network-interface-health 设备和操作系统：[型号/平台]；接口：[名称]；角色/邻居：[描述]；速度和 duplex：[数值/auto]；计数器时间戳：[之前]和[之后]。命令输出：[粘贴]。对照 CRC、drops、errors、link flaps 和协商速度；区分已确认事实与假设。没有验证计划和维护窗口，不要建议更改配置。

### 3. 详细请求

> /ecc-network-interface-health 分步诊断接口[设备/端口]，观察到症状[描述]，开始时间[时间]。1) 根据提供的 show/ip link/ethtool 和日志记录链路状态及绝对/增量计数器；不要仅凭单次快照下结论。2) 如果有数据，检查 CRC/物理层、drops/拥塞、链路抖动，以及两端 speed/duplex 协商情况。3) 按优先级排列假设，并注明缺失数据和安全只读检查。4) 若建议更改，描述风险、预期效果、更改后验证及回滚；不要实际应用。结果包括简短诊断、“事实 — 值/时间 — 解读”表格、优先级假设和下一步。
