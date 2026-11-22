# `/ecc-customs-trade-compliance`

Helps analyze customs classification, documentation, Incoterms 2020, preferences and duties, sanctions restrictions, and customs inquiries for specified jurisdictions.

## Simple Request

```text
/ecc-customs-trade-compliance What information is needed to preliminarily determine the tariff classification of an industrial sensor imported into the EU?
```

## Template Request

```text
/ecc-customs-trade-compliance
Product and intended use: [specifications]
Country of origin/export: [country]
Country of import: [country]
Route and Incoterm: [data]
Documents/restrictions: [known information]
Prepare a preliminary analysis, identify missing information, and note whether official confirmation is needed.
```

## Detailed Request

```text
/ecc-customs-trade-compliance Analyze shipment of product [technical description, materials, function] from [country] to [country/region], terms [Incoterm 2020], intended regime [description]. Step by step: list facts and missing specifications; explain a possible classification approach with applicable rules and alternatives; identify required commercial/import documents and origin evidence; note potential restrictions and denied-party screening questions based only on supplied data. Do not make definitive legal conclusions or file declarations/payments/inquiries; do not use web sources without approval. Provide a preliminary assessment, confidence, evidence, risks, and checks for a customs specialist.
```
