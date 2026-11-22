# Astryx skill для DeepSeek Harness (DSH)

**Русский** | [English](.docs/en/README.en.md) | [简体中文](.docs/zh-CN/README.zh-CN.md) · [Публичная документация](.docs/ru/README.md)

## Описание

Astryx для DSH — навык, который помогает определить, подходит ли официальный Astryx CLI для задачи, и подготовить понятный путь к его использованию. Это адаптация рекомендаций Astryx, а не сам CLI или его установка; автоподбор навыка включается отдельно для текущего Agent.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-astryx-tonulls/packages/dsh-astryx-tonulls-ru'
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
/dsh-astryx-tonulls on
```

После включения попросите агента помочь с Astryx. Навык помогает оценить задачу и использовать CLI, если он установлен в проекте. Прямой вызов навыка — `/astryx`.

Справка установленного CLI доступна командами:

```sh
pnpm exec astryx --help
pnpm exec astryx manifest --json
pnpm exec astryx search <query> --json
pnpm exec astryx component <exact-selector> --json
pnpm exec astryx hook <name> --json
pnpm exec astryx docs tokens --json
```

Официальный пакет CLI — `@astryxdesign/cli`; его команды запускаются через `pnpm exec astryx`.

## Обновление

Обновите пакет в профиле `web`:

```sh
dsh plugin --profile web update dsh-astryx-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор навыка для текущего Agent:

```text
/dsh-astryx-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

Удалите пакет из профиля `web`:

```sh
dsh plugin --profile web remove dsh-astryx-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- [Русский индекс](.docs/ru/README.md) · [English index](.docs/en/README.md) · [中文索引](.docs/zh-CN/README.md)
- [Архитектура и ограничения интеграции](.docs/ru/overview.md)
- [Установка и эксплуатация](.docs/ru/installation.md)
- [Использование skill и CLI](.docs/ru/usage.md)
- [Источники Astryx](https://github.com/meta/astryx)
- [Лицензия upstream Astryx (MIT)](https://github.com/meta/astryx/blob/0b48882df9c0bf8e49c8f7306737b6972c8dcd15/LICENSE); копия включена в каждый языковой пакет, например [`LICENSE`](packages/dsh-astryx-tonulls-ru/LICENSE).
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [Astryx](https://github.com/meta/astryx) за исходные материалы и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходный проект распространяется по MIT; текст лицензии и уведомления включены в пакет.

🛠️ Модифицировано с помощью Codex
