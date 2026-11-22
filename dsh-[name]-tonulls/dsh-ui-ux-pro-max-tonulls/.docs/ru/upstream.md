# Источник и DSH-адаптация

Подробности реализации и установки приведены в [README проекта](../../README.md).

## Сверка с upstream · 20 ноября 2026

- Репозиторий: [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill).
- Предыдущая сверенная ревизия: [`e59ff376`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/commit/e59ff376a41f7ca47b7541ad5c116495cbade3ee).
- HEAD исходника: [`2de1134d`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/commit/2de1134dc4d1cfe112934611ae5803ae17a1bd7e), дата коммита 2026-11-19.
- Состояние: Изменения сверены с областью пакета.
- [Сравнение ревизий](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/compare/e59ff376a41f7ca47b7541ad5c116495cbade3ee...2de1134dc4d1cfe112934611ae5803ae17a1bd7e). В upstream на 6 коммитов больше.

В метаданных пакета закреплена проверенная ревизия справочника. Навык содержит авторские рекомендации DSH.

### Решение по адаптации

Сборка стилей и локальный Chart.js относятся к примерам upstream. В DSH перенесена проверка офлайн-предпросмотра, без копирования зависимостей примеров. [Изменение upstream](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/pull/584).

### Контроль дерева Git

Предыдущая сверенная ревизия и HEAD различаются на 125 путей по сравнению полных деревьев. [HEAD при повторной проверке](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/commit/2de1134dc4d1cfe112934611ae5803ae17a1bd7e).


### Проверка веб-карт

Из двух изменений upstream по веб-картам и ГИС перенесены проверки доступности, видимости атрибуции, нормализации значений по областям, отзывчивости на типичных данных и безопасного вывода подписей. Каталоги CSV и шаблоны платформ обслуживают генератор upstream. Его CLI, маркетплейс `.agents`, корректировка кодировки вывода CIP и оформление галереи не используются справочником DSH. [Критерии веб-карт](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/pull/581), [типы продуктов ГИС](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/pull/582).

На HEAD `f76d1653` проверен один коммит и 84 изменённых пути. Из новых критериев обработки ошибок перенесены сохранение ввода, вставка, своевременная валидация, видимые инструкции по исправлению, защита правок и возврат фокуса. Изменения каталога и его сгенерированных представлений остаются частью генератора upstream. [Сравнение](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/compare/2de1134dc4d1cfe112934611ae5803ae17a1bd7e...f76d1653d7467fc11fb9d9d79295a421c92ab958).
