# dsh-ecc-agents

Пакет добавляет в DeepSeek Harness 71 адаптированную роль ECC Agent. Роли вызываются явно, например `/ecc-architect` или `/ecc-code-reviewer`, и работают в текущем Agent DSH.

## Установка

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-ECC-tonulls/packages/agents'
```

В примере используется профиль DSH `web`; если у вас другой профиль, замените `web` на его имя.

## Лицензия

Пакет содержит материалы, производные от [Everything Claude Code](https://github.com/affaan-m/ECC), распространяемые по лицензии MIT. Уведомление и текст лицензии включены в `LICENSES.md`.

Дополнительные компоненты и команды установки описаны в [README проекта](../../README.md).
