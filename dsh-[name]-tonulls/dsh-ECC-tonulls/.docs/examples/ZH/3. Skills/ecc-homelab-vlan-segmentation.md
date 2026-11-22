# `ecc-homelab-vlan-segmentation`

**命令：** `/ecc-homelab-vlan-segmentation`

**用途：**使用 UniFi、pfSense/OPNsense 和 MikroTik 将家庭网络划分为 IoT、访客、可信设备和服务器 VLAN：配置 trunk 端口、防火墙规则及无线 SSID。适用于在这些平台上进行网络分段。

## 提示词

### 1. 简短请求

> /ecc-homelab-vlan-segmentation 为 IoT 和访客设备提出 VLAN 方案。

### 2. 带上下文的模板

> /ecc-homelab-vlan-segmentation 平台：[UniFi/pfSense/OPNsense/MikroTik]，当前 VLAN：[描述]，设备：[类别]。从整体上设计隔离方式和规则。

### 3. 详细请求

> /ecc-homelab-vlan-segmentation 为[trusted/IoT/guest/server]设计[平台]上的网络分段。注明 VLAN、trunk/SSID 映射和最小化防火墙流量；先只分析配置。不要修改路由器/防火墙或中断访问；说明测试、应用顺序和 rollback，并在任何更改前征求确认。
