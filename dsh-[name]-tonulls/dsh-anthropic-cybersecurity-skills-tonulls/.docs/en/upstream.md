# Source and adaptation

## Source

The two selected procedures are based on the community repository [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills), pinned to commit [`54a798831d2266a3ca61ce68a7acb80b81160d57`](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/commit/54a798831d2266a3ca61ce68a7acb80b81160d57). Selected files and provenance are also recorded in [`UPSTREAM.json`](../../packages/dsh-anthropic-cybersecurity-skills-tonulls/UPSTREAM.json).

The bundle includes only two substantially adapted procedures; the upstream author metadata names `mahipal`:

- `analyzing-api-gateway-access-logs` — API Gateway access-log analysis;
- `analyzing-web-server-logs-for-intrusion` — web-server access-log analysis.

## Adaptation boundaries

The procedures were rewritten for defensive, read-only triage of logs supplied by the user or explicitly authorized for analysis. Findings are heuristic and do not prove exploitation or compromise. The bundle excludes all other upstream skills, including dual-use/offensive procedures, as well as source scripts, installers, dependencies, and executable assets.

The skills do not perform active scans, transmit logs externally, read arbitrary local files, or change systems or detection rules without a separate direct request and confirmation. They add no DSH tools or permissions. Their instructions are not a sandbox; actual access is determined by the DSH profile and tools.

## License and affiliation

The upstream `LICENSE` specifies Apache-2.0 and copyright `mukul975`; the full Apache-2.0 text is included in the package along with the [attribution notice](../../packages/dsh-anthropic-cybersecurity-skills-tonulls/NOTICE.md). The adaptation is also distributed under Apache-2.0. Neither the upstream community project nor this bundle is affiliated with Anthropic PBC or claims its endorsement.
