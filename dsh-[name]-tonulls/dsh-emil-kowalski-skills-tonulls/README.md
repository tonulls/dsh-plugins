# Emil Kowalski Skills для DeepSeek Harness (DSH)

**Русский** | [English](.docs/en/README.project.md) | [简体中文](.docs/zh-CN/README.project.md) · [Публичная документация](.docs/README.md)

## Описание

Bundle объединяет 16 навыков из [Emil Kowalski Skills](https://github.com/emilkowalski/skills): анимация интерфейсов, motion, производительность и визуальная полировка. Навыки помогают планировать, проверять и улучшать интерфейс с учётом платформы, доступности и поведения анимаций.

`gestures` помогает проектировать перетаскивание и свайпы. `learn-taste` записывает согласованные дизайн-правила и вызывается вручную в отдельном пакете.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-emil-kowalski-skills-tonulls/packages/dsh-emil-kowalski-skills-tonulls-ru'
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
/dsh-emil-kowalski-skills-tonulls on
/dsh-emil-kowalski-skills-tonulls off
```

Команда действует только на текущий Agent. При выключенном автоподборе Skill остаётся доступен по прямому вызову `/animate`.

## Обновление
Обновите пакет в профиле `web`:

```sh
dsh plugin --profile web update dsh-emil-kowalski-skills-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор навыков для текущего Agent:

```text
/dsh-emil-kowalski-skills-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление
Удалите пакет из профиля `web`:

```sh
dsh plugin --profile web remove dsh-emil-kowalski-skills-tonulls-ru
```

## Документация

- [Обзор адаптации и ограничения](.docs/overview.md)
- [Upstream repository](https://github.com/emilkowalski/skills)
- [Upstream MIT license](https://github.com/emilkowalski/skills/blob/64eb3deb9a5fbfa041faf783e0bc3fd635872e9c/LICENSE)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Источник и проверка upstream](.docs/ru/upstream.md)
- Индексы: [русский](.docs/ru/README.md), [English](.docs/en/README.md), [简体中文](.docs/zh-CN/README.md).

## Благодарности и лицензия

Спасибо [Emil Kowalski](https://github.com/emilkowalski/skills) за исходные навыки и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходные материалы распространяются по MIT; лицензия и уведомления включены в пакет.



🛠️ Модифицировано с помощью Codex
