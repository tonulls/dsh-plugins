# Источник и DSH-адаптация

Подробности реализации и установки приведены в [README проекта](../../README.md).

## Сверка с upstream · 20 ноября 2026

- Репозиторий: [supabase/agent-skills](https://github.com/supabase/agent-skills).
- Ревизия материалов: [`c9be0e9`](https://github.com/supabase/agent-skills/commit/c9be0e9).
- HEAD исходника: [`c9be0e93`](https://github.com/supabase/agent-skills/commit/c9be0e931b7930f7d02126d04774d904c381e7d7), дата коммита 2026-10-02.
- Состояние: Ревизия совпадает.

### Решение по адаптации

Ревизия официальных навыков supabase/agent-skills совпала с текущим HEAD c9be0e93. Отдельно проверен HEAD платформы 80e237f5: последний коммит исправляет генерацию тестового токена в Docker. Этот тест в DSH-навык не входит. [Коммит платформы](https://github.com/supabase/supabase/commit/80e237f5).

### Контроль дерева Git

Деревья закреплённой ревизии и HEAD совпадают. [HEAD при повторной проверке](https://github.com/supabase/agent-skills/commit/c9be0e931b7930f7d02126d04774d904c381e7d7).

## Повторная сверка · 21 ноября 2026

HEAD навыков остаётся на `c9be0e93`. По документации платформы на `4ead4b09` добавлена проверка последствий смены пароля БД и использование параметров выбранного режима соединения из окна Connect. [Справочник подключения](https://github.com/supabase/supabase/blob/4ead4b092ee7e5ad4def2cd295b14492db12720b/apps/docs/content/guides/database/connecting-to-postgres.mdx).


Из документации платформы на `4ead4b09` перенесены раздельная проверка лимита клиентов и пула соединений БД, проверка заголовков `apikey` и `Authorization` для новых ключей, проверка JWT до и после обновления сессии и ограничение доступа к планам запросов при диагностике RLS. Изменения серверной реализации и конфигурация конкретного проекта относятся к платформе и среде пользователя. [Пул соединений](https://github.com/supabase/supabase/blob/4ead4b092ee7e5ad4def2cd295b14492db12720b/apps/docs/content/guides/database/connecting-to-postgres/pooling-and-limits.mdx), [миграция ключей](https://github.com/supabase/supabase/blob/4ead4b092ee7e5ad4def2cd295b14492db12720b/apps/docs/content/guides/getting-started/migrating-to-new-api-keys.mdx), [сессии](https://github.com/supabase/supabase/blob/4ead4b092ee7e5ad4def2cd295b14492db12720b/apps/docs/content/guides/auth/sessions.mdx), [производительность RLS](https://github.com/supabase/supabase/blob/4ead4b092ee7e5ad4def2cd295b14492db12720b/apps/docs/content/guides/database/postgres/row-level-security-performance.mdx).

На `4ead4b09` дополнительно сверены руководства локальных и удалённых миграций и переменных Edge Functions. Перенесены проверка селектора целевой базы по установленному CLI, учёт объектов управляемых схем при использовании pg-delta и разделение схемы и данных Storage. Для Edge Functions уточнено различие источников переменных конфигурации и запущенной функции. Существующее подтверждение перед удалёнными изменениями сохранено. [Миграции](https://github.com/supabase/supabase/blob/4ead4b092ee7e5ad4def2cd295b14492db12720b/apps/docs/content/guides/local-development/database-migrations.mdx), [переменные функций](https://github.com/supabase/supabase/blob/4ead4b092ee7e5ad4def2cd295b14492db12720b/apps/docs/content/guides/functions/secrets.mdx).

Из дополнительных руководств на `4ead4b09` перенесены проверка RLS от имени реальных ролей приложения на временной базе и проверка результата чтения или записи. Для подписанных URL Storage уточнены отдельные ключи подписи, время жизни URL и влияние CDN. Правила подтверждения изменений ключей и кэша в рабочей среде сохранены. [Тестирование RLS](https://github.com/supabase/supabase/blob/4ead4b092ee7e5ad4def2cd295b14492db12720b/apps/docs/content/guides/database/postgres/testing-row-level-security.mdx), [ключи Storage](https://github.com/supabase/supabase/blob/4ead4b092ee7e5ad4def2cd295b14492db12720b/apps/docs/content/guides/storage/security/signing-keys.mdx).
