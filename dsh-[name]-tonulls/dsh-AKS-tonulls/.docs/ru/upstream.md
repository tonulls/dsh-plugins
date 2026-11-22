# Источник и адаптация

**Статус:** upstream-содержимое сверено с commit `2c606141936f1eeef17fa3043a72095b4765b9c2`.

## Источник

- Репозиторий: [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills).
- Основной материал навыка: [`skills/karpathy-guidelines/SKILL.md`](https://github.com/multica-ai/andrej-karpathy-skills/blob/2c606141936f1eeef17fa3043a72095b4765b9c2/skills/karpathy-guidelines/SKILL.md).
- Сводные рекомендации: [`README.md`](https://github.com/multica-ai/andrej-karpathy-skills/blob/2c606141936f1eeef17fa3043a72095b4765b9c2/README.md), [`CLAUDE.md`](https://github.com/multica-ai/andrej-karpathy-skills/blob/2c606141936f1eeef17fa3043a72095b4765b9c2/CLAUDE.md), Cursor rule [`karpathy-guidelines.mdc`](https://github.com/multica-ai/andrej-karpathy-skills/blob/2c606141936f1eeef17fa3043a72095b4765b9c2/.cursor/rules/karpathy-guidelines.mdc).
- Источник указывает лицензию MIT в README и frontmatter навыка; upstream-дерево на указанном commit не содержит отдельного файла `LICENSE`.

## Что перенесено

В plugin включён один skill `karpathy-guidelines` с четырьмя принципами: Think Before Coding, Simplicity First, Surgical Changes и Goal-Driven Execution. Английский пакет сохраняет английский текст; русский и китайский пакеты содержат переводы. Во все варианты добавлена короткая заметка о границах DSH: текст навыка не предоставляет разрешений и не заменяет технические ограничения.

## Что не переносилось

Upstream-метаданные Claude Code Marketplace и правила Cursor не используются как DSH-манифесты. Плагин упаковывает только инструкцию навыка и небольшую DSH-обвязку; он не включает и не запускает сторонние инструменты или дополнительные процессы.

## Локализация и проверка

Структурные поля навыка (`name`, путь и plugin ID) одинаковы во всех пакетах. Тексты инструкций переведены для `ru` и `zh`; идентификатор `karpathy-guidelines` остаётся неизменным. Проверьте соответствие переводов оригиналу и фактическое обнаружение навыка в целевой версии DSH перед публикацией.

## Сверка с upstream · 20 ноября 2026

- Репозиторий: [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills).
- Ревизия материалов: [`2c606141`](https://github.com/multica-ai/andrej-karpathy-skills/commit/2c606141936f1eeef17fa3043a72095b4765b9c2).
- HEAD исходника: [`2c606141`](https://github.com/multica-ai/andrej-karpathy-skills/commit/2c606141936f1eeef17fa3043a72095b4765b9c2), дата коммита 2026-04-20.
- Состояние: Ревизия совпадает.

### Контроль дерева Git

Деревья закреплённой ревизии и HEAD совпадают. [HEAD при повторной проверке](https://github.com/multica-ai/andrej-karpathy-skills/commit/2c606141936f1eeef17fa3043a72095b4765b9c2).
