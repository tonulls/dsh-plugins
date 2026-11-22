# `dsh-ecc-skills` — Modes and Prompt Examples

**Purpose:** Enable or disable automatic selection of ECC Skills for the current session. This toggle is available only to the user. If a specific task has not yet been formulated, start with Research, then move to Analysis; use Implementation for a selected change. These three headings describe the type of follow-up request, not additional toggle commands.

To enable automatic selection, send this as a separate direct user message:

```text
/dsh-ecc-skills on
```

Do not add a task to the command. After it is confirmed, choose one template below and send it as a separate next message. To disable automatic selection, send this separately:

```text
/dsh-ecc-skills off
```

Explicit `/ecc-*` invocations remain available even when automatic selection is disabled.

## 🔍 Research

Understand the project's existing processes, rules, and context using relevant skills—without making changes.

### 1. Concise

```text
Research the project at <project-path>: explain its main processes, applicable rules, and documentation. Work in read-only mode and change nothing.
```

### 2. Standard Template

```text
Research <area or process> in the project at <project-path>; the specific task has not yet been defined.

Study related components, project documentation, tests, and established conventions. Describe the actual workflow, key dependencies, and constraints; cite the exact supporting files. Separate established facts from assumptions and list information gaps.

Do not edit files or begin implementation. End with questions that would help clarify the context.
```

### 3. Detailed, Step by Step

```text
Research <area or process> in the project at <project-path> in read-only mode.

1. Find local instructions, documentation, relevant components, and tests.
2. Reconstruct the process from existing code and repository data; do not treat a name or comment alone as proof of behavior.
3. Describe the process inputs, outputs, rules, dependencies, and common errors.
4. Compare the documentation with actual behavior and identify specific discrepancies.
5. List research limitations and missing information.

Do not change anything, install packages, or access the network. Do not propose an implementation plan until I ask. Present the result as a concise process map with evidence sources and open questions.
```

## 🧠 Analysis

Identify confirmed problems, gaps, and improvement opportunities in the selected area without editing the project.

### 1. Concise

```text
Analyze <area or process> in the project at <project-path>: identify confirmed problems and valuable improvements, support your findings, and prioritize them. Do not change anything.
```

### 2. Standard Template

```text
Analyze <area or process> in the project at <project-path> using the actual code, tests, and documentation.

Identify defects, risks, missing checks, and improvement opportunities. For each finding, provide evidence, impact, affected areas, potential benefit, effort, and priority. Mark assumptions and alternative explanations separately.

Work in read-only mode: do not fix findings or install dependencies. End with options for next steps, but do not choose among them for me.
```

### 3. Detailed, Step by Step

```text
Conduct an analytical review of <area or process> in the project at <project-path>. Look for practical improvement opportunities as well as errors.

1. Limit the analysis to relevant modules, local instructions, tests, and documentation sources.
2. Check the process for correctness and completeness, and consider edge-case handling, security, accessibility, and maintainability where relevant.
3. Provide verifiable evidence for each finding and distinguish facts, interpretations, and hypotheses.
4. Assess impact, likelihood, benefit, effort, and dependencies; produce a prioritized list.
5. Identify any additional information or decisions I need to provide.

Do not edit files, run commands with side effects, install dependencies, or access the network. End with recommendations for discussion, not an implementation.
```

## 🛠️ Implementation

Use this when a specific task suited to a specialized skill has been selected. Clarify the criteria and agree on a plan first.

### 1. Concise

```text
Help implement <specific change> in the project at <project-path>, following its existing conventions. First propose a plan and checks, wait for my approval, then make only the agreed changes.
```

### 2. Standard Template

```text
Implement <specific change> in <component or process> of the project at <project-path>.

Review the instructions, existing implementations, and tests. Before editing, list the target behavior, affected files, acceptance criteria, and relevant skills/approaches. Wait for my approval; if the requirements are incomplete, ask questions first.

After approval, make the smallest changes, verify relevant scenarios, and update related documentation. Do not add dependencies or access the network without separate approval.
```

### 3. Detailed, Step by Step

```text
Implement the agreed change <description> in the project at <project-path>.

Expected scenarios: <list>.
Acceptance criteria: <verifiable conditions>.
Constraints: <compatibility, stack, security, and scope of changes>.

1. Review local instructions, the architecture, existing patterns, and tests.
2. Select only the skills relevant to the task; briefly explain how they apply.
3. Prepare a plan listing files, checks, risks, and unknowns. Do not edit the project before I approve.
4. After approval, make the smallest changes and add/update the necessary tests.
5. Run only relevant local checks and present the final diff and remaining limitations.

If requirements conflict or the work would exceed the agreed scope, stop and ask for a decision. Do not install packages or access the network without separate approval.
```
