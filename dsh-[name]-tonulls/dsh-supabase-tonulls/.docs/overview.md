# Supabase-навык для DSH: обзор и источники

Этот плагин добавляет в DSH один выключенный по умолчанию Agent-scoped skill. Команда `/dsh-supabase-tonulls on|off` меняет доступность `supabase` только для текущего Agent; `/supabase` вызывает его напрямую. Навык может подбираться автоматически после включения, но не гарантирует выбор для каждого сообщения.

## Область адаптации

Руководство помогает разбирать проекты Supabase с Postgres и RLS, схемами/миграциями, Data API, Auth/SSR, Storage, Edge Functions, Realtime, векторами, Cron/Queues и диагностикой. Оно не является Supabase CLI, MCP-сервером или интеграцией с удалённым проектом, не устанавливает инструменты и не исполняет команды само. Для версии клиента, CLI или конкретного API проверяйте официальную актуальную документацию и файлы проекта.

Навык подчёркивает разделение SQL grants и RLS, проверку разрешённых и запрещённых сценариев, безопасное обращение с ключами, а также обязательную оценку и подтверждение перед удалёнными/разрушительными операциями. Включение навыка не выдаёт доступ к секретам или инфраструктуре.

## Официальные источники

- Репозиторий платформы [supabase/supabase](https://github.com/supabase/supabase) проверен на ревизии [`eec2d0f`](https://github.com/supabase/supabase/tree/eec2d0f947dd7137d176c4b95bd3010b0a052e52) (2026-10-27).
- Официальные [Supabase Agent Skills](https://github.com/supabase/agent-skills) проверены на ревизии [`c9be0e9`](https://github.com/supabase/agent-skills/tree/c9be0e931b7930f7d02126d04774d904c381e7d7), release v0.1.9 (2026-10-02); DSH-адаптация остаётся самостоятельной.
- [Документация Supabase](https://supabase.com/docs) и [changelog](https://supabase.com/changelog.md), включая [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), [API keys](https://supabase.com/docs/guides/getting-started/api-keys), [scoped personal access tokens](https://supabase.com/docs/guides/platform/personal-access-tokens), [SSR clients](https://supabase.com/docs/guides/auth/server-side/creating-a-client), [Storage policies](https://supabase.com/docs/guides/storage/security/access-control), [Edge Function secrets](https://supabase.com/docs/guides/functions/secrets), [observability](https://supabase.com/docs/guides/observability), [CLI](https://supabase.com/docs/guides/local-development/cli/getting-started), [migrations](https://supabase.com/docs/guides/deployment/database-migrations) и [The Supabase way to build](https://supabase.com/docs/guides/getting-started/the-supabase-way-to-build).

Содержимое навыка написано для этого DSH-плагина; в bundle не копируются исходный код, текст Agent Skill или корпус документации Supabase. Плагин независимый и неофициальный; имя Supabase используется для указания платформы. См. [NOTICE](../NOTICE.md).
