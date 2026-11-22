# `/ecc-comment-analyzer` — Prompt Examples

## Purpose

Analyzes code comments for factual accuracy, sufficient context, maintainability, and risk of becoming outdated. The goal is to find comments that may mislead readers or fail to explain a nontrivial decision.

## 1. Short Request

```text
/ecc-comment-analyzer Review comments in {file/module}: find any that are incorrect, outdated, or unhelpful, and explain the risk. Do not change anything.
```

## 2. Template Request

```text
/ecc-comment-analyzer Analyze comments in {paths/diff} for consistency with the current implementation. For each questionable case, compare the comment with the code, cite file/lines, and classify it as inaccurate, incomplete, redundant, or at risk of comment rot. Suggest revised wording or removal, but do not edit files.
```

## 3. Detailed Request

```text
/ecc-comment-analyzer Conduct a read-only audit of comments in {paths or changed files}. Change/module context: {purpose, if known}.

1. Compare each significant comment with the actual logic, contracts, and nearby symbols; check whether it describes former behavior.
2. Assess whether the comment adds a necessary explanation of a reason, constraint, or invariant, or merely repeats obvious code.
3. For each risk, assign a category—factual inaccuracy, missing important context, maintainability difficulty/comment rot, or unnecessary comment—and provide evidence from the nearby implementation.
4. Distinguish proven outdated comments from suspicions; explain what check or context would resolve uncertain cases.

Format: prioritized list with file and lines, current wording (without revealing secrets), verifiable discrepancy/risk, and recommended action: correct, expand, or remove. End with coverage and limitations. Do not change source files or comments, install packages, access the network, or deploy.
```