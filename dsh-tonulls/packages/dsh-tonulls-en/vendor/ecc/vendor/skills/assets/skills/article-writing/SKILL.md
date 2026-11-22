<!-- Generated from skills/article-writing/SKILL.md at 25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b; edit the pinned source or generator instead. -->
# DSH skill adaptation

Use this instruction only when the user explicitly invokes its `/ecc-*` command. It runs in the current DSH session and does not start a separate agent or process.
Use only models, tools, and integrations actually available in the current DSH session. Upstream model, tool, hook, and MCP settings are not imported.
This package contains Markdown resources only. It does not install, download, or execute upstream scripts, hooks, MCP servers, or other helpers. If the task depends on a missing helper or integration, explain the limitation instead of assuming it exists.
References to other ECC Skills, Commands, agents, or slash commands are not proof that they are included or available; verify the active catalog and current DSH session before invoking them, and explain any missing capability.
This instruction grants no permissions. Do not perform external, destructive, or other side-effecting actions unless the user requested them and current session policy allows them.

Source: https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/skills/article-writing/SKILL.md

# Article Writing

Write long-form content that sounds like an actual person with a point of view, not an LLM smoothing itself into paste.

## When to Activate

- drafting blog posts, essays, launch posts, guides, tutorials, or newsletter issues
- turning notes, transcripts, or research into polished articles
- matching an existing founder, operator, or brand voice from examples
- tightening structure, pacing, and evidence in already-written long-form copy

## Core Rules

1. Lead with the concrete thing: artifact, example, output, anecdote, number, screenshot, or code.
2. Explain after the example, not before.
3. Keep sentences tight unless the source voice is intentionally expansive.
4. Use proof instead of adjectives.
5. Never invent facts, credibility, or customer evidence.

## Voice Handling

If the user wants a specific voice, run `brand-voice` first and reuse its `VOICE PROFILE`.
Do not duplicate a second style-analysis pass here unless the user explicitly asks for one.

If no voice references are given, default to a sharp operator voice: concrete, unsentimental, useful.

## Banned Patterns

Delete and rewrite any of these:
- "In today's rapidly evolving landscape"
- "game-changer", "cutting-edge", "revolutionary"
- "here's why this matters" as a standalone bridge
- fake vulnerability arcs
- a closing question added only to juice engagement
- biography padding that does not move the argument
- generic AI throat-clearing that delays the point

## Writing Process

1. Clarify the audience and purpose.
2. Build a hard outline with one job per section.
3. Start sections with proof, artifact, conflict, or example.
4. Expand only where the next sentence earns space.
5. Cut anything that sounds templated, overexplained, or self-congratulatory.

## Structure Guidance

### Technical Guides

- open with what the reader gets
- use code, commands, screenshots, or concrete output in major sections
- end with actionable takeaways, not a soft recap

### Essays / Opinion

- start with tension, contradiction, or a specific observation
- keep one argument thread per section
- make opinions answer to evidence

### Newsletters

- keep the first screen doing real work
- do not front-load diary filler
- use section labels only when they improve scanability

## Quality Gate

Before delivering:
- factual claims are backed by provided sources
- generic AI transitions are gone
- the voice matches the supplied examples or the agreed `VOICE PROFILE`
- every section adds something new
- formatting matches the intended medium
