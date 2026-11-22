# ecc-nuxt4-patterns

**Command:** `/ecc-nuxt4-patterns`

**Purpose:** Nuxt 4 practices for safe hydration, performance, route rules, lazy loading, and SSR-safe data fetching with `useFetch` and `useAsyncData`.

## Prompts

### 1. Short Request
> /ecc-nuxt4-patterns Find the cause of this hydration mismatch in a Nuxt 4 component and suggest an SSR-safe fix: [code/error].

### 2. Template with Context
> /ecc-nuxt4-patterns Nuxt/Vue versions: [versions]; route: [path]; rendering: [SSR/CSR/static generation]; data source: [API/local]. Page code and error message: [paste]. Check differences between server and first client render, whether `useFetch`/`useAsyncData` is appropriate, keys/caching, and lazy loading. Do not assume behavior unsupported by configuration.

### 3. Detailed Request
> /ecc-nuxt4-patterns Review Nuxt 4 page [route/purpose], especially [hydration/SSR requests/performance/route rules]. 1) Study implementation and route configuration; identify server and client rendering paths and where results may differ (time, randomness, window, user data). 2) For data fetching, compare current code with `useFetch` and `useAsyncData`: SSR result transfer, keys, duplicate requests, and error handling—only within the actual context. 3) Assess lazy loading and route rules without changing route semantics or assuming gains without measurement. 4) Suggest minimal fixes and checks for server HTML and client hydration. Do not deploy or install packages. Format: prioritized findings with files/lines, causal explanation, recommended diff concept, and verifiable criteria.
