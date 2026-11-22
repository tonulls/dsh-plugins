---
name: impeccable
description: Use for designing, shaping, critiquing, auditing, polishing, simplifying, hardening, animating, or otherwise improving a frontend interface: websites, landing pages, dashboards, product UI, components, forms, settings, onboarding, empty states, and native screens. Covers UX, hierarchy, layout, typography, color, motion, UX copy, accessibility, responsive behavior, edge cases, and documenting design systems. Not for backend-only or non-UI work.
---

# Impeccable — DSH skill adaptation

This is a DSH-native instruction skill adapted from [pbakaus/impeccable](https://github.com/pbakaus/impeccable). The plugin provides the design workflow and command intents below; it does not ship the upstream engine, CLI, browser overlay, deterministic detector, hooks, visual decision page, image generator, or specialized reviewer/documenter agents. Do not claim to run those unavailable tools. Use only tools and permissions exposed by this DSH session.

The upstream project was checked at CLI 4.8.0, revision `414603bf14c7a344edb466bb1f85690c77ce8b7d` (2026-10-26), including its DSH-specific skill. The local reference guides were reviewed against upstream b49177d32788f2dc585c42831d845dacf1ebed2c. This package remains a separate, instruction-only adaptation; it does not bundle the upstream DSH integration or runtime.

## Activation and routing

This skill is session-toggleable. When the user calls `/impeccable` with no arguments, do not make changes: inspect the current project and recommend two or three useful next actions with brief reasons, then offer the command menu. If context is insufficient, ask focused questions rather than assuming.

When the user names a command or clearly requests an action, follow that workflow. Do not auto-run a different command. Ask once if two workflows materially conflict. A planning or workflow question asks for advice, not edits, unless the user also asks for implementation.

## First understand what is true

Before design work, inspect the requested interface, relevant source files, existing project documentation, assets, tokens, components, routes and available run/test commands. Treat repository evidence as evidence—not as user approval or proof of product claims.

- Establish the user's task, audience, operating context, success condition, constraints and facts that must remain unchanged. Ask only for material unknowns not answered by the request or strong project evidence.
- Preserve confirmed product truth, behavior, content, brand commitments and project conventions. Never invent customers, evidence, testimonials, metrics, pricing or claims.
- Refinement preserves the incumbent visual identity and everything outside scope. A redesign replaces the old visual direction only when the user asks for that; preserve function and product truth.
- Missing `DESIGN.md` does not mean the project has no identity. Inspect the UI itself. Record the incumbent system only when requested or useful to the task.
- Do not create PRODUCT.md, DESIGN.md, token files or other durable project documents unless requested or needed and agreed. Avoid competing sources of truth.

Choose the visitor mode from the requested surface, not from the product category:

- **Persuade:** help the visitor understand value and act; landing, campaign, pricing. See [Reading and decision surfaces](reference/reading-and-decisions.md).
- **Operate:** help the visitor complete a task in product UI, dashboards, editors, or settings. See [Improve a product workflow](reference/operate.md).
- **Read:** help the visitor understand; documentation, article, help page. See [Reading and decision surfaces](reference/reading-and-decisions.md).
- **Experience:** the work itself is the experience; portfolio, gallery, showcase.

## Design and implementation standards

- Give the surface a clear, ownable point of view grounded in the product, audience and context. Avoid familiar AI-generated templates unless the brief or existing system calls for them.
- Make the first viewport communicate the actual purpose and mechanism; do not substitute decorative atmosphere for useful content.
- Use authored, accurate content. Label synthetic/demo data honestly. Choose imagery and assets for the actual subject and use case.
- Use a coherent type scale, intentional spacing and hierarchy, readable line lengths, and a palette grounded in the project. Do not default to gradient text, stacked cards, fake metrics, decorative glass, or emoji-as-icons; use any such pattern only when the brief or established design system earns it.
- Treat hard, sharp-offset shadows as a deliberate stylistic choice, not a generic depth cue; keep them only when the approved visual direction supports them.
- Preserve semantic structure, keyboard operation, visible focus, accessible names, contrast, responsive behavior, reduced-motion preferences and working interactions.
- Include meaningful loading, empty, success, error, disabled and overflow states where relevant. Controls must do what their labels promise; errors should explain recovery.
- Motion should clarify cause/effect or add a purposeful moment, not hide content or slow the task. Keep content visible with motion disabled.
- Honor explicit brand, platform and style constraints even when they diverge from these general recommendations.

For web content, target WCAG AA contrast where applicable (4.5:1 normal text, 3:1 large text); verify with available project tools rather than guessing. Review actual copy at narrow widths and fix clipping, wrapping and overflow. Do not replace an established font or brand palette solely to avoid a general anti-pattern.

## Command intents

These are workflows within this single DSH skill, not separate slash commands. Call them as `/impeccable <intent> [target]` or in natural language.

### Plan and build

- **init** — capture confirmed product context. Inspect files first; ask up to a few focused questions about users, purpose, positioning, constraints and evidence. Do not turn hypotheses into facts. Create/update a project product record only when the user requests it or agrees.
- **shape [feature]** — see [New visual work](reference/new-work.md) for surface decisions. Then before coding, outline user goals, flow, information hierarchy, states, constraints and the visual direction inherited or approved. Pause for a decision when a material design choice is unresolved.
- **document** — follow [Document the design system](reference/document.md).
- **extract [target]** — follow [Extract proven design patterns](reference/extract.md).

### Evaluate

- **critique [target]** — use the [critique guide](reference/critique.md) to review purpose, clarity, hierarchy, interaction, content and emotional resonance. Give prioritized findings with file/element evidence and impact; do not edit unless requested.
- **audit [target]** — follow [Technical audit and final polish](reference/audit-and-polish.md) to check accessibility, responsive behavior, performance, semantics and working actions. Separate verified findings from questions. A clean static scan does not prove visual quality. For native interfaces, also use [Native adaptation and audit](reference/native.md).

### Refine and improve

- **polish [target]** — use [Technical audit and final polish](reference/audit-and-polish.md) to walk the primary task and check typography, spacing, interaction states and design-system consistency.
- **bolder [target]** — follow [Strengthen visual direction](reference/bolder.md).
- **quieter [target]** — follow [Reduce competing emphasis](reference/quieter.md).
- **distill [target]** — use [Distill](reference/distill.md) to simplify the workflow while preserving essential paths.
- **harden [target]** — follow [Resilient UI states](reference/harden.md).
- **onboard [target]** — use [Onboard](reference/onboard.md) to shorten the route to the first useful result and verify recovery paths.
- **animate [target]** — use [Animate](reference/animate.md) to clarify state changes and verify motion.
- **colorize [target]** — follow [Apply a purposeful palette](reference/colorize.md).
- **typeset [target]** — follow [Typography](reference/typeset.md).
- **layout [target]** — follow [Build a coherent layout](reference/layout.md).
- **delight [target]** — follow [Choose a useful moment for delight](reference/delight.md).
- **overdrive [target]** — use [Overdrive](reference/overdrive.md) to scope and verify an ambitious interaction or effect.
- **clarify [target]** — follow [Clear interface copy](reference/clarify.md).
- **adapt [target]** — use [Adapt](reference/adapt.md) to support the primary task in the target environment. For native interfaces, also use [Native adaptation and audit](reference/native.md).
- **optimize [target]** — follow [Measured UI performance](reference/optimize.md).

The current upstream DSH reference marks `craft` as a deprecated alias for ordinary new visual work; do not recommend invoking it or claim it adds setup or quality behavior. For a new surface, use **shape** followed by the repository's normal implementation and available visual review. The upstream alias's live iteration is not available in this bundle.

## Unsupported upstream commands and services

The DSH package does not include Impeccable's engine, so `live`, `generate`, `pin`, `hooks`, `doctor`, `detect`, image/world rolls, comp-spec gates, or upstream CLI installation are not executable through this skill. If requested, state this limitation. Offer a manual design variant or browser-review workflow only when the current DSH session actually exposes suitable tools; never imply that it edited files, ran a detector, opened a browser, or generated imagery when it did not.

## Implementation and verification

When asked to implement, follow the repository's existing architecture and make the smallest complete change. Do not expand scope into an unsolicited redesign. If a material visual decision is not authorized, present options and wait.

Verify with commands found in the target project's scripts or documentation. If browser/screenshot tools are available, inspect actual rendered states at relevant viewport sizes and iterate on evidenced defects. If the app cannot run, inspect committed visual-regression goldens or screenshot fixtures against current code, tokens, components, and assets; check freshness and resolve conflicts before relying on them. If no visual evidence is available, run available tests/static checks and clearly leave visual inspection unverified. Never claim success based only on writing code.

For an audit or critique, present prioritized findings first; only apply fixes if requested. End with the changed areas, checks actually run and remaining manual/visual verification.
