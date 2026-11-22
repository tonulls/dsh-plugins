# dsh-ecc-commands

Пакет добавляет в DeepSeek Harness три адаптированные пользовательские команды: `/ecc-command-build-fix`, `/ecc-command-test-coverage` и `/ecc-command-update-docs`. Это текстовые инструкции для текущего Agent DSH.

## Установка

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-ECC-tonulls/packages/commands'
```

В примере используется профиль DSH `web`; если у вас другой профиль, замените `web` на его имя.

## Лицензия

Пакет содержит материалы, производные от [Everything Claude Code](https://github.com/affaan-m/ECC), распространяемые по лицензии MIT. Уведомление и текст лицензии включены в `LICENSES.md`.

Дополнительные компоненты и команды установки описаны в [README проекта](../../README.md).
