# DSH Last 30 Days — web-only

**Русский** · [English](.docs/en/README.en.md) · [简体中文](.docs/zh-CN/README.zh-CN.md)

## Описание

Skill `last30days` помогает исследовать свежую информацию за последние 30 дней по открытым веб-источникам. Это независимая DSH-адаптация идеи [last30days-skill](https://github.com/mvanhorn/last30days-skill), рассчитанная на доступные в сессии инструменты поиска и чтения страниц.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-last30days-tonulls/packages/dsh-last30days-tonulls'
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

Автоподбор выключен по умолчанию. Включите его для текущего Agent:

```text
/dsh-last30days on
```

После включения попросите провести веб-исследование за последние 30 дней. Прямой вызов `/last30days` доступен при выключенном автоподборе.

## Обновление

Обновите пакет в профиле `web`:

```sh
dsh plugin --profile web update dsh-last30days-tonulls
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор для текущего Agent:

```text
/dsh-last30days off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

```sh
dsh plugin --profile web remove dsh-last30days-tonulls
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)
- [Индекс документации](.docs/ru/README.md)
- [Происхождение пакета](packages/dsh-last30days-tonulls/UPSTREAM.json)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [last30days-skill](https://github.com/mvanhorn/last30days-skill) за исходный навык и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходный проект распространяется по MIT. В пакете есть [лицензия](packages/dsh-last30days-tonulls/LICENSE) и [уведомление об авторстве](packages/dsh-last30days-tonulls/NOTICE.md).

🛠️ Модифицировано с помощью Codex
