# ecc-finance-billing-ops

**Command:** `/ecc-finance-billing-ops`

**Purpose:** A data-driven ECC workflow for revenue, pricing, refunds, team billing, and checking the actual payment model. Use to summarize sales, compare plans, diagnose duplicate charges, or verify billing against code rather than generic payment advice.

## Prompts

### 1. Short Request
> /ecc-finance-billing-ops Analyze the billing discrepancy using available data.

### 2. Template with Context
> /ecc-finance-billing-ops Period: [dates], product/plan: [name], question: [revenue/refund/duplicates]. Use only available substantiated information; do not initiate payments or refunds.

### 3. Detailed Request
> /ecc-finance-billing-ops Reconcile code and supplied data for [billing question]. Separate facts and hypotheses, compare amounts and periods, and check for possible duplicates. Do not access external systems or perform financial operations without explicit consent. Provide calculations and unknowns.
