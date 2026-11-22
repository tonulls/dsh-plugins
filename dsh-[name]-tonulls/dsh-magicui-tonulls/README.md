# Magic UI для DeepSeek Harness (DSH)

**Русский** | [English](.docs/en/project.md) | [简体中文](.docs/zh-CN/project.md)

## Описание

Плагин добавляет Skill `magic-ui-review` для оценки компонентов и анимаций из [Magic UI](https://github.com/magicuidesign/magicui). Он помогает проверить соответствие проекта, источники, совместимость и условия использования перед интеграцией.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-magicui-tonulls/packages/dsh-magicui-tonulls-ru'
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
/dsh-magicui-tonulls on
/dsh-magicui-tonulls off
```

Команда действует только на текущий Agent. При выключенном автоподборе Skill остаётся доступен по прямому вызову `/magic-ui-review`.

## Обновление

```sh
dsh plugin --profile web update dsh-magicui-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор для текущего Agent:

```text
/dsh-magicui-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

Удалите пакет из профиля `web`:

```sh
dsh plugin --profile web remove dsh-magicui-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- Индексы: [Русский](.docs/ru/README.md) · [English](.docs/en/README.md) · [简体中文](.docs/zh-CN/README.md).
- [Установка, границы, upstream и проверки](.docs/ru/guide/setup.md).
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1EYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON / USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [Magic UI](https://github.com/magicuidesign/magicui) за исходные материалы и разработчикам DSH за платформу. Лицензия и уведомления исходных материалов включены в пакет; адаптирован способ установки.

🛠️ Модифицировано с помощью Codex
