# ecc-laravel-patterns

**Command:** `/ecc-laravel-patterns`

**Purpose:** Design and review production Laravel applications: routes and controllers, Eloquent, service layer, queues, events, caching, and API resources.

## Prompts

### 1. Short Request
> /ecc-laravel-patterns Review this Laravel controller and its Eloquent queries: identify specific structural or performance issues and suggest minimal fixes. Analysis only for now.

### 2. Template with Placeholders
> /ecc-laravel-patterns Implement [scenario] in Laravel module [path/domain]. Current components: [models, controllers, services]; constraints: [compatibility/transactions/load]. Align with repository architecture and review routes, validation, Eloquent, and API resources. First list the plan and affected files; change code only within that scope and do not install dependencies.

### 3. Detailed Phased Request
> /ecc-laravel-patterns Analyze Laravel feature [description] in [module]. 1) Find active routes, controllers, models, and established service layer. 2) Trace validation, authorization, Eloquent relationship loading, and response serialization. 3) Note N+1, implicit side effects, transaction, and caching risks only where supported by code. 4) Suggest target structure and acceptance criteria. Format: findings with files/lines first, then change plan and questions. Do not change anything before my approval; do not install packages or access the network.
