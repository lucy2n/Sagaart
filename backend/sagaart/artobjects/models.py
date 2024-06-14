from django.db import models

CHARFIELD_MAX_LEN = 24


class NameModel(models.Model):
    name = models.CharField(name="Название", max_length=CHARFIELD_MAX_LEN)


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

    name = models.CharField(name="Название", max_length=CHARFIELD_MAX_LEN)
    image = models.ImageField(name="Изображение")
    category = models.ManyToManyField(
        Category,
    )
    style = models.ManyToManyField(
        Style,
    )
    genre = models.ManyToManyField(Genre)
    size = models.CharField(name="Размер", max_length=CHARFIELD_MAX_LEN)
    size_category = models.IntegerField(
        choices=SIZE_CATEGORIES, name="Категория размера"
    )
    year = models.PositiveIntegerField(name="Год создания")
    sale_city = models.CharField(
        name="Город продажи", max_length=CHARFIELD_MAX_LEN
    )
    material = models.CharField(
        name="Материал объекта", max_length=CHARFIELD_MAX_LEN
    )
    tablet_material = models.CharField(
        name="Материал планшета", max_length=CHARFIELD_MAX_LEN
    )
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

    name = models.CharField(max_length=CHARFIELD_MAX_LEN)
    gender = models.CharField(
        choices=GENDER_CHOICES, max_length=CHARFIELD_MAX_LEN
    )
    age = models.PositiveIntegerField()
    year_of_birth = models.PositiveIntegerField(null=True)
    city_of_birth = models.CharField(null=True, max_length=CHARFIELD_MAX_LEN)
    city = models.CharField(null=True, max_length=CHARFIELD_MAX_LEN)
    education = models.CharField(null=True, max_length=CHARFIELD_MAX_LEN)
    art_education = models.CharField(null=True, max_length=CHARFIELD_MAX_LEN)
    teaching_experience = models.CharField(
        null=True, max_length=CHARFIELD_MAX_LEN
    )
    personal_style = models.CharField(null=True, max_length=CHARFIELD_MAX_LEN)
    socials = models.CharField(null=True, max_length=CHARFIELD_MAX_LEN)
    awards = models.ForeignKey(
        "AuthorAward", on_delete=models.SET_NULL, null=True
    )


class AuthorAward(models.Model):
    name = models.CharField(max_length=CHARFIELD_MAX_LEN)
