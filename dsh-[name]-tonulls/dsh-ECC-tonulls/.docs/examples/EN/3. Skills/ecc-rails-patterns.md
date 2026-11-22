# `/ecc-rails-patterns`

**Purpose:** Ruby on Rails practices for Rails 7.1+ and 8.x apps: directory structure, skinny controllers with service objects, separate form/query objects, idiomatic ActiveRecord, background jobs, ViewComponent, Hotwire, and the Rails 8 Solid stack. Use when developing or reviewing Rails apps, controllers, models, services, jobs, and views.

## Short Prompt
```text
/ecc-rails-patterns Review this Rails controller/model for N+1, mixed responsibilities, and inconsistency with project patterns.
```

## Template Prompt
```text
/ecc-rails-patterns
Context: [Rails module path, version, scenario, and repository conventions].
Task: review architecture or implementation of Rails application for [target component/outcome].
Focus: skinny controllers, service/query/form objects, ActiveRecord, jobs, ViewComponent/Hotwire, and Rails Solid stack where applicable.
Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Format: [brief result, evidence/rationale, risks, and next step].
```

## Detailed Prompt
```text
/ecc-rails-patterns
Perform the task “review Rails application architecture or implementation” for [target system/scenario].
1. Clarify goal, scope, baseline information, and success criteria; list missing context.
2. Study only relevant materials and assess skinny controllers, service/query/form objects, ActiveRecord, jobs, ViewComponent/Hotwire, and Rails Solid stack where applicable.
3. State findings or options with facts, risks, verification criteria, and unresolved questions; apply nothing.
4. Check conclusions against criteria and cite evidence, assumptions, and unknowns.

Constraints: Analysis only: do not modify files/data or run external/destructive checks.
Use output format [expected format]. Do not invent facts; stop and request approval before any unplanned side effect.
```
