# DSH YouTube Agent Skills

**Русский** · [English](.docs/en/README.project.md) · [简体中文](.docs/zh-CN/README.project.md)

## Описание

Bundle адаптирует семь prompt-навыков из [YouTube Agent Skill](https://github.com/Jakeschincariol/youtube-agent-skill) для планирования роликов, подготовки сценариев, SEO и аудита контента. Навыки работают с данными, предоставленными пользователем, и помогают подготовить материалы без публикации на канале.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-youtube-agent-skill-tonulls/packages/dsh-youtube-agent-skill-tonulls-ru'
```

## Запуск

Запустите профиль DSH, в который установлен пакет:

```sh
dsh web
```

## Проверка

Проверьте версию DSH, установленные плагины и конфигурацию профиля:

```sh
dsh --version
dsh plugin --profile web list
dsh --profile web --dump-config
```

## Использование

Автоподбор Skills выключен по умолчанию отдельно в каждом Agent. Включите или выключите подбор командой:

```text
/dsh-youtube-agent-skill-tonulls on
/dsh-youtube-agent-skill-tonulls off
```

Команда действует только на текущий Agent. При выключенном автоподборе Skill остаётся доступен по прямому вызову `/youtube-agent-skill`.

## Обновление

Обновите пакет в профиле `web`.

```sh
dsh plugin --profile web update dsh-youtube-agent-skill-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор навыков для текущего Agent:

```text
/dsh-youtube-agent-skill-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

Удалите пакет из профиля `web`.

```sh
dsh plugin --profile web remove dsh-youtube-agent-skill-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- [Русский индекс](.docs/ru/README.md) · [English index](.docs/en/README.md) · [中文索引](.docs/zh-CN/README.md)
- [Upstream и лицензии](packages/dsh-youtube-agent-skill-tonulls-ru/LICENSES.md) · [Происхождение](packages/dsh-youtube-agent-skill-tonulls-ru/UPSTREAM.json)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [YouTube Agent Skill](https://github.com/Jakeschincariol/youtube-agent-skill) за исходные материалы и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходная лицензия и уведомления включены в пакет; адаптирован способ установки.

🛠️ Модифицировано с помощью Codex
