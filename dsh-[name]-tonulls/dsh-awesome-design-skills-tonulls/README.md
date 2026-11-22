# Awesome Design Skills для DeepSeek Harness (DSH)

**Русский** · [English](.docs/en/project-readme.md) · [简体中文](.docs/zh-CN/project-readme.md)

## Описание

Плагин добавляет справочный Skill для поиска и оценки дизайн-инструкций из [Awesome Design Skills](https://github.com/bergside/awesome-design-skills). Он помогает выбрать подходящие рекомендации для интерфейса или дизайн-задачи.

## Установка

Нужны установленный DSH и профиль. В примере используется профиль `web`; замените его на имя своего профиля.

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-awesome-design-skills-tonulls/packages/dsh-awesome-design-skills-tonulls-ru'
```

## Запуск

Запустите хост командой `dsh web`.

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
/dsh-awesome-design-skills-tonulls on
/dsh-awesome-design-skills-tonulls off
```

Команда действует только на текущий Agent. При выключенном автоподборе Skill остаётся доступен по прямому вызову `/awesome-design-skills`.

## Обновление

```sh
dsh plugin --profile web update dsh-awesome-design-skills-tonulls-ru
```

## Перезапуск

При необходимости перезапустите хост: `Ctrl+C`, затем `dsh web`.

## Остановка

Чтобы выключить автоподбор в текущем Agent, используйте `/dsh-awesome-design-skills-tonulls off`. `Ctrl+C` останавливает хост, но не удаляет пакет.

## Удаление

```sh
dsh plugin --profile web remove dsh-awesome-design-skills-tonulls-ru
```

## Документация

- [Источник и проверка upstream](.docs/ru/upstream.md)

- [Русская документация](.docs/ru/README.md) · [English](.docs/en/README.md) · [简体中文](.docs/zh-CN/README.md)
- [Границы и сведения об источнике](.docs/ru/guide/setup.md)
- [Исходный репозиторий Awesome Design Skills](https://github.com/bergside/awesome-design-skills) и его [лицензия MIT](https://github.com/bergside/awesome-design-skills/blob/f631a09b4fcc0166f2e2c1a8c81906ef680c57e8/LICENSE).

## Donate

🔹EVM: ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC: ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON: ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA: ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Благодарности и лицензия

Спасибо авторам [Awesome Design Skills](https://github.com/bergside/awesome-design-skills) за исходный каталог и разработчикам [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) за платформу. Исходный каталог распространяется по лицензии MIT; адаптирован способ установки для DSH.

🛠️ Модифицировано с помощью Codex
