# Claude Code Setup для DSH

**Русский** | [English](.docs/en/README.project.md) | [简体中文](.docs/zh-CN/README.project.md)

## Описание

Skill `claude-setup-review` помогает разбирать и оценивать конфигурацию Claude Code на основе проекта [Claude Code Setup](https://github.com/anthropics/claude-code). Он предназначен для анализа настроек, правил и структуры конфигурации; применимость рекомендаций зависит от версии и окружения пользователя.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-claude-code-setup-tonulls/packages/dsh-claude-code-setup-tonulls-ru'
```

## Запуск

Запустите профиль: `dsh web`.

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
/dsh-claude-code-setup-tonulls on
/dsh-claude-code-setup-tonulls off
```

Команда действует только на текущий Agent. При выключенном автоподборе Skill остаётся доступен по прямому вызову `/claude-code-setup`.

## Обновление

`dsh plugin --profile web update dsh-claude-code-setup-tonulls-ru`

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор для текущего Agent:

```text
/dsh-claude-code-setup-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

`dsh plugin --profile web remove dsh-claude-code-setup-tonulls-ru`

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- [Русская документация](.docs/ru/README.md) · [English](.docs/en/README.md) · [简体中文](.docs/zh-CN/README.md)
- [Источник и сведения о лицензии](packages/dsh-claude-code-setup-tonulls-ru/UPSTREAM.json)

## Donate

🔹EVM: `0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C`

🔹BTC: `bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93`

🔹TRON: `TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv`

🔹SOLANA: `8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH`

🔹GRAM-TON: `UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg`

🔹USDT-TON: `UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg`

## Благодарности и лицензия

Спасибо авторам [Claude Code Setup](https://github.com/mrgoonie/claude-code-setup) и разработчикам DeepSeek Harness. Лицензия и уведомления исходных материалов сохранены в пакете; для DSH адаптирован способ установки.

🛠️ Модифицировано с помощью Codex
