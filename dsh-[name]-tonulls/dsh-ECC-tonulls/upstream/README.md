# Upstream ECC pin и синхронизация

## Зафиксированный источник

`ecc.lock.json` указывает точный upstream commit и tree. Текущий inventory pin на 2026-10-27 — [`25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b`](https://github.com/affaan-m/ECC/commit/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b), tree `794b1fe2343e67aab32e751ded09abf1a4d06dd0`, дата commit `2026-10-26T04:03:57Z`, upstream package version `2.2.3`; GitHub API помечает подпись commit как проверенную. `releaseStatus: inventory-only-not-approved` означает, что это anchor для исследования, а не одобрение содержимого к публикации.

README этого commit сообщает 71 Agent, 311 Skills, 97 поддерживаемых command shims, а также rules, hooks, contexts, MCP config и другие материалы. Состав может меняться; для каждого следующего pin генератор сверяет реальные tree paths, а не полагается на эти числа.

## Синхронизация

```sh
npm run sync:ecc:check
npm run sync:ecc:snapshot
```

`check` сверяет commit/tree закреплённого pin через GitHub API и выводит count файлов выбранных категорий без записи; она не сравнивает pin с движущейся `main`. `snapshot` скачивает только префиксы и extensions из `sync-map.json`, проверяет каждый файл по Git blob SHA-1 и складывает snapshot в `upstream/snapshots/<commit>-<sync-map-sha-prefix>/`. Hash allowlist входит в ключ и manifest, поэтому изменение состава файлов создаёт новый каталог и сохраняет прежний snapshot для review. При повторной синхронизации того же pin содержимое сравнивается; расхождение не перезаписывает существующий snapshot.

Обе команды используют конкретный commit из lock и не следуют за `main`. Snapshot текущего pin содержит 741 allowlisted text/config/license files (4,728,020 bytes): 71 Agent, 311 Skill definitions в составе 438 Markdown-файлов под `skills/`, 97 Commands, 122 Rules, 3 Contexts, 7 hook-config files, 1 MCP config, 1 Workflow и LICENSE. Между прежним build-selected pin `b92f181b3b748d1abbc2afd94af6aa7d8c8fca29-e1f7d90e0ddb` и текущим по тому же allowlist нет добавленных или удалённых путей; изменились 27 blob (2 agents, 11 commands, 3 hook configs и 11 skill files). Не-keyed legacy каталог `upstream/snapshots/b92f181b3b748d1abbc2afd94af6aa7d8c8fca29/` не является build input и не содержит LICENSE; он сохранён. Snapshot — исходный материал для review, а не runtime dependency. Синхронизация не выполняет скачанные файлы, install hooks или scripts. Исполняемые scripts и platform-specific adapter trees намеренно исключены из allowlist; обработка автоматизации требует отдельного safety review.

`npm run build:agents`, `npm run build:skills` и `npm run build:commands` создают DSH candidate assets из pinned snapshot и сверяют source blobs с manifest. Правила отбора Skills/Commands хранятся в `skill-decisions.json` и `command-decisions.json`; генераторы не запускают upstream content. Skills policy сейчас активирует 216/311 definitions, 95 withheld после risk, resource и runtime triage; semantic review всех активных instructions не завершён. Commands provider активирует только три reviewed entries, остальные 94 остаются deny-by-default.

## Обновление pin

Кандидатный update начинается с получения commit/tree metadata и diff относительно текущего pin. Maintainer меняет `ecc.lock.json` только после проверки нового SHA, лицензии, upstream diff и состава включённых категорий. Затем `sync:ecc:snapshot` создаёт кандидатный snapshot; изменённые инструкции, конфиги и команды проходят review и тесты перед ручной адаптацией в package assets. Изменение upstream само не меняет ранее собранный или установленный package.
