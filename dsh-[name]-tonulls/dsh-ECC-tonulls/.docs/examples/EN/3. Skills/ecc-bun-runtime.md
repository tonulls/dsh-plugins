# `/ecc-bun-runtime`

Helps assess Bun as a runtime, package manager, bundler, and test runner; choose between Bun and Node; plan migration; and account for Vercel support. For engineering decisions, not assumptions that all tools are automatically compatible.

## Short Request

```text
/ecc-bun-runtime Compare Bun and Node for our TypeScript CLI: consider runtime APIs, tests, and dependency compatibility.
```

## Template

```text
/ecc-bun-runtime Assess [Bun/migration from Node] for project [application type, versions, and key dependencies]. Consider the required roles for Bun: [runtime / package manager / bundler / test runner], actual compatibility, Vercel [if applicable], and migration cost. Do not install anything or change the lockfile.
```

## Step-by-Step Request

```text
/ecc-bun-runtime Prepare a decision on adopting Bun in [project/scenario]. Current environment: [Node/Bun versions, OS/CI, framework, hosting]. Criteria: [speed, compatibility, reproducibility, team support].
1. Separate the roles—application runtime, package installation, bundling, and tests—and assess requirements and constraints for each.
2. Compare the project's current versions and dependencies with available compatibility evidence. Do not generalize results for one version to all versions.
3. If the target hosting is Vercel, separately check its runtime/build constraints for the specified launch method; do not promise support without confirmation.
4. Propose a gradual trial migration and stop/rollback criteria. Do not install anything, access the network, or change configuration without approval.

Result: comparison table for the four roles, risks and unknowns, conditional recommendation, and minimal validation plan. Do not invent benchmark or compatibility results.
```
