# Awesome MCP Servers для DeepSeek Harness (DSH)

**Русский** · [English](.docs/en/project-readme.md) · [简体中文](.docs/zh-CN/project-readme.md)

## Описание

Плагин добавляет Skill `mcp-server-selection` на основе каталога [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers). Он помогает сравнить MCP-серверы и выбрать кандидатов для конкретной задачи.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-awesome-mcp-servers-tonulls/packages/dsh-awesome-mcp-servers-tonulls-ru'
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
/dsh-awesome-mcp-servers-tonulls on
/dsh-awesome-mcp-servers-tonulls off
```

Команда действует только на текущий Agent. При выключенном автоподборе Skill остаётся доступен по прямому вызову `/mcp-server-selection`.

## Обновление

```sh
dsh plugin --profile web update dsh-awesome-mcp-servers-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор для текущего Agent:

```text
/dsh-awesome-mcp-servers-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

```sh
dsh plugin --profile web remove dsh-awesome-mcp-servers-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- Индексы: [Русский](.docs/ru/README.md) · [English](.docs/en/README.md) · [简体中文](.docs/zh-CN/README.md).
- [Установка, границы и доказательства источника](.docs/ru/guide/setup.md); [UPSTREAM.json](packages/dsh-awesome-mcp-servers-tonulls-ru/UPSTREAM.json).
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) и разработчикам DSH. Лицензия и уведомления исходных материалов сохранены в пакете; для DSH адаптирован способ установки.

🛠️ Модифицировано с помощью Codex
