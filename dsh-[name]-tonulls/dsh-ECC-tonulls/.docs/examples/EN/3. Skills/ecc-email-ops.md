# `/ecc-email-ops`

Helps triage email using actual data, draft messages, verify sending, and safely manage follow-ups when relevant email tools are available.

## Simple Request

```text
/ecc-email-ops Summarize unread emails about the project and suggest which to answer first; do not send anything.
```

## Template Request

```text
/ecc-email-ops
Goal: [triage inbox/draft reply/verify sending]
Folder or period: [scope]
Selection criteria: [subject/sender]
Reply style: [description]
First report which sources were checked; do not send emails without my approval.
```

## Detailed Request

```text
/ecc-email-ops Handle email task [goal] within [folder/dates/senders]. Use only an explicitly available email tool, list the sources actually checked, and do not claim to have reviewed others. First group messages by topic and urgency, then draft replies with recipients and factual context. Do not reveal one-time codes/secrets, follow links, or send/archive/delete/move emails without separate approval for the exact action. For follow-up, verify the actual state of sent emails if the tool allows it. Result: sources checked, summary, drafts, unresolved questions; take any actions only after approval.
```
