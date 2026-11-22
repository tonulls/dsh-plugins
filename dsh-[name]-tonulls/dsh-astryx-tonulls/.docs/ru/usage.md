# Использование skill Astryx

После активации bundle DSH skill registry должен находить `astryx`. Выберите его в интерфейсе команд/каталога навыков либо попросите текущего Agent применить Astryx к React-проекту. Skill проверяет проектные инструкции и версии и направляет к справке уже установленного CLI.

Примеры CLI-запросов (только если CLI уже присутствует в целевом проекте):

```sh
pnpm exec astryx --help
pnpm exec astryx manifest --json
pnpm exec astryx search <query> --json
pnpm exec astryx component <exact-selector> --json
pnpm exec astryx hook <name> --json
pnpm exec astryx docs <topic> --json
pnpm exec astryx docs tokens --json
```

Сначала проверьте доступные команды и флаги через установленную версию `--help`/`manifest`. Примеры не являются DSH-командами и выполняются только инструментами текущего Agent в целевом проекте.

Skill не запускает CLI, не устанавливает пакеты и не генерирует код. Не используйте unscoped `npx astryx`; для установки официального `@astryxdesign/cli` требуется отдельный явный запрос и разрешение пользователя на загрузку/выполнение пакета.
