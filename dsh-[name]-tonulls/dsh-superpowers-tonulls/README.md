# Superpowers для DeepSeek Harness (DSH)

**Русский** | [English](.docs/en/project-README.md) | [简体中文](.docs/zh-CN/project-README.md)

## Описание

Skill `superpowers-reference` помогает оценить и применять инженерные методики проекта [Superpowers](https://github.com/obra/superpowers) в задаче разработки. Он подсказывает подходящий workflow и этапы работы, не заменяя проверку требований самого проекта.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-superpowers-tonulls/packages/dsh-superpowers-tonulls-ru'
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

Автоподбор Skills выключен по умолчанию отдельно в каждом Agent. Включите или выключите подбор командой:

```text
/dsh-superpowers-tonulls on
/dsh-superpowers-tonulls off
```

Команда действует только на текущий Agent. При выключенном автоподборе Skill остаётся доступен по прямому вызову `/superpowers-reference`.

## Обновление

Обновите пакет в профиле `web`:

```sh
dsh plugin --profile web update dsh-superpowers-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор для текущего Agent:

```text
/dsh-superpowers-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

Удалите пакет из профиля `web`:

```sh
dsh plugin --profile web remove dsh-superpowers-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- Индексы: [русский](.docs/ru/README.md), [English](.docs/en/README.md), [简体中文](.docs/zh-CN/README.md).
- [Установка, границы и источники](.docs/ru/guide/setup.md); [UPSTREAM.json](packages/dsh-superpowers-tonulls-ru/UPSTREAM.json).
- [Superpowers](https://github.com/obra/superpowers); [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [Superpowers](https://github.com/obra/superpowers) за исходный проект и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходная лицензия MIT и уведомления включены в пакет.

🛠️ Модифицировано с помощью Codex
