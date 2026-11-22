# `dsh-ecc-agents` — Modes and Prompt Examples

**Purpose:** Enable or disable automatic selection of ECC Agents role instructions for the current session. This toggle is available only to the user and does not launch a separate agent. If a specific task has not yet been formulated, start with Research, then move to Analysis; use Implementation for a selected change. These three headings describe the type of follow-up request, not additional toggle commands.

To enable automatic selection, send this as a separate direct user message:

```text
/dsh-ecc-agents on
```

Do not add a task to the command. After it is confirmed, choose one template below and send it as a separate next message. To disable automatic selection, send this separately:

```text
/dsh-ecc-agents off
```

Explicit `/ecc-*` invocations remain available even when automatic selection is disabled.

## 🔍 Research

Explore the existing code, architecture, roles, and project flows without deciding on the user's behalf what should be changed.

### 1. Concise

```text
Research the project at <project-path> in read-only mode: explain its purpose, structure, and main flows. Do not change anything or propose an implementation yet.
```

### 2. Standard Template

```text
Research the project at <project-path>; there is no specific change request yet.

1. Read the local instructions and briefly describe the project's purpose and main parts.
2. Trace the key entry points, data flows, and connections between the main modules.
3. Compare the code with the documentation and tests; cite the paths of supporting files.
4. List facts about the architecture, technologies, and constraints, as well as areas you could not verify.

Do not change files or propose an implementation plan yet. Separate facts from assumptions, and end with questions that would help continue the research.
```

### 3. Detailed, Step by Step

```text
Research the project at <project-path> in read-only mode; no specific task has been formulated yet.

1. Find and follow local AGENTS.md files, READMEs, and other instructions.
2. Map the structure: entry points, main packages, public interfaces, and key dependencies.
3. Trace several important scenarios from input to outcome; verify them against the code and tests.
4. Study the architecture decisions, module boundaries, and data exchange between modules.
5. Compare the actual structure with the documentation and list confirmed discrepancies.

Do not edit files, install dependencies, run destructive commands, or access the network. In your report, identify the areas checked, precise sources for your findings, unknowns, and questions. Do not choose a future implementation for me.
```

## 🧠 Analysis

Use evidence to determine where the project would benefit from fixes or improvements. Do not turn the analysis into edits or choose a task independently.

### 1. Concise

```text
Analyze the project at <project-path>: identify several of the most valuable improvements or confirmed problems, support them with code or documentation, and prioritize them. Do not change anything.
```

### 2. Standard Template

```text
Analyze the project at <project-path> (or the area at <area-path>) based on its code, tests, and documentation.

Identify confirmed defects, architectural risks, gaps, and improvement opportunities. For each item, provide evidence and affected files, impact, benefits, risks, effort, and priority. Separate required fixes from optional ideas.

Do not change files or begin implementation. List assumptions and questions that require my decision separately, and suggest several options for what to do next.
```

### 3. Detailed, Step by Step

```text
Conduct an analytical review of the project at <project-path> without a predefined task.

1. Define the analysis scope based on local instructions and the project's actual structure.
2. Study relevant code, tests, configuration, and documentation; support each finding with specific paths or verifiable observations.
3. Separate findings into defects, risks, technical debt, and new opportunities. Do not present assumptions as confirmed problems.
4. Assess the impact, urgency, effort, risks, and dependencies of each recommendation; explain its priority.
5. Compare alternatives and note which decisions the user must make.

Work in read-only mode: do not edit files, install dependencies, or access the network. End with a brief list of directions to discuss and questions; do not choose a specific implementation for me.
```

## 🛠️ Implementation

Use this when a specific task or selected idea has already been identified. Agree on the scope and plan first, then implement and verify.

### 1. Concise

```text
Implement <specific change> in the project at <project-path>. First review the instructions and propose a plan listing files and checks; wait for my approval. Ask questions if the requirements are insufficient. After approval, make the smallest necessary changes and verify the result.
```

### 2. Standard Template

```text
Implement <specific change> in the project at <project-path>.

Review the local rules, nearby examples, tests, and documentation. Prepare a plan covering the expected behavior, affected files, acceptance criteria, risks, and checks. Do not change anything before I approve; if the task can be interpreted in multiple ways, clarify the requirements first.

After approval, implement only the agreed scope, add or update relevant tests, and run suitable local checks. Do not install dependencies, access the network, or perform destructive actions without separate approval.
```

### 3. Detailed, Step by Step

```text
Implement the selected change in the project at <project-path>.

Required behavior: <scenarios and expected outcomes>.
Acceptance criteria: <verifiable conditions>.
Constraints: <compatibility, API, security, and other requirements>.

1. Review local instructions, the architecture, existing examples, tests, and documentation.
2. List the exact files, possible implementation options, risks, and necessary checks.
3. Stop and wait for my approval of the plan. Do not begin editing before approval.
4. After approval, make the smallest agreed changes and update only the relevant tests/documentation.
5. Run relevant checks, review the final diff, and report what remains unverified.

If a requirement is unclear or acceptance criteria are not verifiable, ask questions first. Do not add dependencies, access the network, or run destructive commands without separate approval.
```
