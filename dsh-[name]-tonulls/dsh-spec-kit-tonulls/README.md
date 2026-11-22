# DSH Spec Kit для DeepSeek Harness (DSH)

[![GitHub repository](https://img.shields.io/badge/GitHub-tonulls%2Fdsh--plugins-181717?logo=github)](https://github.com/tonulls/dsh-plugins)

**Русский** | [English](.docs/en/overview.md) | [简体中文](.docs/zh-CN/overview.md)

## Описание

Плагин адаптирует методологию Spec-Driven Development из [GitHub Spec Kit](https://github.com/github/spec-kit) в DSH Skill `spec-kit`. Навык помогает пройти путь от уточнения требований и плана до задач, реализации и проверки результата.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-spec-kit-tonulls/packages/dsh-spec-kit-tonulls-ru'
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
/dsh-spec-kit-tonulls on
/spec-kit specify Describe the user-visible outcome and constraints for this feature.
```

После включения опишите задачу обычным сообщением: модель выберет подходящий этап Spec-Driven Development. Skill также поддерживает прямые вызовы `/spec-kit specify`, `/spec-kit plan`, `/spec-kit analyze` и `/spec-kit implement`.

## Обновление

Обновите пакет в профиле `web`:

```sh
dsh plugin --profile web update dsh-spec-kit-tonulls-ru
```


## Перезапуск

После обновления перезапустите профиль DSH.

## Остановка

Выключите автоматический выбор для текущего Agent:

```text
/dsh-spec-kit-tonulls off
```

Чтобы завершить DSH, остановите его в терминале сочетанием `Ctrl+C`. Отключение автоподбора не удаляет пакет из профиля.

## Удаление

Удалите пакет из профиля `web`:

```sh
dsh plugin --profile web remove dsh-spec-kit-tonulls-ru
```


## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- Индексы публичной документации: [RU](.docs/README.md) · [EN](.docs/en/README.md) · [ZH](.docs/zh-CN/README.md)
- [Репозиторий DSH-плагинов](https://github.com/tonulls/dsh-plugins)
- [GitHub Spec Kit](https://github.com/github/spec-kit) и [официальная документация](https://github.github.io/spec-kit/); upstream main проверен на revision [`a4d57122`](https://github.com/github/spec-kit/tree/a4d571229e164e440f8950cac034607bae7b7518) (2026-11-20).
- База руководства SDD — `67e0f7294e6e728ab60bf7b4590deb470448bc2d`. В этапы спецификации, задач и анализа внесены изменения из сверенных шаблонов.
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [GitHub Spec Kit](https://github.com/github/spec-kit) за исходные материалы и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходные материалы распространяются по MIT; лицензия и уведомления включены в пакет.

🛠️ Модифицировано с помощью Codex
