# DSH Humanizer

**Русский** · [English](.docs/en/README.project.md) · [简体中文](.docs/zh-CN/README.project.md)

## Описание

Bundle адаптирует [Humanizer](https://github.com/blader/humanizer) в DSH Skill для редактирования текста. Он помогает убрать шаблонные формулировки, сохраняя исходный смысл и подтверждённые факты.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-humanizer-tonulls/packages/dsh-humanizer-tonulls-ru'
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

Автоподбор навыка выключен по умолчанию отдельно в каждом Agent. Включите или выключите его командой:

```text
/dsh-humanizer-tonulls on
/dsh-humanizer-tonulls off
```

Команда действует только на текущий Agent. При выключенном автоподборе навык остаётся доступен по прямому вызову `/humanizer`.

## Обновление

Обновите пакет в профиле `web`:

```sh
dsh plugin --profile web update dsh-humanizer-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор навыка для текущего Agent:

```text
/dsh-humanizer-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

Удалите пакет из профиля `web`:

```sh
dsh plugin --profile web remove dsh-humanizer-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- Индексы документации: [RU](.docs/ru/README.md) · [EN](.docs/en/README.md) · [ZH](.docs/zh-CN/README.md)
- [Дополнительная документация](.docs/README.md)
- [Лицензионные сведения](packages/dsh-humanizer-tonulls-ru/LICENSES.md) · [Источник Humanizer](https://github.com/blader/humanizer)

## Благодарности и лицензия

Спасибо авторам [Humanizer](https://github.com/blader/humanizer) за исходный навык и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходная лицензия MIT и сведения об авторстве включены в пакет.

🛠️ Модифицировано с помощью Codex
