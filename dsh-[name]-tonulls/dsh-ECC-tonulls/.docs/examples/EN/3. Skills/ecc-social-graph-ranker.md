# `/ecc-social-graph-ranker`

Ranks social connections for warm introductions, assessing intermediary roles and network gaps on X and LinkedIn.

## Simple Request
```text
/ecc-social-graph-ranker Using the supplied anonymized table, find the most promising introduction bridges by criteria [criteria].
```
## Template Request
```text
/ecc-social-graph-ranker
Connection goal: [goal]
Graph data: [anonymized nodes/edges and attributes]
Criteria weights: [values]
Rank connections and explain factor contributions; do not infer more about people than the data supports.
```
## Detailed Request
```text
/ecc-social-graph-ranker Assess the supplied social graph export for goal [goal]. First clarify schema and data limitations; then propose transparent weights for relevance, path strength, and bridge score; rank using only supplied information; identify coverage gaps and test sensitivity to weights. Use only lawfully obtained minimum necessary data; do not search for people online or export/modify contacts. Do not send messages or perform follow/connect actions without separate approval. Result: method and assumptions, ranked list with explanation, uncertainty, and a safe manual next-step recommendation.
```
