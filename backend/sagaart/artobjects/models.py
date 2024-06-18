from django.db import models

CHARFIELD_MAX_LEN = 50


class Category(models.Model):
    name = models.CharField(verbose_name="Название", max_length=CHARFIELD_MAX_LEN)

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"

    def __str__(self):
        """Метод строкового представления модели."""
        return self.name


class Style(models.Model):
    name = models.CharField(verbose_name="Название", max_length=CHARFIELD_MAX_LEN)

    class Meta:
        verbose_name = "Стиль"
        verbose_name_plural = "Стили"

    def __str__(self):
        """Метод строкового представления модели."""
        return self.name


class Genre(models.Model):
    name = models.CharField(verbose_name="Название", max_length=CHARFIELD_MAX_LEN)

    class Meta:
        verbose_name = "Жанр"
        verbose_name_plural = "Жанры"

    def __str__(self):
        """Метод строкового представления модели."""
        return self.name


class AuthorAward(models.Model):
    """Награды автора"""
    name = models.CharField(
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Название"
        )

    def __str__(self):
        """Метод строкового представления модели."""
        return self.name


class AuthorShow(models.Model):
    """Выставки автора"""
    name = models.CharField(
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Название"
        )
    year = models.PositiveIntegerField(
        verbose_name="Дата проведения"
        )
    place = models.CharField(
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Место")

    def __str__(self):
        """Метод строкового представления модели."""
        return self.name


class ArtObject(models.Model):
    """Арт объкект"""
    SIZE_CATEGORIES = ((1, "SMALL"), (2, "MEDIUM"), (3, "LARGE"))
    PRICE_CATEGORIES = ()

    name = models.CharField(verbose_name="Название", max_length=CHARFIELD_MAX_LEN)
    image = models.ImageField(verbose_name="Изображение")
    category = models.ManyToManyField(
        Category, verbose_name="Категория"
    )
    style = models.ManyToManyField(
        Style, verbose_name="Стиль"
    )
    genre = models.ManyToManyField(
        Genre, verbose_name="Жанр"
        )
    size = models.CharField(verbose_name="Размер", max_length=CHARFIELD_MAX_LEN)
    size_category = models.IntegerField(
        choices=SIZE_CATEGORIES, verbose_name="Категория размера"
    )
    year = models.PositiveIntegerField(verbose_name="Год создания")
    sale_city = models.CharField(
        verbose_name="Город продажи", max_length=CHARFIELD_MAX_LEN
    )
    material = models.CharField(
        verbose_name="Материал объекта", max_length=CHARFIELD_MAX_LEN
    )
    tablet_material = models.CharField(
        verbose_name="Материал планшета", max_length=CHARFIELD_MAX_LEN
    )
    description = models.CharField(
        verbose_name="Описание", max_length=CHARFIELD_MAX_LEN
    )
    cost_category = models.IntegerField(
        choices=SIZE_CATEGORIES, verbose_name="Ценовая категория"
    )
    end_cost = models.IntegerField(verbose_name="Финальная цена")
    fair_cost = models.IntegerField(verbose_name="Оценка")
    is_published = models.BooleanField(
        default=False, verbose_name="опубликован"
    )

    class Meta:
        verbose_name = "Артобъект"
        verbose_name_plural = "Артобъекты"


    def __str__(self):
        """Метод строкового представления модели."""
        return self.name


class ObjectAuthor(models.Model):
    """Автор арт объекта"""
    GENDER_CHOICES = (("MALE", "Male"), ("FEMALE", "Female"))

    name = models.CharField(
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Имя"
        )
    gender = models.CharField(
        choices=GENDER_CHOICES,
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Пол"
        )
    age = models.PositiveIntegerField(null=True, verbose_name="Возраст")
    year_of_birth = models.PositiveIntegerField(
        null=True, verbose_name="Год рождения"
        )
    city_of_birth = models.CharField(
        null=True,
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Город рождения"
        )
    city = models.CharField(
        null=True,
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Город проживания"
        )
    education = models.CharField(
        null=True,
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Образование"
        )
    professional_education = models.CharField(
        null=True,
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Профессиональное образование"
        )
    teaching_experience = models.CharField(
        null=True,
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Опыт преподования"
    )
    personal_style = models.ForeignKey(
        Style,
        on_delete=models.SET_NULL,
        null=True,
        verbose_name="Стиль",
        related_name='objauthor'
        )
    socials = models.CharField(
        null=True,
        max_length=CHARFIELD_MAX_LEN,
        verbose_name="Социальные сети"
        )
    awards = models.ManyToManyField(
        AuthorAward,
        blank=True,
        verbose_name="Награды автора"
    )

    def __str__(self):
        """Метод строкового представления модели."""
        return self.name
