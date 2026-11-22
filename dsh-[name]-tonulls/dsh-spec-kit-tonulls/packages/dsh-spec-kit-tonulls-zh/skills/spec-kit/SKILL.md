---
name: spec-kit
description: >-
  Guide feature work through Spec-Driven Development: establish project principles, define user-facing
  requirements, resolve ambiguity, plan architecture, review requirement quality, create ordered tasks,
  analyze artifact consistency, implement in stages, and check convergence. Use when a user wants a
  feature specification or asks to structure significant feature work before implementation.
---

# Spec Kit — DSH skill adaptation

This skill adapts the core Spec-Driven Development (SDD) process documented by
[GitHub Spec Kit](https://github.com/github/spec-kit) for a single DeepSeek Harness Agent. It is a
methodology guide, **not** the Spec Kit CLI or its integration. It does not install or initialize
Spec Kit, register `/speckit-*` commands, run Spec Kit scripts, select an active feature directory,
manage `.specify/feature.json`, invoke extensions, create GitHub issues, or provide workflow/runtime
hooks. It also intentionally does not implement the separate upstream bug-fixing or idea-assessment
processes. Do not claim any of those actions happened. Use only DSH tools actually available, and
follow user/repository permission boundaries for writes and commands.

This adaptation follows upstream SDD documentation revision `67e0f7294e6e728ab60bf7b4590deb470448bc2d`.
Command-template changes through `a4d571229e164e440f8950cac034607bae7b7518` inform the specify, tasks, and analyze stages below.
The packaged skill uses DSH’s workflow and tools.

## How to invoke

Use `/spec-kit` to get a short orientation and choose a process stage, or `/spec-kit <stage> [context]`
for a focused stage. Supported stage names: `constitution`, `specify`, `clarify`, `plan`, `checklist`,
`tasks`, `analyze`, `implement`, `converge`. These are intents within this one skill—not actual Spec
Kit commands. The separate DSH enable/disable command is `/dsh-spec-kit-tonulls on|off`.

Do not silently advance across major stages. Present outputs and unresolved choices, then let the user
review them before the next stage. If the user asks only for advice/specification/planning, do not edit
implementation code. If the user explicitly asks to execute a stage and tools permit it, work in the
requested artifacts and report exactly what changed.

## SDD process

### 0. Establish scope and project principles (`constitution`)

Before feature work, inspect existing project guidance and conventions. If there is no established set
of principles and the user requests one, help define testable principles for quality, security,
accessibility, maintainability, performance, and product-specific constraints. This is project-level
context, generally established once and revisited only when principles change. Do not overwrite an
existing constitution or create one without request or agreement.

### 1. Specify the problem (`specify`)

Write the **what** and **why**, not the technology solution. Capture:

- target users and context, the problem and current workaround;
- outcome and measurable success signals, while distinguishing proposed measures from existing facts;
- scope, explicit non-goals, constraints and assumptions;
- user stories/use cases with independently testable acceptance scenarios;
- edge cases, failure behavior, permissions and important data boundaries.

If the project composes a specification template from several layers, use the resolved template.
Confirm the active template through the project's documented resolver when available. If the effective
template cannot be established, state that limitation and identify which sections came from the
available project artifacts.

Keep requirements concrete, unambiguous, and implementation-neutral. Give stable IDs to requirements
when they help trace them into tasks and verification. Do not invent evidence, personas, metrics or
constraints; label unknowns and ask only questions that materially affect the spec.

### 2. Resolve ambiguity (`clarify`, optional gate)

Review the current specification for consequential ambiguity, missing states, conflicting rules,
undefined terms, policy questions and failure paths. Ask a small, prioritized batch—up to five targeted
questions per round—and wait for answers before treating them as decisions. Record answers in the
specification when authorized. Repeat only for distinct unresolved areas; do not ask questions already
answered by the user or reliable project evidence.

### 3. Choose the solution (`plan`)

Only after a usable specification exists, inspect the repository and propose the technical approach.
Document architecture, affected components, data flow/state, APIs/contracts, migrations where needed,
security/privacy, failure handling, testing strategy, rollout/compatibility and risks. Link every major
technical decision back to a requirement. Distinguish observed architecture from proposed changes;
expose unresolved trade-offs rather than silently deciding them. Never infer a tech stack from an
example.

### 4. Review requirement quality (`checklist`, optional gate)

Create a concise checklist that tests the **quality of the requirements**, not whether implementation
is done. Check completeness, clarity, consistency, feasibility, traceability and coverage of important
states and error cases. If the checklist is designated reviewer-owned, do not mark items approved on
behalf of a reviewer. A checked requirement-quality item is not evidence that code or tests pass.

### 5. Break down work (`tasks`)

Derive a dependency-ordered, actionable task list from the approved spec and plan. Group setup and
foundational work before user-visible slices; mark parallelizable work only when tasks are genuinely
independent. Every task should name its expected artifact/change and verification. Link tasks to
requirement IDs where available. Identify missing design decisions rather than encoding guesses as tasks.

When `data-model.md` defines constrained fields, treat it as the canonical source for field types
and validation rules. Cite that document and the exact `Entity.field` in at least one implementing
task per constrained field. A task may cover several fields if each reference is explicit. Copy a
constraint into a task only to describe a project-approved addition or refinement that stays consistent
with the canonical rule.

### 6. Check artifacts (`analyze`, optional, read-only gate)

Compare the current specification, plan and tasks for contradictions, unaddressed requirements,
unjustified plan choices, duplicated/conflicting tasks, missing dependencies and gaps in verification.
This stage is analysis-only: report findings with artifact evidence and suggest which upstream stage
owns each correction. Do not silently edit files during analysis. After the user approves corrections,
update the owning artifact and re-run the consistency check as appropriate.

If `data-model.md` exists, check both coverage and consistency. Record each constrained field, its
canonical location, and its implementing task IDs. A bare field name, generic entity reference, or
test-only citation does not establish implementation coverage. Flag missing and unresolved citations.
Compare explicitly identified field rules in task prose even if the task lacks a citation. For
contradictions, give the field, task ID, both rules, and both source locations. Recognize
equivalent wording and skip this check when the optional document contains no applicable constraints.

### 7. Implement approved tasks (`implement`)

Implement only the approved scope, respecting repository conventions, task order and explicit review
gates. For a large feature, work in independently verifiable slices; before continuing, summarize each
slice's changes, tests and remaining work. Keep task status honest. Do not mark reviewer-owned checklist
items complete or skip an unchecked approval gate. Run relevant tests and checks, and report failures
rather than masking them.

### 8. Compare result to intent (`converge`)

After implementation and verification, compare the code and observed test results against the spec,
plan and tasks. Report uncovered requirements, unimplemented tasks, behavior that exceeds scope, and
claims that lack verification. Do not declare convergence unless the evidence supports it. If gaps
remain, propose precise follow-up tasks; append them to the task artifact only when the user has
authorized that write. Then implement and verify those tasks before checking again.

## Suggested paths

- **Small feature:** `specify → plan → tasks → implement → converge`.
- **Material ambiguity or risk:** `constitution (if missing) → specify → clarify → plan → checklist → tasks → analyze → implement → converge`.
- `clarify`, `checklist`, and `analyze` are optional quality gates. The specification is required before
a meaningful technical plan. A project constitution is normally established once, not regenerated per
feature.

## Traceability and reporting

Maintain a simple chain:

`user need → requirement/acceptance scenario → design decision → task → verification evidence`

For a substantial run, report the stage completed, artifacts read/changed, key decisions, unanswered
questions, task and requirement coverage, checks actually executed, checks not run, and the next stage.
Do not equate a plan with implementation, a checklist with tests, or a proposed verification with a
passed check. If the current environment lacks a suitable CLI, integration or tool, say so and proceed
only with the documented, authorized workflow that is available.
