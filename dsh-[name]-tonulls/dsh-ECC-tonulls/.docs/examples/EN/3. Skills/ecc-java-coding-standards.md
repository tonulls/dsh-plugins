# ecc-java-coding-standards

**Command:** `/ecc-java-coding-standards`

**Purpose:** Java standards for Spring Boot and Quarkus services: naming, immutability, Optional, Stream API, exceptions, generics, CDI, reactive patterns, and project structure. Automatically accounts for framework conventions. Use when writing or reviewing Spring Boot or Quarkus Java services.

## Prompts

### 1. Short Request
> /ecc-java-coding-standards Check this Java code against Spring Boot conventions.

### 2. Template with Context
> /ecc-java-coding-standards File: [path], framework: [Spring Boot/Quarkus]. Assess naming, immutability, Optional, streams, exceptions, and CDI/reactive patterns without edits.

### 3. Detailed Request
> /ecc-java-coding-standards Conduct a read-only review of [class/change]. Check Java style, generics, Optional, exceptions, DI, and framework-specific structure. For each substantiated finding, state location, impact, and fix; do not modify files or add dependencies.
