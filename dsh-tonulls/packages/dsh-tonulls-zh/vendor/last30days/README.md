# Last 30 Days для DeepSeek Harness (DSH)

Skill `last30days` помогает исследовать публичные веб-источники за последние 30 дней. Он адаптирует [last30days-skill](https://github.com/mvanhorn/last30days-skill) для работы в DSH.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-last30days-tonulls/packages/dsh-last30days-tonulls'
```

## Использование

Автоматический выбор Skill выключен по умолчанию. Включите его для текущего Agent командой `/dsh-last30days on`; чтобы выключить, выполните `/dsh-last30days off`. Skill также доступен напрямую по команде `/last30days`.

## Лицензия

Исходный Skill распространяется по MIT. Лицензия и уведомления включены в пакет: [`LICENSE`](LICENSE), [`UPSTREAM.json`](UPSTREAM.json) и [`NOTICE.md`](NOTICE.md).

🛠️ Модифицировано с помощью Codex
