# `/ecc-django-reviewer`

**Purpose:** Reviews Django code for ORM correctness, DRF patterns, migration safety, security settings, and production readiness. Use it for changes in Django projects.

## Short Prompt

```text
/ecc-django-reviewer Conduct a read-only review of this Django change: check the ORM/DRF, migrations, and security.
```

## Template Prompt

```text
/ecc-django-reviewer
Context: [project path / excerpt / system / symptom].
Task: review the Django application change for [goal or subject].
Focus: ORM/DRF, security, migrations, settings, and production readiness.
Constraints: Read-only: do not modify files or run active or external checks.
Result format: [brief conclusion, evidence, priorities, and next steps].
```

## Detailed Prompt

```text
/ecc-django-reviewer
Perform the task “review the Django application change” for [project/component/scenario].
1. Record the input, scope, and success criteria; list any missing information.
2. Study only task-relevant context and check ORM/DRF, security, migrations, settings, and production readiness.
3. Present findings and next steps without making changes or stating assumptions as facts.
4. Compare the result with the criteria, provide evidence, and distinguish confirmed conclusions from assumptions.

Constraints: Read-only: do not modify files or run active or external checks.
Report the outcome, important findings/actions, unchecked areas, risks, and safe next steps.
```