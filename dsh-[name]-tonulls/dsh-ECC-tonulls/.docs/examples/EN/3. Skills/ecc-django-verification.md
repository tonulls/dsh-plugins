# `/ecc-django-verification`

Runs phased checks of a Django project before a PR/release: environment, linters, migrations, pytest and coverage, security scans, settings, and diff.

## Simple Request

```text
/ecc-django-verification Prepare a check report for my Django PR without fixing anything.
```

## Template Request

```text
/ecc-django-verification
Project: [path/Django version]
Change scope: [description]
Project checks: [commands, if known]
Permitted local commands: [list]
Audit only: do not modify files, install packages, or run network scanners.
```

## Detailed Request

```text
/ecc-django-verification Prepare a phased pass/fail report for Django PR [description]. Before running anything, list required commands and confirm they are local and do not alter the environment or data; run only explicitly permitted commands [list]. Check environment availability, lint/type checks, migration safety, pytest and targeted coverage, existing local pip-audit/bandit checks, settings/logging configuration, and diff. Do not install dependencies, access the network, apply migrations, or fix files. Skip unavailable checks and state why. For each phase, report the command, exit code/observation, result, risk, and readiness verdict; do not mark anything successful if it was not run.
```
