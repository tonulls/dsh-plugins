# `/ecc-gan-evaluator` — Prompt Examples

## Purpose

Evaluates a running application with Playwright against a specified scale/rubric and prepares actionable feedback for the Generator. A running, accessible application is required.

## Short Request

```text
/ecc-gan-evaluator Evaluate the running application {URL/environment} against criteria {rubric}; check the specified flow {scenario} and report observed results.
```

## Template Request

```text
/ecc-gan-evaluator Evaluate the live application at {address or access method} against rubric {criteria/threshold}. Check flows {scenarios}; use Playwright only if available. For each score, provide an observation and evidence; at the end, prepare actionable feedback for the Generator. Do not change the application.
```

## Detailed Request

```text
/ecc-gan-evaluator Evaluate the running version of {application/address} as a GAN Harness iteration.
1. Confirm that the application is accessible and identify the criteria in {specification/rubric}; do not attribute unstated requirements to it.
2. Use Playwright to run through scenarios {main user flows}; record only behavior actually observed.
3. Score each criterion using {scale/threshold}, providing supporting evidence, issue severity, and user impact.
4. Prepare a prioritized list of changes for the Generator, tied to the criteria.

Format: “criterion — score — evidence — gaps” table, outcome against the threshold, and a separate feedback list. If the application is unavailable or criteria are unspecified, say so and do not invent scores. Do not edit the application, install dependencies, access the network, or deploy without approval.
```