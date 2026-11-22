# `/ecc-docs-lookup` — Prompt Examples

## Purpose

Answers questions about using libraries, frameworks, and APIs based on current documentation through Context7 MCP; provides applicable code examples.

## Short Request

```text
/ecc-docs-lookup How do I perform {task} with {library and version}? Provide an example and note any documentation limitations.
```

## Template Request

```text
/ecc-docs-lookup Find current documentation for {API/framework}, version {version or unknown}. Explain {specific question} and show a minimal example for {language/environment}. Distinguish source-confirmed information from assumptions; if the version is unspecified, clarify applicability.
```

## Detailed Request

```text
/ecc-docs-lookup Investigate {question} for {library/API}, version {version}, in this project context {environment and constraints}.
1. Find current documentation relevant to the question through Context7 MCP.
2. Clarify which details depend on the version; do not fill missing information with guesses.
3. Provide an answer and compact example suited to the specified environment.
4. List important limitations, common errors, and alternatives if the documentation describes them.

Format: brief answer, example, step-by-step explanation, links/names of documentation sections used, and caveats. Do not modify project files or claim to have verified code by executing it.
```