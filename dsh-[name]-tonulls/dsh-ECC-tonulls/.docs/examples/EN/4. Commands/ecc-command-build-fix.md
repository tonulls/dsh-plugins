# `/ecc-command-build-fix`

**Purpose:** Identify the project's build system, diagnose build and type errors sequentially, and fix them with minimal safe changes. Use only tools already available; do not install or download dependencies.

## Prompt Examples

### 1. Short Request
```text
/ecc-command-build-fix Find and minimally fix current build errors. Use only already-installed tools; do not install dependencies.
```

### 2. Request with Context
```text
/ecc-command-build-fix
The build fails in project [path or module name]. Check the build system and locally available command, then analyze errors by file and fix them one at a time with minimal edits.

Scope: [directories/modules]. Do not change architecture or files outside this scope. Do not install or download packages. If the required tool is unavailable, an error persists after three attempts, or a broad change is needed, stop and explain why; request approval before proceeding with such changes.
```

### 3. Detailed Request
```text
/ecc-command-build-fix
Fix build/type errors for [project or target module]. Work in phases:
1. Identify the build system from project files and select only an already-installed local verification command.
2. Run the check and group errors by file; report the initial error count.
3. For each error, study context, determine the root cause, and propose/apply the smallest fix within [approved scope]. Re-run checks after each fix and assess whether new errors appeared.
4. Stop if a tool/dependency is missing, an error remains after three attempts, a fix adds more errors, changes architecture, or exceeds scope. Do not install, download, or perform network actions. Request separate approval before deleting data, publishing, or other material side effects.
5. Report changes with paths, verification results, remaining/new errors if any, and safe next steps.

Do not perform unrelated refactoring or modify files outside the specified scope without my prior approval.
```
