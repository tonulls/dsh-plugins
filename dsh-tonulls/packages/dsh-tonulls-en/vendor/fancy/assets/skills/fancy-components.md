---
name: fancy-components
description: Helps assess a specific Fancy React component for a chosen project.
---

# Fancy Components evaluation

Use this Skill when the task involves selecting, assessing, or planning integration of a specific component from Fancy. Do not invoke it for work unrelated to Fancy.

1. Establish the use case and project stack: React/Next.js and server/client boundary, React version, CSS/Tailwind, animation package, design system, supported browsers, accessibility, and motion requirements.
2. First check whether a third-party component is needed. Do not add visual effects without a UX purpose or replace the existing design system by default.
3. Find the exact component and source path in [GitHub upstream](https://github.com/danielpetho/fancy). Inspect its source, `package.json`, imported dependencies, and the exact license for that component; a root MIT license does not prove the license of every included asset.
4. Do not copy the component, source, README, examples, registry entries, images, or styles. Propose an independent adaptation only after checking licensing and project requirements; stop and report ambiguity about license or provenance.
5. Compare exact peers/dependencies and animation imports at the pinned upstream version with the target project. Do not mix different `motion` or `framer-motion` packages/versions, and do not assume a component can be pasted unchanged.
6. Check semantic HTML, keyboard and focus behavior, accessible names and roles, responsive layout, SSR/hydration, and no-JavaScript behavior where applicable. For animation, check `prefers-reduced-motion`, disabling nonessential movement, and real-world performance.
7. Do not install dependencies, run upstream generators/scripts, or edit a project without a request for that specific change. Explain why a dependency is needed and obtain confirmation before adding it.
8. Recommend the smallest adaptation, tests, and manual checks; provide exact GitHub links and mark versions, licenses, or scenarios that remain unverified.

The audit pin is only a snapshot. Recheck current upstream and target-project files before any real integration.
