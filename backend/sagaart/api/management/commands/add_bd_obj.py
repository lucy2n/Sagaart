import csv

from django.core.management.base import BaseCommand
import pandas as pd

from sagaart.settings import CSV_FILES_DIR
from artobjects.models import (
    Category,
    Genre,
    Style,
    AuthorShow,
    AuthorAward,
    ObjectAuthor,
)


class Command(BaseCommand):
    """Команда для загрузки тестовых данных в базу данных"""

    help = "Загрузка данных для тестирования"

    def handle(self, *args, **kwargs):
        with open(f"{CSV_FILES_DIR}/categorys.csv", encoding="utf-8") as file:
            reader = csv.reader(file)
            next(reader)
            categorys = [Category(name=row[0]) for row in reader]
            Category.objects.bulk_create(categorys)
        print("Категории в базу данных загружены")
        print("ADD", Category.objects.count(), "Category")

        with open(f"{CSV_FILES_DIR}/style.csv", encoding="utf-8") as file:
            reader = csv.reader(file)
            next(reader)
            style = [Style(name=row[0]) for row in reader]
            Style.objects.bulk_create(style)
        print("Стили в базу данных загружены")
        print("ADD", Style.objects.count(), "Style")

        with open(f"{CSV_FILES_DIR}/genre.csv", encoding="utf-8") as file:
            reader = csv.reader(file)
            next(reader)
            genre = [Genre(name=row[0]) for row in reader]
            Genre.objects.bulk_create(genre)
        print("Жанры в базу данных загружены")
        print("ADD", Genre.objects.count(), "Genre")

        with open(
            f"{CSV_FILES_DIR}/author_show.csv", encoding="utf-8"
        ) as file:
            reader = csv.reader(file)
            next(reader)
            show = [
                AuthorShow(
                    name=row[0],
                    year=pd.to_datetime(row[1], format="ISO8601"),
                    place=row[2],
                    cost=row[3],
                )
                for row in reader
            ]
            AuthorShow.objects.bulk_create(show)
        print("Выставки в базу данных загружены")
        print("ADD", AuthorShow.objects.count(), "Shows")

        with open(
            f"{CSV_FILES_DIR}/author_awards.csv", encoding="utf-8"
        ) as file:
            reader = csv.reader(file)
            next(reader)
            award = [AuthorAward(name=row[0]) for row in reader]
            AuthorAward.objects.bulk_create(award)
        print("Награды в базу данных загружены")
        print("ADD", AuthorAward.objects.count(), "Award")

        with open(f"{CSV_FILES_DIR}/authors.csv", encoding="utf-8") as file:
            reader = csv.reader(file)
            next(reader)
            author = [
                ObjectAuthor(
                    name=row[0],
                    gender=row[1],
                    age=row[2],
                    year_of_birth=pd.to_datetime(row[3], format="ISO8601"),
                    city_of_birth=row[4],
                    city_live=row[5],
                    education=row[6],
                    professional_education=row[7],
                    teaching_experience=row[8],
                    personal_style=Style.objects.get(pk=row[9]),
                )
                for row in reader
            ]
            ObjectAuthor.objects.bulk_create(author)
        print("Авторы  в базу данных загружены")
        print("ADD", ObjectAuthor.objects.count(), "Author")
