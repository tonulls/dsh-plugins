# `ecc-homelab-network-readiness`

**命令：** `/ecc-homelab-network-readiness`

**用途：**家庭实验室网络分段的准备情况清单，涵盖 VLAN、本地 DNS 过滤（Pi-hole、AdGuard Home）以及通过 WireGuard 远程访问。适用于规划或审查网络更改——例如划分可信、IoT、访客和管理 VLAN，将 DHCP 迁移到本地 DNS 解析器，或添加 VPN——且应在修改路由器、防火墙、DHCP 或 VPN 之前使用。

## 提示词

### 1. 简短请求

> /ecc-homelab-network-readiness 评估家庭网络更改的准备情况；不要应用任何更改。

### 2. 带上下文的模板

> /ecc-homelab-network-readiness 当前设备：[路由器/交换机/AP]，目标：[VLAN/DNS/VPN]，关键设备：[列表]。制定检查和回滚计划。

### 3. 详细请求

> /ecc-homelab-network-readiness 为网络更改[分段/DHCP/DNS/VPN]准备 readiness review。记录当前拓扑、依赖关系和访问中断风险；提出测试、维护窗口和 rollback。不要连接网络或修改配置；每项更改前都必须征得明确确认。报告列出阻止继续的未知事项。
