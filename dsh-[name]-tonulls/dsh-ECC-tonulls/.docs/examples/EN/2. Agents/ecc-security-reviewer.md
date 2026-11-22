# `ecc-security-reviewer` — Prompt Examples

Examples for explicitly invoking the security review role. Send the command and task together in one regular DSH message. Adapt the wording to the stack and relevant project area.

## 1. Simple and Short

```text
/ecc-security-reviewer Quickly check the current project for obvious security issues. Do not change anything. For each issue found, provide the file, lines, and potential risk.
```

## 2. Standard Template

```text
/ecc-security-reviewer Conduct a read-only security audit of project <project-path> using stack <language-and-framework>. Check user input handling, authentication and authorization, secret storage, file and external command handling, and dependencies. Do not modify files or install packages. For each confirmed finding, provide severity, exact file and lines, risk scenario, and remediation. At the end, list what remains unchecked.
```

## 3. Detailed, Step by Step

```text
/ecc-security-reviewer Conduct a phased, read-only security audit of project <project-path> (stack: <language-and-framework>).

1. Briefly describe the audit boundaries and main entry points: routes/APIs, authorization, user-data handlers, file upload and extraction, process execution, and secret storage.
2. Trace data flows from external input to sensitive operations; for each concern, inspect the calling code, access checks, error handling, and related tests.
3. Check dependencies and available local tools only for the project's actual stack. Do not run irrelevant commands, install packages, or access the network without separate approval.
4. Change nothing. Do not treat a search-pattern match as a vulnerability without a confirmed exploitation scenario.

In the report, separate confirmed issues from assumptions. For each issue, provide severity, file and lines, required attack conditions, impact, and recommended fix. Separately list files/areas reviewed, checks performed, and remaining gaps. Do not call the audit complete if significant areas remain unchecked.
```