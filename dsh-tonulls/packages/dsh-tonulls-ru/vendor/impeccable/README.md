# dsh-impeccable-tonulls-ru

Русский вариант DSH-плагина Impeccable. Описания и сообщения команды локализованы; содержимое навыка остаётся на языке upstream.

## Жизненный цикл

В примере используется профиль `web`; замените его на имя своего профиля.

**Установить:**

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-Impeccable-tonulls/packages/dsh-impeccable-tonulls-ru'
```

**Запустить или перезапустить профиль** после установки/обновления:

```sh
dsh web
```

Если сессия не подхватила изменения, нажмите `Ctrl+C` в терминале и запустите `dsh web` снова.

**Проверить:** выполните `dsh --version` и `dsh plugin --profile web list`.

**Использовать:** в DSH выполните `/dsh-impeccable on`, затем вызовите `/impeccable` или опишите задачу дизайна. Отдельного процесса у Skill нет; он работает в текущем Agent. `/dsh-impeccable off` отключает доступность навыка, не останавливая DSH и не удаляя пакет.

**Обновить установленный пакет:**

```sh
dsh plugin --profile web update dsh-impeccable-tonulls-ru
```

После обновления перезапустите профиль DSH.

**Остановить хост:** нажмите `Ctrl+C` в терминале, где работает `dsh web`. Это не удаляет пакет.

**Удалить из профиля:**

```sh
dsh plugin --profile web remove dsh-impeccable-tonulls-ru
```

Удаление меняет зависимости профиля, но не удаляет файлы checkout. Полное руководство — в [основном README](../../README.md).

🛠️ Модифицировано с помощью Codex
