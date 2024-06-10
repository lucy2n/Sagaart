from django.db import models


class NameModel(models.Model):
    name = models.CharField(name="Название")


class Category(NameModel):

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"


class Style(NameModel):

    class Meta:
        verbose_name = "Стиль"
        verbose_name_plural = "Стили"


class Genre(NameModel):

    class Meta:
        verbose_name = "Жанр"
        verbose_name_plural = "Жанры"


class ArtObject(models.Model):
    SIZE_CATEGORIES = ((1, "SMALL"), (2, "MEDIUM"), (3, "LARGE"))
    PRICE_CATEGORIES = ()

    name = models.CharField(name="Название")
    image = models.ImageField(name="Изображение")
    category = models.ManyToManyField(
        Category, on_delete=models.CASCADE, name="Категория"
    )
    style = models.ManyToManyField(
        Style, on_delete=models.CASCADE, name="Стиль"
    )
    genre = models.ManyToManyField(
        Genre, on_delete=models.CASCADE, name="Жанр"
    )
    size = models.CharField(name="Размер")
    size_category = models.IntegerField(
        choices=SIZE_CATEGORIES, name="Категория размера"
    )
    year = models.PositiveIntegerField(name="Год создания")
    sale_city = models.CharField(name="Город продажи")
    material = models.CharField(name="Материал объекта")
    tablet_material = models.CharField(name="Материал планшета")
    cost_category = models.IntegerField(
        choices=SIZE_CATEGORIES, name="Ценовая категория"
    )
    end_cost = models.IntegerField(name="Финальная цена")
    fair_cost = models.IntegerField(name="Оценка")

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"


class ObjectAuthor(models.Model):
    GENDER_CHOICES = (("MALE", "Male"), ("FEMALE", "Female"))

    name = models.CharField()
    gender = models.CharField(choices=GENDER_CHOICES)
    age = models.PositiveIntegerField()
    year_of_birth = models.PositiveIntegerField(null=True)
    city_of_birth = models.CharField(null=True)
    city = models.CharField(null=True)
    education = models.CharField(null=True)
    art_education = models.CharField(null=True)
    teaching_experience = models.CharField(null=True)
    personal_style = models.CharField(null=True)
    socials = models.CharField(null=True)
    awards = models.ForeignKey("Awards", on_delete=models.SET_NULL, null=True)


class AuthorAward(models.Model):
    name = models.CharField()
