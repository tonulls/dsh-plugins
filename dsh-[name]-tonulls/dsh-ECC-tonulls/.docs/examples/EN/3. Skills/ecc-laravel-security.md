# ecc-laravel-security

**Command:** `/ecc-laravel-security`

**Purpose:** Review Laravel authentication and authorization security, safe Eloquent usage, CSRF/XSS defenses, API security, and deployment settings.

## Prompts

### 1. Short Request
> /ecc-laravel-security Conduct a read-only review of this Laravel route for authorization errors and unsafe input handling. Show only substantiated risks.

### 2. Template with Placeholders
> /ecc-laravel-security Review [routes/controllers/models] in a Laravel application for scenario [scenario]. Consider [input type, roles, guard/API]. Check access policies, mass assignment and Eloquent queries, CSRF/XSS, and applicable configuration. Do not fix anything. Result: finding, evidence (file and line), impact, priority, and safe recommendation; explicitly mark unknowns.

### 3. Detailed Phased Request
> /ecc-laravel-security Perform a security analysis only of Laravel component [path or feature]. 1) Trace inputs from route to model and response. 2) Check authentication separately from authorization, including policies and access boundaries for other users' objects. 3) Assess Eloquent protection against unsafe assignment and injection, XSS from user data output, CSRF for browser actions, and API-specific controls. 4) Review relevant secure-environment settings without making production claims unsupported by evidence. Output a “risk / evidence / impact scenario / fix” table, followed by verification gaps. Do not modify files, run active attacks, install software, or access the network.
