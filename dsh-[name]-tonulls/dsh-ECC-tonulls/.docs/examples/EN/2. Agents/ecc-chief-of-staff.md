# `/ecc-chief-of-staff` — Prompt Examples

## Purpose

Helps triage messages from email, Slack, LINE, and Messenger: classifies them into four levels, `skip`, `info_only`, `meeting_info`, and `action_required`, and drafts replies. Sending messages and taking follow-up actions should be clearly separated from analysis.

## 1. Short Request

```text
/ecc-chief-of-staff Triage these messages, assign each one a level from skip/info_only/meeting_info/action_required, and suggest a draft reply if needed: {paste messages without secrets}
```

## 2. Template Request

```text
/ecc-chief-of-staff Triage messages from {email/Slack/LINE/Messenger} for {period}. Context and my priorities: {context}. For each message, provide its category—skip, info_only, meeting_info, or action_required—a brief reason, deadline/next step, and a draft reply if needed. Do not send anything or make commitments on my behalf.
```

## 3. Detailed Request

```text
/ecc-chief-of-staff Triage the provided messages from {channels} for {period}. Use only this user context: {priorities, schedule, acceptable tone}. Do not invent facts, promises, or availability.

1. For each message, identify the sender, subject, explicit request, deadline, and dependency; note when information is missing.
2. Assign exactly one category: skip (can be ignored), info_only (information, no action), meeting_info (meeting information), or action_required (action needed). Briefly justify the classification.
3. For `action_required`, list a specific next step and deadline only if stated or unambiguously implied. For `meeting_info`, extract the date/time and questions requiring confirmation; do not treat unconfirmed details as scheduled events.
4. Draft a separate reply where useful; preserve facts and tone, and mark unknown fields with placeholders.
5. Provide a summary of priority actions and ambiguous/incomplete messages.

Format: a “channel/message | category | reason | action/deadline” table, followed by drafts and questions. Do not send messages, reply in channels, or take follow-up actions without separate explicit approval. Do not include secrets or unnecessary personal data in the result.
```