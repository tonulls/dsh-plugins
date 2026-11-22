# Источник и DSH-адаптация

Подробности реализации и установки приведены в [README проекта](../../README.md).

## Сверка с upstream · 20 ноября 2026

- Репозиторий: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits).
- Предыдущая ревизия сверки: [`d01aa914`](https://github.com/DavidHDev/react-bits/commit/d01aa914dcbe76da8b2923ebf872b5c8b1066e4c).
- Ревизия справочника и проверенный HEAD: [`701a8acc`](https://github.com/DavidHDev/react-bits/commit/701a8acc34f718b305d1ff0cc7d4700df0e1f1c9), дата коммита 2026-11-19.
- Состояние: Сверено с составом пакета.
- [Сравнение ревизий](https://github.com/DavidHDev/react-bits/compare/d01aa914dcbe76da8b2923ebf872b5c8b1066e4c...701a8acc34f718b305d1ff0cc7d4700df0e1f1c9). В upstream на 8 коммитов больше.

Изменения охватывают сайт, медиа и компоненты upstream, включая восстановление спрайтов после потери контекста canvas. В пакет DSH эти компоненты не входят.

### Контроль дерева Git

Предыдущая ревизия сверки и HEAD различаются на 30 путей по сравнению полных деревьев. [HEAD при повторной проверке](https://github.com/DavidHDev/react-bits/commit/701a8acc34f718b305d1ff0cc7d4700df0e1f1c9).

В справочник перенесены проверка восстановления символов TechText после потери контекста основного canvas или canvas глифов и сценарий поздней загрузки шрифта. Исправление компонента применяется через выбранную проектом версию React Bits. Изменения Advent Calendar, медиа и генерации сайта относятся к демонстрации upstream. Git blob файла `LICENSE.md` на обеих ревизиях совпал. [Лицензия проверенной ревизии](https://github.com/DavidHDev/react-bits/blob/701a8acc34f718b305d1ff0cc7d4700df0e1f1c9/LICENSE.md).
