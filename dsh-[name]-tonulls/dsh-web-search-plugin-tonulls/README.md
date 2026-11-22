# DSH Web Search Plugin для DeepSeek Harness (DSH)

**Русский** | [English](.docs/en/project.md) | [简体中文](.docs/zh-CN/project.md)

## Описание

Skill `web-search-setup` помогает разобраться с настройкой и использованием [DSH Web Search Plugin](https://github.com/deepseek-ai/dsh-web-search-plugin). Он предназначен для оценки конфигурации и рабочего процесса поиска в DSH.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-web-search-plugin-tonulls/packages/dsh-web-search-plugin-tonulls-ru'
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
/dsh-web-search-plugin-tonulls on
/dsh-web-search-plugin-tonulls off
```

Команда действует только на текущий Agent. При выключенном автоподборе Skill остаётся доступен по прямому вызову `/web-search-setup`.

## Обновление

```sh
dsh plugin --profile web update dsh-web-search-plugin-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор для текущего Agent:

```text
/dsh-web-search-plugin-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

```sh
dsh plugin --profile web remove dsh-web-search-plugin-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- Индексы: [Русский](.docs/ru/README.md) · [English](.docs/en/README.md) · [简体中文](.docs/zh-CN/README.md)
- [Установка и границы](.docs/ru/guide/setup.md)
- [Upstream](https://github.com/X-C1811/dsh-web-search-plugin) и [сведения об источнике](packages/dsh-web-search-plugin-tonulls-ru/UPSTREAM.json)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [DSH Web Search Plugin](https://github.com/X-C1811/dsh-web-search-plugin) за исходный проект и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходный плагин распространяется по лицензии [MIT](https://github.com/X-C1811/dsh-web-search-plugin/blob/789c5da5f34c9bc6b5fc13c592a6cbe29fb329f8/LICENSE).

🛠️ Модифицировано с помощью Codex
