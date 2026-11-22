# ecc-esign-field-placement

**Command:** `/ecc-esign-field-placement`

**Purpose:** Precisely places signature, date, and text fields in an e-signature web editor using browser automation: fixed signature page, coordinate entry in the “Location” panel instead of dragging, and saving as a draft by default. Use for repeatable field placement and recipient assignment, with required verification before sending or signing.

## Prompts

### 1. Short Request
> /ecc-esign-field-placement Prepare signature fields in the document as a draft; do not send anything.

### 2. Template with Context
> /ecc-esign-field-placement Document: [name], pages: [number], participants: [roles]. Prepare signature/date/text field placement using fixed coordinates and save only as a draft; confirm before any save.

### 3. Detailed Request
> /ecc-esign-field-placement Check the signature page and recipient mapping. Determine field coordinates through the Location panel; do not drag. Stop before saving the draft and do not send or sign without separate approval. Report fields and uncertainties.
