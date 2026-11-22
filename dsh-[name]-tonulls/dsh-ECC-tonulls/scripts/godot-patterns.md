# Godot Patterns

Inspect the Godot version and existing scene conventions. Keep rules that do not need the scene tree in testable classes. Use scenes for composition, signals for events and Resources for reusable configuration. Make ownership and signal connections explicit. Verify one representative scene and a headless check when available.

## Review Godot changes

Read the changed scripts alongside their scenes and resources. Verify exported references and
signal connections against the scene files. For callbacks that resume after an await, check
whether the referenced node can be freed before resumption. Inspect autoloads for mutable state
that could survive a scene restart and Resources for unintended sharing between instances.
Verify findings against the project's Godot version and report the affected file and scenario.
