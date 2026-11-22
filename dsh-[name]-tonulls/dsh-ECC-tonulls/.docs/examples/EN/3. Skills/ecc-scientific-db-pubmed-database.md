# `/ecc-scientific-db-pubmed-database`

Helps formulate PubMed/NCBI E-utilities queries, search biomedical literature, find records by PMID, retrieve citations, and plan monitoring.

## Simple Request
```text
/ecc-scientific-db-pubmed-database Suggest a PubMed search strategy for [topic] and explain the query's key terms.
```

## Template Request
```text
/ecc-scientific-db-pubmed-database
Question: [research question]
Population/intervention/outcome: [if applicable]
Period and languages: [constraints]
Prepare a reproducible PubMed query and selection criteria; do not invent retrieved articles.
```

## Detailed Request
```text
/ecc-scientific-db-pubmed-database For question [question], prepare a PubMed search: 1) break the question into concepts and MeSH/synonyms; 2) compose and explain a query with fields and date; 3) define inclusion/exclusion criteria and screening procedure; 4) describe retrieving PMID and bibliographic data; 5) state completeness limitations. Do not provide medical recommendations or expose personal data. Do not make network requests without approval; if PubMed access is unavailable, provide only a reproducible plan. Result: query, criteria, search-log fields, and list of records actually checked with PMID/links—or clearly state that no search was run.
```
