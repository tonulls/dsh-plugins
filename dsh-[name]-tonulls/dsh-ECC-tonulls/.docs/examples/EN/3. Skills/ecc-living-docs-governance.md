# ecc-living-docs-governance

**Command:** `/ecc-living-docs-governance`

**Purpose:** Prevents documentation drift in long-lived projects by assigning existing documents roles such as “constitution,” “map,” “status,” and “history,” and connecting the active agent environment to canonical sources. Prefers the repository's current structure over new root files.

## Prompts

### 1. Short Request
> /ecc-living-docs-governance Analyze which project documents have drifted from the code and which are already canonical sources for agent context. Do not change anything yet.

### 2. Template with Placeholders
> /ecc-living-docs-governance Project [path/repository], drift issue [example/scope], active agent environment [instructions/files]. Inventory existing documentation and suggest roles “rules,” “map,” “current state,” and “history” only where justified. First show sources, gaps, and plan; preserve current structure and avoid creating new root documents unless needed.

### 3. Detailed Phased Request
> /ecc-living-docs-governance Design living-documentation governance for long-lived repository [path]. 1) Inventory existing instructions, maps, plans, status notes, and history; compare their purpose and freshness signals with code. 2) Identify the canonical source for each context type and record duplication/conflicts. 3) Suggest minimal changes using existing structure; for the agent harness, specify how to direct it to canonical files. 4) Separately consider removed/obsolete elements and protections against accidental recreation, but only if the issue is substantiated. Format: document map, evidence-backed discrepancy register, role decisions, and bounded implementation plan. Do not invent process facts; do not edit anything before approval, change code, install software, or access the network.
