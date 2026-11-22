# `dsh-ecc-tonulls` — Modes and Prompt Examples

**Purpose:** Enable automatic selection of all enabled ECC components—Agents, Skills, and verified Commands—for the current DSH session. This toggle is available only to the user; it does not create a separate agent. The `/dsh-ecc-tonulls off` command disables automatic selection for all three groups. After using the global toggle, you can enable or disable individual groups with their own controls.

## How to Use

To allow automatic selection of all components, send this exact command as a separate direct user message:

```text
/dsh-ecc-tonulls on
```

Do not add an explanation or task to the command: the router accepts only the exact message. After the mode is confirmed, choose **one** template below and send it in the next message. To turn automatic selection off, send `/dsh-ecc-tonulls off` separately. Explicit `/ecc-*` invocations remain available even when automatic selection is disabled.

`Research`, `Analysis`, and `Implementation` are task types, not additional toggle commands. If you do not yet know what should be implemented, start with Research, then move to Analysis; use Implementation when a specific change has been selected and agreed upon.

## 🔍 Research

Explore what is already in the project: its purpose, code, documentation, architecture, and constraints. Make no changes at this stage, and do not choose a future implementation on the user's behalf.

### 1. Concise

```text
Research the project at <project-path> in read-only mode: explain its purpose, structure, and main flows. Do not change anything or propose an implementation yet.
```

### 2. Standard Template

```text
Research the project at <project-path>; there is no specific change request yet.

1. Read the local instructions and briefly describe the project's purpose and main parts.
2. Trace the key entry points and main data or control flows.
3. Compare the code with the README, documentation, and existing tests.
4. List the technologies used, external dependencies, and apparent constraints, based on repository evidence.

Do not change anything or propose an implementation plan. At the end, state what you were able to understand, which areas you did not verify, and what information I should clarify.
```

### 3. Detailed, Step by Step

```text
Research the project at <project-path>; no specific task has been formulated yet.

1. First find and follow local AGENTS.md files, READMEs, and other project instructions.
2. Map the directories, key modules, public interfaces, and entry points.
3. Trace 2–3 main user or system scenarios from input to outcome, using the code and tests as evidence.
4. Compare the architecture with the documentation and note confirmed discrepancies.
5. List the stores, services, dependencies, and external boundaries in use; do not guess at information that is absent.

Do not edit files, install dependencies, run destructive commands, or access the network. In your report, distinguish confirmed facts, assumptions, and unknowns; identify the areas reviewed and remaining gaps. Do not yet propose what should be implemented.
```

## 🧠 Analysis

Based on the project's current state, identify problems, opportunities for improvement, and ideas. The analysis must be evidence-based and help choose a direction without replacing the user's decision or making changes.

### 1. Concise

```text
Analyze the project at <project-path>: identify the most valuable improvement opportunities, support them with examples from the code or documentation, and prioritize them. Do not change anything.
```

### 2. Standard Template

```text
Analyze the project at <project-path> (or the area at <area-path>), using its code, documentation, and tests as evidence.

Identify confirmed defects, technical constraints, gaps in tests/documentation, and promising improvements. For each idea, provide evidence and affected areas, expected benefits, risks, approximate effort, and priority. Clearly mark assumptions and questions that require my decision.

Do not change files, install dependencies, or begin implementation. End with a short list of options worth discussing next.
```

### 3. Detailed, Step by Step

```text
Conduct an analytical review of the project at <project-path> without a predefined task. The goal is to understand where there are confirmed problems or good opportunities for improvement.

1. Define the review scope based on local instructions and the project's actual structure.
2. Study relevant code, tests, documentation, and configuration; cite a supporting path or observation for each conclusion.
3. Check the directions relevant to this project: correctness, reliability, security, performance, accessibility, maintainability, and the quality of user workflows. Do not apply irrelevant criteria.
4. Separate actual defects, risks, technical debt, and new opportunities; do not present assumptions as confirmed problems.
5. Assess the benefit, urgency, effort, risk, and dependencies for each recommendation; rank recommendations by priority.

Do not modify files, run commands with side effects, install packages, or access the network. End with a brief summary, the top directions for discussion, and open questions. Do not choose an implementation task for me.
```

## 🛠️ Implementation

Use this when there is a concrete requirement or an idea selected after Analysis. First clarify the criteria and agree on a plan; only then make scoped changes and verify them.

### 1. Concise

```text
Implement <specific change> in the project at <project-path>. First review the local instructions and propose a plan listing affected files and checks; wait for my approval. Ask questions if the requirement is unclear. After we agree, make the smallest necessary changes and run relevant checks.
```

### 2. Standard Template

```text
Implement <specific change> in the project at <project-path>.

First review the instructions, nearby examples, tests, and documentation. Prepare a plan covering behavior, affected files, acceptance criteria, risks, and checks. Do not change anything before I approve. If the requirements or criteria are incomplete, ask questions first.

After approval, implement only the agreed scope, add or update relevant tests, review the diff, and run suitable local checks. Do not install dependencies, access the network, or perform destructive actions without separate approval.
```

### 3. Detailed, Step by Step

```text
Implement the agreed change in the project at <project-path>.

Context: <what is already known>.
Required behavior: <specific scenarios>.
Acceptance criteria: <verifiable outcomes>.
Constraints: <compatibility, public API, performance, security, and other requirements>.

Stage 1 — Research: review local instructions, the existing architecture, similar implementations, tests, and documentation related to the task. Do not assume unverified facts.
Stage 2 — Plan: list the exact files, behavior changes, tests, risks, and possible alternatives. Stop and wait for my approval.
Stage 3 — Implementation: after approval, change only what is necessary; preserve existing conventions and compatibility. Do not add dependencies or change unrelated files.
Stage 4 — Verification: run relevant tests and checks, review the final diff, and report the results and remaining limitations.

If requirements conflict with the project's design, acceptance criteria cannot be verified, or unexpected consequences arise, stop and agree on an adjustment before proceeding. Do not access the network or run destructive commands without separate approval.
```
