# Karpathy Guidelines для DeepSeek Harness (DSH)

[![Лицензия пакета: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](packages/dsh-aks-tonulls-ru/LICENSE)
[![Репозиторий GitHub](https://img.shields.io/badge/GitHub-tonulls%2Fdsh--plugins-181717?logo=github)](https://github.com/tonulls/dsh-plugins)

**Русский** | [English](.docs/en/project-readme.md) | [简体中文](.docs/zh-CN/project-readme.md)

## Описание

Плагин добавляет в DSH один навык с четырьмя принципами разработки: прояснять задачу до реализации, предпочитать простые решения, вносить только необходимые изменения и проверять результат.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-AKS-tonulls/packages/dsh-aks-tonulls-ru'
```

## Запуск

Запустите профиль, в который установлен пакет:

```sh
dsh web
```

## Проверка

Проверьте версию DSH, список плагинов и собранную конфигурацию профиля:

```sh
dsh --version
```

```sh
dsh plugin --profile web list
```

```sh
dsh --profile web --dump-config
```

Перезапустите профиль, если активная сессия не подхватила установленный пакет.

## Использование

Включите автоматический выбор навыка для текущего Agent:

```text
/dsh-aks-tonulls on
```

После включения модель может выбрать навык по смыслу обычного запроса. Навык также можно вызвать напрямую как `/karpathy-guidelines`.

Команда `/dsh-aks-tonulls on|off` — нативная команда DSH, а не skill. Она включает или выключает доступность навыка только для автоматического выбора моделью в текущем Agent и не назначает и не ограничивает права инструментов.

Инструкции навыка задают ожидаемое поведение модели, но сами по себе не блокируют действия. Доступ к инструментам и подтверждение операций определяются настройками DSH и подключённых инструментов.

## Обновление

Обновите русский вариант:

```sh
dsh plugin --profile web update dsh-aks-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоподбор навыка для текущего Agent командой DSH:

```text
/dsh-aks-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

Удалите русскую версию из профиля `web`:

```sh
dsh plugin --profile web remove dsh-aks-tonulls-ru
```

## Документация

- [Дополнительная документация](.docs/README.md)
- [Источник и адаптация](.docs/ru/upstream.md)
- [Andrej Karpathy Skills](https://github.com/multica-ai/andrej-karpathy-skills)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Лицензия MIT](packages/dsh-aks-tonulls-ru/LICENSE)

## Donate

🔹EVM:      ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC:      ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON:     ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA:   ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [Andrej Karpathy Skills](https://github.com/multica-ai/andrej-karpathy-skills) за исходные рекомендации и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Upstream заявляет MIT в README и frontmatter навыка, но в дереве закреплённого commit нет отдельного файла `LICENSE`; подробности — в [описании источника](.docs/ru/upstream.md). Уведомление и текст MIT включены в каждый пакет.

🛠️ Модифицировано с помощью Codex
