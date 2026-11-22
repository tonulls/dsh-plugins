# `dsh-ecc-commands` — Modes and Prompt Examples

**Purpose:** Enable or disable automatic selection of the three verified ECC Commands for the current session: build-fix, test-coverage, and update-docs. This toggle is available only to the user. Research, Analysis, and Implementation are follow-up task types, not separate toggle commands.

To enable automatic selection, send this as a separate direct user message:

```text
/dsh-ecc-commands on
```

Do not add a task to the command. After it is confirmed, choose one template below and send it as a separate next message. To disable automatic selection, send this separately:

```text
/dsh-ecc-commands off
```

Explicit `/ecc-*` invocations remain available even when automatic selection is disabled.

During Research and Analysis, use Commands only when they can help without performing actions: do not fix the build, create tests, or edit documentation. During Implementation, use a Command only when the specific task matches the verified `build-fix`, `test-coverage`, or `update-docs` command; if it does not match, do not force it into a Command.

## 🔍 Research

Explore the existing build, tests, and documentation as processes; do not run them or make changes.

### 1. Concise

```text
Research the project at <project-path>: find how its build, tests, and documentation are organized, and identify the local commands and sources of truth. Do not run or change anything.
```

### 2. Standard Template

```text
Research how the project at <project-path> organizes its build, testing, and documentation.

Find the relevant scripts and configuration, test directories, and authoritative documentation sources. Explain which checks are provided and where their results are described. Cite exact paths; do not assume a command is safe to run based on its name alone.

Work in read-only mode: do not run build or test commands, create files, install dependencies, or access the network. End by listing gaps and questions.
```

### 3. Detailed, Step by Step

```text
Research the engineering processes in the project at <project-path> in read-only mode, without a specific fix request yet.

1. Read the local instructions and identify the build, type-checking, testing, and documentation systems in use.
2. Trace how commands in package.json scripts and configuration relate to code, tests, and generated files.
3. Find the sources of truth for command descriptions, behavior, and public interfaces; compare them with the documentation.
4. Identify operations that might change files, require network access, or install dependencies—inspect their contents, but do not run them.
5. Separate confirmed facts from assumptions and list areas that remain unverified.

Do not edit files or run builds, tests, generators, or installation commands. Present a process map with exact paths and open questions; do not propose fixes until separately asked.
```

## 🧠 Analysis

Assess the quality and gaps in the existing build, testing, and documentation. At this stage, diagnose and recommend only—do not fix issues, generate tests, or update documents.

### 1. Concise

```text
Analyze the build, tests, and documentation of the project at <project-path>: identify confirmed problems and the most valuable improvements, and prioritize them. Do not run or change anything.
```

### 2. Standard Template

```text
Analyze how well the existing build and testing processes and documentation for the project at <project-path> match its code and needs.

Identify confirmed errors, risky steps, test coverage gaps, and outdated instructions. For each item, provide evidence, impact, priority, effort, and a possible verification method. Mark hypotheses separately.

Analyze in read-only mode: do not fix the build, create tests, update documentation, or run commands with side effects. Suggest options for next steps and leave the decision to me.
```

### 3. Detailed, Step by Step

```text
Assess the build, testing, and documentation of the project at <project-path> analytically; do not fix anything.

1. Compare build and test workflows with the configuration and package structure.
2. Assess whether existing tests cover critical scenarios and failures; support identified gaps with specific modules and tests.
3. Find documentation that conflicts with package.json scripts, configuration, schemas, routes, or exports.
4. For each issue, provide precise evidence, risk, impact, priority, and a safe verification method.
5. Separate urgent defects, improvements, and questions that require the owner's decision.

Do not run builds, tests, generators, or external commands; do not create tests, change documents, install packages, or use the network. The result should be an evidence-based list of options to discuss, not a finished diff.
```

## 🛠️ Implementation

Use this for a specific task that fits one of the three verified Commands. Agree on the change scope and constraints before running any corrective actions.

### 1. Concise

```text
Perform <specific task suited to build-fix, test-coverage, or update-docs> in the project at <project-path>. First describe the plan and wait for approval. Use only locally available tools; do not install dependencies or access the network.
```

### 2. Standard Template

```text
I need <specific task> done in the project at <project-path>. It corresponds to <build-fix | test-coverage | update-docs>.

First inspect the relevant source files, local instructions, and acceptance criteria. List the files and commands you plan to use, expected changes, and risks; do not run or edit anything before I approve.

After approval, work only within the specified scope. Use tools that are already installed locally; do not run npx/network downloads, install dependencies, or change unrelated files. Perform the agreed checks and report the results.
```

### 3. Detailed, Step by Step

```text
Perform the agreed task <description> in the project at <project-path>.

Suitable command: <build-fix | test-coverage | update-docs>.
Required behavior or expected result: <acceptance criteria>.
Constraints and permitted scope: <package, directory, files>.

1. Confirm that the task genuinely matches the selected verified command; otherwise stop and suggest another approach.
2. Review the local instructions, existing scripts, tests, documentation, and expected side effects.
3. Prepare an exact action plan and wait for my approval before proceeding.
4. After approval, perform only the agreed scope: a minimal build fix, tests only in the permitted area, or updates only to the requested documentation.
5. Use only tools already installed locally; do not install packages, use npx to download anything, or access the network. For update-docs, do not run project scripts that generate files; do not run destructive commands without separate approval.
6. Review the final diff and the agreed local checks; report what was done and what remains unverified.

If side effects, missing tools, or a conflict with the acceptance criteria arise, stop and agree on the next step.
```
