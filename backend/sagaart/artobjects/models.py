from django.db import models

CHARFIELD_MAX_LEN = 50


class Category(models.Model):
    name = models.CharField(
        verbose_name="Название", max_length=CHARFIELD_MAX_LEN
    )

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"

    def __str__(self):
        """Метод строкового представления модели."""
        return self.name


class Style(models.Model):
    name = models.CharField(
        verbose_name="Название", max_length=CHARFIELD_MAX_LEN
    )

    class Meta:
        verbose_name = "Стиль"
        verbose_name_plural = "Стили"

    def __str__(self):
        """Метод строкового представления модели."""
        return self.name


class Genre(models.Model):
    name = models.CharField(
        verbose_name="Название", max_length=CHARFIELD_MAX_LEN
    )

    class Meta:
        verbose_name = "Жанр"
        verbose_name_plural = "Жанры"

    def __str__(self):
        """Метод строкового представления модели."""
        return self.name


class AuthorAward(models.Model):
    """Награды автора"""

    name = models.CharField(
        max_length=CHARFIELD_MAX_LEN, verbose_name="Название"
    )

    class Meta:
        verbose_name = "Награда"
        verbose_name_plural = "Награды"

    def __str__(self):
        return self.name


class AuthorShow(models.Model):
    """Выставки автора"""

    name = models.CharField(
        max_length=CHARFIELD_MAX_LEN, verbose_name="Название"
    )
    year = models.PositiveIntegerField(verbose_name="Дата проведения")
    place = models.CharField(
        max_length=CHARFIELD_MAX_LEN, verbose_name="Место"
    )

    class Meta:
        verbose_name = "Выстовка"
        verbose_name_plural = "Выстовки"

    def __str__(self):
        return self.name


class Author(models.Model):
    """Автор арт объекта"""
    GENDER_CHOICES = (("MALE", "Male"), ("FEMALE", "Female"))

    name = models.CharField(
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Имя"
        )
    gender = models.CharField(
        choices=GENDER_CHOICES,
        max_length=CHARFIELD_MAX_LEN,
        blank=True,
        verbose_name="Пол"
        )
    age = models.PositiveIntegerField(null=True, verbose_name="Возраст")
    year_of_birth = models.PositiveIntegerField(
        blank=True, verbose_name="Год рождения"
        )
    city_of_birth = models.CharField(
        blank=True,
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Город рождения"
        )
    city_live = models.CharField(
        blank=True,
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Город проживания"
        )
    education = models.CharField(
        blank=True,
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Образование"
        )
    professional_education = models.CharField(
        blank=True,
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Профессиональное образование"
        )
    teaching_experience = models.CharField(
        blank=True,
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Опыт преподования"
    )
    personal_style = models.ForeignKey(
        Style,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name="Стиль",
        related_name='objauthor'
        )
    socials = models.CharField(
        blank=True,
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Социальные сети"
        )
    awards = models.ManyToManyField(
        AuthorAward,
        blank=True,
        verbose_name="Награды автора"
        )
    show = models.ManyToManyField(
        AuthorShow,
        blank=True,
        verbose_name="Выставки автора"
    )

    class Meta:
        verbose_name = "Автор"
        verbose_name_plural = "Авторы"

    def __str__(self):
        """Метод строкового представления модели."""
        return self.name


class Product(models.Model):
    """Арт объкект"""

    SIZE_CATEGORIES = ((1, "SMALL"), (2, "MEDIUM"), (3, "LARGE"))
    PRICE_CATEGORIES = (
        (1, "PRICE_SMALL"), (2, "PRICE_MEDIUM"), (3, "PRICE_LARGE")
    )

    name = models.CharField(
        verbose_name="Название", max_length=CHARFIELD_MAX_LEN
    )
    image = models.ImageField(verbose_name="Изображение")
    additional_image = models.ImageField(blank=True, verbose_name="Изображение")
    category = models.ManyToManyField(
        Category, verbose_name="Категория"
    )
    style = models.ManyToManyField(
        Style, verbose_name="Стиль"
    )
    genre = models.ManyToManyField(
        Genre, verbose_name="Жанр"
        )

    size_category = models.IntegerField(
        choices=SIZE_CATEGORIES, verbose_name="Категория размера"
    )
    size = models.CharField(
        blank=True, verbose_name="Размер", max_length=CHARFIELD_MAX_LEN
    )
    country = models.CharField(
        blank=True, verbose_name="Город", max_length=CHARFIELD_MAX_LEN
    )
    city_sale = models.CharField(
        blank=True, verbose_name="Город продажи", max_length=CHARFIELD_MAX_LEN
    )
    year = models.PositiveBigIntegerField(verbose_name="Год создания")
    material = models.CharField(
        blank=True, verbose_name="Материал", max_length=CHARFIELD_MAX_LEN
    )
    tablet_material = models.CharField(
        blank=True, verbose_name="Материал планшета", max_length=CHARFIELD_MAX_LEN
    )
    description = models.CharField(
        blank=True, verbose_name="Описание", max_length=CHARFIELD_MAX_LEN
    )
    cost_category = models.IntegerField(
        choices=PRICE_CATEGORIES, verbose_name="Ценовая категория"
    )
    end_cost = models.IntegerField(blank=True, verbose_name="Финальная цена")
    fair_cost = models.IntegerField(blank=True, verbose_name="Оценка")
    author = models.ForeignKey(
        Author,
        on_delete=models.SET_NULL,
        null=True,
        related_name='atrobj',
        verbose_name="Автор")
    is_published = models.BooleanField(
        default=False, verbose_name="опубликован"
    )

    class Meta:
        verbose_name = "Артобъект"
        verbose_name_plural = "Артобъекты"

    def __str__(self):
        """Метод строкового представления модели."""
        return self.name
