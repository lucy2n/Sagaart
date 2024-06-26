from django.db import models
from django.contrib.auth import get_user_model
from django.utils import choices

from artobjects.models import ArtObject, ObjectAuthor
from api.constants import MAX_CHAR_LEN, GENDER_LIST

User = get_user_model()


class Analytics(models.Model):
    analytics_owner = models.ForeignKey(
        User, on_delete=models.CASCADE, verbose_name="Заказчик аналитки"
    )
    product_name = models.CharField(
        verbose_name="Название объекта", max_length=MAX_CHAR_LEN
    )
    category = models.CharField(
        verbose_name="Катоегория", max_length=MAX_CHAR_LEN
    )
    year = models.PositiveIntegerField(verbose_name="Год")
    height = models.PositiveIntegerField(verbose_name="Высота")
    width = models.PositiveIntegerField(verbose_name="Ширина")
    material = models.CharField(
        verbose_name="Материал", max_length=MAX_CHAR_LEN
    )
    tablet_material = models.CharField(
        verbose_name="Материал планшета", max_length=MAX_CHAR_LEN
    )
    author_name = models.CharField(
        verbose_name="Имя автора", max_length=MAX_CHAR_LEN
    )
    gender = models.CharField(
        choices=GENDER_LIST, verbose_name="Пол автора", max_length=MAX_CHAR_LEN
    )
    birth_year = models.PositiveIntegerField(verbose_name="Год рождения")
    birth_country = models.CharField(
        verbose_name="Город рождения", max_length=MAX_CHAR_LEN
    )
    solo_show = models.CharField(
        verbose_name="Персональные выставки", max_length=MAX_CHAR_LEN
    )
    group_show = models.CharField(
        verbose_name="Групповые выставки", max_length=MAX_CHAR_LEN
    )
    calculated_price = models.IntegerField(null=True)
