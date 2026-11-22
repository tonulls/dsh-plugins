# Lenis reference Skill для DeepSeek Harness (DSH)

**Русский** | [English](.docs/en/README.project.md) | [简体中文](.docs/zh-CN/README.project.md)

## Описание

Skill `lenis-integration` помогает планировать и проверять интеграцию плавной прокрутки [Lenis](https://github.com/darkroomengineering/lenis) в веб-проект. Он ориентирует рекомендации на текущий framework, версии и требования к доступности и reduced motion.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-lenis-tonulls/packages/dsh-lenis-tonulls-ru'
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
/dsh-lenis-tonulls on
/dsh-lenis-tonulls off
```

Команда действует только на текущий Agent. При выключенном автоподборе Skill остаётся доступен по прямому вызову `/lenis-integration`.

## Обновление

```sh
dsh plugin --profile web update dsh-lenis-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор для текущего Agent:

```text
/dsh-lenis-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

```sh
dsh plugin --profile web remove dsh-lenis-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- Индексы документации: [RU](.docs/ru/README.md) · [EN](.docs/en/README.md) · [ZH](.docs/zh-CN/README.md)
- [Подготовка и границы использования](.docs/ru/guide/setup.md)
- [Lenis на GitHub](https://github.com/darkroomengineering/lenis)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Лицензия пакета](packages/dsh-lenis-tonulls-ru/LICENSE)

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [Lenis](https://github.com/darkroomengineering/lenis) за исходную библиотеку и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходная лицензия MIT и уведомления включены в пакет.

🛠️ Модифицировано с помощью Codex
