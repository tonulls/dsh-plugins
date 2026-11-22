# ecc-nextjs-turbopack

**Command:** `/ecc-nextjs-turbopack`

**Purpose:** Recommendations for Next.js 16+ and Turbopack: incremental builds, filesystem cache, dev/HMR startup, Turbopack vs. webpack selection, and migration from `middleware.ts` to `proxy.ts`.

## Prompts

### 1. Short Request
> /ecc-nextjs-turbopack Why is dev/HMR slow to start in my Next.js [version]? Analyze supplied logs and suggest checks without changing the project.

### 2. Template with Context
> /ecc-nextjs-turbopack Next.js: [version]; package manager: [name]; bundler: [Turbopack/webpack]; OS: [OS]; project size: [approximate]; symptom: [startup/HMR/build]. Start command: [command], log/measurement: [paste]. Match likely causes to cache, incremental compilation, and bundler configuration; list minimal checks and selection trade-offs.

### 3. Detailed Request
> /ecc-nextjs-turbopack Analyze task for Next.js [version; specify if below 16]: [symptom or goal]. 1) Determine the actual bundler and run mode from package.json, config, and logs; do not assume the version supports a feature. 2) For slow startup/HMR, identify measurable hypotheses, checks, and expected observations; separate filesystem-cache effects from other causes. 3) If choosing Turbopack vs. webpack, compare limitations, compatibility, and decision criteria; do not promise speedups without measurement. 4) If middleware is involved, verify the `middleware.ts` → `proxy.ts` migration context for the version in use and list potential changes. Do not edit anything or perform network/deployment operations. Provide diagnosis, hypothesis table, and a safe measurement plan with success criteria.
