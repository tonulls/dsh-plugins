# Источник и DSH-адаптация

Подробности реализации и установки приведены в [README проекта](../../README.md).

## Сверка с upstream · 20 ноября 2026

- Репозиторий: [acamposuribe/p5.brush](https://github.com/acamposuribe/p5.brush).
- Ревизия на момент первой сверки: [`656e4ce4`](https://github.com/acamposuribe/p5.brush/commit/656e4ce4cbbd9ee8a28f7130a1989de8f3b10e43).
- HEAD на момент первой сверки: [`656e4ce4`](https://github.com/acamposuribe/p5.brush/commit/656e4ce4cbbd9ee8a28f7130a1989de8f3b10e43), дата коммита 2026-11-20.
- Ревизия справочника и проверенный HEAD — [`7a655977`](https://github.com/acamposuribe/p5.brush/commit/7a65597703df2863d8442208791e093ddeab3a35).
- Состояние: Адаптация обновлена.
- [Сравнение ревизий](https://github.com/acamposuribe/p5.brush/compare/ac2d829c760fcd677012caab95da002ad5aa692e...656e4ce4cbbd9ee8a28f7130a1989de8f3b10e43). Диапазон содержит два коммита.

Если установлена версия с параметром rule у hatchArray и massArray, сравните режимы evenodd и nonzero на перекрывающихся контурах. Проверьте отверстия при обратном направлении вершин.

### Контроль дерева Git

На момент первой сверки закреплённая ревизия совпадала с HEAD. [HEAD при повторной проверке](https://github.com/acamposuribe/p5.brush/commit/656e4ce4cbbd9ee8a28f7130a1989de8f3b10e43).

## Повторная сверка · 21 ноября 2026

В [`330f2602`](https://github.com/acamposuribe/p5.brush/commit/330f2602329c2891c9299ac3e4e236d827f8ed7c) изменены распределение случайных чисел для `seed()`, группировка заливок и рендеринг штрихов. В навыке обновлена проверяемая ревизия и добавлена проверка эталонных изображений после обновления библиотеки. Движок и его тестовые изображения поставляет сама библиотека. [Изменения upstream](https://github.com/acamposuribe/p5.brush/compare/656e4ce4cbbd9ee8a28f7130a1989de8f3b10e43...330f2602329c2891c9299ac3e4e236d827f8ed7c).

На HEAD `7a655977` проверены два исходных файла и 12 файлов сборки. Навык теперь проверяет короткие стыки сплайнов и сглаживание в standalone и p5. Изменения движка и его сборок поставляет библиотека. [Сравнение](https://github.com/acamposuribe/p5.brush/compare/330f2602329c2891c9299ac3e4e236d827f8ed7c...7a65597703df2863d8442208791e093ddeab3a35).

На проверенной ревизии текст MIT находится в [LICENSE.md](https://github.com/acamposuribe/p5.brush/blob/7a65597703df2863d8442208791e093ddeab3a35/LICENSE.md). В полном диапазоне от `ac2d829c` изменились 33 пути. В DSH перенесены проверки поведения для новой версии рендеринга. Сборки, метаданные npm, шейдеры и удалённые upstream эталоны принадлежат библиотеке. Для сверки после обновления используйте эталонные изображения своего проекта. [Полный диапазон](https://github.com/acamposuribe/p5.brush/compare/ac2d829c760fcd677012caab95da002ad5aa692e...7a65597703df2863d8442208791e093ddeab3a35).
