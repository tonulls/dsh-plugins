# GSAP DSH reference package

Справочный Skill для анализа интеграции GSAP в проект. Помогает оценить API, совместимость и подход к анимациям. Автоподбор выключен по умолчанию для каждого Agent; включайте его командой `/dsh-gsap-tonulls on` и выключайте `/dsh-gsap-tonulls off`. Skill также доступен по прямому вызову.

## Установка

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-gsap-tonulls/packages/dsh-gsap-tonulls-ru'
```

## Использование

Вызовите `/gsap-integration-review` напрямую или включите автоподбор для текущего Agent командой `/dsh-gsap-tonulls on`. Для отключения используйте `/dsh-gsap-tonulls off`.

## Лицензия

Лицензия исходного репозитория и уведомления указаны в [UPSTREAM.json](UPSTREAM.json); для DSH адаптирован способ установки.

🛠️ Модифицировано с помощью Codex
