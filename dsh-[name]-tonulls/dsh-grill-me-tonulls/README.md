# DSH Grill Me

**Русский** · [English](.docs/en/README.project.md) · [简体中文](.docs/zh-CN/README.project.md)

## Описание

Bundle объединяет навыки `grill-me` и `grilling` из проекта [Matt Pocock](https://github.com/mattpocock/skills). Они помогают последовательно разобрать план или решение через уточняющие вопросы; выполнение плана начинается только после подтверждения пользователя.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-grill-me-tonulls/packages/dsh-grill-me-tonulls-ru'
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
/dsh-grill-me-tonulls on
/dsh-grill-me-tonulls off
```

Команда действует только на текущий Agent. При выключенном автоподборе Skill остаётся доступен по прямому вызову `/grill-me`.

## Обновление

Обновите пакет в профиле `web`:

```sh
dsh plugin --profile web update dsh-grill-me-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор навыков для текущего Agent:

```text
/dsh-grill-me-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

Удалите пакет из профиля `web`:

```sh
dsh plugin --profile web remove dsh-grill-me-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- Индексы: [русский](.docs/ru/README.md), [English](.docs/en/README.md), [简体中文](.docs/zh-CN/README.md).
- [Источник Matt Pocock](https://github.com/mattpocock/skills/tree/main/skills/productivity/grill-me), [уведомления и лицензии](packages/dsh-grill-me-tonulls-ru/LICENSES.md).

## Благодарности и лицензия

Спасибо [Matt Pocock](https://github.com/mattpocock/skills) за исходные навыки и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходная лицензия MIT и уведомления включены в пакет.

🛠️ Модифицировано с помощью Codex
