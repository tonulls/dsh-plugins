# `/ecc-conventional-commit-review`

Reviews staged changes and suggests a suitable Conventional Commits message with the correct type, scope, and length. Does not commit.

## Simple Request

```text
/ecc-conventional-commit-review Review the staged changes and suggest a commit message.
```

## Template Request

```text
/ecc-conventional-commit-review
Review only the already staged diff.
Change context: [goal]
Suggest a type, scope, and concise Conventional Commit message; do not stage anything or commit.
```

## Detailed Request

```text
/ecc-conventional-commit-review Analyze only the current staged changes and compare them with the context [task description]. Identify the single purpose of the change, suitable Conventional Commits type and narrow scope; check subject length/clarity and whether a body or breaking-change footer is needed. If the staged diff combines unrelated tasks or context is insufficient, say so rather than inventing context. Do not modify files, the staging area, or Git history; do not create a commit. Provide a brief rationale and one recommended message, with an alternative if useful.
```
