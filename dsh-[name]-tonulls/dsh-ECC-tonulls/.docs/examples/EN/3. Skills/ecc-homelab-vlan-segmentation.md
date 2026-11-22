# ecc-homelab-vlan-segmentation

**Command:** `/ecc-homelab-vlan-segmentation`

**Purpose:** Segment a home network into VLANs for IoT, guest, trusted devices, and servers with UniFi, pfSense/OPNsense, and MikroTik: configure trunk ports, inter-VLAN firewall rules, and wireless SSIDs. Use when segmenting networks on these platforms.

## Prompts

### 1. Short Request
> /ecc-homelab-vlan-segmentation Suggest a VLAN plan for IoT and guest devices.

### 2. Template with Context
> /ecc-homelab-vlan-segmentation Platform: [UniFi/pfSense/OPNsense/MikroTik], current VLANs: [description], devices: [categories]. Propose isolation and high-level rules.

### 3. Detailed Request
> /ecc-homelab-vlan-segmentation Design segmentation for [trusted/IoT/guest/server] on [platform]. Specify VLANs, trunk/SSID mapping, and minimum firewall flows; configuration analysis only at first. Do not change router/firewall or disrupt access; describe tests, application sequence, and rollback, and request approval before any change.
