# `/ecc-customer-billing-ops`

Helps handle customer billing workflows—subscriptions, refunds, churn, billing portal access, and plans—using connected billing tools when available.

## Simple Request

```text
/ecc-customer-billing-ops Help me understand why a customer sees two charges this month.
```

## Template Request

```text
/ecc-customer-billing-ops
Customer request: [text without unnecessary personal data]
Ticket ID: [non-secret]
Known subscription/account facts: [data]
Need: [check status / draft a response / assess options]
Review and explain only at first; do not issue a refund, change a plan, or cancel without my approval.
```

## Detailed Request

```text
/ecc-customer-billing-ops Review request [brief description] about [subscription/refund/duplicate charge/portal]. Use only authorized connected tools and the minimum necessary data; do not request payment card details, passwords, or tokens. First check available facts and separate confirmed information from hypotheses; then compare with billing rules and draft a customer response. Do not perform any financial or state-changing action (refund, cancellation, plan change, customer email) without separate approval specifying the exact item and amount/text. Do not access the network or external services if no connected tool/permission is available. Result: facts found, uncertainties, proposed safe next step, and draft response.
```
