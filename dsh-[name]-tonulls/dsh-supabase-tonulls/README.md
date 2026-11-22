# DSH Supabase Skill

[![GitHub repository](https://img.shields.io/badge/GitHub-tonulls%2Fdsh--plugins-181717?logo=github)](https://github.com/tonulls/dsh-plugins)

**Русский** | [English](.docs/en/overview.md) | [简体中文](.docs/zh-CN/overview.md)

## Описание

Плагин добавляет навык разработки с [Supabase](https://github.com/supabase/supabase) для текущего Agent в DSH. Он помогает проектировать и проверять использование Supabase с учётом схемы данных, API и требований конкретного приложения.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-supabase-tonulls/packages/dsh-supabase-tonulls-ru'
```

## Запуск

Запустите профиль DSH, в который установлен пакет:

```sh
dsh web
```

## Проверка

Проверьте версию DSH, установленные плагины и конфигурацию профиля:

```sh
dsh --version
dsh plugin --profile web list
dsh --profile web --dump-config
```

## Использование

Включите автоматический выбор навыка для текущего Agent:

```text
/dsh-supabase-tonulls on
/supabase review the RLS policies for this schema
```

После включения задайте вопрос о Supabase: модель выберет навык по содержанию запроса. Прямой вызов `/supabase` также доступен.

## Обновление

Обновите пакет в профиле `web`:

```sh
dsh plugin --profile web update dsh-supabase-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор для текущего Agent:

```text
/dsh-supabase-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

Удалите пакет из профиля `web`:

```sh
dsh plugin --profile web remove dsh-supabase-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- Индексы публичной документации: [RU](.docs/README.md) · [EN](.docs/en/README.md) · [ZH](.docs/zh-CN/README.md)
- [Репозиторий платформы Supabase](https://github.com/supabase/supabase) проверен на ревизии [`eec2d0f`](https://github.com/supabase/supabase/tree/eec2d0f947dd7137d176c4b95bd3010b0a052e52) (2026-10-27).
- [Официальные Agent Skills Supabase](https://github.com/supabase/agent-skills) проверены на ревизии [`c9be0e9`](https://github.com/supabase/agent-skills/tree/c9be0e931b7930f7d02126d04774d904c381e7d7), release v0.1.9 (2026-10-02); адаптация DSH остаётся авторским руководством.
- [Официальная документация Supabase](https://supabase.com/docs): [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), [API keys](https://supabase.com/docs/guides/getting-started/api-keys), [SSR clients](https://supabase.com/docs/guides/auth/server-side/creating-a-client), [Storage access control](https://supabase.com/docs/guides/storage/security/access-control), [Edge Function secrets](https://supabase.com/docs/guides/functions/secrets), [CLI](https://supabase.com/docs/guides/local-development/cli/getting-started) и [database migrations](https://supabase.com/docs/guides/deployment/database-migrations).
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).
- [Лицензия MIT](LICENSE) и [уведомление о происхождении](NOTICE.md).

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо команде [Supabase](https://github.com/supabase/agent-skills) за исходные навыки и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходная лицензия и уведомления включены в пакет; адаптирован способ установки.

🛠️ Модифицировано с помощью Codex
