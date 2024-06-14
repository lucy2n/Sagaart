from django.db import models
from django.contrib.auth import get_user_model

from artobjects.models import ArtObject, ObjectAuthor

CHARFIELD_LEN = 128

User = get_user_model()

class Analytics(models.Model):
    calculated_price = models.IntegerField("Рассчитанная цена")
    collection = models.CharField("Коллекция", max_length=CHARFIELD_LEN)
    media = models.CharField("СМИ", max_length=CHARFIELD_LEN)
    created_at = models.DateField("Дата аналитики", auto_now_add=True)
    art_object = models.ForeignKey(ArtObject, on_delete=models.CASCADE)
    object_author = models.ForeignKey(ObjectAuthor, on_delete=models.CASCADE)
    recepient = models.ForeignKey(User, on_delete=models.CASCADE)
