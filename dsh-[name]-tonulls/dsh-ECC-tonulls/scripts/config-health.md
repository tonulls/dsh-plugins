# Config Health

Review checked-in configuration against its schema and documented entry points. Verify that referenced paths exist and distinguish static evidence from components observed at runtime. Report drift with file references.

Read hook and task command strings as configuration data. Check referenced executables and script
paths against the documented working directory and known variable values. Report unresolved
placeholders and shell fragments separately from missing files. Keep path checks within the
agreed scope. A path that exists does not establish that the hook is registered or ran.
