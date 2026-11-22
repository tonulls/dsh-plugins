# Prompt Example: `/ecc-seo-specialist`

**Invocation command:** `/ecc-seo-specialist`

## Purpose

Audits technical SEO, on-page metadata, structured data, Core Web Vitals, and content/keyword mapping.

## 1. Short Request

```text
/ecc-seo-specialist Create a technical SEO checklist for {page}; do not make network requests.
```

## 2. Template Request

```text
/ecc-seo-specialist Conduct an SEO audit of {site/pages} using available local materials: goal {goal}, audience {audience}. Check metadata, structured data, sitemap/robots, Core Web Vitals, and content alignment with queries. Do not make network requests or change the site; identify what cannot be verified and prioritize recommendations.
```

## 3. Detailed Request

```text
/ecc-seo-specialist Conduct a systematic analysis of task {scenario/change} for the seo-specialist.

1. Record the original context and study only relevant materials.
2. Check the role's key risks and criteria: technical SEO, on-page metadata, structured data, Core Web Vitals, and content/keyword mapping.
3. Separate confirmed facts from assumptions; identify missing information.
4. Produce a prioritized result with evidence, verification limitations, and specific next steps.

Boundaries: do not reveal secrets or personal data; do not perform network actions, install packages, deploy, or run potentially dangerous commands without explicit approval. Do not modify files during analysis; agree on and wait for my confirmation before making changes, deleting anything, running a loop, or applying configuration.
```