<!-- Generated from skills/social-graph-ranker/SKILL.md at 25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b; edit the pinned source or generator instead. -->
# DSH skill adaptation

Use this instruction only when the user explicitly invokes its `/ecc-*` command. It runs in the current DSH session and does not start a separate agent or process.
Use only models, tools, and integrations actually available in the current DSH session. Upstream model, tool, hook, and MCP settings are not imported.
This package contains Markdown resources only. It does not install, download, or execute upstream scripts, hooks, MCP servers, or other helpers. If the task depends on a missing helper or integration, explain the limitation instead of assuming it exists.
References to other ECC Skills, Commands, agents, or slash commands are not proof that they are included or available; verify the active catalog and current DSH session before invoking them, and explain any missing capability.
This instruction grants no permissions. Do not perform external, destructive, or other side-effecting actions unless the user requested them and current session policy allows them.

Source: https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/skills/social-graph-ranker/SKILL.md

# Social Graph Ranker

Canonical weighted graph-ranking layer for network-aware outreach.

Use this when the user needs to:

- rank existing mutuals or connections by intro value
- map warm paths to a target list
- measure bridge value across first- and second-order connections
- decide which targets deserve warm intros versus direct cold outreach
- understand the graph math independently from `lead-intelligence` or `connections-optimizer`

## When To Use This Standalone

Choose this skill when the user primarily wants the ranking engine:

- "who in my network is best positioned to introduce me?"
- "rank my mutuals by who can get me to these people"
- "map my graph against this ICP"
- "show me the bridge math"

Do not use this by itself when the user really wants:

- full lead generation and outbound sequencing -> use `lead-intelligence`
- pruning, rebalancing, and growing the network -> use `connections-optimizer`

## Inputs

Collect or infer:

- target people, companies, or ICP definition
- the user's current graph on X, LinkedIn, or both
- weighting priorities such as role, industry, geography, and responsiveness
- traversal depth and decay tolerance

## Core Model

Given:

- `T` = weighted target set
- `M` = your current mutuals / direct connections
- `d(m, t)` = shortest hop distance from mutual `m` to target `t`
- `w(t)` = target weight from signal scoring

Base bridge score:

```text
B(m) = Σ_{t ∈ T} w(t) · λ^(d(m,t) - 1)
```

Where:

- `λ` is the decay factor, usually `0.5`
- a direct path contributes full value
- each extra hop halves the contribution

Second-order expansion:

```text
B_ext(m) = B(m) + α · Σ_{m' ∈ N(m) \\ M} Σ_{t ∈ T} w(t) · λ^(d(m',t))
```

Where:

- `N(m) \\ M` is the set of people the mutual knows that you do not
- `α` discounts second-order reach, usually `0.3`

Response-adjusted final ranking:

```text
R(m) = B_ext(m) · (1 + β · engagement(m))
```

Where:

- `engagement(m)` is normalized responsiveness or relationship strength
- `β` is the engagement bonus, usually `0.2`

Interpretation:

- Tier 1: high `R(m)` and direct bridge paths -> warm intro asks
- Tier 2: medium `R(m)` and one-hop bridge paths -> conditional intro asks
- Tier 3: low `R(m)` or no viable bridge -> direct outreach or follow-gap fill

## Scoring Signals

Weight targets before graph traversal with whatever matters for the current priority set:

- role or title alignment
- company or industry fit
- current activity and recency
- geographic relevance
- influence or reach
- likelihood of response

Weight mutuals after traversal with:

- number of weighted paths into the target set
- directness of those paths
- responsiveness or prior interaction history
- contextual fit for making the intro

## Workflow

1. Build the weighted target set.
2. Pull the user's graph from X, LinkedIn, or both.
3. Compute direct bridge scores.
4. Expand second-order candidates for the highest-value mutuals.
5. Rank by `R(m)`.
6. Return:
   - best warm intro asks
   - conditional bridge paths
   - graph gaps where no warm path exists

## Output Shape

```text
SOCIAL GRAPH RANKING
====================

Priority Set:
Platforms:
Decay Model:

Top Bridges
- mutual / connection
  base_score:
  extended_score:
  best_targets:
  path_summary:
  recommended_action:

Conditional Paths
- mutual / connection
  reason:
  extra hop cost:

No Warm Path
- target
  recommendation: direct outreach / fill graph gap
```

## Related Skills

- `lead-intelligence` uses this ranking model inside the broader target-discovery and outreach pipeline
- `connections-optimizer` uses the same bridge logic when deciding who to keep, prune, or add
- `brand-voice` should run before drafting any intro request or direct outreach
- `x-api` provides X graph access and optional execution paths
