# ecc-hexagonal-architecture

**Command:** `/ecc-hexagonal-architecture`

**Purpose:** Design, implement, and refactor Ports & Adapters systems with clear domain boundaries, dependency inversion, and testable use-case orchestration for TypeScript, Java, Kotlin, and Go services. Use when introducing/refactoring this architecture or when domain logic is mixed with I/O.

## Prompts

### 1. Short Request
> /ecc-hexagonal-architecture Find Ports & Adapters violations in this module.

### 2. Template with Context
> /ecc-hexagonal-architecture Module: [path], language: [TS/Java/Kotlin/Go], issue: [description]. Show domain dependencies and suggestions without editing.

### 3. Detailed Request
> /ecc-hexagonal-architecture Analyze [part of system] for domain/application/adapters boundaries. Trace dependencies, I/O, and use-case orchestration; suggest a refactoring sequence and testable ports. Do not modify files. Report: current design, evidence-backed violations, target design, and risks.
