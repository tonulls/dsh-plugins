# `/ecc-context-and-decisions`

Helps capture stable domain terminology and context in a narrowly scoped `CONTEXT.md`, distinguishing it from hard-to-reverse architectural decisions intended for ADRs.

## Simple Request

```text
/ecc-context-and-decisions The team uses the term “workspace” for different entities; suggest how to define one shared meaning.
```

## Template Request

```text
/ecc-context-and-decisions
Domain/module: [name]
Term or recurring context: [description]
Different interpretations and consequences: [examples]
Current documentation structure: [paths]
Suggest a focused context document or identify this as an architectural decision for an ADR.
```

## Detailed Request

```text
/ecc-context-and-decisions Analyze the problem of ambiguous domain language in [module/project]. 1) Gather terms and examples from the supplied materials. 2) Separate stable domain definitions from structural/technology decisions. 3) Suggest a minimal CONTEXT.md only for context that is genuinely needed repeatedly, and route hard-to-reverse decisions through the existing ADR process. 4) Identify consequences for module boundaries and open questions. Do not create or edit files without my approval; first show a draft and recommended location based on existing documentation. Result: terminology glossary, classification, and proposed changes.
```
