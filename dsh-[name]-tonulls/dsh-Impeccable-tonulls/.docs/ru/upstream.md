# Источник и DSH-адаптация

Подробности реализации и установки приведены в [README проекта](../../README.md).

## Сверка с upstream · 20 ноября 2026

- Репозиторий: [pbakaus/impeccable](https://github.com/pbakaus/impeccable).
- Ревизия материалов: [`414603bf`](https://github.com/pbakaus/impeccable/commit/414603bf14c7a344edb466bb1f85690c77ce8b7d).
- HEAD исходника: [`b49177d3`](https://github.com/pbakaus/impeccable/commit/b49177d32788f2dc585c42831d845dacf1ebed2c), дата коммита 2026-11-18.
- Состояние: Сценарии слоя DSH сверены с текущей адаптацией. Состав архива проверен для RU, EN и ZH.
- [Сравнение ревизий](https://github.com/pbakaus/impeccable/compare/414603bf14c7a344edb466bb1f85690c77ce8b7d...b49177d32788f2dc585c42831d845dacf1ebed2c). В upstream на 1217 коммитов больше. GitHub показал до 300 путей, список сравнения неполный.

Состав установленного пакета на новый HEAD не перенесён.

### Применено в DSH

Перенёс правила проверки визуальных материалов и выбора режима для конкретного экрана. Версия upstream с отдельным бинарным движком отличается от текстового пакета DSH. [Сверенный upstream](https://github.com/pbakaus/impeccable/commit/b49177d3).

### Контроль дерева Git

Закреплённая ревизия и HEAD различаются на 1943 путей по сравнению полных деревьев. [HEAD при повторной проверке](https://github.com/pbakaus/impeccable/commit/b49177d32788f2dc585c42831d845dacf1ebed2c).

### Локальные справочники Impeccable

Встроены два самостоятельных справочника по новому экрану и критике интерфейса. Навык подключает их к shape и critique. Они покрывают проверку существующего визуального контекста, сравнение с согласованным макетом, проверку состояний и ранжирование замечаний по влиянию на задачу. Источник этих правок — [DSH-руководства Impeccable на проверенном HEAD](https://github.com/pbakaus/impeccable/tree/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference). Бинарные сценарии, хуки, генерация изображений и интерактивный выбор вариантов в адаптацию не входят.

Из [audit.md](https://github.com/pbakaus/impeccable/blob/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference/audit.md) и [polish.md](https://github.com/pbakaus/impeccable/blob/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference/polish.md) перенесены проверка полноты действий и финальный проход через основную задачу пользователя. Новый справочник используется в режимах audit и polish. Автоматический детектор и запись отчёта зависят от окружения upstream.

- `adapt` — перенесена адаптация основного сценария к новому вводу и размеру экрана. [Исходный справочник](https://github.com/pbakaus/impeccable/blob/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference/adapt.md).

- `animate` — перенесены прерываемость переходов, reduced motion и проверка конечного состояния. [Исходный справочник](https://github.com/pbakaus/impeccable/blob/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference/animate.md).

- `distill` — перенесена проверка основных и исключительных путей после упрощения. [Исходный справочник](https://github.com/pbakaus/impeccable/blob/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference/distill.md).

В `typeset` добавлены проверки ролей шрифта, локализации и подстановки шрифтов. В `quieter` добавлена проверка, что после уменьшения визуального шума остались заметны действия, состояния и ошибки. В `document` добавлена сверка токенов с кодом и фиксация только подтверждённых правил проекта. Локальные инструкции работают в текущем Agent. [Типографика](https://github.com/pbakaus/impeccable/blob/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference/typeset.md), [визуальная иерархия](https://github.com/pbakaus/impeccable/blob/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference/quieter.md), [документация](https://github.com/pbakaus/impeccable/blob/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference/document.md).

В `onboard` перенесена проверка пути до первого полезного результата, включая повторный вход, пропуск подсказок и восстановление после ошибки. Оценка времени и доли завершений опирается на доступные данные проекта. [Справочник upstream](https://github.com/pbakaus/impeccable/blob/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference/onboard.md).

В `harden` добавлена проверка восстановления при сбоях и ограничениях ввода, в `clarify` — проверка текста в реальных состояниях интерфейса, в `optimize` — сравнение замеров в одинаковых условиях. [Устойчивость](https://github.com/pbakaus/impeccable/blob/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference/harden.md), [тексты](https://github.com/pbakaus/impeccable/blob/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference/clarify.md), [производительность](https://github.com/pbakaus/impeccable/blob/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference/optimize.md).

В `bolder`, `colorize`, `layout` и `delight` перенесены проверки композиции, ролей цвета, порядка чтения и повторяемости эффектов. В `extract` добавлена проверка общих компонентов на нескольких реальных вариантах перед миграцией. [Справочники DSH в upstream](https://github.com/pbakaus/impeccable/tree/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference).

В режим Operate перенесены проверка рабочего сценария, приоритизация проблем и повторная проверка после исправления. В `component-review` upstream создаёт манифесты и запускает интерактивное согласование через свой движок. В DSH согласование макета идёт через диалог и уже описано в справочнике нового экрана. [Operate](https://github.com/pbakaus/impeccable/blob/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference/operate.md), [component review](https://github.com/pbakaus/impeccable/blob/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference/component-review.md).

Для Read и Persuade добавлены проверки порядка чтения и достаточности информации перед действием. Overdrive уточняет условия внедрения эффекта и проверки на доступных устройствах. Эти рекомендации применяются в текущем интерфейсе, а генерация вариантов и браузерная проверка upstream зависят от его движка. [Исходные справочники](https://github.com/pbakaus/impeccable/tree/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference).

Из `adapt.native.md` и `audit.native.md` перенесены проверки системных отступов и навигации, масштабирования текста, VoiceOver и TalkBack. Навык фиксирует отдельно результаты по платформам и устройствам. В поставке DSH используются средства проверки текущего проекта. [Справочники платформы](https://github.com/pbakaus/impeccable/tree/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference).

### Интерактивные инструменты

| Справочник | Решение для DSH |
| --- | --- |
| `doctor` | Диагностирует файлы состояния и схемы конкретной версии движка Impeccable. |
| `hooks` | Управляет встроенным детектором через хуки хоста. |
| `live-setup`, `live`, `generate` | Настройка и выбор вариантов зависят от браузерного оверлея и подключённого движка. |
| `visualize` | Производство изображений зависит от средств текущей сессии. В пакет отдельный генератор не входит. |
| `region-map` | В справочник нового экрана перенесена ручная сверка видимых областей утверждённого макета, материалов и элементов управления. |
| `craft-floor` | Проверки рабочего интерфейса покрывают локальные справочники аудита и финальной доработки. Автоматические проверки зависят от движка upstream. |

[Сверенные справочники](https://github.com/pbakaus/impeccable/tree/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference).

Из `init`, `foundations` и `new-work-world` перенесены проверка платформы и стека, отделение подтверждённых сведений о продукте от визуальных решений и сравнение направлений на одной задаче. `routing` уже покрыт меню по контексту и правилами выбора режима. Структуру файлов проекта определяет текущий репозиторий. [Исходные справочники](https://github.com/pbakaus/impeccable/tree/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference).

Из `critique-rubric` перенесена проверка информации, которую пользователю приходится помнить между экранами, и возобновления задачи после прерывания. Из `new-work-comp` перенесена сверка отклонений готовой страницы от утверждённого макета. Проверка использует доступные артефакты и экран проекта. [Критерии ревью](https://github.com/pbakaus/impeccable/blob/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference/critique-rubric.md), [работа по макету](https://github.com/pbakaus/impeccable/blob/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/reference/new-work-comp.md).

### Платформенные справочники и встроенные роли

- `ios.md` и `android.md` уточняют платформенные соглашения. В нативный справочник добавлена раздельная проверка навигации и отступов.
- `mode-operate.md`, `mode-persuade.md` и `mode-read.md` покрыты справочниками рабочих сценариев, чтения и принятия решения.
- `overdrive.md` покрыт справочником сложных эффектов и критериями проверки на доступных устройствах.
- `degraded/asset-producer.md` зависит от средств производства материалов. DSH использует доступные проекту материалы и инструменты.
- `degraded/documenter.md`, `degraded/finish-reviewer.md` и `degraded/motion-reviewer.md` покрыты локальными руководствами по документации, финальному ревью и анимации.
- `degraded/manual-edit-applier.md` работает с результатом интерактивного редактора Impeccable. В DSH реализуются правки, согласованные в диалоге.

[Состав слоя DSH на проверенной ревизии](https://github.com/pbakaus/impeccable/tree/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable).

### Проверка состава npm

Слой upstream для DSH содержит 63 файла: точку входа, 50 справочников и 12 файлов под `scripts/`. Скрипты запуска, контрольные суммы движка, индексы шрифтов и браузерный оверлей обслуживают среду upstream. В сборке DSH их место занимает провайдер, который загружает текст навыка и локальные справочники. `npm pack --dry-run` подтвердил наличие `SKILL.md` и всех 22 связанных справочников в каждом из трёх отдельных пакетов и трёх языковых вариантов `dsh-tonulls`. [Слой DSH upstream](https://github.com/pbakaus/impeccable/tree/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable).

### Изменения запуска и инструментов

В полном сравнении 35 путей относятся к `.dsh/`. Из них 30 относятся к инструкциям и справочникам, пять — к запуску движка и браузера. `VERSION` и `engine-checksums.txt` определяют версию и целостность бинарных артефактов, `impeccable` и `impeccable.cmd` запускают их, а `live-browser.js` обслуживает браузерный режим. Провайдер DSH загружает локальную инструкцию, поэтому у него отдельная точка входа. [Файлы запуска upstream](https://github.com/pbakaus/impeccable/tree/b49177d32788f2dc585c42831d845dacf1ebed2c/.dsh/skills/impeccable/scripts).

Изменения в `crates/` (291 путь) относятся к движку Rust, включая CLI, компоновку, обнаружение проблем и интеграцию с браузером. В `extension/` (56 путей) и `browser-bundle/` (четыре пути) меняется поставка браузерного окружения. В DSH ручные проверки выполняются средствами, доступными в текущем Agent. Изменения `tests/` (684 пути), сборки и выпуска проверяют оригинальную поставку. Каталоги других хостов обслуживают их собственные способы установки. Эти области учтены по составу дерева. [Движок и интеграции](https://github.com/pbakaus/impeccable/tree/b49177d32788f2dc585c42831d845dacf1ebed2c).
