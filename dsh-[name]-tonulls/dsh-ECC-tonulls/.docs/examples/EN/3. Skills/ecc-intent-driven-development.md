# ecc-intent-driven-development

**Command:** `/ecc-intent-driven-development`

**Purpose:** Turn ambiguous or consequential product and engineering changes into clear, verifiable acceptance criteria before or during implementation. Use to clarify a feature, define criteria, reduce security/data/migration/integration risks, prepare requirements for another agent, or review a complex request. Do not use for minor edits, simple fixes, active debugging, code review, or implementation with already-clear criteria unless explicitly invoked.

## Prompts

### 1. Short Request
> /ecc-intent-driven-development Help turn a request into verifiable acceptance criteria.

### 2. Template with Context
> /ecc-intent-driven-development Request: [text], users: [who], constraints: [list]. Formulate questions, scope, and criteria without implementation.

### 3. Detailed Request
> /ecc-intent-driven-development Break request [description] into testable intent. Identify users/outcome, scope boundaries, scenarios, and acceptance criteria; for security/data/migration/integration, note risks and open decisions. Do not begin implementation. Return a concise spec, questions, and verifiable criteria.
