# ecc-hermes-imports

**Command:** `/ecc-hermes-imports`

**Purpose:** Transform local Hermes operator workflows into validated ECC skills and package-release artifacts. Use to prepare a Hermes workflow for public reuse without exposing personal workspace content, credentials, or local paths.

## Prompts

### 1. Short Request
> /ecc-hermes-imports Prepare a safe sanitization review of a Hermes workflow.

### 2. Template with Context
> /ecc-hermes-imports Workflow: [name/path], purpose: [description]. Remove local paths, workspace state, and secrets from the proposed export; plan only for now.

### 3. Detailed Request
> /ecc-hermes-imports Review a local Hermes workflow for conversion into a reusable ECC skill. Phases: identify environment dependencies, anonymize examples, remove credentials/private state/local paths, and prepare an artifact manifest. Do not publish or copy secrets; first show a diff plan and request approval before writing.
