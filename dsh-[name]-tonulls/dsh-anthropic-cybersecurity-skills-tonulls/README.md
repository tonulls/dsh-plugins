# Anthropic Cybersecurity Skills для DeepSeek Harness (DSH)

[![Лицензия пакета: Apache-2.0](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](packages/dsh-anthropic-cybersecurity-skills-tonulls/LICENSE)
[![Репозиторий GitHub](https://img.shields.io/badge/GitHub-tonulls%2Fdsh--plugins-181717?logo=github)](https://github.com/tonulls/dsh-plugins)

**Русский** | [English](.docs/en/README.en.md) | [简体中文](.docs/zh-CN/README.zh-CN.md)

## Описание

Плагин добавляет в DSH два навыка для анализа журналов доступа веб-серверов и API Gateway. Они помогают находить признаки возможных атак по предоставленным логам, но не подтверждают факт взлома. Автоматический выбор навыков моделью управляется отдельно для текущего Agent и выключен по умолчанию.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-anthropic-cybersecurity-skills-tonulls/packages/dsh-anthropic-cybersecurity-skills-tonulls'
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
```

```sh
dsh plugin --profile web list
```

```sh
dsh --profile web --dump-config
```

Перезапустите профиль, если активная сессия не подхватила установленный bundle.

## Использование

Включите автоматический выбор навыков для текущего Agent:

```text
/dsh-anthropic-cybersecurity-skills-tonulls on
```

После включения опишите задачу обычным сообщением: модель выберет подходящий навык. Чтобы выключить автоподбор:

```text
/dsh-anthropic-cybersecurity-skills-tonulls off
```

По умолчанию автоподбор выключен. Команды действуют для текущего Agent. Навыки также можно вызвать напрямую:

```text
/anthropic-cybersecurity-api-gateway-log-triage
/anthropic-cybersecurity-web-access-log-triage
```

Навыки анализируют предоставленные журналы и помогают определить признаки возможных атак. Для сканирования, эксплуатации или изменения систем используйте отдельный запрос и соответствующие инструменты DSH.

## Обновление

Обновите пакет в профиле `web`:

```sh
dsh plugin --profile web update dsh-anthropic-cybersecurity-skills-tonulls
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор навыков для текущего Agent:

```text
/dsh-anthropic-cybersecurity-skills-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора и остановка хоста не удаляют пакет из профиля.

## Удаление

Удалите пакет из профиля `web`:

```sh
dsh plugin --profile web remove dsh-anthropic-cybersecurity-skills-tonulls
```

## Документация

- [Индексы документации: общий](.docs/README.md) · [RU](.docs/ru/README.md) · [EN](.docs/en/README.md) · [简体中文](.docs/zh-CN/README.md)
- [Источник и адаптация](.docs/ru/upstream.md)
- [Anthropic Cybersecurity Skills — upstream](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Лицензия Apache-2.0](packages/dsh-anthropic-cybersecurity-skills-tonulls/LICENSE) и [уведомление об атрибуции](packages/dsh-anthropic-cybersecurity-skills-tonulls/NOTICE.md)

## Donate

🔹EVM:      ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC:      ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON:     ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA:   ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [Anthropic Cybersecurity Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) за исходные процедуры и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Адаптированные материалы распространяются по Apache-2.0; уведомление об атрибуции и текст лицензии включены в пакет. Community-проект upstream и эта адаптация не связаны с Anthropic PBC.

🛠️ Модифицировано с помощью Codex
