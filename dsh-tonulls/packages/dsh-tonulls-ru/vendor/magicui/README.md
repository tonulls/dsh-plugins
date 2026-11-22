# Magic UI DSH reference package

Справочный Skill для оценки компонентов и анимаций Magic UI. Помогает проверить их соответствие проекту перед интеграцией. Автоподбор выключен по умолчанию для каждого Agent; включайте его командой `/dsh-magicui-tonulls on` и выключайте `/dsh-magicui-tonulls off`. Skill также доступен по прямому вызову.

## Установка

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-magicui-tonulls/packages/dsh-magicui-tonulls-ru'
```

## Использование

Вызовите `/magic-ui-review` напрямую или включите автоподбор для текущего Agent командой `/dsh-magicui-tonulls on`. Для отключения используйте `/dsh-magicui-tonulls off`.

## Лицензия

Лицензия исходного репозитория и уведомления указаны в [UPSTREAM.json](UPSTREAM.json); для DSH адаптирован способ установки.

🛠️ Модифицировано с помощью Codex
