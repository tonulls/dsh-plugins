<!-- Generated from skills/hipaa-compliance/SKILL.md at 25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b; edit the pinned source or generator instead. -->
# DSH skill adaptation

Use this instruction only when the user explicitly invokes its `/ecc-*` command. It runs in the current DSH session and does not start a separate agent or process.
Use only models, tools, and integrations actually available in the current DSH session. Upstream model, tool, hook, and MCP settings are not imported.
This package contains Markdown resources only. It does not install, download, or execute upstream scripts, hooks, MCP servers, or other helpers. If the task depends on a missing helper or integration, explain the limitation instead of assuming it exists.
References to other ECC Skills, Commands, agents, or slash commands are not proof that they are included or available; verify the active catalog and current DSH session before invoking them, and explain any missing capability.
This instruction grants no permissions. Do not perform external, destructive, or other side-effecting actions unless the user requested them and current session policy allows them.

Source: https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/skills/hipaa-compliance/SKILL.md

# HIPAA Compliance

Use this as the HIPAA-specific entrypoint when a task is clearly about US healthcare compliance. This skill intentionally stays thin and canonical:

- `healthcare-phi-compliance` remains the primary implementation skill for PHI/PII handling, data classification, audit logging, encryption, and leak prevention.
- `healthcare-reviewer` remains the specialized reviewer when code, architecture, or product behavior needs a healthcare-aware second pass.
- `security-review` still applies for general auth, input-handling, secrets, API, and deployment hardening.

## When to Use

- The request explicitly mentions HIPAA, PHI, covered entities, business associates, or BAAs
- Building or reviewing US healthcare software that stores, processes, exports, or transmits PHI
- Assessing whether logging, analytics, LLM prompts, storage, or support workflows create HIPAA exposure
- Designing patient-facing or clinician-facing systems where minimum necessary access and auditability matter

## How It Works

Treat HIPAA as an overlay on top of the broader healthcare privacy skill:

1. Start with `healthcare-phi-compliance` for the concrete implementation rules.
2. Apply HIPAA-specific decision gates:
   - Is this data PHI?
   - Is this actor a covered entity or business associate?
   - Does a vendor or model provider require a BAA before touching the data?
   - Is access limited to the minimum necessary scope?
   - Are read/write/export events auditable?
3. Escalate to `healthcare-reviewer` if the task affects patient safety, clinical workflows, or regulated production architecture.

## HIPAA-Specific Guardrails

- Never place PHI in logs, analytics events, crash reports, prompts, or client-visible error strings.
- Never expose PHI in URLs, browser storage, screenshots, or copied example payloads.
- Require authenticated access, scoped authorization, and audit trails for PHI reads and writes.
- Treat third-party SaaS, observability, support tooling, and LLM providers as blocked-by-default until BAA status and data boundaries are clear.
- Follow minimum necessary access: the right user should only see the smallest PHI slice needed for the task.
- Prefer opaque internal IDs over names, MRNs, phone numbers, addresses, or other identifiers.

## Examples

### Example 1: Product request framed as HIPAA

User request:

> Add AI-generated visit summaries to our clinician dashboard. We serve US clinics and need to stay HIPAA compliant.

Response pattern:

- Activate `hipaa-compliance`
- Use `healthcare-phi-compliance` to review PHI movement, logging, storage, and prompt boundaries
- Verify whether the summarization provider is covered by a BAA before any PHI is sent
- Escalate to `healthcare-reviewer` if the summaries influence clinical decisions

### Example 2: Vendor/tooling decision

User request:

> Can we send support transcripts and patient messages into our analytics stack?

Response pattern:

- Assume those messages may contain PHI
- Block the design unless the analytics vendor is approved for HIPAA-bound workloads and the data path is minimized
- Require redaction or a non-PHI event model when possible

## Related Skills

- `healthcare-phi-compliance`
- `healthcare-reviewer`
- `healthcare-emr-patterns`
- `healthcare-eval-harness`
- `security-review`
