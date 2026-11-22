# `/ecc-a11y-architect`

Designs and evaluates the accessibility of web and native interfaces against WCAG 2.2, including components, design systems, and inclusion.

## Simple Request

```text
/ecc-a11y-architect Check the accessibility of the registration form against WCAG 2.2 and list the main issues. Do not change anything.
```

## Template Request

```text
/ecc-a11y-architect Evaluate the accessibility of [screen/component] at [path/description]. User context: [audience]; platforms: [web/native]. Check semantics, keyboard navigation, focus, and feedback. Analysis only; do not modify files. Provide evidence and priorities.
```

## Detailed Request

```text
/ecc-a11y-architect Audit the accessibility of [component/flow] for [platform], using WCAG 2.2 as a reference.
1. Study the related components and states.
2. Check semantics, keyboard/focus management, accessible names, errors, and adaptation for assistive technologies.
3. For each finding, provide evidence, the affected scenario, and estimated severity; mark anything unknown as requiring manual verification.
4. Recommend fixes and their order without editing files.
Report: brief summary, findings, relevant criteria, recommendations, and verification limitations. Do not access the network or use additional tools without my permission.
```
