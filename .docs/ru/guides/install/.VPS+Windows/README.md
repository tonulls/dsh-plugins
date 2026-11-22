# Связка Windows + Ubuntu VPS для DSH

**Архитектура:** VS Code запущен на вашем компьютере с Windows и подключается по SSH к VPS с Ubuntu; VS Code Server устанавливается автоматически на VPS. DSH, его плагины, Node.js и рабочие файлы находятся на VPS. VMware в этой схеме не используется.

```text
Windows (ваш компьютер)                   Ubuntu VPS
┌──────────────────────────────┐ SSH     ┌────────────────────────────┐
│ Visual Studio Code           │────────▶│ VS Code Server (авто)      │
│ Remote - SSH                 │         │ DSH for VS Code (remote)   │
│ Браузер для OAuth            │         │ DeepSeek Harness + plugins │
│ Приватный SSH-ключ на Windows│         │ файлы проекта              │
└──────────────────────────────┘         │ Node.js, pnpm и Git       │
                                         └────────────────────────────┘
```

## Что должно быть готово до начала

- На VPS установлена **поддерживаемая Ubuntu Server LTS**, VPS доступен по публичному IP-адресу/домену и у вас есть обычная SSH-учётная запись с `sudo`. Для Remote - SSH VS Code рекомендует минимум 1 ГБ RAM, лучше от 2 ГБ и двух CPU; для работы DSH может потребоваться больше в зависимости от задач.
- В сетевом экране провайдера разрешено подключение SSH (обычно TCP `22`) с вашего адреса. Не открывайте публично порт DSH `3080`.
- На Windows есть доступ в Интернет. Все действия разделены по месту выполнения: пометка **Windows** означает локальный компьютер, **VPS/SSH** — терминал удалённого Ubuntu.
- Если VPS новый и SSH-доступ ещё не настроен, сначала добавьте свой **публичный** SSH-ключ в панели провайдера или выполните его установку способом, предложенным провайдером. Приватный ключ остаётся только на Windows.

Это руководство не описывает установку Windows и создание VPS у облачного провайдера: предполагается, что VPS с Ubuntu уже создан.

## Порядок установки

1. [Visual Studio Code и подключение Remote - SSH на Windows](01-vscode-windows.md)
2. [Node.js, npm, pnpm, Git и SSH Server на Ubuntu VPS](03-ubuntu-vps-dependencies.md)
3. [DeepSeek Harness на Ubuntu VPS](04-deepseek-harness-ubuntu.md)
4. [Расширение DSH for VS Code в Remote SSH](02-dsh-vscode-remote.md)
5. [Codex Connect в профиле DSH на Ubuntu VPS](05-dsh-codex-connect-ubuntu.md)

Каждый проектный гайд содержит разделы **установка → обновление → запуск → проверка → отключение → удаление**. Выполняйте команды с пометкой **VPS/SSH** в терминале VS Code, подключённом к VPS, или в обычной SSH-сессии от имени вашего пользователя — не от `root`.

## Как выбираются версии

- VS Code и Remote - SSH устанавливаются из официальных каналов. VSIX берётся из [последнего релиза DSH for VS Code](https://github.com/tonulls/dsh-vscode/releases/latest).
- На VPS используется актуальная ветка Node.js LTS. pnpm и DeepSeek Harness устанавливаются глобально по npm-тегу `latest`.
- Codex Connect устанавливается в профиль DSH. Выбирайте самый свежий опубликованный выпуск, совместимый с вашей версией Harness. [Матрица совместимости](https://github.com/franksong2702/dsh-codex-connect/blob/main/verified-compatibility.json)

## Связь, порты и безопасность

- VS Code Remote - SSH передаёт файлы и команды по SSH. DSH работает на VPS и слушает локальный loopback; расширение организует туннель до встроенной панели. Не создавайте для DSH отдельное публичное правило брандмауэра на порт `3080`.
- При входе Codex Connect OAuth-данные сохраняются **на VPS**. Выполняйте вход только на собственном доверенном сервере; не показывайте никому URL авторизации, коды и журналы с секретами.
- DSH может выполнять команды и изменять файлы, доступные SSH-пользователю. Используйте обычную учётную запись с минимальными правами, проверяйте подтверждения действий и храните резервные копии.

## Источники

- [VS Code Remote Development over SSH](https://code.visualstudio.com/docs/remote/ssh)
- [DSH for VS Code и настройка SSH Remote](https://github.com/tonulls/dsh-vscode/blob/tonulls/docs/user-guide.ru.md)
- [DeepSeek Harness: безопасность и запуск Web UI через SSH](https://github.com/deepseek-ai/deepseek-harness)
- [Codex Connect: совместимость, установка и OAuth](https://github.com/franksong2702/dsh-codex-connect/blob/main/INSTALL.md)
