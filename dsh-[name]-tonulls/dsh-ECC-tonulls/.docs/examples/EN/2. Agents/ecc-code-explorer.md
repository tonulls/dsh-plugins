# `/ecc-code-explorer` — Prompt Examples

## Purpose

Explores an existing codebase: traces execution paths and maps architectural layers and dependencies to provide verifiable context for future development. It does not implement changes.

## 1. Short Request

```text
/ecc-code-explorer Trace how {scenario} flows through the project: entry points, layers, and dependencies. Do not change anything.
```

## 2. Template Request

```text
/ecc-code-explorer Explore the {name/scenario} feature in {project path}. Find its entry point and trace calls through to {result or integration of interest}; describe the involved layers, files, and dependencies, citing symbols. Separate confirmed facts from assumptions; make no changes.
```

## 3. Detailed Request

```text
/ecc-code-explorer Analyze the existing implementation of {scenario} in {project path} to prepare context for {next decision/development task}.

1. Find the user or system entry point and explain how you identified it.
2. Trace actual execution paths: calls, conditional branches, error handling, data access, and external integrations. Cite files, symbols, and significant transitions between layers.
3. Map the components and dependencies relevant to the scenario; identify the boundaries of what was not investigated.
4. Compare claims with source code and tests, if available. Do not draw conclusions about runtime behavior that has not been confirmed by inspection or an approved check.
5. End with a brief flow summary, extension points, and questions to resolve before making changes.

Format: summary, text diagram “input → components → outcome,” component/file and dependency table, evidence, and gaps. Read-only: do not edit files, install packages, access the network, or deploy.
```