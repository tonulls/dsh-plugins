# `/ecc-scientific-pkg-gget`

Suggests reproducible gget workflows for genomic database queries, sequence searches, BLAST-like checks, and bioinformatics data enrichment.

## Simple Request
```text
/ecc-scientific-pkg-gget Suggest a gget plan to find gene [symbol/species] and record sources.
```
## Template Request
```text
/ecc-scientific-pkg-gget
Task: [gene/sequence/enrichment]
Organism and identifiers: [values]
Available data and environment: [context]
Create a reproducible gget plan and list required inputs and checks. Do not install the package.
```
## Detailed Request
```text
/ecc-scientific-pkg-gget I plan a bioinformatics query: [goal], organism [species/assembly], identifiers [list]. 1) Choose suitable gget operations and explain arguments. 2) Specify checks for species, reference database version, and identifier correspondence. 3) Suggest recording commands, time, parameters, and results for reproducibility. 4) State interpretation limitations and expected errors. Do not invent results, install CLI/libraries, or make network requests without separate approval. Do not include personal/secret data. Return draft commands, input requirements, checks, and an evidence-log template.
```
