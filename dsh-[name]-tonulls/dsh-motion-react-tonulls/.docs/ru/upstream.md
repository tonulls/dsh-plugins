# Источник и DSH-адаптация

Подробности реализации и установки приведены в [README проекта](../../README.md).

## Сверка с upstream · 20 ноября 2026

- Репозиторий: [motiondivision/motion](https://github.com/motiondivision/motion).
- Ревизия материалов: [`f95ab941`](https://github.com/motiondivision/motion/commit/f95ab9418d9524b906c8681994b95d15cb03d5fc).
- HEAD на момент первой сверки: [`cd009de7`](https://github.com/motiondivision/motion/commit/cd009de7a4314e065d4d9df683057124792d5b34), дата коммита 2026-11-19.
- Последний проверенный HEAD — [`1b374802`](https://github.com/motiondivision/motion/commit/1b374802de947700ad7d2bb52a0ccec8339cf2f1).
- Состояние: Изменения сверены с областью пакета.
- [Сравнение ревизий](https://github.com/motiondivision/motion/compare/f95ab9418d9524b906c8681994b95d15cb03d5fc...cd009de7a4314e065d4d9df683057124792d5b34). В upstream на 98 коммитов больше.

Состав установленного пакета на новый HEAD не перенесён.

### Решение по адаптации

Обновление дерева layout projection остаётся в библиотеке Motion, которую устанавливает проект. В навык добавлена проверка производительности при массовом добавлении и удалении элементов. [Изменение upstream](https://github.com/motiondivision/motion/pull/4096).

### Контроль дерева Git

Закреплённая ревизия и HEAD различаются на 202 путей по сравнению полных деревьев. [HEAD при повторной проверке](https://github.com/motiondivision/motion/commit/cd009de7a4314e065d4d9df683057124792d5b34).

При повторной сверке `1b374802` проверены пять путей. Изменение бюджета композитных слоёв реализовано в библиотеке Motion. В навык добавлена проверка вложенных анимаций, освобождения слоёв и сопоставимых замеров. [Сравнение](https://github.com/motiondivision/motion/compare/cd009de7a4314e065d4d9df683057124792d5b34...1b374802de947700ad7d2bb52a0ccec8339cf2f1).


Из изменений `Reorder.Board` и `LazyMotion` перенесены сценарии проверки непрерывного перетаскивания между группами и обработки сбоя загрузки функций анимации. Исправления обработки событий и импорта остаются в версии Motion, установленной в проекте. [Перетаскивание между группами](https://github.com/motiondivision/motion/commit/6f20d764b41ec6846146a2db7dc60ed75af47aed), [сбой загрузки LazyMotion](https://github.com/motiondivision/motion/commit/ead4fd5f14f459bc16cc36739a19cef36083a0dc).
