# Docs Governance

Identify the primary document for each topic. Verify documented commands and relative links against the current repository. Update stale behavior and consolidate duplicate guidance with links. Preserve history in explicitly archived documents. Report which checks ran and which statements still need runtime verification.

## Audit scope

Before editing, identify the repository's existing source of truth for each topic. If the repository has a documentation map, use it to resolve ownership before relying on conventional filenames. For a read-only audit, separate link and index findings from architectural findings. Check local links, decision records, and references to tests. Confirm module boundaries against callers and contracts. Report an absent file as a review finding until ownership is established. Use local checks already available in the project.

When the user requests a module audit, identify the directories in scope before reading module
contracts. An ancestor document or mapped source may cover a module. Confirm its applicability
against the module source and tests. Treat a local AGENTS.md or CONTEXT.md as evidence when present.
Its presence alone does not establish that the host loaded it or that the module is documented.

For a Markdown link audit, use the project's renderer or a compatible parser when available.
Check rendered inline and reference-style links, including optional titles. Ignore examples inside
code and HTML comments. For each broken local link, report the source file, location and actual
target. Check that the resolved path stays within the requested repository scope. Confirm anchors
in the renderer if they are part of the audit.
