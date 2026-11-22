<!-- Generated from skills/investor-outreach/SKILL.md at 25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b; edit the pinned source or generator instead. -->
# DSH skill adaptation

Use this instruction only when the user explicitly invokes its `/ecc-*` command. It runs in the current DSH session and does not start a separate agent or process.
Use only models, tools, and integrations actually available in the current DSH session. Upstream model, tool, hook, and MCP settings are not imported.
This package contains Markdown resources only. It does not install, download, or execute upstream scripts, hooks, MCP servers, or other helpers. If the task depends on a missing helper or integration, explain the limitation instead of assuming it exists.
References to other ECC Skills, Commands, agents, or slash commands are not proof that they are included or available; verify the active catalog and current DSH session before invoking them, and explain any missing capability.
This instruction grants no permissions. Do not perform external, destructive, or other side-effecting actions unless the user requested them and current session policy allows them.

Source: https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/skills/investor-outreach/SKILL.md

# Investor Outreach

Write investor communication that is short, concrete, and easy to act on.

## When to Activate

- writing a cold email to an investor
- drafting a warm intro request
- sending follow-ups after a meeting or no response
- writing investor updates during a process
- tailoring outreach based on fund thesis or partner fit

## Core Rules

1. Personalize every outbound message.
2. Keep the ask low-friction.
3. Use proof instead of adjectives.
4. Stay concise.
5. Never send copy that could go to any investor.

## Voice Handling

If the user's voice matters, run `brand-voice` first and reuse its `VOICE PROFILE`.
This skill should keep the investor-specific structure and ask discipline, not recreate its own parallel voice system.

## Hard Bans

Delete and rewrite any of these:
- "I'd love to connect"
- "excited to share"
- generic thesis praise without a real tie-in
- vague founder adjectives
- begging language
- soft closing questions when a direct ask is clearer

## Cold Email Structure

1. subject line: short and specific
2. opener: why this investor specifically
3. pitch: what the company does, why now, and what proof matters
4. ask: one concrete next step
5. sign-off: name, role, and one credibility anchor if needed

## Personalization Sources

Reference one or more of:
- relevant portfolio companies
- a public thesis, talk, post, or article
- a mutual connection
- a clear market or product fit with the investor's focus

If that context is missing, state that the draft still needs personalization instead of pretending it is finished.

## Follow-Up Cadence

Default:
- day 0: initial outbound
- day 4 or 5: short follow-up with one new data point
- day 10 to 12: final follow-up with a clean close

Do not keep nudging after that unless the user wants a longer sequence.

## Warm Intro Requests

Make life easy for the connector:
- explain why the intro is a fit
- include a forwardable blurb
- keep the forwardable blurb under 100 words

## Post-Meeting Updates

Include:
- the specific thing discussed
- the answer or update promised
- one new proof point if available
- the next step

## Quality Gate

Before delivering:
- the message is genuinely personalized
- the ask is explicit
- the proof point is concrete
- filler praise and softener language are gone
- word count stays tight
