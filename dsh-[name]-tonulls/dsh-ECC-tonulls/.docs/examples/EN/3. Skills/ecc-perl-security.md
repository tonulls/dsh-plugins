# `/ecc-perl-security`

**Purpose:** Comprehensive Perl security: taint mode, input validation, safe process execution, parameterized DBI queries, web security (XSS/SQLi/CSRF), and perlcritic security policies. Use when reviewing input handling, process execution, DBI queries, or web code.

## Short Prompt
```text
/ecc-perl-security Conduct a read-only audit of Perl code for dangerous input, processes, and SQL.
```

## Template Prompt
```text
/ecc-perl-security
Context: [Perl code paths, entry points, data sources, and trust boundaries].
Task: review Perl code security and untrusted-data handling paths for [target component/outcome].
Focus: taint mode, input validation, safe process execution, parameterized DBI queries, and applicable XSS/SQLi/CSRF risks.
Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Format: [brief summary, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-perl-security
Perform the task “review Perl code security and untrusted-data handling paths” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess taint mode, input validation, safe process execution, parameterized DBI queries, and applicable XSS/SQLi/CSRF risks.
3. State findings or options with facts, risks, verification criteria, and unresolved questions; apply nothing.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
