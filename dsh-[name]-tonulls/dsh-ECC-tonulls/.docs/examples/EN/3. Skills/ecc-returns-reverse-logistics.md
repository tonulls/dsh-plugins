# `/ecc-returns-reverse-logistics`

Helps organize returns: authorization and receipt, inspection and condition assessment, disposition selection, refunds, fraud indicators, and warranty claims.

## Simple Request
```text
/ecc-returns-reverse-logistics Suggest a process for handling a product return, assessing its condition, and choosing a disposition.
```

## Template Request
```text
/ecc-returns-reverse-logistics
Product and category: [description]
Return reason: [reason]
Condition at receipt: [facts]
Policy/timelines: [terms]
Help choose a disposition and justify it; list unknown information separately.
```

## Detailed Request
```text
/ecc-returns-reverse-logistics Review this return case: [product, reason, dates, and anonymized inspection facts]. Step by step: check information sufficiency; classify condition using supplied rules; compare options (resale, refurbishment, discount, disposal, or supplier return if applicable); assess economic impact and possible abuse indicators without accusations; propose a verifiable refund/warranty decision. Do not initiate a refund, disposal, customer contact, or record change without separate approval. Result: facts, missing data, options, recommendation, and confidence limits.
```
