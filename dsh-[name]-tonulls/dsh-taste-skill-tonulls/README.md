# DSH Taste Skill

[![GitHub repository](https://img.shields.io/badge/GitHub-tonulls%2Fdsh--plugins-181717?logo=github)](https://github.com/tonulls/dsh-plugins)

**Русский** · [English](.docs/en/main.md) · [简体中文](.docs/zh-CN/main.md)

## Описание

Плагин адаптирует [Taste Skill](https://github.com/Leonxlnx/taste-skill) для DSH. Навык помогает выбрать визуальное направление и улучшить веб-страницы и экраны приложения с учётом контекста продукта.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-taste-skill-tonulls/packages/dsh-taste-skill-tonulls-ru'
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

Включите автоматический выбор навыка для текущего Agent:

```text
/dsh-taste-skill-tonulls on
```

После включения опишите задачу по дизайну обычным сообщением: модель выберет подходящий подход. Skill также можно вызвать напрямую командой `/design-taste-frontend`.

## Обновление

Обновите пакет в профиле `web`:

```sh
dsh plugin --profile web update dsh-taste-skill-tonulls-ru
```

## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор для текущего Agent:

```text
/dsh-taste-skill-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

Удалите пакет из профиля `web`:

```sh
dsh plugin --profile web remove dsh-taste-skill-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- [Русский индекс](.docs/ru/README.md) · [English](.docs/en/README.md) · [简体中文](.docs/zh-CN/README.md)
- [Taste Skill upstream](https://github.com/Leonxlnx/taste-skill)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Лицензии и уведомления](LICENSES.md)

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [Taste Skill](https://github.com/Leonxlnx/taste-skill) за исходный навык и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Лицензия и уведомления исходных материалов включены в пакет.

🛠️ Модифицировано с помощью Codex
