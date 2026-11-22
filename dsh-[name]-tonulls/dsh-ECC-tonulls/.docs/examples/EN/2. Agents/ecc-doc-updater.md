# `/ecc-doc-updater` — Prompt Examples

## Purpose

Updates documentation and codebase maps to reflect the project's actual state; can work with READMEs, guides, and `docs/CODEMAPS/*` within a specified scope.

## Short Request

```text
/ecc-doc-updater Update the documentation at {path/section} to reflect changes to {feature}. Verify claims against the code and stay within the specified section.
```

## Template Request

```text
/ecc-doc-updater Bring {document or map} in line with the implementation of {feature/module}. Check related source files {paths}, preserve the project's style, and identify changed files and unverified details. Modify only {permitted paths}; do not edit other documents.
```

## Detailed Request

```text
/ecc-doc-updater Document the change {description} for {audience}.
1. Study the relevant source files and current documents; distinguish facts from assumptions.
2. Identify which pages or codebase maps are genuinely outdated.
3. Update only {permitted files}, preserving the project's structure and terminology; do not promise capabilities that have not been confirmed.
4. Check links, commands, and consistency with the implementation.

In your response, list the files, summarize the edits, and note remaining gaps. Do not change code or files outside the permitted scope; do not install dependencies, access the network, or deploy without approval.
```