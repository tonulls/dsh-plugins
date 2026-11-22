# ecc-foundation-models-on-device

**Команда:** `/ecc-foundation-models-on-device`

**Назначение:** Фреймворк Apple FoundationModels для запуска больших языковых моделей на устройстве: генерация текста, управляемая генерация с @Generable, вызов инструментов и потоковая передача снимков в iOS 26+. Используйте при добавлении таких возможностей в приложения для iOS 26+.

## Промты

### 1. Короткий запрос

> /ecc-foundation-models-on-device Набросай on-device генерацию для iOS 26+ через FoundationModels.

### 2. Шаблон с контекстом

> /ecc-foundation-models-on-device Приложение: [описание], сценарий: [генерация/инструменты/поток]. Предложи модель данных с @Generable и обработку ограниченной доступности, без сетевых API.

### 3. Подробный запрос

> /ecc-foundation-models-on-device Спроектируй функцию [сценарий] на Apple FoundationModels для iOS 26+. Разбей на проверку доступности, guided generation/@Generable, tool calling или snapshot streaming (если нужно), обработку отказов и тесты. Не меняй проект без подтверждения; отметь ограничения платформы.
