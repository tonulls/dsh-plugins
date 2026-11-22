# 4. DSH for VS Code: Windows UI + Ubuntu VPS

В этой схеме VS Code работает локально на Windows, а DSH и рабочая папка — на Ubuntu VPS. Скачайте VSIX и установите расширение в VS Code, затем обязательно установите его копию в удалённый extension host `SSH: dsh-vps`. В Remote SSH процесс расширения работает на VPS, запускает там `dsh` и прокладывает tunnel; панель отображает Windows-клиент VS Code. Локальная копия может пригодиться для локальных окон, но не заменяет установку в SSH-host.

Перед началом выполните [подключение VS Code к VPS](01-vscode-windows.md), затем установите Node.js/`pnpm` и DSH CLI на VPS по инструкциям [зависимости](03-ubuntu-vps-dependencies.md) и [DeepSeek Harness](04-deepseek-harness-ubuntu.md).

## Установка

### 1. Установите VSIX локально в Windows

1. На Windows скачайте файл `.vsix` из раздела **Assets**. Перед установкой сверьте требования выпуска к DSH. [Последний выпуск DSH for VS Code](https://github.com/tonulls/dsh-vscode/releases/latest)
2. В локальном окне VS Code (не подключённом к VPS) нажмите `Ctrl+Shift+P` → **Extensions: Install from VSIX...** и выберите скачанный файл.
3. Откройте **Extensions** (`Ctrl+Shift+X`) и убедитесь, что DSH for VS Code установлен локально.

### 2. Установите расширение на VPS

1. Подключитесь через **Remote-SSH: Connect to Host...** к `dsh-vps`.
2. В удалённом окне откройте **Extensions**. Найдите DSH for VS Code в разделе локально установленных расширений.
3. Нажмите **Install in SSH: dsh-vps** (или кнопку установки в удалённый host, которую показывает VS Code для этого расширения) и дождитесь установки.
4. В заголовке окна/нижнем левом углу убедитесь, что подключены к **SSH: dsh-vps**. Для запуска `dsh` из Remote SSH нужна именно копия расширения в SSH-host; интерфейс панели отображает Windows-клиент VS Code.

VS Code автоматически устанавливает и обновляет VS Code Server на VPS. Отдельно скачивать серверную сборку VS Code на Ubuntu не нужно.

### 3. Разрешите удалённый запуск DSH

По умолчанию SSH Remote выключен в настройках DSH for VS Code. В подключённом окне:

1. Выполните `Ctrl+,` и в поиске настроек введите `dsh.remote.enabled`.
2. Включите **Dsh: Remote: Enabled** в настройках удалённого окна (`SSH: dsh-vps`). Если параметр показывается отдельно для User и Remote, выберите **Remote**.
3. Выполните **Developer: Reload Window** из палитры `Ctrl+Shift+P`.

Параметр называется `dsh.remote.enabled` и по умолчанию имеет значение `false`; в SSH Remote он разрешает запуск DSH на VPS и автоматическую прокладку tunnel.

## Обновление

1. В Windows скачайте VSIX из [последнего выпуска GitHub](https://github.com/tonulls/dsh-vscode/releases/latest).
2. В локальном VS Code обновите локальную копию через **Extensions: Install from VSIX...**.
3. Подключитесь к VPS и повторно установите/обновите локальную копию на удалённый host через кнопку **Install in SSH: dsh-vps** в панели расширений.
4. Проверьте release notes на совместимость. После обновления перезагрузите удалённое окно VS Code.

Не предполагайте, что ручная установка `.vsix` автоматически обновит две копии — Windows и SSH-host.

## Запуск

1. Подключитесь к VPS и откройте удалённую папку проекта.
2. Убедитесь, что параметр `dsh.remote.enabled` включён.
3. Нажмите значок DSH (кит) в боковой панели. Расширение запустит `dsh web` на VPS либо подключится к уже запущенной службе.
4. Оставьте окно VS Code подключённым, пока используете панель. В remote-сценарии VS Code прокладывает loopback tunnel; не открывайте порт `3080` в публичном firewall VPS.

## Проверка

1. В VS Code проверьте индикатор **SSH: dsh-vps**.
2. Встроенный терминал должен быть терминалом Ubuntu VPS. Выполните:

   ```bash
   command -v dsh
   dsh --version
   ```

3. Нажмите значок DSH и дождитесь Web UI внутри панели. В разделе **Ports** может отображаться автоматически перенаправленный порт DSH; доступ к нему должен быть только через локальный SSH tunnel.
4. Для логов откройте палитру и выполните **DSH: Show Logs**. Не публикуйте журнал без проверки — в нём могут быть URL авторизации или другие секреты.

Если панель сообщает, что команда `dsh` не найдена, проверьте её именно в удалённом терминале и убедитесь, что `/usr/local/bin` (или каталог `dsh`, показанный `command -v`) присутствует в `PATH` процесса VS Code Server. Полностью переподключитесь к SSH после установки DSH.

## Отключение

- **Остановить DSH:** в панели выполните **DSH: Stop Service**. При включённом удалённом режиме это останавливает службу, запущенную расширением на VPS.
- **Отключиться от VPS:** **File → Close Remote Connection**. Это закрывает удалённое окно/туннель, но не выключает VPS.
- **Временно отключить расширение:** на странице Extensions отдельно отключите DSH for VS Code локально и/или в `SSH: dsh-vps`. Для временного отключения удалённого режима можно выключить `dsh.remote.enabled` в настройках Remote и перезагрузить окно.

## Удаление

1. Подключитесь к `SSH: dsh-vps`.
2. Если больше не нужен Bridge, сначала выполните **DSH: Uninstall Bridge** в удалённом окне, пока расширение ещё установлено.
3. В панели Extensions удалите DSH for VS Code из **SSH: dsh-vps**.
4. Если расширение также установлено локально для обычных окон VS Code, переключитесь на окно Windows и удалите эту локальную копию отдельно.

Удаление VS Code/расширения не удаляет DSH CLI, профиль, Codex Connect или файлы проекта на VPS. Не удаляйте ничего из домашнего каталога VPS, если не хотите отдельно стереть данные.

## Источники

- [DSH for VS Code — русская подробная инструкция](https://github.com/tonulls/dsh-vscode/blob/tonulls/docs/user-guide.ru.md)
- [Исходный код удалённого режима и SSH tunnel](https://github.com/tonulls/dsh-vscode/blob/tonulls/src/remote.ts)
- [Настройка `dsh.remote.enabled`](https://github.com/tonulls/dsh-vscode/blob/tonulls/src/config.ts)
- [Официальный VS Code Remote - SSH](https://code.visualstudio.com/docs/remote/ssh)
