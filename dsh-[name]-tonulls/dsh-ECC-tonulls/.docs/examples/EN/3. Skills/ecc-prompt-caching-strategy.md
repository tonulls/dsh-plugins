# `/ecc-prompt-caching-strategy`

**Purpose:** Increases LLM prompt cache-hit rates to reduce API costs and latency. Analyzes prompt structure, identifies cacheable/non-cacheable sections, and recommends changes to improve cache reuse. Use for prompt caching, hit rates, LLM cost reduction, token savings, and caching with OpenAI, Anthropic, and other providers. Do not use to improve a single prompt's quality or general caching infrastructure.

## Short Prompt
```text
/ecc-prompt-caching-strategy Find ways to improve cache hits for this LLM prompt without changing its meaning.
```

## Template Prompt
```text
/ecc-prompt-caching-strategy
Context: [current prompt, provider/model, dynamic fields, volumes, and available metrics].
Task: optimize LLM prompt caching for cost and latency for [target component/outcome].
Focus: stable vs. dynamic sections, segment ordering, cache hit rate, cost/latency, and provider constraints.
Constraints: Prepare a plan and verification criteria; do not change code, data, schedules, or external systems.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-prompt-caching-strategy
Perform the task “optimize LLM prompt caching for cost and latency” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess stable/dynamic sections, segment order, cache hit rate, cost/latency, and provider constraints.
3. State findings or options with facts, risks, verification criteria, and unresolved questions; apply nothing.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Prepare a plan and verification criteria; do not change code, data, schedules, or external systems.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
