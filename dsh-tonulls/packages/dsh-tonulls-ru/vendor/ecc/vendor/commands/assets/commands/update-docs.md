<!-- Generated from commands/update-docs.md at 25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b; edit the pinned source or generator instead. -->
# DSH command adaptation

Use this instruction only when the user explicitly invokes /ecc-command-update-docs. It runs in the current DSH session; it does not start a separate agent, process, model, hook or workflow.
Use only tools and integrations available in this DSH session. Upstream Claude-specific commands, aliases, model selectors, allowed-tools, agents and hooks are not imported.
Do not install or download helpers, dependencies or packages. Never use npx in a way that fetches code; only use a tool already installed in the target project. If a helper is missing, stop and explain the limitation.
A command prompt does not grant permissions. Follow the user request and DSH policy; ask before remote/network actions, publishing, deleting data, installing software or broad/unrequested changes.
Adaptation note: Limit documentation edits to the user-requested scope; do not run generated project scripts or create unrequested files.

Pinned source: https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/commands/update-docs.md

# Update Documentation

Sync documentation with the codebase, generating from source-of-truth files.

## Step 1: Identify Sources of Truth

| Source | Generates |
|--------|-----------|
| `package.json` scripts | Available commands reference |
| `.env.example` | Environment variable documentation |
| `openapi.yaml` / route files | API endpoint reference |
| Source code exports | Public API documentation |
| `Dockerfile` / `docker-compose.yml` | Infrastructure setup docs |

## Step 2: Generate Script Reference

1. Read `package.json` (or `Makefile`, `Cargo.toml`, `pyproject.toml`)
2. Extract all scripts/commands with their descriptions
3. Generate a reference table:

```markdown
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Production build with type checking |
| `npm test` | Run test suite with coverage |
```

## Step 3: Generate Environment Documentation

1. Read `.env.example` (or `.env.template`, `.env.sample`)
2. Extract all variables with their purposes
3. Categorize as required vs optional
4. Document expected format and valid values

```markdown
| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `DATABASE_URL` | Yes | PostgreSQL connection string | `postgres://user:pass@host:5432/db` |
| `LOG_LEVEL` | No | Logging verbosity (default: info) | `debug`, `info`, `warn`, `error` |
```

## Step 4: Update Contributing Guide

Generate or update `docs/CONTRIBUTING.md` with:
- Development environment setup (prerequisites, install steps)
- Available scripts and their purposes
- Testing procedures (how to run, how to write new tests)
- Code style enforcement (linter, formatter, pre-commit hooks)
- PR submission checklist

## Step 5: Update Runbook

Generate or update `docs/RUNBOOK.md` with:
- Deployment procedures (step-by-step)
- Health check endpoints and monitoring
- Common issues and their fixes
- Rollback procedures
- Alerting and escalation paths

## Step 6: Staleness Check

1. Find documentation files not modified in 90+ days
2. Cross-reference with recent source code changes
3. Flag potentially outdated docs for manual review

## Step 7: Show Summary

```
Documentation Update
──────────────────────────────
Updated:  docs/CONTRIBUTING.md (scripts table)
Updated:  docs/ENV.md (3 new variables)
Flagged:  docs/DEPLOY.md (142 days stale)
Skipped:  docs/API.md (no changes detected)
──────────────────────────────
```

## Rules

- **Single source of truth**: Always generate from code, never manually edit generated sections
- **Preserve manual sections**: Only update generated sections; leave hand-written prose intact
- **Mark generated content**: Use `<!-- AUTO-GENERATED -->` markers around generated sections
- **Don't create docs unprompted**: Only create new doc files if the command explicitly requests it
