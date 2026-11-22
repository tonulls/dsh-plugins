# Установка и обслуживание

Устанавливайте один языковой пакет на профиль: у всех вариантов единый Cordis plugin id `astryx-tonulls`.

## Установка

Пример для русского пакета и профиля `web`:

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-astryx-tonulls/packages/dsh-astryx-tonulls-ru'
```

Для английской или китайской локализации измените package path на `dsh-astryx-tonulls-en` или `dsh-astryx-tonulls-zh`. Затем запустите профиль `dsh web` либо перезапустите активный профиль.

## Проверка

```sh
dsh --version
dsh plugin --profile web list
dsh --profile web --dump-config
```

Ищите `dsh-astryx-tonulls-ru` в списке и Cordis row `astryx-tonulls` в конфигурации. Состояние `active` подтверждает активацию plugin, но не проверяет его визуальный вывод. Загрузите skill `astryx` из человеческого каталога навыков, чтобы убедиться, что инструкция доступна.

## Обновление и удаление

```sh
dsh plugin --profile web update dsh-astryx-tonulls-ru
dsh plugin --profile web remove dsh-astryx-tonulls-ru
```

Подставьте имя фактически установленного пакета и профиль. Удаление bundle из профиля не удаляет локальный checkout.

## Проверка workspace

Из корня репозитория запускаются `npm test` и `npm run check:variants`. Пакеты не содержат install/build scripts и не устанавливают зависимости.
