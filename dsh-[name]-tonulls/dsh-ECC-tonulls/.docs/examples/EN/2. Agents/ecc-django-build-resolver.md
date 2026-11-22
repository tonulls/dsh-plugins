# `/ecc-django-build-resolver`

**Purpose:** Diagnoses and minimally fixes pip/Poetry errors, migration, import, and Django configuration conflicts, as well as `collectstatic` failures. Use it for Django setup or startup errors.

## Short Prompt

```text
/ecc-django-build-resolver Diagnose the Django startup error and make a minimal fix within the specified scope. Do not install dependencies.
```

## Template Prompt

```text
/ecc-django-build-resolver
Context: [project path / excerpt / system / symptom].
Task: diagnose and minimally resolve a Django setup or startup failure for [goal or subject].
Focus: pip/Poetry, import, configuration, migration, and collectstatic errors.
Constraints: Make only minimal changes within [permitted scope], using tools already available locally; do not install or download anything. Stop and ask for approval before broadening the change.
Result format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt

```text
/ecc-django-build-resolver
Perform the task “diagnose and minimally resolve a Django setup or startup failure” for [project/component/scenario].
1. Record the input, scope, and success criteria; list any missing information.
2. Study only task-relevant context and check pip/Poetry, import, configuration, migration, and collectstatic errors.
3. Make a minimal fix only after confirming the root cause, then repeat an appropriate local check.
4. Compare the result with the criteria, provide evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Make only minimal changes within [permitted scope], using tools already available locally; do not install or download anything. Stop and ask for approval before broadening the change.
Report the outcome, important findings/actions, unchecked areas, risks, and safe next steps.
```