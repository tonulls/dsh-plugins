# Public APIs для DeepSeek Harness (DSH)

**Русский** | [English](.docs/en/project-README.md) | [简体中文](.docs/zh-CN/project-README.md)

## Описание

Skill `public-api-selection` помогает подбирать публичные API для конкретной задачи и сравнивать их доступность, стоимость, ограничения и условия использования.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-public-apis-tonulls/packages/dsh-public-apis-tonulls-ru'
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
/dsh-public-apis-tonulls on
/dsh-public-apis-tonulls off
```

Команда действует только на текущий Agent. При выключенном автоподборе Skill остаётся доступен по прямому вызову `/public-api-selection`.

## Обновление

Обновите пакет в профиле `web`:

```sh
dsh plugin --profile web update dsh-public-apis-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор навыка для текущего Agent:

```text
/dsh-public-apis-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

Удалите пакет из профиля `web`:

```sh
dsh plugin --profile web remove dsh-public-apis-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- Индексы: [русский](.docs/ru/README.md), [English](.docs/en/README.md), [简体中文](.docs/zh-CN/README.md).
- [Установка, границы и источники](.docs/ru/guide/setup.md); [UPSTREAM.json](packages/dsh-public-apis-tonulls-ru/UPSTREAM.json).
- [Каталог public-apis/public-apis](https://github.com/public-apis/public-apis); [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [Public APIs](https://github.com/public-apis/public-apis) за исходный каталог и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Лицензия и уведомления исходного проекта включены в пакет; адаптирован способ установки.

🛠️ Модифицировано с помощью Codex
