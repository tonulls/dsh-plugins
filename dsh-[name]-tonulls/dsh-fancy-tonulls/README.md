# Fancy Components Skill для DeepSeek Harness (DSH)

[![GitHub repository](https://img.shields.io/badge/GitHub-tonulls%2Fdsh--plugins-181717?logo=github)](https://github.com/tonulls/dsh-plugins)

**Русский** · [English](.docs/en/README.project.md) · [简体中文](.docs/zh-CN/README.project.md)

## Описание

Плагин добавляет Skill `fancy-components` на основе каталога [Fancy](https://github.com/danielpetho/fancy). Он помогает подобрать и оценить React-компоненты для проекта.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-fancy-tonulls/packages/dsh-fancy-tonulls-ru'
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

Включите автоматический выбор навыка для текущего Agent:

```text
/dsh-fancy-tonulls-ru on
```

После включения опишите задачу обычным сообщением: модель подберёт подходящий компонент. Skill также можно вызвать напрямую командой `/fancy-components`.

## Обновление

Обновите пакет в профиле `web`:

```sh
dsh plugin --profile web update dsh-fancy-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор для текущего Agent:

```text
/dsh-fancy-tonulls-ru off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

Удалите пакет из профиля `web`:

```sh
dsh plugin --profile web remove dsh-fancy-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- [Русский индекс документации](.docs/ru/README.md) · [English](.docs/en/README.md) · [简体中文](.docs/zh-CN/README.md)
- [Fancy upstream](https://github.com/danielpetho/fancy)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Лицензия и уведомления](packages/dsh-fancy-tonulls-ru/LICENSE)

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [Fancy](https://github.com/danielpetho/fancy) за исходные материалы и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходные материалы распространяются по MIT; лицензия и уведомления включены в пакет.

🛠️ Модифицировано с помощью Codex
