# 3. DeepSeek Harness на Ubuntu VPS

DSH устанавливается **на Ubuntu VPS**, а не на Windows. Все команды в этой инструкции запускайте в обычном удалённом терминале VS Code, где в левом нижнем углу указано `SSH: dsh-vps`. Не запускайте `dsh plugin` через `sudo`: профиль DSH и OAuth-данные должны принадлежать обычному SSH-пользователю.

DSH устанавливается глобально на VPS по текущему npm-тегу `latest`. После установки проверьте фактическую версию командой `dsh --version`.

## Установка

1. Подготовьте [Node.js и pnpm на VPS](03-ubuntu-vps-dependencies.md).
2. Установите DSH CLI глобально, чтобы команда была видна как удалённому терминалу, так и VS Code Server:

   ```bash
   sudo npm install --global @deepseek-ai/dsh@latest
   ```

3. Проверьте, что команда появилась:

   ```bash
   command -v dsh
   dsh --version
   ```

4. Если VS Code был подключён к VPS во время установки, выполните **File → Close Remote Connection**, затем подключитесь снова. Так удалённый extension host перечитает `PATH`.
5. До запуска изучите [предупреждение о безопасности DSH](https://github.com/deepseek-ai/deepseek-harness/blob/master/SAFETY.md). DSH экспериментальный и может выполнять команды и изменять доступные ему файлы.

## Обновление

Перед обновлением выполните `npm view @deepseek-ai/dsh@latest version engines.node`. Если используете Codex Connect, сверьте целевую версию DSH с [матрицей совместимости](https://github.com/franksong2702/dsh-codex-connect/blob/main/verified-compatibility.json). Если совместимый выпуск плагина ещё не опубликован, отложите обновление связки.

```bash
sudo npm install --global @deepseek-ai/dsh@latest
```

После обновления переподключитесь к VPS и проверьте `dsh --version`. Затем проверьте, подходит ли установленная версия Codex Connect к обновлённому DSH.

## Запуск

### Рекомендуемый способ — из DSH for VS Code

1. Подключитесь из Windows к `SSH: dsh-vps`.
2. Убедитесь, что установили DSH for VS Code в удалённый SSH-host и включили `dsh.remote.enabled` по [инструкции расширения](02-dsh-vscode-remote.md).
3. Нажмите значок DSH (кит). Расширение запустит Harness на VPS и настроит туннель для встроенной панели.

Это предпочтительный путь для начинающего пользователя: DSH остаётся на VPS, а панель открывается в локальном окне VS Code по туннелю. Не открывайте порт `3080` во внешнем firewall VPS.

### Запуск вручную

В удалённом терминале VS Code выполните:

```bash
dsh web
```

Оставьте терминал открытым. При запуске через SSH DSH может только напечатать адрес сервера, так как локальный браузер находится на Windows. Если подключаетесь к вручную запущенной службе из расширения, следуйте его запросу одноразовой ссылки авторизации; не копируйте и не отправляйте эту ссылку кому-либо.

## Проверка

В удалённом терминале проверьте CLI и тип системы:

```bash
dsh --version
command -v dsh
whoami
hostname
```

Ожидается установленная версия DSH (она выводится командой `dsh --version`), путь к `dsh`, имя обычного SSH-пользователя и имя VPS. Затем нажмите значок DSH в подключённом окне VS Code и убедитесь, что встроенная панель загрузилась. Если расширение не подключилось, можно проверить Web UI через Remote SSH port forwarding; не делайте порт публичным.

## Отключение

- Если расширение запустило службу, остановите её командой **DSH: Stop Service** в VS Code.
- Если вы запустили `dsh web` вручную, вернитесь в этот терминал и нажмите `Ctrl+C`.
- Закрытие Remote SSH соединения завершает туннель/окно VS Code, но само по себе не выключает VPS.

Остановка DSH не удаляет профиль или его данные.

## Удаление

Если установлен Codex Connect, сначала удалите его из профиля по [отдельной инструкции](05-dsh-codex-connect-ubuntu.md). Затем удалите только DSH CLI:

```bash
sudo npm uninstall --global @deepseek-ai/dsh
```

Команда выполняется с `sudo`, так как CLI был установлен системно. Она **не** удаляет DSH-профиль, OAuth-данные Codex Connect, историю, настройки или файлы проекта в домашнем каталоге пользователя. Не стирайте их вручную, если не намерены отдельно удалить эти данные.

## Источники

- [DeepSeek Harness — официальный репозиторий и запуск Web UI по SSH](https://github.com/deepseek-ai/deepseek-harness)
- [Предупреждение о безопасности](https://github.com/deepseek-ai/deepseek-harness/blob/master/SAFETY.md)
- [npm-пакет DSH и актуальные версии](https://www.npmjs.com/package/@deepseek-ai/dsh)
- [Node.js, pnpm и Git на VPS](03-ubuntu-vps-dependencies.md)
- [Codex Connect: версии и совместимость](https://github.com/franksong2702/dsh-codex-connect/blob/main/INSTALL.md)
