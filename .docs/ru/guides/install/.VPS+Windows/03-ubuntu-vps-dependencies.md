# 2. Node.js, npm, pnpm, Git и SSH на Ubuntu VPS

**Где выполнять команды:** в интегрированном терминале VS Code после подключения **Remote - SSH** к Ubuntu VPS. Убедитесь, что в левом нижнем углу окна написано `SSH: dsh-vps`. Эти зависимости устанавливаются на сервер, не на Windows.

Инструкция рассчитана на поддерживаемую Ubuntu Server LTS и обычного пользователя с `sudo`. Node.js нужен DSH и Codex Connect; `pnpm` нужен командам `dsh plugin ...`; Git используется для работы с исходниками и Git-зависимостями. VS Code Server устанавливает Remote - SSH автоматически.

## Установка

### 1. Подготовьте пакеты Ubuntu и SSH Server

В удалённом терминале выполните:

```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg git openssh-server
sudo systemctl enable --now ssh
```

Пакет `openssh-server` нужен для новых подключений Windows → VPS. Не останавливайте его, пока работаете через Remote SSH. В панели VPS-провайдера разрешите входящий SSH (обычно TCP `22`) только с нужных IP-адресов, если провайдер поддерживает это ограничение. Если на Ubuntu включён UFW, проверьте `sudo ufw status` и разрешите профиль SSH до изменения правил (`sudo ufw allow OpenSSH`), чтобы не потерять доступ. Не открывайте порт `3080` для DSH.

### 2. Установите Node.js LTS

В Ubuntu-репозитории может быть слишком старая версия Node.js, поэтому используйте официальный для Ubuntu/Debian репозиторий NodeSource.

1. Скачайте официальный setup-скрипт и запустите его:

   ```bash
   node_setup=$(mktemp)
   curl -fsSL https://deb.nodesource.com/setup_lts.x -o "$node_setup" && sudo bash "$node_setup"
   rm -f "$node_setup"
   ```

2. Установите Node.js и npm:

   ```bash
   sudo apt install -y nodejs
   ```

3. Проверьте версии:

   ```bash
   node --version
   npm --version
   ```

Сверьте версию Node.js с текущими требованиями пакетов:

```bash
npm view @deepseek-ai/dsh@latest engines.node
npm view dsh-codex-connect@latest engines.node
npm view pnpm@latest engines.node
```

### 3. Установите pnpm глобально

```bash
sudo npm install --global pnpm@latest
```

Установка сделана глобально, чтобы команда `pnpm` была видна VS Code Server и всем SSH-сеансам пользователя. `sudo` здесь нужен для системной установки pnpm; не используйте `sudo` с командами `dsh plugin`, иначе профиль будет создан/изменён от имени `root`.

## Обновление

В удалённом терминале:

```bash
sudo apt update
sudo apt install --only-upgrade nodejs git openssh-server
sudo npm install --global pnpm@latest
```

APT обновляет Node.js в пределах подключённой ветки. Для перехода на новый LTS сверьте требования используемых версий DSH и Codex Connect, затем повторите шаг с `setup_lts.x`. После обновления переподключитесь к VPS, чтобы Remote extension host получил актуальное окружение.

## Запуск

- SSH Server запускается как системная служба `ssh` при старте Ubuntu. Его не нужно запускать вручную каждый раз.
- Node.js, npm, pnpm и Git — командные инструменты, а не интерактивные приложения; их вызывает DSH или команда в терминале.
- В VS Code откройте **Terminal → New Terminal** в окне `SSH: dsh-vps`. Убедитесь, что приглашение командной строки относится к Linux VPS.

## Проверка

В удалённом терминале выполните:

```bash
whoami
hostname
cat /etc/os-release
node --version
npm --version
pnpm --version
git --version
command -v node npm pnpm git
systemctl is-active ssh
```

Убедитесь, что `whoami` показывает вашего обычного Linux-пользователя (не `root`), система — Ubuntu, Node соответствует требованиям пакетов, все команды находятся в `PATH`, а SSH Server отвечает `active`.

Если `pnpm` или `node` не найден из VS Code, но находится в обычной SSH-сессии, полностью закройте **Remote Window** и подключитесь снова. Затем проверьте `command -v pnpm` и `echo "$PATH"` именно в удалённом терминале.

## Отключение

Node.js, npm, pnpm и Git не являются постоянно запущенными сервисами. Сам SSH Server должен оставаться включённым, пока вы подключаетесь из Windows.

Не выполняйте `sudo systemctl stop ssh` для обычного отключения VS Code: это закроет текущую возможность подключаться к VPS по SSH и потребует доступа через консоль провайдера для восстановления. Чтобы завершить только текущую работу, используйте **File → Close Remote Connection** в VS Code.

## Удаление

Обычно эти зависимости нужны DSH и другим проектам на сервере; удаляйте их только если точно знаете последствия.

1. Если DSH и Codex Connect больше не нужны, сначала удалите их по отдельным инструкциям [DeepSeek Harness](04-deepseek-harness-ubuntu.md) и [Codex Connect](05-dsh-codex-connect-ubuntu.md).
2. Удалите pnpm:

   ```bash
   sudo npm uninstall --global pnpm
   ```

3. При необходимости удалите Node.js, Git или SSH Server через `apt`. **Удаление `openssh-server`/остановка `ssh` оборвёт Remote SSH и может лишить вас удалённого доступа**; делайте это только после подготовки альтернативного способа входа.
4. Для полного удаления именно NodeSource-установки следуйте актуальной [инструкции NodeSource](https://github.com/nodesource/distributions/blob/master/DEV_README.md#uninstall-nsolid-or-nodejs-ubuntu--debian-packages). Удаление Node.js само по себе не удаляет профиль и пользовательские данные DSH.

## Источники

- [Репозиторий NodeSource для Ubuntu и Debian](https://github.com/nodesource/distributions)
- [Setup-скрипт NodeSource для актуальной ветки LTS](https://github.com/nodesource/distributions/blob/master/scripts/deb/setup_lts.x)
- [Актуальные версии Node.js](https://nodejs.org/en/download)
- [Установка pnpm через npm](https://pnpm.io/installation#using-npm)
- [Установка OpenSSH Server в Ubuntu](https://ubuntu.com/server/docs/how-to/security/openssh-server/)
- [VS Code Remote SSH: требования Linux](https://code.visualstudio.com/docs/remote/linux)
