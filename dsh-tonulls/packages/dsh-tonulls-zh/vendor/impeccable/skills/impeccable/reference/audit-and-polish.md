# Technical audit and final polish

For an audit, inspect the target implementation and any available browser evidence. Check semantic
controls and accessible names, keyboard order and focus, contrast in each supported theme,
reduced motion, overflow, touch targets, and the behavior of loading, empty and error states.
Use measured performance evidence when available. In a static pass, identify risks such as
layout shifts or heavy assets and state which cases need runtime verification.

Check whether the interface completes its key actions. Trace each action from the control to its
handler and expected state. Flag placeholder destinations, form submissions with no feedback, and
success states the implementation never reaches. For each finding give its severity, concrete
evidence, user impact, and a proposed fix. Distinguish confirmed failures from untested cases.

For a polish request, walk the primary task from entry through completion before adjusting individual
components. Verify the existing design tokens and approved direction, then prioritize changes that
affect usability or consistency. Recheck the changed path at representative sizes and in relevant
interaction states. Report the surfaces and checks that were actually exercised.
