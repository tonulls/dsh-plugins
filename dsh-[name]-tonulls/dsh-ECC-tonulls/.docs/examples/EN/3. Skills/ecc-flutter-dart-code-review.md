# ecc-flutter-dart-code-review

**Command:** `/ecc-flutter-dart-code-review`

**Purpose:** Library-agnostic Flutter/Dart code review checklist: widget practices, state management (BLoC, Riverpod, Provider, GetX, MobX, Signals), Dart idioms, performance, accessibility, security, and clean architecture. Use when reviewing Flutter/Dart code regardless of the selected state-management library.

## Prompts

### 1. Short Request
> /ecc-flutter-dart-code-review Conduct a read-only review of Flutter code.

### 2. Template with Context
> /ecc-flutter-dart-code-review Files: [paths], state management: [BLoC/Riverpod/other]. Review widgets, Dart idioms, performance, accessibility, and security; change nothing.

### 3. Detailed Request
> /ecc-flutter-dart-code-review Review [change/PR] without editing files. Check widget architecture, state, redraws, accessibility, security, and testability; rank only substantiated findings with file/line, risk, and recommendation.
