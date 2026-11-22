# DeepSeek Harness на Windows через WSL 2

DSH CLI, Node.js и профиль `web` работают внутри Ubuntu на этом компьютере. VS Code и браузер запускаются в Windows. Для отдельного сервера используйте [гайд Windows + Ubuntu VPS](../.VPS+Windows/README.md).

## Установка WSL и зависимостей

В PowerShell с правами администратора установите Ubuntu. Если она уже установлена в WSL 2, переходите к запуску.

```powershell
wsl --install -d Ubuntu
```

Перезагрузите Windows, если система попросит. Откройте Ubuntu и создайте пользователя при первом запуске. Команда `wsl --list --verbose` в PowerShell показывает точное имя дистрибутива и версию WSL. [Установка WSL](https://learn.microsoft.com/ru-ru/windows/wsl/install)

Откройте терминал **Ubuntu** и установите [Node.js LTS и Git по инструкции для Linux](../linux/README.md#установка-зависимостей). Дальнейшие команды Bash выполняйте внутри Ubuntu. Для глобальных npm-пакетов используется `sudo`, а DSH запускается от обычного пользователя Ubuntu.

## Установка DeepSeek Harness

Перед установкой сравните `node --version` с требованиями текущих пакетов:

```bash
node --version
npm view pnpm@latest engines.node
npm view @deepseek-ai/dsh@latest version engines.node
```

Если версия Node.js соответствует требованиям, выполните:

```bash
sudo npm install --global pnpm@latest @deepseek-ai/dsh@latest
```

`latest` означает текущий тег npm. Разрешённая им версия DSH может быть предварительным релизом. [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## Запуск и проверка

```bash
command -v node npm pnpm git dsh
dsh --version
dsh plugin --profile web list
dsh web --host 127.0.0.1 --no-open
```

Откройте стартовый URL `http://127.0.0.1:…` из терминала Ubuntu в браузере Windows. WSL 2 перенаправляет локальное подключение. [Сеть WSL](https://learn.microsoft.com/ru-ru/windows/wsl/networking) Стартовый URL может содержать одноразовые данные входа. Используйте его только в своём браузере.

## Панель DSH в VS Code

1. Установите [VS Code для Windows](https://code.visualstudio.com/Download) и расширение **WSL** от Microsoft.
2. Откройте папку проекта в окне **WSL: Ubuntu**. Из терминала Ubuntu можно выполнить `code .` в каталоге проекта. [VS Code в WSL](https://code.visualstudio.com/docs/remote/wsl)
3. Скачайте `.vsix` из раздела **Assets** [последнего релиза DSH for VS Code](https://github.com/tonulls/dsh-vscode/releases/latest) и установите через **Extensions: Install from VSIX...**. Убедитесь, что расширение установлено в **WSL: Ubuntu**.
4. Включите `dsh.remote.enabled` в настройках удалённого окна, выполните **Developer: Reload Window** и нажмите значок DSH. Перед запуском из панели остановите ручной сервер через `Ctrl+C`. [Руководство расширения](https://github.com/tonulls/dsh-vscode/blob/tonulls/docs/user-guide.ru.md)

## Codex Connect

Если нужен провайдер `openai-codex`, узнайте версию Harness через `dsh --version` и текущий выпуск плагина через `npm view dsh-codex-connect@latest version`. В [матрице проверенных пар](https://github.com/franksong2702/dsh-codex-connect/blob/main/verified-compatibility.json) найдите самый свежий опубликованный выпуск для вашей версии DSH. Введите его точный номер по запросу. Если такой пары пока нет, пропустите установку.

```bash
printf 'Совместимая версия Codex Connect: '
read -r codex_connect_version
if [ -n "$codex_connect_version" ] &&
   npm view "dsh-codex-connect@$codex_connect_version" version; then
  dsh plugin --profile web add "dsh-codex-connect@$codex_connect_version"
fi
```

Перезапустите DSH и откройте настройки Codex Connect в интерфейсе. Авторизуйтесь через ChatGPT и выберите провайдер `openai-codex`. Проверить установку можно командами `dsh plugin --profile web list` и `dsh --profile web --dump-config`. В конфигурации ожидается запись `llm-openai-codex`. [Руководство Codex Connect](https://github.com/franksong2702/dsh-codex-connect/blob/main/INSTALL.md)

## Установка набора навыков dsh-tonulls

```bash
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-tonulls/packages/dsh-tonulls-ru'
```

Перезапустите DSH. Используйте `/dsh-tonulls on` или `/dsh-tonulls off` для включения или выключения автоподбора в текущем Agent. [Документация набора](../../../../../dsh-tonulls/README.md)

## Обновление

1. Обновите Node.js LTS тем же способом, которым он установлен. При использовании Codex Connect проверьте требования Node.js и совместимость плагина с целевой версией DSH до обновления.
2. Повторите `sudo npm install --global pnpm@latest @deepseek-ai/dsh@latest`. Затем проверьте `dsh --version`.
3. Для Codex Connect повторите выбор опубликованной версии по матрице. Для dsh-tonulls повторите команду установки из GitHub.
4. Для панели скачайте свежий VSIX и повторите установку в нужном окне VS Code.

## Остановка и удаление

Остановите ручной запуск через `Ctrl+C` в его терминале. Для запуска из панели используйте `DSH: Stop Service` в палитре команд VS Code.

Если нужно удалить сохранённую авторизацию ChatGPT, сначала выйдите из аккаунта в настройках Codex Connect. Удаляйте только нужные пакеты:

```bash
dsh plugin --profile web remove dsh-codex-connect
dsh plugin --profile web remove dsh-tonulls-ru
sudo npm uninstall --global @deepseek-ai/dsh
```

Панель удаляется в окне **WSL: Ubuntu** через **Extensions → DSH for VS Code → Uninstall**. Вручную установленный CLI и профиль управляются отдельно. pnpm можно удалить командой `sudo npm uninstall --global pnpm`, если он больше не нужен другим проектам.
