# Archify для DeepSeek Harness (DSH)

Archify превращает описание системы или процесса в диаграмму и HTML-страницу. В этом пакете исходный Skill адаптирован для установки в DSH.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-archify-tonulls/packages/dsh-archify-tonulls'
```

## Использование

Автоматический выбор Archify выключен по умолчанию. Включите его для текущего Agent командой `/dsh-archify on`; чтобы выключить, выполните `/dsh-archify off`. Skill также можно вызвать напрямую: `/archify`.

## Лицензия

Исходный Archify распространяется по Apache-2.0. Лицензия и уведомления включены в пакет: [Apache-2.0](skills/archify/LICENSE), [MIT](skills/archify/LICENSE-MIT), [NOTICE](skills/archify/NOTICE) и [сторонние уведомления](skills/archify/THIRD_PARTY_NOTICES.md).

🛠️ Модифицировано с помощью Codex
