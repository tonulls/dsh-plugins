---
name: supabase
description: >-
  Use for Supabase tasks: Postgres and RLS, schemas and migrations, Data API, Auth/SSR, Storage, Edge Functions, Realtime,
  vectors, Cron/Queues, CLI/MCP, security reviews, debugging, and logs. Not for general Postgres work without Supabase.
---

# Supabase — DSH skill adaptation

This is an independent, instruction-only skill for the current DeepSeek Harness Agent. It is not an official Supabase product, CLI, MCP server, or remote integration. It does not install or run Supabase tools by itself. Follow the repository, DSH tool, network, and user-approval boundaries that actually apply to the current task.

This project-authored guidance was reviewed against public Supabase documentation and `supabase/supabase` at revision `eec2d0f947dd7137d176c4b95bd3010b0a052e52` (2026-10-27), and the official `supabase/agent-skills` repository at revision `c9be0e931b7930f7d02126d04774d904c381e7d7` (release v0.1.9, 2026-10-02). Selected connection, authentication and RLS guidance was also reviewed at platform revision `4ead4b092ee7e5ad4def2cd295b14492db12720b`. The DSH skill does not vendor either repository's source files or prose. Supabase docs and product behavior evolve: verify current official pages and the project's installed CLI/client versions before relying on version-sensitive details; this summary is not a substitute for current docs.

## Activation and use

The plugin makes this skill available only after `/dsh-supabase-tonulls on` for the current Agent. When invoked as `/supabase` with no task, briefly explain the supported Supabase areas and ask what the user wants to build or diagnose. For a concrete request, follow it; do not turn a request for explanation or review into unrequested edits or remote actions.

Before work, inspect the actual project: package versions, framework, `supabase/config.toml`, migrations, schema/types, RLS policies, environment-variable names, tests, deployment setup, and existing conventions. Read only relevant files; never dump `.env` values, credentials, tokens, or customer data into prompts or logs.

## Current documentation

Supabase changes frequently. Before using version-sensitive features or proposing a fix, read `https://supabase.com/changelog.md` for relevant breaking changes and deprecations, then consult the current topic page and the installed CLI/client reference. Prefer a read-only `search_docs` tool if the current environment provides one; otherwise fetch the official page (including its `.md` form when available). Do not assume that an MCP server or docs-search tool is installed just because the official platform offers one.

