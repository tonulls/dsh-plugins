# UI UX Pro Max для DeepSeek Harness (DSH)

**Русский** | [English](.docs/en/project.md) | [简体中文](.docs/zh-CN/project.md)

## Описание

Bundle добавляет навыки [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) для проектирования интерфейсов и проверки UI/UX-решений. Они помогают учитывать стиль продукта, компоненты, платформу и требования к доступности.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-ui-ux-pro-max-tonulls/packages/dsh-ui-ux-pro-max-tonulls-ru'
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
/dsh-ui-ux-pro-max-tonulls on
/dsh-ui-ux-pro-max-tonulls off
```

Команда действует только на текущий Agent. При выключенном автоподборе Skill остаётся доступен по прямому вызову `/ui-ux-pro-max-review`.

## Обновление

```sh
dsh plugin --profile web update dsh-ui-ux-pro-max-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор для текущего Agent:

```text
/dsh-ui-ux-pro-max-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

```sh
dsh plugin --profile web remove dsh-ui-ux-pro-max-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- Индексы: [Русский](.docs/ru/README.md) · [English](.docs/en/README.md) · [简体中文](.docs/zh-CN/README.md)
- [Установка и границы](.docs/ru/guide/setup.md)
- [Upstream](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) и [сведения об источнике](packages/dsh-ui-ux-pro-max-tonulls-ru/UPSTREAM.json)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) за исходные навыки и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходная лицензия и уведомления включены в пакет; адаптирован способ установки.

🛠️ Модифицировано с помощью Codex
