from django.db import models

from api.constants import (
    DEFAULT_CHARFIELD_LEN,
    SIZE_CATEGORIES,
    GENDER_LIST,
    PRICE_CATEGORIES,
)

from . import constants


class NameModel(models.Model):
    name = models.CharField(
        verbose_name="Название", max_length=constants.CATEGORY_NAME_MAX_LEN
    )

    class Meta:
        abstract = True

    def __str__(self):
        return self.name


class Category(NameModel):
    class Meta(NameModel.Meta):
        verbose_name = "Категория"
        verbose_name_plural = "Категории"

    def __str__(self):
        return self.name


class Style(NameModel):
    class Meta(NameModel.Meta):
        verbose_name = "Стиль"
        verbose_name_plural = "Стили"

    def __str__(self):
        return self.name


class Genre(NameModel):
    class Meta(NameModel.Meta):
        verbose_name = "Жанр"
        verbose_name_plural = "Жанры"

    def __str__(self):
        return self.name


class AuthorAward(models.Model):
    """Награды автора"""

    name = models.CharField(
        max_length=constants.AUTHOR_NAME_MAX_LEN, verbose_name="Название"
    )

    class Meta(NameModel.Meta):
        verbose_name = "Награда"
        verbose_name_plural = "Награды"

    def __str__(self):
        return self.name


class AuthorShow(models.Model):
    name = models.CharField(
        max_length=constants.SHOW_NAME_MAX_LEN, verbose_name="Название"
    )
    place = models.CharField(
        max_length=DEFAULT_CHARFIELD_LEN, verbose_name="Место"
    )
    cost = models.PositiveIntegerField(verbose_name="Цена товара")
    year = models.DateField(verbose_name="Дата проведения")

    class Meta:
        verbose_name = "Выставка"
        verbose_name_plural = "Выставки"

    def __str__(self):
        return self.name


class ObjectAuthor(models.Model):
    name = models.CharField(
        max_length=constants.AUTHOR_NAME_MAX_LEN, verbose_name="Имя автора"
    )
    gender = models.CharField(
        choices=GENDER_LIST,
        max_length=DEFAULT_CHARFIELD_LEN,
        blank=True,
        verbose_name="Пол",
    )
    age = models.PositiveIntegerField(blank=True, verbose_name="Возраст")
    birth_date = models.DateField(blank=True, verbose_name="Дата рождения")
    city_of_birth = models.CharField(
        blank=True,
        max_length=DEFAULT_CHARFIELD_LEN,
        verbose_name="Город рождения",
    )
    city_live = models.CharField(
        blank=True,
        max_length=DEFAULT_CHARFIELD_LEN,
        verbose_name="Город проживания",
    )
    description = models.TextField(blank=True, verbose_name="Биография")
    education = models.CharField(
        blank=True,
        max_length=DEFAULT_CHARFIELD_LEN,
        verbose_name="Образование",
    )
    professional_education = models.CharField(
        blank=True,
        max_length=DEFAULT_CHARFIELD_LEN,
        verbose_name="Художественное образование",
    )
    teaching_experience = models.CharField(
        blank=True,
        max_length=DEFAULT_CHARFIELD_LEN,
        verbose_name="Опыт преподования",
    )
    personal_style = models.ForeignKey(
        Style,
        on_delete=models.SET_NULL,
        null=True,
        verbose_name="Персональный стиль",
        related_name="objauthor",
    )
    socials = models.CharField(
        blank=True,
        max_length=DEFAULT_CHARFIELD_LEN,
        verbose_name="Социальные сети",
    )
    awards = models.ManyToManyField(
        AuthorAward, blank=True, verbose_name="Награды автора"
    )
    show = models.ManyToManyField(
        AuthorShow, blank=True, verbose_name="Выставки автора"
    )

    class Meta:
        verbose_name = "Автор"
        verbose_name_plural = "Авторы"

    def __str__(self):
        return self.name


class ArtObject(models.Model):
    name = models.CharField(
        verbose_name="Название", max_length=constants.AUTHOR_NAME_MAX_LEN
    )
    image = models.ImageField(verbose_name="Изображение")
    additional_image = models.ImageField(
        blank=True, verbose_name="Дополнительное изображение"
    )
    category = models.ManyToManyField(Category, verbose_name="Категория")
    style = models.ManyToManyField(Style, verbose_name="Стиль")
    genre = models.ManyToManyField(Genre, verbose_name="Жанр")

    size_category = models.IntegerField(
        choices=SIZE_CATEGORIES, verbose_name="Категория размера"
    )
    size = models.CharField(
        verbose_name="Размер", max_length=constants.PRODUCT_SIZE_MAX_LEN
    )
    country = models.CharField(
        blank=True,
        verbose_name="Страна товара",
        max_length=DEFAULT_CHARFIELD_LEN,
    )
    city_sale = models.CharField(
        verbose_name="Город продажи", max_length=DEFAULT_CHARFIELD_LEN
    )
    year = models.PositiveIntegerField(verbose_name="Год создания")
    material = models.CharField(
        blank=True,
        verbose_name="Материал работы",
        max_length=DEFAULT_CHARFIELD_LEN,
    )
    tablet_material = models.CharField(
        blank=True,
        verbose_name="Материал планшета",
        max_length=DEFAULT_CHARFIELD_LEN,
    )
    collection = models.TextField(blank=True, verbose_name="Коллекция")
    media = models.TextField(blank=True, verbose_name="СМИ")
    description = models.TextField(blank=True, verbose_name="Описание")
    cost_category = models.IntegerField(
        choices=PRICE_CATEGORIES, verbose_name="Категория цены"
    )
    end_cost = models.PositiveIntegerField(verbose_name="Итоговая цена")
    fair_cost = models.PositiveIntegerField(
        blank=True, verbose_name="Желаемая цена"
    )
    author = models.ForeignKey(
        ObjectAuthor,
        on_delete=models.SET_NULL,
        null=True,
        related_name="atrobj",
        verbose_name="Автор",
    )
    is_published = models.BooleanField(
        default=False, verbose_name="Опубликован"
    )

    class Meta:
        verbose_name = "Арт объект"
        verbose_name_plural = "Арт объекты"

    def __str__(self):
        return self.name
