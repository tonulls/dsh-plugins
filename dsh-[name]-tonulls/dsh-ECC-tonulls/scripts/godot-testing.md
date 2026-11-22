# Godot Testing

Test pure rules separately from scene integration. Reuse the project’s existing Godot test runner. If none exists, consider a small headless check scene that exits nonzero on failure. Use deterministic input and verify that important scene resources load. Report graphical behavior separately from headless results.
