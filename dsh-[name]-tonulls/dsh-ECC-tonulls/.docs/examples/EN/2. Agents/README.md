# ECC Agent Role Examples

This section provides examples for invoking the 71 roles in the [agents](../../../../packages/agents/README.md) package. In a regular DSH message, enter `/ecc-component-name`, then describe the task and constraints. The role runs in the current DSH Agent.

Only entries from the catalog's `entries` are listed; each component has a separate file with three prompt levels.

| Component | Brief purpose | Prompt examples |
| --- | --- | --- |
| `/ecc-a11y-architect` | Accessibility architect: ensures WCAG 2.2 compliance, designs accessible UI components and design systems, and identifies barriers for… | [Three prompts](ecc-a11y-architect.md) |
| `/ecc-agent-evaluator` | Evaluates an agent's result across five criteria: accuracy, completeness, clarity, practical applicability, and concision. Produces a structured… | [Three prompts](ecc-agent-evaluator.md) |
| `/ecc-architect` | ECC architecture role for planning or reviewing software architecture, comparing design options, and identifying system risks—on explicit… | [Three prompts](ecc-architect.md) |
| `/ecc-bengali-reviewer` | Reviews code that processes Bengali text: Unicode and normalization correctness, script handling, and adherence to… | [Three prompts](ecc-bengali-reviewer.md) |
| `/ecc-build-error-resolver` | Diagnoses build failures and TypeScript errors and resolves them with minimal changes without redesigning the architecture. | [Three prompts](ecc-build-error-resolver.md) |
| `/ecc-chief-of-staff` | Sorts email, Slack, LINE, and Messenger messages into four urgency levels, drafts replies, and tracks follow-ups… | [Three prompts](ecc-chief-of-staff.md) |
| `/ecc-code-architect` | Analyzes existing codebase patterns and conventions, then prepares an implementation plan with specific files, interfaces, data flows… | [Three prompts](ecc-code-architect.md) |
| `/ecc-code-explorer` | Explores existing codebase features: traces execution paths, architectural layers, and dependencies, documenting findings for… | [Three prompts](ecc-code-explorer.md) |
| `/ecc-code-reviewer` | Proactively reviews code quality, security, and maintainability. | [Three prompts](ecc-code-reviewer.md) |
| `/ecc-code-simplifier` | Simplifies and improves code for clarity, consistency, and maintainability while preserving behavior. By default, focuses on recently… | [Three prompts](ecc-code-simplifier.md) |
| `/ecc-comment-analyzer` | Reviews code comments for accuracy, completeness, and maintainability, and identifies the risk of outdated comments. | [Three prompts](ecc-comment-analyzer.md) |
| `/ecc-commit-reviewer` | Reviews staged changes and suggests a Conventional Commits message based on the repository's actual history conventions. | [Three prompts](ecc-commit-reviewer.md) |
| `/ecc-conversation-analyzer` | Analyzes conversation transcripts and identifies behavior that should be prevented with hooks. Invoked with `/hookify` without arguments. | [Three prompts](ecc-conversation-analyzer.md) |
| `/ecc-cpp-build-resolver` | Diagnoses and minimally fixes C++/CMake build, linking, and template errors. Use when a C++ build fails. | [Three prompts](ecc-cpp-build-resolver.md) |
| `/ecc-cpp-reviewer` | Reviews C++ code: memory safety, modern language idioms, concurrency, and performance. | [Three prompts](ecc-cpp-reviewer.md) |
| `/ecc-csharp-reviewer` | Reviews C# and .NET code: platform conventions, async behavior, security, nullable types, and performance. | [Three prompts](ecc-csharp-reviewer.md) |
| `/ecc-dart-build-resolver` | Diagnoses and minimally fixes `dart analyze`, Flutter build, pub dependency conflict, and `build_runner` errors. | [Three prompts](ecc-dart-build-resolver.md) |
| `/ecc-database-reviewer` | PostgreSQL expert: query optimization, schema design, security, and performance. | [Three prompts](ecc-database-reviewer.md) |
| `/ecc-django-build-resolver` | Diagnoses and minimally fixes pip/Poetry errors, migration/import/Django configuration conflicts, and `collectstatic` failures. | [Three prompts](ecc-django-build-resolver.md) |
| `/ecc-django-reviewer` | Reviews Django code: ORM correctness, DRF patterns, migration safety, security settings, and production readiness. | [Three prompts](ecc-django-reviewer.md) |
| `/ecc-doc-updater` | Updates documentation and codebase maps: creates `docs/CODEMAPS/*` and refreshes READMEs and guides. | [Three prompts](ecc-doc-updater.md) |
| `/ecc-docs-lookup` | Finds current documentation and code examples through Context7 MCP. Use when information is needed about using a library or framework… | [Three prompts](ecc-docs-lookup.md) |
| `/ecc-e2e-runner` | End-to-end testing specialist: prefers Vercel Agent Browser and uses Playwright when needed. Creates and maintains… | [Three prompts](ecc-e2e-runner.md) |
| `/ecc-fastapi-reviewer` | Reviews FastAPI applications: async behavior, dependency injection, Pydantic schemas, security, OpenAPI quality, testing, and readiness… | [Three prompts](ecc-fastapi-reviewer.md) |
| `/ecc-flutter-reviewer` | Reviews Flutter/Dart code: widget practices, state management, Dart idioms, performance, accessibility, and architecture. Independent of… | [Three prompts](ecc-flutter-reviewer.md) |
| `/ecc-fsharp-reviewer` | Reviews F# code: functional idioms, type safety, pattern matching, computation expressions, and performance. | [Three prompts](ecc-fsharp-reviewer.md) |
| `/ecc-gan-evaluator` | Evaluates a running application with Playwright: scores it against criteria and gives the generator actionable feedback for improvement. | [Three prompts](ecc-gan-evaluator.md) |
| `/ecc-gan-generator` | Implements features from a specification, incorporates evaluator feedback, and repeats the cycle until the target quality threshold is reached. | [Three prompts](ecc-gan-generator.md) |
| `/ecc-gan-planner` | Turns a brief request into a full product specification: features, sprints, evaluation criteria, and design direction. | [Three prompts](ecc-gan-planner.md) |
| `/ecc-go-build-resolver` | Diagnoses and minimally fixes Go build, `go vet`, and linter errors. Use when a Go build fails. | [Three prompts](ecc-go-build-resolver.md) |
| `/ecc-go-reviewer` | Reviews Go code: idiomatic style, concurrency, error handling, and performance. | [Three prompts](ecc-go-reviewer.md) |
| `/ecc-harmonyos-app-resolver` | HarmonyOS development expert: reviews ArkTS and ArkUI, V2 state management compliance, navigation, API usage, and… | [Three prompts](ecc-harmonyos-app-resolver.md) |
| `/ecc-harness-optimizer` | Improves reliability and reduces the cost of local agent harness configuration using pass@k/pass^k evaluation based on the `eval-harness` skill. | [Three prompts](ecc-harness-optimizer.md) |
| `/ecc-healthcare-reviewer` | Reviews healthcare application code: clinical safety, CDSS accuracy, PHI protection, and medical data integrity. Specializes in… | [Three prompts](ecc-healthcare-reviewer.md) |
| `/ecc-homelab-architect` | Designs home and small lab networks based on equipment, goals, and operator experience; proposes safe phased changes and… | [Three prompts](ecc-homelab-architect.md) |
| `/ecc-java-build-resolver` | Diagnoses and minimally fixes Java/Maven/Gradle build, compilation, and dependency errors; recognizes Spring Boot and Quarkus. | [Three prompts](ecc-java-build-resolver.md) |
| `/ecc-java-reviewer` | Reviews Spring Boot and Quarkus projects: layered architecture, JPA/Panache, MongoDB, security, and concurrency. Automatically selects… | [Three prompts](ecc-java-reviewer.md) |
| `/ecc-kotlin-build-resolver` | Diagnoses and minimally fixes Kotlin/Gradle build and compilation errors, as well as dependency issues. | [Three prompts](ecc-kotlin-build-resolver.md) |
| `/ecc-kotlin-reviewer` | Reviews Kotlin and Android/KMP: language idioms, coroutine safety, Compose practices, clean architecture, and common Android errors. | [Three prompts](ecc-kotlin-reviewer.md) |
| `/ecc-loop-operator` | Manages autonomous agent loops: tracks progress and intervenes safely if a loop stops or gets stuck. | [Three prompts](ecc-loop-operator.md) |
| `/ecc-marketing-agent` | Helps plan and run marketing campaigns: researches audiences and positioning, writes and reviews landing page and email copy… | [Three prompts](ecc-marketing-agent.md) |
| `/ecc-mle-reviewer` | Reviews ML system production readiness: data contracts, feature pipelines, training reproducibility, batch and production evaluation… | [Three prompts](ecc-mle-reviewer.md) |
| `/ecc-network-architect` | Designs enterprise and distributed networks from requirements, using specialized networking skills for routing, validation, automation… | [Three prompts](ecc-network-architect.md) |
| `/ecc-network-config-reviewer` | Reviews router and switch configurations: security, correctness, stale references, risky commands, and missing… | [Three prompts](ecc-network-config-reviewer.md) |
| `/ecc-network-troubleshooter` | Diagnoses networks, routing, DNS, interfaces, and policies across OSI layers; gathers evidence and establishes a reasoned root cause. | [Three prompts](ecc-network-troubleshooter.md) |
| `/ecc-opensource-forker` | Prepares a project for open-source publication: copies files, removes secrets, credentials, and internal links, and creates… | [Three prompts](ecc-opensource-forker.md) |
| `/ecc-opensource-packager` | Prepares a complete publication package for a sanitized open-source project: CLAUDE.md, setup.sh, README, LICENSE, CONTRIBUTING, and… | [Three prompts](ecc-opensource-packager.md) |
| `/ecc-opensource-sanitizer` | Before release, checks an open-source fork for secrets, personal data, internal links, and dangerous files, then prepares a report… | [Three prompts](ecc-opensource-sanitizer.md) |
| `/ecc-performance-optimizer` | Finds bottlenecks and speeds up code: profiling, memory leaks, rendering, bundle size, and algorithms. | [Three prompts](ecc-performance-optimizer.md) |
| `/ecc-php-reviewer` | Reviews PHP code: PSR-12 compliance, type system, Eloquent ORM patterns, security, and performance. | [Three prompts](ecc-php-reviewer.md) |
| `/ecc-planner` | Plans complex features and refactors: decomposes requests, assesses architectural changes, and creates a phased implementation plan. | [Three prompts](ecc-planner.md) |
| `/ecc-pr-test-analyzer` | Assesses the completeness and quality of test coverage for a pull request, focusing on behavior verification and preventing real defects. | [Three prompts](ecc-pr-test-analyzer.md) |
| `/ecc-python-reviewer` | Reviews Python code: PEP 8, language idioms, type annotations, security, and performance. | [Three prompts](ecc-python-reviewer.md) |
| `/ecc-pytorch-build-resolver` | Diagnoses PyTorch/CUDA and training errors: tensor shapes, devices, gradients, DataLoader, and mixed precision. Minimally fixes… | [Three prompts](ecc-pytorch-build-resolver.md) |
| `/ecc-rag-pipeline-reviewer` | Reviews RAG pipelines: retrieval quality, chunking, embedding model selection, and evaluation completeness. | [Three prompts](ecc-rag-pipeline-reviewer.md) |
| `/ecc-react-build-resolver` | Diagnoses and minimally fixes React build failures in Vite, webpack, Next.js, CRA, Parcel, esbuild, and Bun: JSX/TSX, hydration, boundaries… | [Three prompts](ecc-react-build-resolver.md) |
| `/ecc-react-reviewer` | Reviews React/JSX: hook correctness, rendering performance, server/client component boundaries, accessibility, and security. | [Three prompts](ecc-react-reviewer.md) |
| `/ecc-refactor-cleaner` | Finds and safely removes unused code and duplicates, and assists with refactoring. Uses knip, depcheck, and ts-prune to find dead… | [Three prompts](ecc-refactor-cleaner.md) |
| `/ecc-ruby-reviewer` | Reviews Ruby and Rails: language idioms, Active Record query safety, Rails security configuration, and RSpec/Minitest quality. | [Three prompts](ecc-ruby-reviewer.md) |
| `/ecc-rust-build-resolver` | Diagnoses and minimally fixes Rust, Cargo, borrow checker, and `Cargo.toml` build errors. | [Three prompts](ecc-rust-build-resolver.md) |
| `/ecc-rust-reviewer` | Reviews Rust code: ownership and lifetimes, error handling, `unsafe`, and idiomatic style. | [Three prompts](ecc-rust-reviewer.md) |
| `/ecc-security-reviewer` | Finds and helps address vulnerabilities: secrets, SSRF, injections, insecure cryptography, and OWASP Top 10 risks. | [Three prompts](ecc-security-reviewer.md) |
| `/ecc-seo-specialist` | Conducts technical SEO audits: page optimization, structured data, Core Web Vitals, and content/keyword maps. Checks… | [Three prompts](ecc-seo-specialist.md) |
| `/ecc-silent-failure-hunter` | Finds silent failures in code: swallowed errors, incorrect fallback scenarios, and missing error propagation to callers. | [Three prompts](ecc-silent-failure-hunter.md) |
| `/ecc-spec-miner` | Extracts behavioral requirements from existing code for OpenSpec: produces requirements and invariants with metadata and test anchors… | [Three prompts](ecc-spec-miner.md) |
| `/ecc-swift-build-resolver` | Diagnoses and minimally fixes Swift/Xcode build errors, SPM dependency issues, and code signing problems. | [Three prompts](ecc-swift-build-resolver.md) |
| `/ecc-swift-reviewer` | Reviews Swift code: protocol-oriented design, value semantics, ARC memory management, Swift Concurrency, and language idioms. | [Three prompts](ecc-swift-reviewer.md) |
| `/ecc-tdd-guide` | Guides test-driven development: tests first, then implementation. | [Three prompts](ecc-tdd-guide.md) |
| `/ecc-type-design-analyzer` | Analyzes type design: encapsulation, expression of invariants, their usefulness, and whether they can be enforced. | [Three prompts](ecc-type-design-analyzer.md) |
| `/ecc-typescript-reviewer` | Reviews TypeScript/JavaScript: type safety, async behavior, Node/Web security, and language idioms. | [Three prompts](ecc-typescript-reviewer.md) |
| `/ecc-vue-reviewer` | Reviews Vue.js: Composition API, reactivity, component architecture, template security, and performance. | [Three prompts](ecc-vue-reviewer.md) |

**Total:** 71 entries; missing example files: 0.
