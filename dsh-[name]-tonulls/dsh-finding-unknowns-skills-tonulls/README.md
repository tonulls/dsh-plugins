# DSH Finding Unknowns Skills

**Русский** · [English](.docs/en/README.project.md) · [简体中文](.docs/zh-CN/README.project.md)

## Описание

Bundle содержит 14 навыков из [Finding Unknowns](https://github.com/Neeeophytee/finding-unknowns-skills), посвящённых пробелам требований, скрытым допущениям и проверке неизвестных условий. Они помогают уточнить задачу и выбрать полезные проверки до и во время работы.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-finding-unknowns-skills-tonulls/packages/dsh-finding-unknowns-skills-tonulls-ru'
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
/dsh-finding-unknowns-skills-tonulls on
/dsh-finding-unknowns-skills-tonulls off
```

Команда действует только на текущий Agent. При выключенном автоподборе Skill остаётся доступен по прямому вызову `/finding-unknowns-skills`.

## Обновление

Обновите пакет в профиле `web`:

```sh
dsh plugin --profile web update dsh-finding-unknowns-skills-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор навыков для текущего Agent:

```text
/dsh-finding-unknowns-skills-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

Удалите пакет из профиля `web`:

```sh
dsh plugin --profile web remove dsh-finding-unknowns-skills-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- Индексы: [русский](.docs/ru/README.md), [English](.docs/en/README.md), [简体中文](.docs/zh-CN/README.md).
- [Источник](https://github.com/Neeeophytee/finding-unknowns-skills), [уведомления и лицензии](packages/dsh-finding-unknowns-skills-tonulls-ru/LICENSES.md).

## Благодарности и лицензия

Спасибо авторам [Finding Unknowns Skills](https://github.com/Neeeophytee/finding-unknowns-skills) за исходные навыки и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходная лицензия MIT и уведомления включены в пакет.

🛠️ Модифицировано с помощью Codex
