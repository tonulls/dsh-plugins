# `/ecc-design-system`

Extracts design tokens from an existing interface and documents a style system with rationale and an HTML preview, or audits visual consistency across several dimensions.

## Simple Request

```text
/ecc-design-system Audit the visual consistency of the pages and find recurring colors and spacing values.
```

## Template Request

```text
/ecc-design-system
UI scope: [pages/components]
Paths to styles and components: [list]
Goal: [extract system / conduct audit]
Brand constraints: [description]
Analysis only; do not modify files. Suggest tokens, rationale, and consistency issues.
```

## Detailed Request

```text
/ecc-design-system Study [part of interface] to create or audit a design system. Do not modify files. Identify existing colors, typography, spacing, and shadows; group them into proposed tokens and CSS custom properties; justify decisions in a concise DESIGN.md style and assess the interface using relevant visual dimensions. Note inconsistent states and generic template-like choices without unsupported subjectivity. Suggest the contents of an interactive HTML preview, but do not create one without approval. Do not add dependencies or capture/publish data. Result: inventory, tokens, assessment, priorities, and implementation plan.
```
