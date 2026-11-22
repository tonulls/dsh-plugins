# GStack для DeepSeek Harness (DSH)

[![GitHub repository](https://img.shields.io/badge/GitHub-tonulls%2Fdsh--plugins-181717?logo=github)](https://github.com/tonulls/dsh-plugins)

**Русский** | [English](.docs/en/README.full.md) | [简体中文](.docs/zh-CN/README.full.md)

## Описание

Плагин адаптирует методологию [GStack](https://github.com/garrytan/gstack) для DSH. Навыки помогают уточнять продуктовые задачи, планировать разработку, исследовать проблемы, проверять изменения и готовить выпуск.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-gstack-tonulls/packages/dsh-gstack-tonulls-ru'
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

Включите автоматический выбор навыков для текущего Agent:

```text
/dsh-gstack-tonulls on
```

После включения опишите задачу обычным сообщением: модель выберет подходящий навык. Навык также можно вызвать напрямую командой `/gstack`.

Команда `/dsh-gstack-tonulls off` выключает автоподбор для текущего Agent. По умолчанию он выключен.

## Обновление

Обновите пакет в профиле `web`:

```sh
dsh plugin --profile web update dsh-gstack-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор навыков для текущего Agent:

```text
/dsh-gstack-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

Удалите пакет из профиля `web`:

```sh
dsh plugin --profile web remove dsh-gstack-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- [Русский индекс документации](.docs/ru/README.md) · [English](.docs/en/README.md) · [简体中文](.docs/zh-CN/README.md)
- [GStack upstream](https://github.com/garrytan/gstack/tree/a8decce8acc2d63a1a2897a4522d1b1eaac8f8ec)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Лицензии и происхождение материалов](LICENSES.md)

## Donate

🔹EVM: `0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C`

🔹BTC: `bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93`

🔹TRON: `TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv`

🔹SOLANA: `8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH`

🔹GRAM-TON: `UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg`

🔹USDT-TON: `UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg`

## Благодарности и лицензия

Спасибо авторам [GStack](https://github.com/garrytan/gstack) за исходные материалы и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходные материалы распространяются по MIT; лицензия и уведомления включены в пакет.

🛠️ Модифицировано с помощью Codex
