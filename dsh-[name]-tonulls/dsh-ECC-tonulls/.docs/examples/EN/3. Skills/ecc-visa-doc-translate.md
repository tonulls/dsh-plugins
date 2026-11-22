# `/ecc-visa-doc-translate`

Helps read images of visa documents (bank, employment, income, and pension certificates) and prepare an English translation with a bilingual PDF pairing the original and translation.

## Simple Request
```text
/ecc-visa-doc-translate Prepare an English translation of this certificate and mark illegible parts: [image]
```
## Template Request
```text
/ecc-visa-doc-translate
Document type: [certificate]
Original language: [language]
Purpose: visa document package [country/context]
Input image: [path]
Translate visible text, preserve structure, and clearly mark uncertain fragments. Do not claim certification or notarization.
```
## Detailed Request
```text
/ecc-visa-doc-translate Process the supplied image of [certificate type] to prepare bilingual material. First say whether its format/quality is readable; then transcribe the text, preserving names, dates, amounts, and structure without guessing; translate into English; mark illegible/ambiguous fragments separately and request manual verification of critical fields. If the capability is available, create a PDF with the original and formatted translation; do not claim the translation is officially certified. Do not upload the document or save/distribute copies without separate consent. Protect personal and financial information. Result: transcription and translation, list of uncertainties, and PDF status (created/unavailable).
```
