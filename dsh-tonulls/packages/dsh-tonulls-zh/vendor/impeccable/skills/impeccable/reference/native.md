# Native interface adaptation and audit

Identify the supported OS versions and devices. Preserve the task and its recovery paths while
using platform navigation, controls, and text scaling. Check safe areas and system insets,
back gestures, orientation, and compact and expanded layouts. Keep controls operable at the
largest supported text sizes and with VoiceOver or TalkBack, including names, focus order,
actions, and state changes.

Check the actual application on the available simulator or device where possible. Include
permission, loading, empty, offline, and failure states. Track platform and device coverage
separately, and label checks inferred from source as static observations.

On Android, check system back behavior and edge-to-edge insets with the project's navigation
stack. On iOS and iPadOS, check the relevant navigation presentation and text sizes using
the app's native controls. Preserve platform conventions even when sharing brand tokens.
