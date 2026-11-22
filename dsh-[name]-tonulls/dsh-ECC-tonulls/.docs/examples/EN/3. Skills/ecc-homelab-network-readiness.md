# ecc-homelab-network-readiness

**Command:** `/ecc-homelab-network-readiness`

**Purpose:** Readiness checklist for homelab VLAN segmentation, local DNS filtering (Pi-hole, AdGuard Home), and WireGuard remote access. Use when planning or reviewing home-network changes—trusted/IoT/guest/admin VLAN separation, moving DHCP to a local DNS resolver, or adding VPN—before changing router, firewall, DHCP, or VPN.

## Prompts

### 1. Short Request
> /ecc-homelab-network-readiness Assess readiness for a home-network change; do not apply anything.

### 2. Template with Context
> /ecc-homelab-network-readiness Current equipment: [router/switch/AP], goal: [VLAN/DNS/VPN], critical devices: [list]. Create checks and rollback plan.

### 3. Detailed Request
> /ecc-homelab-network-readiness Prepare a readiness review for [segmentation/DHCP/DNS/VPN] change. Record the baseline topology, dependencies, and risk of losing access; suggest tests, maintenance window, and rollback. Do not connect to the network or change configuration; require explicit approval before each change. Report blocking unknowns.
