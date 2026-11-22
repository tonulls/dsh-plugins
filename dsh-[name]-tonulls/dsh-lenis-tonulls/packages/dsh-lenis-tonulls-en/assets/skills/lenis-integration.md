---
name: lenis-integration
description: Plan or review a Lenis smooth-scrolling integration when requested or directly relevant to the project.
---

# Lenis integration

Use this Skill when the user asks to plan, implement, or review a Lenis integration, or when Lenis is directly relevant to the current project task.

1. First establish the scroll problem, framework, SSR setup, target browsers/devices, nested scroll containers, modals, and existing animation loop. Confirm that smooth scrolling is needed; do not replace native scrolling by default.
2. Check the current [GitHub README](https://github.com/darkroomengineering/lenis), version, framework adapter, source, and compatibility with the target project. The commit in `UPSTREAM.json` is an audit snapshot, not a freshness guarantee.
3. Preserve native anchor links, focus, keyboard behavior, `position: sticky`, and expected screen-reader behavior. Do not disable or bypass `prefers-reduced-motion`; docs at the audit pin describe `respectReducedMotion` as enabled by default, but verify the installed version's API.
4. Use at most one Lenis instance and one update loop per scroll root. Choose either `autoRaf` or a custom `requestAnimationFrame`/compatible ticker; never run duplicate loops. On component teardown, remove listeners, stop any custom loop, and call the current cleanup/`destroy()` API.
5. Explicitly test nested scrolling in modals, menus, and internal scroll areas. Docs at the pinned commit warn that `allowNestedScroll` can add work on each scroll; verify current alternatives and measure performance rather than enabling it blindly.
6. In React/Next.js, use only the current adapter and GitHub instructions. Create the instance in a client lifecycle, clean it up correctly, avoid module-level `window` access, and prevent SSR/hydration mismatches.
7. Test normal scrolling, anchors, sticky elements, modals, touch/trackpad, reduced motion, resize, target browsers, and a no-Lenis comparison. Consider platform limitations such as iframes only after verifying current docs.
8. Do not copy code, documentation text, examples, or images; do not run `npm`, `pnpm`, `yarn`, `npx`, upstream scripts, or modify a project without a separate request. Explain dependency changes and obtain confirmation before installing.
9. Give the smallest useful plan or change with direct GitHub links; distinguish verified facts from assumptions and state what remains untested.

When auditing autoToggle, confirm that the root no longer handles transitionend after destroy(). Repeat the component mount and teardown.
