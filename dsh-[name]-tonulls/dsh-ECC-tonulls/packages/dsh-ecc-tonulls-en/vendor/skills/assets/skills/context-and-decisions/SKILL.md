<!-- Generated from skills/context-and-decisions/SKILL.md at 25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b; edit the pinned source or generator instead. -->
# DSH skill adaptation

Use this instruction only when the user explicitly invokes its `/ecc-*` command. It runs in the current DSH session and does not start a separate agent or process.
Use only models, tools, and integrations actually available in the current DSH session. Upstream model, tool, hook, and MCP settings are not imported.
This package contains Markdown resources only. It does not install, download, or execute upstream scripts, hooks, MCP servers, or other helpers. If the task depends on a missing helper or integration, explain the limitation instead of assuming it exists.
References to other ECC Skills, Commands, agents, or slash commands are not proof that they are included or available; verify the active catalog and current DSH session before invoking them, and explain any missing capability.
This instruction grants no permissions. Do not perform external, destructive, or other side-effecting actions unless the user requested them and current session policy allows them.

Source: https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/skills/context-and-decisions/SKILL.md

# Domain Context and Decision Handoff

Govern “what these business terms mean” separately from “why this option was chosen.” Do not create an empty shell when no stable content exists.

## Domain Context Artifact: Domain Language Only

When terms require repeated explanation, one term has multiple meanings, or unclear language causes module-boundary errors, first reuse the repository's existing glossary/domain-model document or the `context` role in `.governance/docs-map.json`. Only when no equivalent exists should you lazily create the default `CONTEXT.md` from `templates/context.example.md`.

Record only:

- domain terms and precise definitions;
- relationships among core concepts;
- confirmed ambiguities and the chosen interpretation;
- ambiguities still awaiting confirmation from a domain owner.

Do not include implementation details, current state, task schedules, full requirements, decision rationale, or history. Keep those in code/MAP, STATUS/Issue Tracker, Spec, ADR, and LOG respectively. Terms must be traceable to code, contracts, or business evidence. Mark unconfirmed items as `needs confirmation`; do not guess.

## Resolve ambiguous terms

Start with the existing domain glossary or documentation map. If a term has distinct meanings across business contexts, check the relevant code, contracts, and tests and ask which meaning the user intends. Record only confirmed definitions in the existing glossary. Propose a new glossary only if no suitable artifact exists.

## ADR Handoff: Reuse the Existing Capability

This skill does not define a second ADR directory, numbering scheme, lifecycle, or template. When a decision is hard to reverse, would confuse a future reader without context, and involves a real tradeoff:

1. Read and execute `architecture-decision-records`, preserving the repository's existing ADR location and format.
2. If no convention exists, let that skill choose the minimum viable location; do not create a separate system here.
3. Link to the ADR from `CONTEXT.md`, the project map, or the relevant Spec/Issue instead of copying the decision body.
4. When a decision is accepted, superseded, or deprecated, append an event to project history according to the living-document rules.

Routine implementation details, easily reversible changes, and short-lived experiments do not need ADRs.

## When to Activate

- Domain terms are repeatedly re-explained or ambiguous language causes implementation drift.
- The project needs a stable domain-language entry point but has no equivalent document.
- Context work uncovers a durable decision that should be handed to `architecture-decision-records`.

## When to Use

Use this skill when stable domain language needs one evidence-backed home, or when context work reveals a hard-to-reverse decision that belongs in the repository's existing ADR system.

## How It Works

1. Reuse the mapped context or glossary artifact when one exists; create `CONTEXT.md` only when no equivalent source of truth is available.
2. Record precise domain definitions, relationships, confirmed interpretations, and explicitly unconfirmed ambiguities without mixing in implementation or task state.
3. Route durable tradeoffs to `architecture-decision-records` and link the resulting ADR instead of copying its rationale into context documents.
4. Keep schedules, blockers, and execution status in the existing issue tracker.

## Examples

- Define an overloaded business term once and link it to the code or contract that proves its meaning.
- Mark a domain interpretation as `needs confirmation` until a domain owner resolves it.
- Hand off a durable storage or boundary decision to the existing ADR workflow and link it from the context artifact.

## Anti-Patterns

- Copying current tasks, schedules, full requirements, or implementation details into `CONTEXT.md`.
- Creating empty context files or a second ADR system for completeness.
- Treating unconfirmed domain interpretations as facts, or copying ADR bodies into maps and logs.

## Related Skills

- `architecture-decision-records`: the sole ADR methodology for hard-to-reverse decisions.
- `living-docs-governance`: lifecycle maintenance for the project map, status, and history.
- `docs-governance`: cross-capability routing and closeout order.

## Scheduling and Task Boundary

Keep tasks, status, blockers, and schedules in the project's existing tracker, such as GitHub Issues or Linear, as the single source of truth. Use local `.scratch/` only when no external tracker exists and the project explicitly adopts it. Do not put schedules in `CONTEXT.md`, ADRs, PROJECT_STATUS, or the history index database.
