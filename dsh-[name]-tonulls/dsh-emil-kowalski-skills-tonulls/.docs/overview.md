# Обзор upstream и DSH-адаптации

Пакеты основаны на MIT-репозитории [emilkowalski/skills](https://github.com/emilkowalski/skills), pinned commit `64eb3deb9a5fbfa041faf783e0bc3fd635872e9c`. Включены 13 prompt skills: `animation-performance`, `animation-vocabulary`, `animate-expo`, `animate`, `apple-design`, `mobile-native`, `improve-animations`, `ask-sonner`, `find-animation-opportunities`, `emil-design-eng`, `review-animations`, `remove-animations`, `ask-emil`. Связанные Markdown references входят в те же локальные каталоги.

Исключены `prototype` (multi-variant preview и cleanup), `break-ui` (изменение fixtures), `pick-ui-library` (выбор и установка зависимостей), `write-swift` (version-sensitive руководства по языку). Upstream hooks, скрипты и установщик не включены.

Все три языковых пакета используют общий plugin id `emil-kowalski-skills-tonulls`; в один DSH-профиль устанавливается один вариант. Метаданные локализованы RU/EN/ZH, тело инструкций — английское. Skills только user-invoked, без model auto-invocation и собственных инструментов. DSH-адаптация требует явного подтверждения перед изменением файлов/зависимостей или запуском проверок; установка, live activation и проверка UI в профиле не выполнялись.

Upstream MIT license и attribution включены в каждый пакет. См. [корневой README](../README.md), [English overview](en/README.project.md) и [中文简介](zh-CN/README.project.md).