For errors or unexpected behavior, consult current [Observability](https://supabase.com/docs/guides/observability) and troubleshooting guidance before diagnosing. Inspect project logs only when an authorized tool is available and the target project/environment is clear.

## Safety rules

- Establish which Supabase project/environment is targeted: local, preview/branch, staging, or production. If it is unclear, ask before commands that can change state.
- Treat generated SQL, migrations, policies, and deployment plans as proposals until checked against the actual schema, roles, data, and application access patterns.
- Do not run or imply that you ran commands, tests, network requests, deployments, or database operations unless the tools exist and you actually ran them.
- Before a remote migration/deploy, destructive reset, data rewrite, auth-user change, bucket change, or other irreversible action: inspect the target and proposed diff, describe the effect, and obtain explicit user confirmation. A local command can also destroy data; distinguish disposable local state from valuable state.
- Never weaken access controls merely to make a query pass. Never put a secret/service key in browser code, a public environment variable, source control, a prompt, or a log.
- When Management API, CLI, or MCP authentication is needed, recommend a scoped personal access token limited to the required organization/project and permissions. Full-access legacy tokens span current and future resources; check the required permission for each endpoint/tool, and never request or expose the token itself.
- Do not install the Supabase CLI or dependencies, link a project, authenticate, create an account, or change project settings without a request.

## Core workflow

1. **Discover** — identify the Supabase client and version, framework/runtime, database schemas, API exposure, current migration workflow, key types, and existing authorization boundaries. Prefer local project evidence over generic examples.
2. **Plan** — state the intended data flow and the roles/operations that should be allowed or denied. Keep the change narrow; preserve existing migrations and policies unless the task requires changing them.
3. **Implement** — use the project's established client and migration style. Prefer reviewed, versioned migrations for schema/security changes. Do not make dashboard-only changes that leave the repository inconsistent when the project tracks migrations.
4. **Verify** — test both permitted and denied access, relevant client/server paths, migration behavior, and failure cases. Use the project's existing tests and available local stack. Report which checks ran and which did not.
5. **Report** — identify changed files, security implications, required secrets by *name only*, commands not run, and any approval still needed.

## Postgres, API exposure, and RLS

Treat Postgres grants and RLS as separate controls. For every table exposed through Supabase APIs, inspect its schema exposure, grants, RLS state, policies, and the application roles that reach it. Any table reachable by browser/mobile clients needs RLS even if its rows are intended to be public; express that access through an explicit policy. Treat quickstart public-read sample tables as temporary; before storing private rows, replace them with a real user/tenant boundary. Enabling RLS does not revoke table privileges, and a policy does not grant a privilege that is missing. Do not assume default grants or Data API exposure are identical across projects. When diagnosing a slow policy with query plans, prefer a disposable environment. Treat Data API plan exposure as a privileged diagnostic and check the current access restrictions before enabling it.

When creating or changing a policy:

- Define the exact role (`TO`), operation, row ownership/tenant boundary, and allowed transition. Avoid broad `USING (true)` or `WITH CHECK (true)` for user data unless the product requirement explicitly permits public access and the risk is explained.
- Reason separately about existing rows and proposed rows: `USING` filters rows already present; `WITH CHECK` validates inserted or updated rows. `UPDATE` workflows commonly also need a matching `SELECT` policy.
- Use trusted identity claims from the server-validated Supabase Auth context; do not authorize from client-supplied IDs or mutable profile metadata alone.
- Never base authorization on `user_metadata`/`raw_user_meta_data`: users can edit it, and its claims may appear in JWTs. If authorization depends on trusted app-set claims, account for JWT staleness until token refresh; still verify the actual row/tenant boundary.
- Prefer policy `TO` clauses over ad hoc role-claim checks; a role alone does not prove row ownership or consent. Check the unauthenticated case and each authenticated role separately.
- Preserve least privilege in SQL grants in addition to row policies. Test allowed and denied `SELECT`, `INSERT`, `UPDATE`, and `DELETE` cases as applicable; use the project's database tests/pgTAP where available. Run assertions in a disposable database as the actual application roles with representative identities. Check returned rows or write outcomes, including another tenant’s data where relevant.
- Index columns used by policies and frequent filters when supported by query plans. Do not remove a correct policy to address a performance issue; inspect plans and current RLS performance guidance.
- Review views, RPC/database functions, triggers, and `SECURITY DEFINER` paths for RLS bypass or privilege escalation. New PostgreSQL functions grant `EXECUTE` to `PUBLIC` by default; explicitly restrict grants, schema-qualify references, constrain `search_path`, and keep privileged functions out of exposed schemas where appropriate.

Supabase's Data API is generated from Postgres. Inspect grants, exposed schemas, and API configuration before assuming that a table or function is inaccessible just because the UI does not link to it. Generate database types from the actual target schema only when the CLI and target are confirmed.

## Migrations and CLI

Use the project's migration history as the schema source of truth. Inspect current migration files and status before generating a new migration; explain non-reversible changes, locks, backfills, and compatibility requirements. Prefer local development and tests before remote rollout. Use the CLI version declared by the project and consult `supabase <command> --help` or the current CLI reference instead of guessing flags.

`supabase start` starts the local stack; it is not a remote deployment. `supabase db reset` can discard local database state, so confirm the target and data impact first. A remote command such as `supabase db push` changes a hosted database: review the migration list/diff and target project, explain the exact change, and wait for explicit approval before running it. Never infer production approval from a request to write a migration. Confirm the target selector supported by the installed CLI. If the project uses pg-delta, review schema diffs for changes to managed Auth and Storage objects. Verify bucket and object data separately from schema migration coverage.

For schema changes, check whether the project uses migrations or declarative schemas, preserve its chosen workflow, and include an appropriate test/rollback or forward-recovery plan. Do not edit remote production through Dashboard for convenience when the repository's migration workflow is authoritative.

## Auth and server-side rendering

- Use the project's current official client package and framework guidance. For SSR integrations, check the current `@supabase/ssr` flow and cookie handling; do not copy examples from deprecated Auth Helpers without verifying the migration guidance.
- Keep user-scoped clients distinct from privileged server clients. Verify the user's identity/claims at the trusted server boundary and still enforce database authorization with RLS where applicable.
- Treat publishable keys as public identifiers, not as user authentication or authorization. Data access must remain constrained by grants and RLS.
- Secret keys and legacy `service_role` credentials are privileged and can bypass RLS. Use them only in trusted server-side code that needs elevated access. Never expose them through `NEXT_PUBLIC_*`, `VITE_*`, client bundles, mobile apps, or logs.
- If a project uses legacy `anon`/`service_role` keys, check the current official key-migration guidance and project compatibility; do not rotate or rename keys as an incidental code cleanup. For raw HTTP, send new publishable or secret keys in `apikey` and use `Authorization: Bearer` for the user access token when required. Verify how the installed client constructs these headers.
- Avoid trusting unsigned or stale client session data for authorization. Follow the current framework-specific server verification and refresh pattern. If a permission change depends on JWT custom claims, test the behavior of both a previously issued token and a refreshed session.
- Deleting an Auth user does not immediately invalidate JWTs already issued to that user. If immediate revocation matters, plan session revocation/expiry and server-side checks using current Auth guidance.

## Storage

Treat Storage authorization as database authorization on `storage.objects`. Inspect bucket visibility, object paths, ownership semantics, and per-operation policies. Scope policies to the intended bucket and user/tenant path; public bucket reads do not imply that uploads, overwrites, or deletes should be public.

Check the exact operation set: upload, read/list, overwrite (`upsert`), move, and delete can need different RLS operations/privileges. In particular, overwriting can require additional `SELECT` and `UPDATE` access beyond insertion. Use the current Storage docs for operation-specific details and test an authorized and unauthorized object path.

For signed URLs, distinguish Storage URL signing keys from Auth keys. Verify expiry and CDN
behavior during a planned rotation or revocation. Previously accessed URLs may remain cached.
Confirm the affected scope and obtain approval before any production key or cache change.

## Edge Functions and secrets

Check the project's Deno/runtime and function config rather than assuming Node APIs. Check which local environment source the CLI reads for configuration interpolation and which source supplies the running function. Validate caller authentication and authorization in the function, validate inputs, and keep privileged work server-side. CORS is not authorization.

Use local, ignored environment files for development and the project's approved secret-management path for deployment. Never commit, print, or return secret values. Current Supabase docs reserve the `SUPABASE_` prefix for platform-provided environment variables; verify this rule before adding function secrets. Do not deploy a function or modify production secrets without explicit approval.

## Realtime and other Supabase services

For Realtime, GraphQL, vector/AI features, or other Supabase services, first identify the exact feature and installed client/API version, then consult the relevant current official guide. Realtime subscriptions and generated APIs still need an explicit authorization model; do not assume a client key alone makes the data safe. Keep this skill's advice within documented behavior and the user's stated architecture.

## Testing checklist

- Confirm the actual project, CLI/client versions, and target environment.
- Exercise both allowed and denied RLS paths for each affected role and operation.
- Test migrations against a disposable local/preview database before proposing a remote change.
- Check SSR cookie/session handling and server/client key separation where Auth is involved.
- Test Storage operations against bucket and object-path boundaries.
- Test Edge Function auth, invalid inputs, error paths, and secret handling without exposing values.
- Review generated types and query plans against the actual schema when those areas change.
- Report missing credentials, unavailable local services, unrun tests, and runtime-only verification explicitly.

## Official references

- [Supabase source repository](https://github.com/supabase/supabase/tree/eec2d0f947dd7137d176c4b95bd3010b0a052e52)
- [Official Supabase Agent Skills](https://github.com/supabase/agent-skills/tree/c9be0e931b7930f7d02126d04774d904c381e7d7)
- [Supabase documentation](https://supabase.com/docs) and [changelog](https://supabase.com/changelog.md)
- [The Supabase way to build](https://supabase.com/docs/guides/getting-started/the-supabase-way-to-build)
- [Postgres Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [API keys](https://supabase.com/docs/guides/getting-started/api-keys) and [scoped personal access tokens](https://supabase.com/docs/guides/platform/personal-access-tokens)
- [Creating a Supabase client for SSR](https://supabase.com/docs/guides/auth/server-side/creating-a-client)
- [Storage access control](https://supabase.com/docs/guides/storage/security/access-control)
- [Edge Function environment variables](https://supabase.com/docs/guides/functions/secrets)
- [Observability and troubleshooting](https://supabase.com/docs/guides/observability)
- [Supabase CLI](https://supabase.com/docs/guides/local-development/cli/getting-started)
- [Database migrations](https://supabase.com/docs/guides/deployment/database-migrations)
- [CLI reference](https://supabase.com/docs/reference/cli)


## Database connection recovery

Copy the connection parameters for the intended mode from the Supabase Dashboard Connect dialog.
Use the displayed hostname, port, and username, especially for pooler connections. The dashboard
does not reveal a previously set database password. If the password is unavailable, identify the
clients and secret stores that depend on it before proposing a reset. Existing clients using the
old password must be updated. Do not reset it without explicit authorization.

When diagnosing capacity, identify the direct connection or exact pooler and connection mode in use.
Check the client connection cap separately from the backend database connection pool and verify
settings for the actual compute tier.
