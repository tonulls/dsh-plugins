# `/ecc-cpp-coding-standards`

Helps write, review, and refactor C++ using modern, safe, idiomatic practices based on the C++ Core Guidelines.

## Simple Request

```text
/ecc-cpp-coding-standards Review this C++ snippet for memory ownership safety and idiomatic style.
```

## Template Request

```text
/ecc-cpp-coding-standards
Language standard: [C++ version]
Component context: [purpose]
Code: [snippet or path]
Assess naming, resource ownership, const-correctness, errors, and readability; do not edit files yet.
```

## Detailed Request

```text
/ecc-cpp-coding-standards Review [snippet/files] in the context of [component], targeting C++ version [version]. Do not modify files. Check object ownership and lifetime, RAII, exception/error boundaries, types and const-correctness, interfaces, readability, and consistency with existing style. Tie each finding to a specific location and assess severity; do not suggest major refactoring without demonstrated need. State applicable guidance, a safe fix, and questions requiring context. Finish with prioritized findings and a brief summary without claiming to have run unchecked tests.
```
