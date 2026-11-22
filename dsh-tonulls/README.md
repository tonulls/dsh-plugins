# DSH Tonulls bundle

**Русский** | [English](.docs/en/README.md) | [简体中文](.docs/zh-CN/README.md)

## Описание

`dsh-tonulls` объединяет 37 проектов с навыками для разработки, дизайна, исследований, безопасности и работы с инструментами. Установите bundle из GitHub и управляйте автоподбором навыков всех компонентов одной командой для текущего Agent.

## Установка

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-tonulls/packages/dsh-tonulls-ru'
```

## Запуск

```sh
dsh web
```

## Проверка

```sh
dsh plugin --profile web list
```

## Использование

```text
/dsh-tonulls on
/dsh-tonulls off
```

`on` включает автоподбор, `off` выключает его. Навыки выбираются автоматически по задаче текущего Agent. В меню команд из набора видна только команда `/dsh-tonulls`.

Чтобы сохранить правки по дизайну как правила проекта, попросите об этом явно. При включённом автоподборе агент подберёт `learn-taste`, предложит правила и дождётся подтверждения перед записью.

## Обновление

```sh
dsh plugin --profile web update dsh-tonulls-ru
```

## Перезапуск

Остановите DSH Web через `Ctrl+C` и снова запустите профиль.

## Остановка

Выключите автоподбор для текущего Agent командой `/dsh-tonulls off`. Чтобы завершить DSH Web, нажмите `Ctrl+C`.

## Удаление

```sh
dsh plugin --profile web remove dsh-tonulls-ru
```

## Документация

- [Источники компонентов](.docs/ru/upstream.md)
- [Каталог проектов](./../.docs/ru/projects.md)

## Donate

🔹EVM:      ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC:      ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON:     ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA:   ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [Agency Agents](https://github.com/msitarzewski/agency-agents), разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) и авторам остальных включённых проектов. Исходные материалы и уведомления об авторстве включены в [bundle](packages/dsh-tonulls-ru/LICENSES.md).

🛠️ Модифицировано с помощью Codex
