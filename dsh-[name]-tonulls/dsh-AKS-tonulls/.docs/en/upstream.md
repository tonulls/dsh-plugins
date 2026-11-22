# Source and adaptation

**Status:** Upstream content was checked against commit `2c606141936f1eeef17fa3043a72095b4765b9c2`.

## Source

- Repository: [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills).
- Main skill source: [`skills/karpathy-guidelines/SKILL.md`](https://github.com/multica-ai/andrej-karpathy-skills/blob/2c606141936f1eeef17fa3043a72095b4765b9c2/skills/karpathy-guidelines/SKILL.md).
- Summary materials: [`README.md`](https://github.com/multica-ai/andrej-karpathy-skills/blob/2c606141936f1eeef17fa3043a72095b4765b9c2/README.md), [`CLAUDE.md`](https://github.com/multica-ai/andrej-karpathy-skills/blob/2c606141936f1eeef17fa3043a72095b4765b9c2/CLAUDE.md), and Cursor rule [`karpathy-guidelines.mdc`](https://github.com/multica-ai/andrej-karpathy-skills/blob/2c606141936f1eeef17fa3043a72095b4765b9c2/.cursor/rules/karpathy-guidelines.mdc).
- The source declares MIT in its README and skill frontmatter; its tree at this commit has no standalone `LICENSE` file.

## Included

The plugin bundles one skill, `karpathy-guidelines`, with four principles: Think Before Coding, Simplicity First, Surgical Changes, and Goal-Driven Execution. The English package retains the English instructions; Russian and Chinese packages contain translations. Each variant adds a brief DSH boundary note: skill text does not grant permissions or replace technical restrictions.

## Not included

Claude Code Marketplace metadata and Cursor rules are not used as DSH manifests. The plugin bundles only the skill instructions and a small DSH adapter; it does not include or launch third-party tools or extra processes.

## Localization and verification

Structural identifiers (`name`, asset path, and plugin ID) are the same in every package. The `ru` and `zh` texts are translations; `karpathy-guidelines` remains unchanged. Verify translation fidelity and skill discovery on the target DSH version before publication.
