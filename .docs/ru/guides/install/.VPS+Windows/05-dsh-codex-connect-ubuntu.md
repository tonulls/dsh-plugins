# 5. Codex Connect в профиле DSH на Ubuntu VPS

Codex Connect устанавливается в профиль DeepSeek Harness **на VPS**. Он добавляет модель-провайдера `openai-codex`, используя OAuth учётной записи ChatGPT. Подписка ChatGPT не становится OpenAI Platform API key; установка плагина сама по себе не меняет модель DSH по умолчанию.

Установите самый свежий опубликованный выпуск Codex Connect, подтверждённый для вашей версии DSH. npm-тег `latest` может указывать на предварительный релиз. [Матрица проверенных пар](https://github.com/franksong2702/dsh-codex-connect/blob/main/verified-compatibility.json)

## Установка

Выполняйте команды на VPS от имени пользователя DSH, без `sudo`. Если ваш профиль называется иначе, замените `web` в командах.

1. Узнайте установленную версию DSH и актуальный выпуск Codex Connect.

   ```bash
   dsh --version
   npm view dsh-codex-connect@latest version engines.node
   ```

2. Найдите версию DSH в `verifiedDshVersions`. Если выпуск из npm `latest` присутствует в матрице для вашей версии DSH, введите его номер в запросе ниже. Иначе выберите самый свежий подходящий номер из матрицы. Если совместимого опубликованного выпуска ещё нет, пропустите установку до его выхода.

   ```bash
   read -r -p 'Совместимая версия Codex Connect: ' codex_connect_version
   if [ -n "$codex_connect_version" ] &&
      npm view "dsh-codex-connect@$codex_connect_version" version; then
     dsh plugin --profile web add "dsh-codex-connect@$codex_connect_version"
   fi
   ```

3. Перезапустите DSH, если он запущен, и проверьте пакет в профиле.

   ```bash
   dsh plugin --profile web list
   ```

## Обновление

Повторите шаги установки с актуальной матрицей. Если обновляете и Harness, подбирайте плагин для целевой версии DSH. После обновления перезапустите DSH и выполните проверки ниже.

## Запуск и вход в ChatGPT

1. Убедитесь, что плагин установлен, и при необходимости включите DSH через расширение в удалённом окне VS Code.
2. Чтобы начать вход на headless VPS, используйте device-code вариант из терминала:

   ```bash
   dsh plugin --profile web exec dsh-codex-connect login --device-code
   ```

3. Команда напечатает официальный URL авторизации и одноразовый код. Откройте этот URL в браузере **на Windows**, введите код и завершите вход в ChatGPT.
4. Не отправляйте код, ссылку или скриншот другому человеку и не сохраняйте их в Git или логах. OAuth-данные сохраняются на VPS в профиле DSH; не используйте этот способ на чужом или недоверенном сервере.
5. Откройте панель DSH в Remote SSH окне и выберите `openai-codex` в селекторе модели. Доступные модели и возможность входа зависят от аккаунта и правил OpenAI.

Если текущая версия сервиса не предлагает device-code авторизацию для вашего аккаунта, не переносите приватные callback/credential-файлы вручную. Следуйте только актуальной официальной инструкции Codex Connect и обеспечьте безопасный способ завершить OAuth на VPS.

## Проверка

В удалённом терминале выполните:

```bash
dsh plugin --profile web exec dsh-codex-connect doctor --json
dsh plugin --profile web exec dsh-codex-connect status
```

`doctor` проверяет локальную конфигурацию/совместимость, а `status` сообщает, выполнен ли вход. Эти команды не гарантируют доступность каждой модели. Затем в панели DSH выберите `openai-codex` и выполните небольшой тестовый запрос.

## Отключение

Чтобы перестать пользоваться Codex, выберите в DSH другой провайдер или модель. Плагин не меняет default model при установке.

Чтобы **выйти из ChatGPT и удалить сохранённые credentials Codex Connect** на VPS, выполните:

```bash
dsh plugin --profile web exec dsh-codex-connect logout
```

Это удаляет учётные данные Codex Connect, а не только отключает модель. Не выполняйте logout, если хотите оставить вход активным. Команда не должна менять данные отдельного OpenAI Codex CLI.

## Удаление

Чтобы удалить только плагин из профиля DSH:

```bash
dsh plugin --profile web remove dsh-codex-connect
```

Перезапустите DSH после удаления. Удаление пакета и logout — разные действия: OAuth-файл на VPS может сохраниться после удаления пакета. Если его тоже нужно удалить, отдельно выполните `logout`, описанный выше. Не открывайте и не удаляйте вручную файлы авторизации.

Удаление Codex Connect не удаляет DSH, другие плагины профиля или файлы проекта.

## Источники

- [Codex Connect — официальный README](https://github.com/franksong2702/dsh-codex-connect)
- [Установка, обновления и матрица совместимости](https://github.com/franksong2702/dsh-codex-connect/blob/main/INSTALL.md)
- [Команды CLI Codex Connect](https://github.com/franksong2702/dsh-codex-connect/blob/main/src/bin.ts)
- [Опубликованные версии Codex Connect в npm](https://www.npmjs.com/package/dsh-codex-connect?activeTab=versions)
- [DSH for VS Code: включение удалённого режима](02-dsh-vscode-remote.md)
