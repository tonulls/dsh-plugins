# `/ecc-vite-patterns`

Suggests Vite practices: configuration and plugins, HMR, environment variables, proxy, SSR, library mode, dependency prebundling, and build optimization.

## Simple Request
```text
/ecc-vite-patterns Analyze the cause of this Vite config/HMR problem and suggest diagnostics: [description]
```
## Template Request
```text
/ecc-vite-patterns
Vite version and stack: [data]
Task/error: [description]
vite.config.ts and related snippets: [code]
Suggest a compatible solution and checks; do not change configuration or install plugins without approval.
```
## Detailed Request
```text
/ecc-vite-patterns Analyze Vite task: [HMR/proxy/SSR/library mode/build]. Steps: inspect current configuration and versions; identify relevant settings and interactions; suggest a minimal option; account for env-variable secrecy and dev/build differences; define checks for expected results and regressions. Do not reveal secret values, access the network, or add/install plugins without separate approval. Do not modify files before plan approval. Report cause, recommended config snippet, compatibility, checks, and risks.
```
