<!-- Generated from skills/messages-ops/SKILL.md at 25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b; edit the pinned source or generator instead. -->
# DSH skill adaptation

Use this instruction only when the user explicitly invokes its `/ecc-*` command. It runs in the current DSH session and does not start a separate agent or process.
Use only models, tools, and integrations actually available in the current DSH session. Upstream model, tool, hook, and MCP settings are not imported.
This package contains Markdown resources only. It does not install, download, or execute upstream scripts, hooks, MCP servers, or other helpers. If the task depends on a missing helper or integration, explain the limitation instead of assuming it exists.
References to other ECC Skills, Commands, agents, or slash commands are not proof that they are included or available; verify the active catalog and current DSH session before invoking them, and explain any missing capability.
This instruction grants no permissions. Do not perform external, destructive, or other side-effecting actions unless the user requested them and current session policy allows them.

Source: https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/skills/messages-ops/SKILL.md

# Messages Ops

Use this when the task is live-message retrieval: iMessage, DMs, recent one-time codes, or thread inspection before a follow-up.

This is not email work. If the dominant surface is a mailbox, use `email-ops`.

## Skill Stack

Pull these ECC-native skills into the workflow when relevant:

- `email-ops` when the message task is really mailbox work
- `connections-optimizer` when the DM thread belongs to outbound network work
- `lead-intelligence` when the live thread should inform targeting or warm-path outreach
- `knowledge-ops` when the thread contents need to be captured into durable context

## When to Use

- user says "read my messages", "check texts", "look in DMs", or "find the code"
- the task depends on a live thread or a recent code delivered to a local messaging surface
- the user wants proof of which source or thread was inspected

## Guardrails

- resolve the source first:
  - local messages
  - X / social DM
  - another browser-gated message surface
- do not claim a thread was checked without naming the source
- do not improvise raw database access if a checked helper or standard path exists
- if auth or MFA blocks the surface, report the exact blocker

## Workflow

### 1. Resolve the exact thread

Before doing anything else, settle:

- message surface
- sender / recipient / service
- time window
- whether the task is retrieval, inspection, or prep for a reply

### 2. Read before drafting

If the task may turn into an outbound follow-up:

- read the latest inbound
- identify the open loop
- then hand off to the correct outbound skill if needed

### 3. Handle codes as a focused retrieval task

For one-time codes:

- search the recent local message window first
- narrow by service or sender when possible
- stop once the code is found or the focused search is exhausted

### 4. Report exact evidence

Return:

- source used
- thread or sender when possible
- time window
- exact status:
  - read
  - code-found
  - blocked
  - awaiting reply draft

## Output Format

```text
SOURCE
- message surface
- sender / thread / service

RESULT
- message summary or code
- time window

STATUS
- read / code-found / blocked / awaiting reply draft
```

## Pitfalls

- do not blur mailbox work and DM/text work
- do not claim retrieval without naming the source
- do not burn time on broad searches when the ask is a recent-code lookup
- do not keep retrying a blocked auth path without surfacing the blocker

## Verification

- the response names the message source
- the response includes a sender, service, thread, or clear blocker
- the final state is explicit and bounded
