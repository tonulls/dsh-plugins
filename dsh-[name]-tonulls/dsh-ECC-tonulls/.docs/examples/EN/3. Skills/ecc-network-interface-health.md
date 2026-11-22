# ecc-network-interface-health

**Command:** `/ecc-network-interface-health`

**Purpose:** Diagnose errors and drops on router, switch, and Linux host interfaces: CRC, drops, speed/duplex mismatch, flapping, and counter trends.

## Prompts

### 1. Short Request
> /ecc-network-interface-health Analyze errors and drops on interface [name/device] from these counters: [output]. Identify likely causes and safe checks.

### 2. Template with Context
> /ecc-network-interface-health Device and OS: [model/platform]; interface: [name]; role/neighbor: [description]; speed and duplex: [values/auto]; counter timestamps: [before] and [after]. Command output: [paste]. Correlate CRC, drops, errors, link flaps, and negotiated speed; separate confirmed facts from hypotheses. Do not suggest configuration changes without a verification plan and maintenance window.

### 3. Detailed Request
> /ecc-network-interface-health Diagnose interface [device/port] with symptom [symptom] since [start time]. 1) From supplied show/ip link/ethtool outputs and logs, record link state and absolute/delta counters; do not draw conclusions from one snapshot. 2) Check for CRC/physical-layer indicators, drops/congestion, flapping, and speed/duplex negotiation at both ends if data is available. 3) Rank hypotheses and identify missing information and safe read-only checks. 4) If a change is suggested, describe risk, expected effect, post-change verification, and rollback; do not apply it. Result: brief diagnosis, “fact — value/time — interpretation” table, prioritized hypotheses, and next step.
