# Agency Agents для DeepSeek Harness (DSH)

[![Лицензия исходных материалов: MIT](<https://img.shields.io/badge/Agency%20Agents-MIT-blue.svg>)](https://github.com/msitarzewski/agency-agents/blob/8ae6164602c95ca78828b148b9052460ee426885/LICENSE)
[![Репозиторий GitHub](https://img.shields.io/badge/GitHub-tonulls%2Fdsh--plugins-181717?logo=github)](https://github.com/tonulls/dsh-plugins)

**Русский** | [English](.docs/en/README.md) | [简体中文](.docs/zh-CN/README.md)

## Описание

Набор из **283 специализированных ролей** [Agency Agents](https://github.com/msitarzewski/agency-agents), упакованный как bundle для DSH. Каждая роль доступна как DSH skill с именем `agency-<slug>` и загружается по запросу.

В набор входит `agency-vulnerability-remediation` — добавленная для DSH роль, которая проверяет локальный код, исправляет подтверждённые проблемы и проверяет изменения тестами.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-agency-agents-tonulls/packages/dsh-agency-agents-tonulls-ru'
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

Включите автоматический выбор ролей для текущего Agent:

```text
/dsh-agency-agents-tonulls on
```

После включения опишите задачу обычным сообщением: модель сама выберет подходящую роль. Прямой вызов отдельных `/agency-<slug>` человеком отключён. По умолчанию автоподбор выключен. Bundle не создаёт отдельные процессы и не устанавливает дополнительных инструментов; модель может использовать инструменты, уже доступные текущему Agent в DSH.

Команда `/dsh-agency-agents-tonulls on|off` — нативная команда DSH, а не skill. Она включает или выключает доступность ролей только для автоматического выбора моделью в текущем Agent и не назначает и не ограничивает права инструментов.

Защитные формулировки в инструкциях ролей задают ожидаемое поведение модели, но сами по себе не блокируют действия. Перед вызовом ролей в Agent с доступными инструментами, особенно перед включением автоподбора, убедитесь, что разрешения, область доступа и подтверждение операций обеспечиваются настройками DSH и подключённых инструментов. Эта проверка не входит в данный bundle.

## Обновление

Обновите русскую версию:

```sh
dsh plugin --profile web update dsh-agency-agents-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор ролей для текущего Agent:

```text
/dsh-agency-agents-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

Удалите русскую версию из профиля `web`:

```sh
dsh plugin --profile web remove dsh-agency-agents-tonulls-ru
```

## Документация

- [Подробное описание проекта и идентификаторы ролей по направлениям](.docs/ru/overview/README.md)
- [Источник Agency Agents и DSH-адаптация](.docs/ru/upstream.md)
- [Репозиторий Agency Agents](https://github.com/msitarzewski/agency-agents)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Лицензия MIT и уведомление об авторстве](packages/dsh-agency-agents-tonulls-ru/LICENSES.md)

## Donate

🔹EVM:      ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC:      ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON:     ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA:   ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [Agency Agents](https://github.com/msitarzewski/agency-agents) за исходные материалы и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходные материалы распространяются по лицензии MIT; уведомление и текст лицензии включены в каждый пакет.

🛠️ Модифицировано с помощью Codex
