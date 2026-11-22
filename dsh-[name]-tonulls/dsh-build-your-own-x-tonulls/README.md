# Build Your Own X для DSH

**Русский** | [English](.docs/en/README.project.md) | [简体中文](.docs/zh-CN/README.project.md)

## Описание

Skill `build-your-own-x` помогает выбрать обучающий проект и руководство по созданию технологии с нуля на основе каталога [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x). Он полезен для учебного плана и последовательного изучения темы.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-build-your-own-x-tonulls/packages/dsh-build-your-own-x-tonulls-ru'
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
/dsh-build-your-own-x-tonulls on
/dsh-build-your-own-x-tonulls off
```

Команда действует только на текущий Agent. При выключенном автоподборе Skill остаётся доступен по прямому вызову `/build-your-own-x`.

## Обновление

`dsh plugin --profile web update dsh-build-your-own-x-tonulls-ru`

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор для текущего Agent:

```text
/dsh-build-your-own-x-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

`dsh plugin --profile web remove dsh-build-your-own-x-tonulls-ru`

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- [Русская документация](.docs/ru/README.md) · [English](.docs/en/README.md) · [简体中文](.docs/zh-CN/README.md)
- [Сведения об источнике](packages/dsh-build-your-own-x-tonulls-ru/UPSTREAM.json)

## Donate

🔹EVM: `0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C`

🔹BTC: `bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93`

🔹TRON: `TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv`

🔹SOLANA: `8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH`

🔹GRAM-TON: `UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg`

🔹USDT-TON: `UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg`

## Благодарности и лицензия

Спасибо авторам [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x) за исходный каталог и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Лицензия и уведомления исходных материалов включены в пакет.

🛠️ Модифицировано с помощью Codex
