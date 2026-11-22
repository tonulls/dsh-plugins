# ECC для DeepSeek Harness (DSH)

[![ECC source license: MIT](<https://img.shields.io/badge/ECC%20source-MIT-blue.svg>)](https://github.com/affaan-m/ECC/blob/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b/LICENSE)
[![GitHub repository](https://img.shields.io/badge/GitHub-tonulls%2Fdsh--plugins-181717?logo=github)](https://github.com/tonulls/dsh-plugins)

**Русский** | [English](.docs/en/README.full.md) | [简体中文](.docs/zh-CN/README.full.md) · Индексы: [RU](.docs/ru/README.md) | [EN](.docs/en/README.md) | [ZH](.docs/zh-CN/README.md)

## Описание

Адаптированные компоненты [Everything Claude Code (ECC)](https://github.com/affaan-m/ECC) для [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness): 71 Agent-роли, 236 Skills и 3 Commands. Устанавливайте их вместе или выбирайте компоненты отдельно.

## Установка

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-ECC-tonulls/packages/dsh-ecc-tonulls-ru'
```

## Запуск

```sh
dsh web
```

## Проверка

```sh
dsh plugin --profile web list
```

## Использование

```text
/dsh-ecc-tonulls on
/dsh-ecc-tonulls off
```

Автоподбор выключен по умолчанию. Команда управляет всеми группами ECC в текущем Agent.

Навык `ecc-remotion-video-creation` помогает собрать композицию и отрендерить MP4 в проекте с установленным Remotion. Для объясняющих роликов есть `ecc-manim-video`, для локального монтажа — `ecc-video-editing`. `ecc-videodb` работает с отдельно подключённым VideoDB.

## Обновление

```sh
dsh plugin --profile web update dsh-ecc-tonulls-ru
```

## Перезапуск

Остановите DSH Web через `Ctrl+C` и снова запустите профиль.

## Остановка

Выключите автоподбор командой `/dsh-ecc-tonulls off`. Чтобы завершить DSH Web, нажмите `Ctrl+C`.

## Удаление

```sh
dsh plugin --profile web remove dsh-ecc-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

[Документация ECC](.docs/ru/README.md)

## Donate

🔹EVM:      ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC:      ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON:     ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA:   ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [Everything Claude Code](https://github.com/affaan-m/ECC) за исходные материалы и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Материалы ECC распространяются по лицензии MIT; [уведомление об авторстве и текст лицензии](packages/dsh-ecc-tonulls-ru/LICENSES.md) включены в пакеты компонентов.

🛠️ Модифицировано с помощью Codex
