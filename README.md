# NestJS Backend с PostgreSQL

Этот проект представляет собой бэкенд-приложение, разработанное с использованием NestJS и PostgreSQL. В проекте реализована система аутентификации и авторизации с ролевой моделью доступа.

## Технологии

- NestJS v10
- PostgreSQL (с Sequelize ORM)
- JWT для аутентификации
- Swagger для API документации
- Docker для контейнеризации

## Основные функции

- Аутентификация и авторизация пользователей
- Ролевая модель доступа
- REST API с документацией Swagger
- Интеграция с PostgreSQL через Sequelize
- Валидация данных с class-validator
- Конфигурация для разработки и продакшена

## Установка и запуск

### Предварительные требования

- Node.js
- PostgreSQL
- Docker (опционально)

### Локальная установка

1. Клонируйте репозиторий:
```bash
git clone [URL вашего репозитория]
cd nest-backend
```

2. Установите зависимости:
```bash
npm install
```

3. Создайте файл `.development.env` и `.production.env` с необходимыми переменными окружения

Пример содержимого `.development.env`:
```env
PORT=5000
POSTGRES_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_DB=nest-backend
POSTGRES_PASSWORD=root
POSTGRES_PORT=5432
PRIVATE_KEY=secret_key_123
```

4. Запустите приложение:
```bash
# Режим разработки
npm run start:dev

# Продакшен режим
npm run start:prod
```

### Запуск через Docker

```bash
# Сборка и запуск контейнеров
docker-compose up -d
```

## Скрипты

- `npm run build` - сборка проекта
- `npm run start:dev` - запуск в режиме разработки
- `npm run start:prod` - запуск в продакшен режиме
- `npm run test` - запуск тестов
- `npm run lint` - проверка кода
- `npm run format` - форматирование кода

## API Документация

После запуска приложения, документация Swagger доступна по адресу:
```
http://localhost:5000/api/docs
```

## Структура проекта

```
src/
├── auth/           # Модуль аутентификации
├── users/          # Модуль пользователей
├── roles/          # Модуль ролей
├── config/         # Конфигурация приложения
└── main.ts         # Точка входа в приложение
```

## Лицензия

[UNLICENSED]