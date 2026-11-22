# DSH Archify

**Русский** · [English](.docs/en/README.en.md) · [简体中文](.docs/zh-CN/README.zh-CN.md)

## Описание

Archify превращает описание системы или процесса в проверяемую диаграмму и самостоятельную HTML-страницу. В bundle включён upstream-релиз Archify, адаптированный для работы как DSH Skill; он нужен для наглядного объяснения архитектуры, потоков данных и связей между компонентами.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-archify-tonulls/packages/dsh-archify-tonulls'
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
/dsh-archify on
```

После включения опишите задачу обычным сообщением: модель подберёт Archify. Прямой вызов `/archify` доступен при выключенном автоподборе.

## Обновление

Обновите пакет в профиле `web`:

```sh
dsh plugin --profile web update dsh-archify-tonulls
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор для текущего Agent:

```text
/dsh-archify off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

Удалите пакет из профиля `web`:

```sh
dsh plugin --profile web remove dsh-archify-tonulls
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- [Русский индекс](.docs/README.md) · [English index](.docs/en/README.md) · [中文索引](.docs/zh-CN/README.md)
- [Archify upstream](https://github.com/tt-a1i/archify) · [Лицензия и уведомления](packages/dsh-archify-tonulls/NOTICE.md)

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [Archify](https://github.com/tt-a1i/archify) за исходный Skill и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходный Skill распространяется по Apache-2.0; лицензия и уведомления включены в пакет.

🛠️ Модифицировано с помощью Codex
