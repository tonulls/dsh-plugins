# Источник и адаптация

## Источник

Две выбранные процедуры основаны на community-репозитории [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills), зафиксированном на commit [`54a798831d2266a3ca61ce68a7acb80b81160d57`](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/commit/54a798831d2266a3ca61ce68a7acb80b81160d57). Сведения о выбранных файлах и происхождении также записаны в [`UPSTREAM.json`](../../packages/dsh-anthropic-cybersecurity-skills-tonulls/UPSTREAM.json).

В bundle включены только две существенно адаптированные процедуры, метаданные авторства upstream указывают `mahipal`:

- `analyzing-api-gateway-access-logs` — анализ access-логов API Gateway;
- `analyzing-web-server-logs-for-intrusion` — анализ access-логов веб-сервера.

## Границы адаптации

Процедуры переписаны для defensive read-only triage журналов, предоставленных пользователем или явно разрешённых к анализу. Выводы эвристические и не доказывают эксплуатацию или компрометацию. В bundle не включены остальные upstream-навыки, в том числе dual-use/offensive процедуры, а также исходные скрипты, установщики, зависимости и исполняемые материалы.

Навыки не выполняют активное сканирование, не отправляют журналы наружу, не читают произвольные локальные файлы и не меняют системы или правила обнаружения без отдельного прямого запроса и подтверждения. Они не добавляют инструменты или разрешения DSH. Их инструкции — не песочница; фактический доступ определяется профилем и инструментами DSH.

## Лицензия и связь с Anthropic

В upstream `LICENSE` указана лицензия Apache-2.0 и copyright `mukul975`; полный текст Apache-2.0 включён в пакет вместе с [уведомлением об атрибуции](../../packages/dsh-anthropic-cybersecurity-skills-tonulls/NOTICE.md). Адаптация также распространяется по Apache-2.0. Community-проект upstream и bundle не связаны с Anthropic PBC и не заявляют её одобрения.

## Сверка с upstream · 20 ноября 2026

- Репозиторий: [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills).
- Ревизия материалов: [`54a79883`](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/commit/54a798831d2266a3ca61ce68a7acb80b81160d57).
- HEAD исходника: [`54a79883`](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/commit/54a798831d2266a3ca61ce68a7acb80b81160d57), дата коммита 2026-08-31.
- Состояние: Ревизия совпадает.

### Контроль дерева Git

Деревья закреплённой ревизии и HEAD совпадают. [HEAD при повторной проверке](https://github.com/mukul975/Anthropic-Cybersecurity-Skills/commit/54a798831d2266a3ca61ce68a7acb80b81160d57).
