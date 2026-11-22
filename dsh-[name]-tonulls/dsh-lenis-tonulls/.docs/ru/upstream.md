# Источник и DSH-адаптация

Подробности реализации и установки приведены в [README проекта](../../README.md).

## Сверка с upstream · 20 ноября 2026

- Репозиторий: [darkroomengineering/lenis](https://github.com/darkroomengineering/lenis).
- Ревизия материалов: [`786ed4a9`](https://github.com/darkroomengineering/lenis/commit/786ed4a9225476e834825c4cc81aab41aca6df84).
- HEAD исходника: [`786ed4a9`](https://github.com/darkroomengineering/lenis/commit/786ed4a9225476e834825c4cc81aab41aca6df84), дата коммита 2026-11-19.
- Состояние: Адаптация обновлена.
- [Сравнение ревизий](https://github.com/darkroomengineering/lenis/compare/bd89165aa6ab64c4ae68242c8d2a5e90b76ff77d...786ed4a9225476e834825c4cc81aab41aca6df84). В upstream на 2 коммитов больше.

При проверке autoToggle проверьте, что после destroy() корневой элемент больше не обрабатывает transitionend. Повторите монтирование и демонтаж компонента.

### Контроль дерева Git

Деревья закреплённой ревизии и HEAD совпадают. [HEAD при повторной проверке](https://github.com/darkroomengineering/lenis/commit/786ed4a9225476e834825c4cc81aab41aca6df84).
