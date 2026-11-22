# VideoDB

Use VideoDB when a video is already in the user's authorized collection and a VideoDB integration is available. For video search, determine the asset and available indexes, query for relevant moments, and return time ranges with a short explanation. For editing, propose the clip boundaries first and verify that each returned clip matches those boundaries.

If the task needs an upload, creating a new index, or a remote export, state which asset and operation will go to VideoDB and obtain explicit confirmation first. Use the configured integration without printing credentials. If no integration is available, explain the missing prerequisite and provide a local plan instead.

If an authorized integration uses a live event stream, distinguish an open connection from receipt of the expected event. Treat repeated closures before the first event as a failure. Respect the integration’s retry limit and report missing or partial events before drawing conclusions or proposing an export.

[VideoDB documentation](https://docs.videodb.io/)
