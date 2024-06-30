# Sagaart

## Описание
Сервис по оценке и продаже предметов искусства.
В рамках MVP реализован следующий функционал:
- Регистрация и авторизация пользователей, личный кабинет, смена пароля
с подтверждением по электронной почте.
- Каталог с объектами искусства, фильтрация, пагинация, поиск.
- Форма обратной связи.
- Отправка запроса с описанием объекта искусства для оценки его стоимости.
- Создание объектов для каталога пользователями не предусмотрена, действия по
добавлению/редактированию/удалению производятся через панель администратора
Django:
https://sagaart.bounceme.net/admin/


## Примеры
Документация с методами и параметрами API расположена по ссылке:
https://sagaart.bounceme.net/api/docs/

***

Использованный стек технологий:
- Python
- PostgreSQL
- Drango REST Framework
- Djoser
- Docker/Docker Compose
- Nginx
- React
- Алгоритм по оценке разрабатывается заказчиком проекта, в качестве инструментов
используются:
NumPy
CatBoost

***

## Установка
1. Склонируйте файл `docker-compose.production.yml` на сервер.

2. Создайте файл `.env` с параметрами окружения в той же директории:
```
POSTGRES_USER={user}
POSTGRES_PASSWORD={password}
POSTGRES_DB={db}
DB_HOST={host}
DB_PORT=5432
ALLOWED_HOSTS={host} localhost 127.0.0.1
EMAIL_HOST_USER={email}
EMAIL_HOST_PASSWORD={password}
```

3. Запустите контейнеры командой:

```
sudo docker compose -f docker-compose.production.yml up -d
```

3. Примените миграции и склонируйте статические файлы для бэкенда командами:

```
sudo docker compose -f docker-compose.production.yml exec backend python manage.py migrate
sudo docker compose -f docker-compose.production.yml exec backend python manage.py collectstatic
sudo docker compose -f docker-compose.production.yml exec backend cp -r /app/collected_static/. /backend_static/static/
sudo docker compose -f docker-compose.production.yml exec backend python manage.py import_data
```

## Примеры запросов

### Регистрация пользователя
POST `https://sagaart.bounceme.net/api/user/`

### Авторизация
POST `https://sagaart.bounceme.net/api/user/auth`

### Просмотр данных учетной записи
GET `https://sagaart.bounceme.net/api/user/me/`

### Просмотр товаров каталога
GET `https://sagaart.bounceme.net/api/product/`

### Создание запроса на аналитику цены
POST `https://sagaart.bounceme.net/api/analytics/`


***

## Авторы проекта:

### Frontend:

Lucy Naumenko
`https://github.com/lucy2n`

Vasiliy
`https://github.com/vvkon13`

### Backend:

Alexandr Frolov
`https://github.com/FrolovAlex22`

Marat Laischev
`https://github.com/MaratLaischev`

Anton Arefin
`https://github.com/R4zeel`
