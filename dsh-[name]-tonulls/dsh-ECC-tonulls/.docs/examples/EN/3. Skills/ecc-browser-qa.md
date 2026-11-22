# `/ecc-browser-qa`

Automated QA of a deployed interface through an available browser automation MCP (claude-in-chrome, Playwright, or Puppeteer): console errors, Core Web Vitals, form and authentication flows, visual regression at three widths, axe-core audit, and final SHIP / DO-NOT-SHIP verdict.

## Short Request

```text
/ecc-browser-qa Check the staging checkout page for major errors, form behavior, accessibility, and responsiveness; finish with a SHIP or DO-NOT-SHIP verdict.
```

## Template

```text
/ecc-browser-qa Perform browser QA of the deployed version [URL/environment] for change [feature/PR]. Use available MCP [tool, if known]. Check [scenarios, including forms/auth], console, Core Web Vitals, three widths [values], and axe-core. Do not perform dangerous actions with real data or modify production.
```

## Step-by-Step Request

```text
/ecc-browser-qa Check feature [name] on [staging/preview URL], related PR [identifier]. Conditions: test credentials [do not include secrets in report], safe test data [description].
1. Confirm browser automation MCP is available and the target URL is actually staging/preview; otherwise stop and report the limitation.
2. Record console errors and available Core Web Vitals metrics.
3. Run agreed form and sign-in/sign-out scenarios without making real payments, sending messages, or changing accounts.
4. Compare visual results at narrow, medium, and wide breakpoints; save screenshots/links only if the tool supports them.
5. Run an axe-core audit, group violations by severity, and provide reproducible steps.

Result: check table with status and evidence, defects with reproduction steps, and a clear SHIP / DO-NOT-SHIP verdict. Do not claim checks the tool did not perform. No deployment/environment changes without approval.
```
