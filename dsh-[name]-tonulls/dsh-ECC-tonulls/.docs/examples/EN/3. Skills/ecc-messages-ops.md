# `/ecc-messages-ops`

**Purpose:** Fact-checks messages: reads conversations and direct messages, helps locate a recent one-time code, reviews a thread before replying, and confirms which message source was checked. Use for message-related tasks.

## Short Prompt
```text
/ecc-messages-ops Review this conversation and draft a reply; do not send anything or reveal one-time codes.
```

## Template Prompt
```text
/ecc-messages-ops
Context: [project path / snippet / system / symptom].
Task: review the supplied conversation and draft, but do not send, a reply for [goal or subject].
Focus: message recency and source, thread context, personal data, and verification codes.
Constraints: Use only supplied and authorized messages; do not send replies or reveal codes, secrets, or unnecessary personal data.
Output format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt
```text
/ecc-messages-ops
Perform the task “review the supplied conversation and draft, but do not send, a reply” for [project/component/scenario].
1. Record baseline information, scope, and success criteria; list missing information.
2. Study only relevant context and assess message recency and source, thread context, personal data, and verification codes.
3. Form conclusions and next steps without applying changes or presenting assumptions as facts.
4. Compare results with criteria, cite evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Use only supplied and authorized messages; do not send replies or reveal codes, secrets, or unnecessary personal data.
Include outcome, important findings/actions, unverified areas, risks, and safe next steps.
```
