# Prompt Example: `/ecc-rag-pipeline-reviewer`

**Invocation command:** `/ecc-rag-pipeline-reviewer`

## Purpose

Reviews a RAG pipeline: retrieval quality, chunking strategy, embeddings, and evaluation adequacy. Analysis only.

## 1. Short Request

```text
/ecc-rag-pipeline-reviewer Assess RAG retrieval quality based on description {pipeline} and data {metrics}; do not change anything.
```

## 2. Template Request

```text
/ecc-rag-pipeline-reviewer Assess RAG system {description/diff} for queries {query types}; corpus and metrics {data}. Check chunking, retrieval/reranking, embeddings, and eval-set representativeness. Do not access the external network or change code/index; provide evidence, gaps, and prioritized experiments.
```

## 3. Detailed Request

```text
/ecc-rag-pipeline-reviewer Conduct a systematic analysis of task {scenario/change} for the rag-pipeline-reviewer.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: retrieval quality, chunking strategy, embeddings, and evaluation adequacy. Analysis only.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, starting a loop, or applying configuration.
```