# Источник и DSH-адаптация

Подробности установки приведены в [README проекта](../../README.md).

## Сверка с upstream · 21 ноября 2026

- Репозиторий — [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman).
- Поставляемые материалы закреплены на проверенном HEAD [`a1928947`](https://github.com/JuliusBrussee/caveman/commit/a192894723a8f47e7f504c7b5041967ff1f18e55).
- При обновлении с `9b243662` все семь локальных исходных файлов совпали по Git blob с новой ревизией. Сверены `skills/caveman/SKILL.md`, соседний `README.md`, `LICENSE`, `LICENSE-MIT`, `LICENSING.md`, `NOTICE` и `TRADEMARKS.md`. [Дерево исходника](https://github.com/JuliusBrussee/caveman/tree/a192894723a8f47e7f504c7b5041967ff1f18e55).

### Изменения вне пакета DSH

В полном сравнении 97 изменённых путей. Изменения `engine/`, `proxy/` и `mcp/` относятся к исполнителям upstream. `packages/cli/`, `integrations/` и `agents/reserved-verbs.json` обслуживают установку и реестр хостов. `packages/sdk/` и `packages/subagent-tax/` обслуживают отдельные SDK и измерения. Единственный изменённый путь под `skills/` — инструкция хоста `skills/caveman-learn/CLAUDE.md`. Пакет DSH поставляет один навык стиля ответа, поэтому эти изменения не требуют правок его реализации. [Сравнение ревизий](https://github.com/JuliusBrussee/caveman/compare/9b243662ff98d392bc0a95b865a554583d71be75...a192894723a8f47e7f504c7b5041967ff1f18e55).
