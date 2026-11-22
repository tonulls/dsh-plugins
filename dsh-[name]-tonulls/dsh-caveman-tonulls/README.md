# DSH Caveman

**Русский** | [English](.docs/en/README.project.md) | [简体中文](.docs/zh-CN/README.project.md)

## Описание

Caveman — адаптация стиля кратких и прямых ответов из [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) для DSH. Навык помогает отвечать сжато, сохраняя точность, важные детали и ясные объяснения.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-caveman-tonulls/packages/dsh-caveman-tonulls-ru'
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
/dsh-caveman-tonulls on
/dsh-caveman-tonulls off
```

Команда действует только на текущий Agent. При выключенном автоподборе Skill остаётся доступен по прямому вызову `/caveman`.

## Обновление

`dsh plugin --profile web update dsh-caveman-tonulls-ru`

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор для текущего Agent:

```text
/dsh-caveman-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

`dsh plugin --profile web remove dsh-caveman-tonulls-ru`

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- [Документация](.docs/README.md) · [English](.docs/en/README.md) · [简体中文](.docs/zh-CN/README.md)
- [Лицензионные сведения и уведомления](packages/dsh-caveman-tonulls-ru/LICENSES.md)

## Donate

🔹EVM: `0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C`

🔹BTC: `bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93`

🔹TRON: `TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv`

🔹SOLANA: `8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH`

🔹GRAM-TON: `UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg`

🔹USDT-TON: `UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg`

## Благодарности и лицензия

Спасибо авторам [Caveman](https://github.com/JuliusBrussee/caveman) за исходные материалы и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Лицензии и уведомления исходного проекта включены в пакет.

🛠️ Модифицировано с помощью Codex
