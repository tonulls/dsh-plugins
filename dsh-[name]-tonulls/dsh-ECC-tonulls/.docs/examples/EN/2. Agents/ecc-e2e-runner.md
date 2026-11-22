# `/ecc-e2e-runner` — Prompt Examples

## Purpose

Creates, maintains, and runs E2E scenarios for critical user flows; prefers Vercel Agent Browser, with Playwright as a fallback, and helps investigate flaky tests and artifacts.

## Short Request

```text
/ecc-e2e-runner Check the E2E scenario {flow} in {application}. First identify the existing tools and tell me what can be run safely.
```

## Template Request

```text
/ecc-e2e-runner For {path/application}, cover the flow {start → expected outcome}. Use Vercel Agent Browser or Playwright already available in the project; do not add dependencies. List prerequisites, checks, flaky areas, and required artifacts; run the test only if authorized.
```

## Detailed Request

```text
/ecc-e2e-runner Prepare E2E coverage for scenario {scenario} in {environment/URL}.
1. Study the existing test infrastructure, available commands, and documented user flows.
2. Choose a supported tool (prefer Vercel Agent Browser, otherwise Playwright) only if it is already available.
3. Define steps, observable assertions, and data that does not depend on unstable UI details.
4. For flaky tests, distinguish application defects from flaky behavior; propose quarantine only when justified.
5. Run only an explicitly authorized test; list created artifacts only if they were actually produced.

Format: infrastructure, scenario and assertions, test changes, actual results, and limitations. Do not install packages, access the network, or deploy without approval; do not claim a live-flow check if the application was not running.
```