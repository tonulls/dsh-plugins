# `/ecc-accessibility`

Designs, implements, and audits accessible interfaces against WCAG 2.2 AA for Web, iOS, and Android: semantics, keyboard navigation, focus, contrast, target sizes, and screen readers.

## Prompt Examples

### 1. Short Request
```text
/ecc-accessibility Check the registration form's accessibility: keyboard navigation, field labels, and visible focus. Analysis only; do not modify files.
```

### 2. Template Request
```text
/ecc-accessibility Audit [screen/component] on [Web/iOS/Android]. Context: [path or description]. Check semantics and labels, focus order, contrast, and screen reader behavior. Change nothing; list confirmed issues and priorities.
```

### 3. Detailed Request
```text
/ecc-accessibility Audit component [name] on [platform] against applicable WCAG 2.2 AA requirements. 1) Study only materials related to the component. 2) Check roles/labels, keyboard scenarios, focus management, contrast, and interactive target size; do not make unsupported claims. 3) Do not modify files or run external services. 4) Report: finding, evidence/location, user impact, severity, and specific recommendation; separately identify criteria that were not verified.
```
