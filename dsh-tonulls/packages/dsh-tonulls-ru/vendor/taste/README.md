# dsh-taste-skill-tonulls-ru

Русский вариант DSH-плагина Taste Skill. Описание навыка и ответы команды локализованы; upstream-инструкция навыка на английском.

## Жизненный цикл

В примере используется профиль `web`; замените его на имя своего профиля.

**Установить:**

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-taste-skill-tonulls/packages/dsh-taste-skill-tonulls-ru'
```

**Запустить или перезапустить профиль** после установки/обновления:

```sh
dsh web
```

Если текущая сессия не загрузила изменение, нажмите `Ctrl+C` в терминале и запустите `dsh web` снова.

**Проверить:** `dsh --version`, `dsh --profile web --dump-config` и `dsh plugin --profile web list`.

**Использовать:** в DSH выполните `/dsh-taste-skill-tonulls on`, затем вызовите `/design-taste-frontend` или задайте подходящий запрос. Skill не является отдельным процессом и выполняется текущим Agent. Команда `/dsh-taste-skill-tonulls off` отключает его только для текущего Agent.

**Обновить установленный пакет:**

```sh
dsh plugin --profile web update dsh-taste-skill-tonulls-ru
```

После обновления перезапустите профиль DSH.

**Остановить хост:** нажмите `Ctrl+C` в терминале, где работает `dsh web`. Это не отключает пакет от профиля.

**Удалить пакет из профиля:**

```sh
dsh plugin --profile web remove dsh-taste-skill-tonulls-ru
```

Отключение Skill, остановка DSH и удаление пакета — разные действия. Полное руководство — в [основном README](../../README.md).

🛠️ Модифицировано с помощью Codex
