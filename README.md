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
git clone https://github.com/ValyaSHmelev/nest-pg-auth-role-boilerplate.git
cd nest-pg-auth-role-boilerplate
```

2. Установите зависимости:
```bash
npm install
```

3. Скопируйте `.example.env` в `.development.env` и `.production.env` и настройте переменные окружения:
```bash
cp .example.env .development.env
cp .example.env .production.env
```

Затем отредактируйте файлы, указав ваши значения для:
```env
POSTGRES_USER=YOUR_PG_USER
POSTGRES_DB=YOUR_PG_DB
POSTGRES_PASSWORD=YOUR_PG_PASSWORD
PRIVATE_KEY=YOUR_SECRET_KEY
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
├── exceptions/     # Обработчики исключений
├── files/         # Модуль работы с файлами
├── pipes/         # Пользовательские пайпы
├── posts/         # Модуль публикаций
├── roles/         # Модуль ролей
├── users/         # Модуль пользователей
├── app.module.ts  # Корневой модуль приложения
└── main.ts        # Точка входа в приложение
```

## Лицензия

[UNLICENSED]