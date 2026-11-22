# Awesome Cursor Rules для DeepSeek Harness (DSH)

**Русский** · [English](.docs/en/project-readme.md) · [简体中文](.docs/zh-CN/project-readme.md)

## Описание

Плагин добавляет справочный Skill `cursor-rules-selector` на основе каталога [Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules). Он помогает найти и оценить правила Cursor с учётом проекта и его технологий.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-awesome-cursorrules-tonulls/packages/dsh-awesome-cursorrules-tonulls-ru'
```

## Запуск

Запустите хост командой `dsh web`.

## Проверка

Проверьте версию DSH, установленные плагины и конфигурацию профиля:

```sh
dsh --version
dsh plugin --profile web list
dsh --profile web --dump-config
```

## Использование

Автоподбор Skills выключен по умолчанию отдельно в каждом Agent. Включите или выключите подбор командой:

```text
/dsh-awesome-cursorrules-tonulls on
/dsh-awesome-cursorrules-tonulls off
```

Команда действует только на текущий Agent. При выключенном автоподборе Skill остаётся доступен по прямому вызову `/cursor-rules-selector`.

## Обновление

```sh
dsh plugin --profile web update dsh-awesome-cursorrules-tonulls-ru
```

## Перезапуск

Остановите хост через `Ctrl+C`, затем снова выполните `dsh web`.

## Остановка

Выключите автоматический выбор Skill для текущего Agent:

```text
/dsh-awesome-cursorrules-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

```sh
dsh plugin --profile web remove dsh-awesome-cursorrules-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- Индексы: [Русский](.docs/ru/README.md) · [English](.docs/en/README.md) · [简体中文](.docs/zh-CN/README.md).
- [Установка, границы и доказательства источника](.docs/ru/guide/setup.md); [UPSTREAM.json](packages/dsh-awesome-cursorrules-tonulls-ru/UPSTREAM.json).
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules) и разработчикам DSH. Лицензия и уведомления исходных материалов сохранены в пакете; для DSH адаптирован способ установки.

🛠️ Модифицировано с помощью Codex
