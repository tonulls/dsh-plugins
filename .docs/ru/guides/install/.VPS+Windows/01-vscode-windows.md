# 1. Visual Studio Code и SSH-подключение с Windows

Visual Studio Code запускается **на вашем компьютере с Windows**. К VPS подключается Microsoft Remote - SSH; папки проекта, расширение DSH и сам Harness будут находиться на Ubuntu VPS.

## Установка

### 1. Установите VS Code

1. В Windows откройте официальный сайт [Visual Studio Code — загрузка](https://code.visualstudio.com/Download).
2. Скачайте актуальный **Windows User Installer** для архитектуры вашего компьютера (x64 или Arm64) и запустите его.
3. Оставьте предлагаемые параметры установки. Можно включить добавление VS Code в `PATH` и пункты «Open with Code».
4. Запустите **Visual Studio Code** из меню «Пуск».

### 2. Проверьте OpenSSH Client в Windows

Откройте PowerShell на Windows и выполните:

```powershell
ssh -V
```

Если появилась версия OpenSSH, клиент уже установлен. Если PowerShell говорит, что `ssh` не найден, откройте **Параметры Windows → Приложения → Дополнительные компоненты → Просмотреть компоненты**, найдите **OpenSSH Client** и нажмите **Установить**. После установки откройте новое окно PowerShell и повторите проверку.

### 3. Установите расширение Microsoft Remote - SSH

1. В VS Code нажмите `Ctrl+Shift+X` (панель **Extensions**).
2. Найдите **Remote - SSH** от **Microsoft** и нажмите **Install**.
3. Это расширение устанавливается в Windows. Оно подключит VS Code к SSH-серверу на VPS и автоматически установит там VS Code Server.

### 4. Настройте SSH-ключ

Если у вас ещё нет SSH-ключа для этого VPS, в PowerShell Windows создайте отдельный ключ:

```powershell
ssh-keygen -t ed25519 -C "vscode-vps"
```

На запрос пути можно нажать `Enter`, чтобы использовать стандартный `%USERPROFILE%\.ssh\id_ed25519`. Защитите ключ парольной фразой, если можете. **Файл `id_ed25519` — приватный: не загружайте его на VPS и никому не отправляйте.** На сервер передаётся только файл `id_ed25519.pub`.

Добавьте публичный ключ `id_ed25519.pub` в панель вашего VPS-провайдера для SSH-пользователя. Если VPS уже создан и провайдер не даёт добавить ключ в панели, а вход по паролю ещё разрешён, добавьте публичную часть в `authorized_keys` через PowerShell (замените имя пользователя и адрес):

```powershell
Get-Content "$env:USERPROFILE\.ssh\id_ed25519.pub" | ssh YOUR_LINUX_USER@VPS_IP_OR_DOMAIN "umask 077; mkdir -p ~/.ssh; cat >> ~/.ssh/authorized_keys"
```

Введите пароль Linux-пользователя при запросе. Команда добавляет только публичный ключ; она не передаёт приватный файл `id_ed25519`. После этого проверьте вход по ключу во второй SSH-сессии. Не отключайте парольный вход, пока проверка не прошла.

### 5. Добавьте имя VPS в SSH config

1. На Windows откройте папку `%USERPROFILE%\.ssh` через Проводник.
2. Создайте файл `config` без расширения, если его ещё нет. Если создаёте его через Блокнот, при сохранении выберите **Тип файла: Все файлы** и имя `config` (не `config.txt`). Добавьте запись, заменив заполнители:

   ```sshconfig
   Host dsh-vps
       HostName VPS_IP_OR_DOMAIN
       User YOUR_LINUX_USER
       IdentityFile ~/.ssh/id_ed25519
   ```

   `VPS_IP_OR_DOMAIN` — адрес VPS, `YOUR_LINUX_USER` — имя обычного Linux-пользователя, выданное или созданное у провайдера. Не вставляйте сюда пароль.
3. Сохраните файл. При первом подключении проверьте отпечаток SSH-сервера в панели VPS-провайдера, прежде чем соглашаться с новым host key.

## Обновление

- Обновляйте VS Code через **Help → Check for Updates** или скачайте новый установщик с официального сайта и запустите его поверх текущей установки.
- Обновляйте **Remote - SSH** на панели **Extensions** Windows так же, как другие расширения. VS Code Server на VPS обычно обновляется автоматически при подключении. Не удаляйте его вручную, если не устраняете конкретную проблему.
- Не меняйте OpenSSH ключ и SSH config без причины; если ключ скомпрометирован, удалите его публичную часть из аккаунта VPS и создайте новую пару.

## Запуск

### Сначала проверьте SSH из PowerShell

В новом PowerShell Windows выполните:

```powershell
ssh dsh-vps
```

При успешном соединении вы увидите приглашение командной строки Ubuntu. Выйдите командой `exit`.

Если соединение не устанавливается, проверьте IP/домен, имя пользователя, SSH-ключ и доступность TCP-порта `22` в панели VPS-провайдера. Не открывайте SSH всему Интернету, если провайдер позволяет ограничить входящий адрес вашим IP.

### Подключитесь из VS Code

1. Запустите VS Code на Windows.
2. Нажмите `Ctrl+Shift+P`, выполните **Remote-SSH: Connect to Host...** и выберите `dsh-vps`.
3. При первом подключении подтвердите правильный Linux-платформенный сервер и дождитесь, пока VS Code установит VS Code Server.
4. Выберите **File → Open Folder...** и откройте каталог на VPS, с которым будете работать.
5. Если появится **Workspace Trust**, доверяйте только знакомому каталогу на собственном VPS.

В левом нижнем углу VS Code должен отображаться удалённый контекст, например **SSH: dsh-vps**. Если там нет `SSH: ...`, вы всё ещё работаете локально на Windows.

## Проверка

В окне VS Code, подключённом по SSH, откройте **Terminal → New Terminal**. Этот терминал должен быть **на VPS**, а не в Windows. Выполните:

```bash
hostname
uname -a
```

Имя хоста должно соответствовать VPS; вывод `uname` должен показать Linux. Дополнительно проверьте нижний левый индикатор: **SSH: dsh-vps**.

## Отключение

Чтобы вернуться к локальному VS Code, выполните **File → Close Remote Connection**. Это завершает SSH-сеанс VS Code, но не выключает VPS. Если на VPS запущен DSH, остановите его отдельно по инструкции [DeepSeek Harness](04-deepseek-harness-ubuntu.md).

Чтобы временно выключить Remote - SSH, откройте **Extensions** в окне Windows, найдите расширение Microsoft и выберите **Disable**. Это отключит SSH-подключения из VS Code.

## Удаление

1. Сохраните работу и закройте удалённое соединение через **File → Close Remote Connection**.
2. В **Extensions** Windows найдите **Remote - SSH** от Microsoft и выберите **Uninstall**.
3. При необходимости удалите VS Code через **Параметры Windows → Приложения → Установленные приложения**.
4. Если вы больше не будете подключаться к этому VPS, удалите соответствующий **публичный** ключ из `~/.ssh/authorized_keys` на VPS или из панели провайдера. Не удаляйте приватный ключ Windows, если он нужен для других серверов.

Удаление Remote - SSH не удаляет VPS, его файлы, VS Code Server, DSH или установленные там плагины.

## Источники

- [Установка VS Code в Windows](https://code.visualstudio.com/docs/setup/windows)
- [Remote Development using SSH — официальное руководство](https://code.visualstudio.com/docs/remote/ssh)
- [Remote SSH: пошаговый tutorial](https://code.visualstudio.com/docs/remote/ssh-tutorial)
- [Настройка ключевой аутентификации](https://code.visualstudio.com/docs/remote/troubleshooting#configuring-key-based-authentication)
