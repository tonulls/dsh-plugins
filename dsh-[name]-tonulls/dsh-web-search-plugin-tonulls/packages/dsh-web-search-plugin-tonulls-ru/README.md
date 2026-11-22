# DSH Web Search Plugin DSH reference package

Справочный Skill по настройке DSH Web Search Plugin. Помогает разобраться с конфигурацией и рабочим процессом поиска. Автоподбор выключен по умолчанию для каждого Agent; включайте его командой `/dsh-web-search-plugin-tonulls on` и выключайте `/dsh-web-search-plugin-tonulls off`. Skill также доступен по прямому вызову.

## Установка

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-web-search-plugin-tonulls/packages/dsh-web-search-plugin-tonulls-ru'
```

## Использование

Вызовите `/web-search-setup` напрямую или включите автоподбор для текущего Agent командой `/dsh-web-search-plugin-tonulls on`. Для отключения используйте `/dsh-web-search-plugin-tonulls off`.

## Лицензия

Лицензия исходного репозитория и уведомления указаны в [UPSTREAM.json](UPSTREAM.json); для DSH адаптирован способ установки.

🛠️ Модифицировано с помощью Codex
