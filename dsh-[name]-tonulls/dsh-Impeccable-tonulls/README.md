# DSH Impeccable

[![GitHub repository](https://img.shields.io/badge/GitHub-tonulls%2Fdsh--plugins-181717?logo=github)](https://github.com/tonulls/dsh-plugins)

**Русский** · [Документация](.docs/ru/README.md) | [English](.docs/en/README.full.md) | [简体中文](.docs/zh-CN/README.full.md) · [English index](.docs/en/README.md) · [中文索引](.docs/zh-CN/README.md)

## Описание

Плагин добавляет DSH-навык на основе [Impeccable](https://github.com/pbakaus/impeccable) для проектирования и улучшения интерфейсов. Он помогает работать с визуальной иерархией, композицией, типографикой, доступностью и состояниями продукта.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-Impeccable-tonulls/packages/dsh-impeccable-tonulls-ru'
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

Включите автоматический выбор навыка для текущего Agent:

```text
/dsh-impeccable on
```

После включения опишите задачу обычным сообщением: модель выберет Impeccable. Навык также можно вызвать напрямую:

```text
/impeccable critique the settings page
```

## Обновление

Обновите пакет в профиле `web`:

```sh
dsh plugin --profile web update dsh-impeccable-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор для текущего Agent:

```text
/dsh-impeccable off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

Чтобы удалить плагин из профиля:

```sh
dsh plugin --profile web remove dsh-impeccable-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- [История изменений](https://github.com/tonulls/dsh-plugins/tree/tonulls/dsh-%5Bname%5D-tonulls/dsh-Impeccable-tonulls)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Release notes CLI 4.8.0](https://github.com/pbakaus/impeccable/releases/tag/cli-v4.8.0) и [официальный upstream DSH skill](https://github.com/pbakaus/impeccable/tree/414603bf14c7a344edb466bb1f85690c77ce8b7d/.dsh/skills/impeccable), проверенный на revision `414603bf14c7a344edb466bb1f85690c77ce8b7d`.
- [Лицензия Apache-2.0](LICENSE) и [уведомление об upstream](NOTICE.md).

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [Impeccable](https://github.com/pbakaus/impeccable) за исходные материалы и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходные материалы распространяются по Apache-2.0; лицензия и уведомления включены в пакет.

🛠️ Модифицировано с помощью Codex
