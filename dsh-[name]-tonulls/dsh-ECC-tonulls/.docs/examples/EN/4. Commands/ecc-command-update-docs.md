# `/ecc-command-update-docs`

**Purpose:** Synchronize documentation with the project's actual sources of truth, such as scripts, environment templates, routes, schemas, and public exports. Limit changes to explicitly requested documents; do not run auto-generators.

## Prompt Examples

### 1. Short Request
```text
/ecc-command-update-docs Update the documentation command table from package.json scripts; do not change other sections.
```

### 2. Request with Context
```text
/ecc-command-update-docs
Compare documentation [document path] with source of truth [package.json / API schema / routes / public exports]. Update only section [section name], preserving author-written explanations and existing formatting.

Do not create extra documents or run project generators/scripts. If required facts are missing or would require assumptions, list questions rather than inventing values. Ask me first before making changes outside the specified section, deleting anything, or overwriting other files.
```

### 3. Detailed Request
```text
/ecc-command-update-docs
Bring documentation [path/section] into alignment with current sources for [scope: commands, environment variables, API routes, exports, or infrastructure configuration]. Work in phases:
1. Find and read the relevant sources of truth; do not infer behavior, values, or procedures by guessing.
2. List discrepancies between source and documentation, including affected locations and factual basis.
3. Change only [exact file and sections]. Preserve manually written text and update only relevant information. Do not create documents, run project generators, or change source/configuration files.
4. If accuracy requires missing data, retaining old information is safer, or a change exceeds scope, stop and request clarification/approval. Do not delete, rename, or overwrite files without my separate explicit approval.
5. Report changed sections and supporting sources; separately list unresolved discrepancies and missing information. If no change was needed, say so.

Do not publish or send documentation to external systems.
```
